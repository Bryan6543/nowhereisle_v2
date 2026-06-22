"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCarousel from "@/components/HeroCarousel";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const startAnimations = () => {
      gsap
        .timeline()
        .from(".hero-title", {
          y: 120,
          opacity: 0,
          duration: 1.4,
          ease: "power4.out",
        })
        .from(
          ".hero-subtitle",
          {
            y: 60,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.8",
        );
      // Add more animations...
    };

    // Listen for preloader completion
    document.addEventListener("preloaderComplete", startAnimations);

    // Section 2 ScrollTrigger Animation
    const section2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2",
        start: "top 30%",
        end: "top 20%",
        scrub: 1,
        // markers: true,
      },
    });

    section2Timeline.fromTo(
      ".overlay-logo",
      {
        x: "0%",
        opacity: "100%",
      },
      {
        x: "-50vw",
        opacity: "0%",
        ease: "power3.out",
        duration: 1.2,
      },
    );

    return () => {
      document.removeEventListener("preloaderComplete", startAnimations);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      {/* Hero */}
      <div>
        <HeroCarousel />
      </div>

      {/* Section 2 - Nowhere Isle Introduction */}
      <section className="relative overflow-hidden flex">
        {/* Overlay */}
        <div
          id="section2"
          className="overlay-logo bg-black w-full h-full flex justify-center items-center z-10 absolute"
        >
          <Image
            src={"/logo.png"}
            width={613}
            height={500}
            alt="nowhere_isle_game_studio_logo"
            className="h-1/2 object-contain m-auto"
          />
        </div>
        {/* Layer ground */}
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          {/* LOGO/Name */}
          <div className="flex gap-10 flex-col md:flex-row">
            <Image
              src={"/logo.png"}
              width={613}
              height={500}
              alt="nowhere_isle_game_studio_logo"
              className="max-h-40 w-fit object-contain"
            />
            <h1 className="big_head">
              NO WHER ISLE <br /> GAME STUDIO
            </h1>
          </div>
          {/* Text Area */}
          <div className="body_text space-y-10">
            <p className="max-w-4xl">
              We are an independent game studio building atmospheric strategy
              games with strong identity, intricate lore, meaningful tactical
              systems, and underlying mystery.
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
              <div className="flex gap-5">
                <p>Established</p>
                <p className="text-green-600">2025</p>
              </div>
              <div className="flex gap-5">
                <p>Team Members</p>
                <p className="text-green-600">6</p>
              </div>
              <div className="flex gap-5">
                <p>Worlds Created</p>
                <p className="text-green-600">1</p>
              </div>
              <div className="flex gap-5">
                <p>Based In</p>
                <p className="text-green-600">Sri Lanka</p>
              </div>
            </div>
            <p>View About Us</p>
          </div>
        </div>
      </section>

      {/* Section 3 - A World in the Making */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1 className="head">A World In The Making</h1>
            <p className="body_text">Lead the seventh doomed Inquisition expedition into corrupted territory and fight to reclaim the Lost Holy Capital of Maylon.</p>
          </div>
          <div>
            <Image src={""} width={1000} height={1000} alt="" className="" />
            <Image src={""} width={1000} height={1000} alt="" className="" />
          </div>
          <div>
            <h1 className="massive_shead">SIGIL TACTICS</h1>
            <h1 className="massive_bhead">LOST MAYLON</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
