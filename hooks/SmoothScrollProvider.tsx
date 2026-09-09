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
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
    });

    instance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      instance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const snapInstance = new Snap(instance, {
      type: "proximity", // only snaps when close enough
      distanceThreshold: "28%", // must be quite close before it pulls you in
      debounce: 280, // waits until you stop scrolling before snapping
      duration: 0.9, // slightly shorter, feels lighter
      // lerp: 0.12,              // optional – higher = snappier settle
    });

    setLenis(instance);
    setSnap(snapInstance);

    return () => {
      unsubscribersRef.current.forEach((fn) => fn());
      unsubscribersRef.current = [];
      snapInstance.destroy();
      instance.destroy();
      gsap.ticker.remove(instance.raf);
    };
  }, []);

  const disableSnap = useCallback(() => {
    unsubscribersRef.current.forEach((fn) => fn());
    unsubscribersRef.current = [];
  }, []);

  const enableSnap = useCallback(
    (sections?: HTMLElement[]) => {
      if (!snap) return;

      disableSnap();

      const els: HTMLElement[] =
        sections ??
        (Array.from(
          document.querySelectorAll("[data-snap], .snap-section"),
        ) as HTMLElement[]);

      if (els.length === 0) return;

      const unsub = snap.addElements(els, {
        align: "start",
      });
      unsubscribersRef.current.push(unsub);
    },
    [snap, disableSnap],
  );

  const stopSnap = useCallback(() => {
    snap?.stop();
  }, [snap]);

  const startSnap = useCallback(() => {
    snap?.start();
  }, [snap]);

  return (
    <LenisContext.Provider
      value={{
        lenis,
        snap,
        enableSnap,
        disableSnap,
        stopSnap,
        startSnap,
      }}
    >
      {children}
    </LenisContext.Provider>
  );
}
