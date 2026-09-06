"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FadeInSection from "../../hooks/FadeInSection";
import FAQ from "../../components/multiple_use/FAQ";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { homeHeroSlides } from "../../data/SlidesData";
import { soulsCharactersSlides } from "../../data/SlidesData";
import { worldBuildingSlides } from "../../data/SlidesData";
import { artisticObsessionSlides } from "../../data/SlidesData";
import { playerExperienceSlides } from "../../data/SlidesData";
import GetInTouch from "../../components/multiple_use/GetInTouch";
import BehindTheFog from "../../components/multiple_use/BehindTheFog";
import WorldMaking from "../../components/multiple_use/WorldMaking";
import Link from "next/link";
import { FaFantasyFlightGames } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

import { useLenis } from "../../hooks/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const conceptRealitySection = useRef<HTMLDivElement>(null);
  const { enableSnap, disableSnap } = useLenis();

  useEffect(() => {
  const id = setTimeout(() => {
    enableSnap();          // now finds only the clean top-level data-snap sections
  }, 150);

  return () => {
    clearTimeout(id);
    disableSnap();
  };
}, [enableSnap, disableSnap]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Starter Animations
      const startAnimations = () => {
        gsap
          .timeline()
          .to(".hero_title", {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
          })
          .to(
            ".hero_subtitle",
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
            },
            "-=0.8",
          );
      };

      const handleStart = () => startAnimations();

      document.addEventListener("preloaderComplete", handleStart);

      // Always run on mount as fallback
      requestAnimationFrame(() => {
        startAnimations();
      });

      // Run immediately if already loaded before
      if (sessionStorage.getItem("preloaderFinished")) {
        startAnimations();
      }

      // SECTION 02 - Nowhere isle Introduction
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".s2_SliderContainer",
            start: "top 45%",
            end: "center 50%",
          },
        })
        .fromTo(
          ".overlay-logo",
          { x: "0%", opacity: "100%" },
          { x: "-50vw", opacity: "0%", ease: "power3.out", duration: 2 },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".s2_SliderContainer",
            start: "top 40%",
            end: "center 50%",
          },
        })
        .fromTo(
          ".s2_lg_logo",
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, ease: "back.inOut", duration: 0.5 },
        )
        .fromTo(
          ".s2_lg_dsc",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, ease: "power4.in", duration: 0.5 },
        )
        .fromTo(
          ".s2_lg_fct",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, ease: "power4.in", duration: 0.5 },
        )
        .fromTo(
          ".s2_lg_link",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, ease: "power4.in", duration: 0.5 },
        );

      // SECTION 05 - From Concept to Reality
      if (conceptRealitySection.current) {
        gsap.fromTo(
          ".left-side-image",
          { rotate: 0, x: 0 },
          {
            x: -400,
            rotate: -10,
            stagger: 1,
            scrollTrigger: {
              trigger: conceptRealitySection.current,
              start: "1% 60%",
              end: "20% 55%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          ".right-side-image",
          { rotate: 0, x: 0 },
          {
            x: 400,
            rotate: 10,
            stagger: 1,
            scrollTrigger: {
              trigger: conceptRealitySection.current,
              start: "1% 60%",
              end: "20% 55%",
              scrub: 1,
            },
          },
        );
      }
    });

    return () => {
      document.removeEventListener("preloaderComplete", () => {});
      ctx.revert();
    };
  }, []);

  return (
    <main>
      {/* Section 1 - Hero */}
      <section
        data-snap
        className="h-fit  relative w-full flex-col gap-5 overflow-hidden"
      >
        {/* Hero Carousel with Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="relative scale-animation-hero"
        >
          {homeHeroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="h-screen rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 w-full h-full bg-black">
                  {/* Overlay black */}
                  {/* <div className="w-full bg-black/40 h-full absolute z-20" /> */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={5200}
                    height={3000}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Text Overlay - Same position as before */}
        <div className="absolute bottom-20 left-4 right-4 md:space-y-2 md:left-20 md:right-20 z-30 border-white/10 border-2 shadow-sm bg-black/30 backdrop-blur-xs p-4 md:p-10 rounded-xl flex flex-col items-start gap-2">
          <h1 className="head hero_title opacity-0 translate-y-20 ">
            Sigil Tactics: Lost Maylon
          </h1>
          <p className="body_text hero_subtitle max-w-3xl opacity-0 translate-y-20">
            A brutal squad turn-based tactics RPG about leading a doomed
            Inquisition expedition into corrupted territory to reclaim the Lost
            Holy Capital of Maylon.
          </p>
          <Link
            href={"/isle_dashboard/expeditions"}
            className="hero_title font-bold flex gap-2 items-center transition-all duration-500 border-2 rounded-sm hover:border-white/20 hover:text-white hover:bg-black/20 bg-white text-black py-2.5 px-5"
          >
            <FaFantasyFlightGames size={26} />
            <div className="flex gap-2 items-center">
              <p className="lora_body">OPEN GAME PAGE</p>
              <ImNewTab size={12} className="-translate-y-3 " />
            </div>
          </Link>
        </div>
      </section>
      {/* Section 2 - Nowhere Isle Introduction */}
      <section
        data-snap
        className="relative h-auto lg:h-[80vh] overflow-hidden flex"
      >
        {/* Overlay */}
        <div className="s2_SliderContainer overlay-logo bg-black w-full h-full flex justify-center items-center z-10 absolute">
          <Image
            src={"/logo.png"}
            width={613}
            height={500}
            alt="nowhere_isle_game_studio_logo"
            className="h-1/3 object-contain m-auto"
          />
        </div>
        {/* Layer ground */}
        <div className="w-[80%] m-auto flex flex-col items-center gap-10 py-[clamp(50px,1vh,240px)] text-center">
          {/* LOGO/Name */}
          <div className="s2_lg_logo flex gap-10 flex-col items-center md:flex-row">
            <Image
              src={"/logo.png"}
              width={613}
              height={500}
              alt="nowhere_isle_game_studio_logo"
              className="h-[clamp(120px,100vh,200px)]  w-fit object-contain"
            />
            <h1 className="big_head">
              NOWHEREISLE <br /> GAME STUDIO
            </h1>
          </div>
          {/* Text Area */}
          <div className="s2_lg_desc body_text space-y-10">
            <p className="max-w-4xl">
              We are an independent game studio building atmospheric strategy
              games with strong identity, intricate lore, meaningful tactical
              systems, and underlying mystery.
            </p>
            <div className="s2_lg_fct flex flex-col justify-center items-center gap-4 md:flex-row md:gap-10">
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
            <Link
              href={"/isle_dashboard/expeditions"}
              className="hero_title font-bold flex gap-2 items-center transition-all duration-500 border-2 rounded-sm hover:border-white/20 hover:text-white hover:bg-black/20 bg-white text-black py-2.5 px-5 w-fit m-auto"
            >
              <FaFantasyFlightGames size={26} />
              <div className="flex gap-2 items-center">
                <p className="lora_body">View Game Page</p>
                <ImNewTab size={12} className="-translate-y-3 " />
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Section 3 - A World in the Making */}
      <section data-snap className="h-fit relative w-full">
        <WorldMaking />
      </section>
      {/* Section 4 - Meet Souls you will lead into darkness */}
      <section data-snap>
        <div className="w-[80%] h-fit m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <FadeInSection className="flex flex-col gap-4">
            <h1 className="head">Meet the souls you will lead into darkness</h1>
            <p className="body_text md:w-xl">
              A specialized trio of Inquisition operatives deployed into the
              cursed ruins.
            </p>
            <p className="body_text md:w-xl">
              United by faith and forged in conflict, these warriors of Maylon
              combine holy support, unbreakable frontline assault, and precise
              reconnaissance to purge corruption and complete their sacred
              mission.
            </p>
            <Link
              href={"/isle_dashboard/expeditions"}
              className="hero_title font-bold flex gap-2 items-center transition-all duration-500 border-2 rounded-sm hover:border-white/20 hover:text-white hover:bg-black/20 bg-white text-black py-2.5 px-5 w-fit"
            >
              <FaFantasyFlightGames size={26} />
              <div className="flex gap-2 items-center">
                <p className="lora_body">View Character Details</p>
                <ImNewTab size={12} className="-translate-y-3 " />
              </div>
            </Link>
          </FadeInSection>
          <FadeInSection className="xl:w-2/3 flex">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 3, spaceBetween: 30 }, // 3 slides on tablet+
              }}
              className="my-8"
            >
              {soulsCharactersSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="h-125 w-full rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 hover:border hover:shadow-2xl transition-all duration-300">
                      {/* <div className="w-full bg-black/40 h-full absolute z-20" /> */}
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={slide.width}
                        height={slide.height}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="body_text pt-5 text-center">{slide.title}</h1>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeInSection>
        </div>
      </section>
      {/* Section 5 - From Concept to Reality */}
      <section
        data-snap
        ref={conceptRealitySection}
        className={`
              h-screen  overflow-hidden w-full relative py-20 `}
      >
        {/* Left side Sliders */}
        <div className="absolute left-0 z-30 flex flex-col items-end gap-2 h-full w-1/2 p-2 *:transition-all *:duration-500">
          <Image
            src={"/artworks_sdt02.png"}
            alt=""
            width={3840}
            height={2160}
            className="left-side-image w-96 h-67 shadow-2xl hover:shadow-amber-100 border"
          />
          <Image
            src={"/img-3.png"}
            alt=""
            width={3840}
            height={2160}
            className="left-side-image w-96 h-67 shadow-2xl"
          />
          <Image
            src={"/glowing-tree.png"}
            alt=""
            width={1639}
            height={1243}
            className="left-side-image w-96 h-67 shadow-2xl"
          />
        </div>
        {/* Right Side Slider */}
        <div className="absolute right-0 z-30 flex flex-col items-start gap-2 h-full w-1/2 p-2 *:transition-all *:duration-500">
          <Image
            src={"/corrupt_wolf.png"}
            alt=""
            width={3840}
            height={2160}
            className="right-side-image w-96 h-67 shadow-2xl"
          />
          <Image
            src={"/wolf-3d.png"}
            alt=""
            width={2431}
            height={1311}
            className="right-side-image w-96 h-67 shadow-2xl"
          />
          <Image
            src={"/wolf-bg.webp"}
            alt=""
            width={941}
            height={446}
            className="right-side-image w-96 h-67 shadow-2xl"
          />
        </div>

        {/* Chidren Container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[80%] m-auto flex flex-col justify-center items-center h-full text-center gap-10">
          {/* Line top */}
          <FadeInSection className="flex flex-col items-center z-10">
            <div className="w-10 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
            <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
          </FadeInSection>
          {/* Text Area */}
          <FadeInSection className="flex justify-center items-center flex-col gap-5">
            <h1 className="head font-bold leading-24 ">
              FROM CONCEPT <br /> TO REALITY
            </h1>
            <p className="max-w-2xl body_text">
              What does it take to be an NoWhere Isler? True Passion,
              imagination, and the ability to thrive in a fast and exciting
              studio
            </p>
            <Link
              href={"isle_dashboard/artworks"}
              className="hero_title font-bold flex gap-2 items-center transition-all duration-500 border-2 rounded-sm hover:border-white/20 hover:text-white hover:bg-black/20 bg-white text-black py-2.5 px-5 w-fit m-auto"
            >
              <FaFantasyFlightGames size={26} />
              <div className="flex gap-2 items-center">
                <p className="lora_body">View Our Artworks</p>
                <ImNewTab size={12} className="-translate-y-3 " />
              </div>
            </Link>
          </FadeInSection>
          {/* Line Bottom */}
          <FadeInSection className="flex flex-col items-center z-10">
            <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
            <div className="w-15 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
          </FadeInSection>
        </div>
      </section>

      {/* Section 6 - Behind the Fog */}\
      <section data-snap className="h-fit relative w-full">
        <BehindTheFog />
      </section>
      
      {/* Section 7 - Step in to the Mist (Email Subs) */}
      <section data-snap className="h-fit relative w-full">
        <GetInTouch data-snap />
      </section>
      
      {/* Section 8 - FAQ */}
      <section data-snap className="h-fit relative w-full">
        <FAQ data-snap />
      </section>
    
    </main>
  );
}
