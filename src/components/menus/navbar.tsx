"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const lastScroll = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const startAnimations = () => {
        gsap.to(".nav_bar", {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        });

        gsap.to(".nav_logo", {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });

        gsap.to(".nav_links", {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      };

      const handleStart = () => startAnimations();

      // Listen for preloader completion
      document.addEventListener("preloaderComplete", handleStart);

      // 🔥 fallback for back/forward navigation
      requestAnimationFrame(() => {
        startAnimations();
      });

      const handleScroll = () => {
        const current = window.scrollY;

        if (!navRef.current) return;

        if (current < 50) {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          });

          lastScroll.current = current;
          return;
        }

        if (current > lastScroll.current) {
          gsap.to(navRef.current, {
            y: "-100%",
            duration: 0.35,
            ease: "power2.out",
          });
        } else {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }

        lastScroll.current = current;
      };

      window.addEventListener("scroll", handleScroll);

      // cleanup scroll listener inside context
      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("preloaderComplete", handleStart);
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // ==========================
  // Mobile Menu Animation
  // ==========================

  useEffect(() => {
    if (!menuRef.current || !linksRef.current) return;

    const links = linksRef.current.children;

    if (menuOpen) {
      gsap.set(menuRef.current, { display: "flex" });

      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.7,
          ease: "power4.out",
        },
      );

      gsap.fromTo(
        links,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="nav_bar fixed top-0 left-0 z-50 flex h-25 w-screen justify-between bg-black/20 backdrop-blur-sm opacity-0 -translate-y-30"
      >
        <div className="mx-auto flex h-full w-[80%] items-center justify-between">
          <Link href={"/isle"} className="w-fit h-full">
          <Image
            src="/logo2.png"
            width={484}
            height={236}
            alt="nowhere_isle_game_studio_logo"
            className="nav_logo h-full w-fit object-contain -translate-x-100 opacity-0"
          /></Link>

          <div className="nav_links nav_link_text translate-x-120 opacity-0 hidden items-center gap-9 md:flex">
            <Link href={"/isle_games"}>
              <p className="cursor-pointer">Game: Sigil Tactics: Lost Maylon</p>
            </Link>
            <Link href={"/isle/community"}>
              <p className="cursor-pointer">Community</p>
            </Link>
            <Link href={"/isle/support"}>
              <p className="cursor-pointer">Support</p>
            </Link>
            <Link href={"/isle/about"}>
              <p className="cursor-pointer">About</p>
            </Link>
          </div>

          <button
            className="z-60 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed left-0 top-0 z-40 hidden h-screen w-screen items-center justify-center bg-black"
      >
        <div
          ref={linksRef}
          className="flex flex-col h-full justify-between pt-50 pb-10 font-bold uppercase tracking-widest"
        >
          <div className="flex flex-col gap-10 massive_shead">
            <Link href={"/isle/"}>
              <button onClick={() => setMenuOpen(false)}>Game</button>
            </Link>
            <Link href={"/isle/"}>
              <button onClick={() => setMenuOpen(false)}>Community</button>
            </Link>
            <Link href={"/isle/"}>
              <button onClick={() => setMenuOpen(false)}>Support</button>
            </Link>
            <Link href={"/isle/"}>
              <button onClick={() => setMenuOpen(false)}>About</button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-7 text-xs">
            <hr />
            <div className="flex justify-between opacity-70 gap-5">
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="opacity-70 text-center">
                © 2026 NowhereIsle Studios. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
