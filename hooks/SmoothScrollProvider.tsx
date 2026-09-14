"use client";

import Lenis from "lenis";
import Snap from "lenis/snap";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LenisContextType = {
  lenis: Lenis | null;
  snap: Snap | null;
  enableSnap: (sections?: HTMLElement[]) => void;
  disableSnap: () => void;
  stopSnap: () => void;
  startSnap: () => void;
};

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  snap: null,
  enableSnap: () => {},
  disableSnap: () => {},
  stopSnap: () => {},
  startSnap: () => {},
});

export const useLenis = () => useContext(LenisContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [snap, setSnap] = useState<Snap | null>(null);
  const unsubscribersRef = useRef<Array<() => void>>([]);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.05,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      allowNestedScroll: true,
    });

    instance.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const snapInstance = new Snap(instance, {
      type: "proximity",
      distanceThreshold: "18%",
      debounce: 420,
      duration: 0.7,
    });

    setLenis(instance);
    setSnap(snapInstance);

    return () => {
      unsubscribersRef.current.forEach((fn) => fn());
      unsubscribersRef.current = [];
      snapInstance.destroy();
      instance.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  const disableSnap = useCallback(() => {
    unsubscribersRef.current.forEach((fn) => fn());
    unsubscribersRef.current = [];
  }, []);

  const enableSnap = useCallback(
    (sections?: HTMLElement[]) => {
      if (!snap || !lenis) return;

      disableSnap();

      const els: HTMLElement[] =
        sections ??
        (Array.from(
          document.querySelectorAll("main > [data-snap]"),
        ) as HTMLElement[]);

      if (els.length === 0) return;

      const unsub = snap.addElements(els, {
        align: "start",
      });
      unsubscribersRef.current.push(unsub);
      lenis.resize();
    },
    [snap, lenis, disableSnap],
  );

  const stopSnap = useCallback(() => {
    snap?.stop();
  }, [snap]);

  const startSnap = useCallback(() => {
    snap?.start();
  }, [snap]);

  return (
    <LenisContext.Provider
      value={{ lenis, snap, enableSnap, disableSnap, stopSnap, startSnap }}
    >
      {children}
    </LenisContext.Provider>
  );
}