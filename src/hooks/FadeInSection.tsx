"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInSectionProps {
  children?: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export default function FadeInSection({
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  direction = "up",
  delay = 0.2,
}: FadeInSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elem = sectionRef.current;
    if (!elem) return;

    let xMove = 0;
    let yMove = 0;

    if (direction === "left") xMove = -25;
    if (direction === "right") xMove = 25;
    if (direction === "up") yMove = 25;
    if (direction === "down") yMove = -25;

    gsap.fromTo(
      elem,
      { opacity: 0, x: xMove, y: yMove },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 95%",
          toggleActions: "play none none reverse",
          // markers: true
        },
      }
    );
  }, [direction, delay]);

  return (
    <div ref={sectionRef} className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}
