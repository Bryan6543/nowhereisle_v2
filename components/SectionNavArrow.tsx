"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLenis } from "../hooks/SmoothScrollProvider";
import { usePathname } from "next/navigation";

export default function SectionNavArrow() {
  const { lenis, snap } = useLenis();
  const pathname = usePathname();

  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Re-scan sections after route change + after layout paints
  const refreshSections = useCallback(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-snap], .snap-section")
    );
    setSections(els);
  }, []);

  useEffect(() => {
    // small delay so the new page DOM is ready
    const t1 = setTimeout(refreshSections, 50);
    const t2 = setTimeout(refreshSections, 300); // second pass for images / heavy content
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, refreshSections]);

  // Keep current index in sync
  useEffect(() => {
    if (!lenis || sections.length === 0) return;

    const onScroll = () => {
      const scroll = lenis.scroll;
      let closest = 0;
      let minDist = Infinity;

      sections.forEach((el, i) => {
        const dist = Math.abs(el.offsetTop - scroll);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setCurrentIndex(closest);
    };

    lenis.on("scroll", onScroll);
    onScroll(); // initial

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis, sections]);

  const goTo = (index: number) => {
    if (!sections[index]) return;

    // Prefer Snap API when available (smoother + respects snap points)
    if (snap) {
      snap.goTo(index);
      return;
    }

    // Fallback
    lenis?.scrollTo(sections[index], {
      offset: 0,
      duration: 1.2,
    });
  };

  // Hide only when there is nothing useful to navigate
  if (sections.length < 2) return null;

  return (
    <div className="fixed right-4 bottom-0 -translate-y-1/2 z-50 flex flex-col gap-2 ">
      <button
        onClick={() => goTo(Math.max(0, currentIndex - 1))}
        disabled={currentIndex === 0}
        className="cursor-pointer p-3 rounded-full bg-white/60 hover:bg-black/80 text-white backdrop-blur disabled:opacity-30 transition"
        aria-label="Previous section"
      >
        <ChevronUp size={20} />
      </button>
      <button
        onClick={() => goTo(Math.min(sections.length - 1, currentIndex + 1))}
        disabled={currentIndex === sections.length - 1}
        className="cursor-pointer p-3 rounded-full bg-white/60 hover:bg-black/40 transition-all duration-300 text-white backdrop-blur disabled:opacity-30"
        aria-label="Next section"
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
}