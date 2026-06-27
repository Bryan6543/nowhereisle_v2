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
            <p className="body_text">
              Lead the seventh doomed Inquisition expedition into corrupted
              territory and fight to reclaim the Lost Holy Capital of Maylon.
            </p>
          </div>
          <div className="flex">
            <Image
              src={"/img-3.png"}
              width={1000}
              height={1000}
              alt=""
              className="w-[clamp(250px,100vw,850px)] "
            />
            <Image
              src={"/img-2.png"}
              width={1000}
              height={1000}
              alt=""
              className="w-[clamp(250px,100vw,850px)]"
            />
            {/* <!-- Overlapping Images Container -->
    <div class="relative flex justify-center items-center">
      
      <!-- Left Image -->
      <div class="relative z-10 lg:-mr-12">
        <div class="w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
          <img 
            src="/images/sigil-left.jpg" 
            alt="Gameplay 1"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <!-- Right Image (Bigger + Overlapping) -->
      <div class="relative z-20 -mt-8 lg:-mt-12 lg:-ml-12">
        <div class="w-full max-w-lg lg:max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
          <img 
            src="/images/sigil-right.jpg" 
            alt="Gameplay 2"
            class="w-full h-auto object-cover"
          />
        </div>
      </div> 

    </div>*/}
          </div>
          <div>
            <div>
              <h1 className="massive_shead">SIGIL TACTICS</h1>
              <h1 className="massive_bhead">LOST MAYLON</h1>
            </div>
            <div>
              <Image src={""} alt="Kick" width={400} height={400} />
              <Image src={""} alt="Kick" width={400} height={400} />
            </div>
            <p>View Game Page</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Meet Souls you will lead into darkness */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1>Meet the souls you will lead into darkness</h1>
            <p>
              A specialized trio of Inquisition operatives deployed into the
              cursed ruins. United by faith and forged in conflict, these
              warriors of Maylon combine holy support, unbreakable frontline
              assault, and precise reconnaissance to purge corruption and
              complete their sacred mission.
            </p>
            <p>View Character Details</p>
          </div>
          <div>
            <div>
              <Image src={""} alt="" width={1000} height={4500} />{" "}
              <p>Character Name</p>
            </div>
            <div>
              <Image src={""} alt="" width={1000} height={4500} />{" "}
              <p>Character Name</p>
            </div>
            <div>
              <Image src={""} alt="" width={1000} height={4500} />{" "}
              <p>Character Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - From Concept to Reality */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]"></div>
      </section>

      {/* Section 6 - Behind the Fog */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1>BEHIND THE FOG</h1>
          </div>
          <div>
            <div>
              <h1>WORLD BUILDING</h1>
              <p>
                We begin with lore, mood boards, and soundscapes before writing
                a single line of code.
              </p>
            </div>
            <div>{/* Carousel */}</div>
          </div>
          <div>
            <div>
              <h1>ARTISTIC OBSESSION</h1>
              <p>
                Every frame, every particle, and every shadow is crafted with
                intention.
              </p>
            </div>
            <div>{/* Carousel */}</div>
          </div>
          <div>
            <div>
              <h1>PLAYER EXPERIENCE</h1>
              <p>
                We design for those who enjoy slow discovery, deep immersion,
                and emotional payoff.
              </p>
            </div>
            <div>{/* Carousel */}</div>
          </div>
        </div>
      </section>

      {/* Section 7 - Step in to the Mist (Email Subs) */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1>STEP IN TO THE MIST</h1>
            <p>
              Receive rare updates, behind-the-scenes lore, and early access to
              new worlds.
            </p>
          </div>
          <div>{/* Newsletter Field and Join Button */}</div>
        </div>
      </section>

      {/* Section 8 - FAQ */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1>FAQ</h1>
          </div>
          <div>
            <h2>STUDIO FAQS</h2>
            <div>{/* FAQ questions */}</div>
          </div>
          <div>
            <h2>GAME FAQS</h2>
            <div>{/* FAQ questions */}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
