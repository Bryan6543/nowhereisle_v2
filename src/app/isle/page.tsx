"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { homeHeroSlides } from "@/data/SlidesData";
import { soulsCharactersSlides } from "@/data/SlidesData";
import { worldBuildingSlides } from "@/data/SlidesData";
import { artisticObsessionSlides } from "@/data/SlidesData";
import { playerExperienceSlides } from "@/data/SlidesData";

gsap.registerPlugin(ScrollTrigger);

type StudioFAQItem = {
  question: string;
  answer: string;
};

const studiofaqs: StudioFAQItem[] = [
  {
    question: "What is Nowhere Isle Studio?",
    answer:
      "Nowhere Isle Studios is an independent game studio creating single-player narrative and strategy games with rich worldbuilding, distinctive systems, and a strong sense of atmosphere.",
  },
  {
    question: "Where is NowhereIsle based?",
    answer: "Sri Lanka, Colombo",
  },
  {
    question: "Are you hiring or looking for collaborators?",
    answer:
      "We're always open to connecting with talented artists, programmers, composers, and writers. Feel free to reach out via email",
  },
  {
    question: "I found a bug / have feedback. How do I report it?",
    answer: "File a feedback or bug report on the website.",
  },
];

type GameFAQItem = {
  question: string;
  answer: string;
};

const gamefaqs: GameFAQItem[] = [
  {
    question: "What is Sigil Tactics: Lost Maylon?",
    answer:
      "A brutal squad-based turn-based tactics RPG about leading a doomed Inquisition expedition into corrupted territory to reclaim the Lost Holy Capital of Maylon.",
  },
  {
    question: "What platform is it coming to?",
    answer: "PC.",
  },
  {
    question: "Is it single-player?",
    answer: "Yes.",
  },
  {
    question: "Is there a release date?",
    answer: "Coming Soon.",
  },
  {
    question: "Is there a demo?",
    answer: "To be announced.",
  },
  {
    question: "Can I wishlist it?",
    answer: "Wishlist links will be added when the Steam page is available.",
  },
  {
    question: "Is there a trailer?",
    answer: "A trailer will be added when ready.",
  },
];
export default function Home() {
  // FAQ
  const [openStudioIndex, setOpenStudioINdex] = useState<number | null>(null);
  const [openGameIndex, setOpenGameINdex] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  const conceptRealitySection = useRef<HTMLDivElement>(null);

  const toggleStudioFAQ = (index: number) => {
    setOpenStudioINdex(openStudioIndex === index ? null : index);
  };

  const toggleGameFAQ = (index: number) => {
    setOpenGameINdex(openGameIndex === index ? null : index);
  };

  useEffect(() => {
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

    // Listen for preloader completion
    document.addEventListener("preloaderComplete", startAnimations);

    // SECTION 02 - Nowhere isle Introduction
    // Overlay
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top 45%",
          end: "center 50%",
          // scrub: 1,
          // markers: true,
        },
      })
      .fromTo(
        ".overlay-logo",
        {
          x: "0%",
          opacity: "100%",
        },
        {
          x: "-50vw",
          opacity: "0%",
          ease: "power3.out",
          duration: 2,
        },
      );
    // groundLayer
    gsap.timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top 40%",
          end: "center 50%",
          // scrub: 1,
          // markers: true,
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
      // Left Side Images
      gsap.fromTo(
        ".left-side-image",
        {
          rotate: 0,
          x: 0,
        },
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

      // Right Side Images
      gsap.fromTo(
        ".right-side-image",
        {
          rotate: 0,
          x: 0,
        },
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

    return () => {
      document.removeEventListener("preloaderComplete", startAnimations);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      {/* Section 1 - Hero */}
      <section className="h-fit  relative w-full flex-col gap-5 overflow-hidden">
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
        <div className="absolute bottom-20 left-4 md:space-y-2 md:left-20 z-30 pointer-events-none">
          <h1 className="head hero_title opacity-0 translate-y-20 ">
            Sigil Tactics: Lost Maylon
          </h1>
          <p className="body_text hero_subtitle max-w-5xl opacity-0 translate-y-20">
            A brutal squad turn-based tactics RPG about leading a doomed
            Inquisition expedition into corrupted territory to reclaim the Lost
            Holy Capital of Maylon.
          </p>
        </div>
      </section>

      {/* Section 2 - Nowhere Isle Introduction */}
      <section className="relative h-auto lg:h-[80vh] overflow-hidden flex">
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
        <div className="w-[80%] m-auto flex flex-col items-center gap-10 py-[clamp(50px,1vh,240px)] text-center">
          {/* LOGO/Name */}
          <div className="s2_lg_logo flex gap-10 flex-col items-center md:flex-row">
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
            <p className="s2_lg_dsc max-w-4xl">
              We are an independent game studio building atmospheric strategy
              games with strong identity, intricate lore, meaningful tactical
              systems, and underlying mystery.
            </p>
            <div className="s2_lg_fct flex flex-col gap-4 md:flex-row md:gap-10">
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
            <div
              className="s2_lg_link flex z-90 gap-2 items-center justify-center relative cursor-pointer hover:opacity-70 hover:font-black transition-all duration-500 py-2"
              onClick={() => setIsActive(!isActive)}
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
            >
              <p className="font-bold capitalize body_text">View About Us</p>
              <div className="relative pb-0.5">
                <div
                  className={`absolute h-0.5 transition-all duration-800 bg-linear-to-t from-transparent via-white to-transparent 
                          ${isActive ? "w-40 -translate-y-5 -translate-x-38 rotate-0" : "w-2.5 -translate-y-0.5 rotate-200"}`}
                />
                <div
                  className={`absolute h-0.5 transition-all duration-500 bg-linear-to-t from-transparent via-white to-transparent
                            ${isActive ? "w-40 translate-y-5 -translate-x-38 rotate-0" : "w-2.5 translate-y-0.5 -rotate-200"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - A World in the Making */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div className="flex flex-col gap-2.5">
            <h1 className="head">A World In The Making</h1>
            <p className="body_text md:w-4xl">
              Lead the seventh doomed Inquisition expedition into corrupted
              territory and fight to reclaim the Lost Holy Capital of Maylon.
            </p>
          </div>
          <div className="md:relative md:block grid grid-cols-1 grid-rows-2 gap-2.5 md:gap-0">
            <div className="md:col-start-1 md:row-start-1">
              <Image
                src={"/img-3.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-[clamp(250px,100vw,850px)] shadow-2xl rounded-2xl"
              />
            </div>
            <div className="md:col-start-2 md:row-start-2 2xl:pb-50">
              <Image
                src={"/img-2.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-[clamp(250px,100vw,850px)] shadow-2xl rounded-2xl 2xl:absolute 2xl:translate-x-[clamp(150px,100vw,600px)] 2xl:-translate-y-50"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="massive_shead">SIGIL TACTICS</h1>
              <h1 className="massive_bhead">LOST MAYLON</h1>
            </div>
            <div className="flex gap-8 opacity-75">
              <Image
                src={"/icons/kick.png"}
                alt="Kick"
                width={71}
                height={79}
                className="w-[clamp(56px,100vw,71px)]"
              />
              <Image
                src={"/icons/steam.png"}
                alt="steam"
                width={85}
                height={85}
                className="w-[clamp(56px,100vw,71px)]"
              />
            </div>
            <div
              className="flex z-90 gap-2 items-center relative cursor-pointer hover:opacity-70 hover:font-black transition-all duration-500 py-2"
              onClick={() => setIsActive(!isActive)}
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
            >
              <p className="font-bold capitalize body_text">View Game Page</p>
              <div className="relative pb-0.5">
                <div
                  className={`absolute h-0.5 transition-all duration-800 bg-linear-to-t from-transparent via-white to-transparent 
                          ${isActive ? "w-40 -translate-y-5 -translate-x-39 rotate-0" : "w-2.5 -translate-y-0.5 rotate-200"}`}
                />
                <div
                  className={`absolute h-0.5 transition-all duration-500 bg-linear-to-t from-transparent via-white to-transparent
                            ${isActive ? "w-40 translate-y-5 -translate-x-39 rotate-0" : "w-2.5 translate-y-0.5 -rotate-200"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Meet Souls you will lead into darkness */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div className="flex flex-col gap-3">
            <h1 className="head">Meet the souls you will lead into darkness</h1>
            <p className="body_text md:w-2xl">
              A specialized trio of Inquisition operatives deployed into the
              cursed ruins.
            </p>
            <p className="body_text md:w-3xl">
              United by faith and forged in conflict, these warriors of Maylon
              combine holy support, unbreakable frontline assault, and precise
              reconnaissance to purge corruption and complete their sacred
              mission.
            </p>
            <p>View Character Details</p>
          </div>
          <div className="xl:w-2/3 flex">
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
          </div>
        </div>
      </section>

      {/* Section 5 - From Concept to Reality */}
      <section
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
        <div className="z-40 w-[80%] m-auto flex flex-col justify-center items-center h-full text-center gap-10">
          {/* Line top */}
          <div className="flex flex-col items-center z-10">
            <div className="w-10 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
            <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
          </div>
          {/* Text Area */}
          <div className="flex justify-center items-center flex-col gap-5">
            <h1 className="head font-bold leading-24 ">
              FROM CONCEPT <br /> TO REALITY
            </h1>
            <p className="max-w-2xl body_text">
              What does it take to be an NoWhere Isler? True Passion,
              imagination, and the ability to thrive in a fast and exciting
              studio
            </p>
            <div
              className="flex z-90 gap-2 items-center relative cursor-pointer hover:opacity-70 hover:font-black transition-all duration-500 py-2"
              onClick={() => setIsActive(!isActive)}
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
            >
              <p className="font-bold capitalize body_text">View Our ArtWork</p>
              <div className="relative pb-0.5">
                <div
                  className={`absolute h-0.5 transition-all duration-800 bg-linear-to-t from-transparent via-white to-transparent 
                          ${isActive ? "w-40 -translate-y-5 -translate-x-42 rotate-0" : "w-2.5 -translate-y-0.5 rotate-200"}`}
                />
                <div
                  className={`absolute h-0.5 transition-all duration-500 bg-linear-to-t from-transparent via-white to-transparent
                            ${isActive ? "w-40 translate-y-5 -translate-x-42 rotate-0" : "w-2.5 translate-y-0.5 -rotate-200"}`}
                />
              </div>
            </div>
          </div>
          {/* Line Bottom */}
          <div className="flex flex-col items-center z-10">
            <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
            <div className="w-15 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Section 6 - Behind the Fog */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1 className="big_head text-center">BEHIND THE FOG</h1>
          </div>
          {/* World Building */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2.5">
              <h1 className="head">WORLD BUILDING</h1>
              <p className="text-body md:w-md">
                We begin with lore, mood boards, and soundscapes before writing
                a single line of code.
              </p>
            </div>

            <div className="xl:w-2/3 flex">
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
                {worldBuildingSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="h-100 w-full rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-black">
                        {/* <div className="w-full bg-black/40 h-full absolute z-20" /> */}
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Artistic Obsession */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2.5 text-right items-end">
              <h1 className="head">ARTISTIC OBSESSION</h1>
              <p className="text-body md:w-md">
                Every frame, every particle, and every shadow is crafted with
                intention.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-full flex ">
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
                  {artisticObsessionSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="h-100 w-full rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-black">
                          {/* <div className="w-full bg-black/40 h-full absolute z-20" /> */}
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="w-full h-full object-contain "
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          {/* Player Experience */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2.5">
              <h1 className="head">PLAYER EXPERIENCE</h1>
              <p className="text-body md:w-md">
                We design for those who enjoy slow discovery, deep immersion,
                and emotional payoff.
              </p>
            </div>
            <div>
              <div className="w-full  flex">
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
                  {playerExperienceSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="h-100 w-full rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-black">
                          {/* <div className="w-full bg-black/40 h-full absolute z-20" /> */}
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Step in to the Mist (Email Subs) */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="head text-center">STEP IN TO THE MIST</h1>
            <p className="body_text md:w-xl text-center">
              Receive rare updates, behind-the-scenes lore, and early access to
              new worlds.
            </p>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <input
                type="email"
                name=""
                id=""
                className="border-white/50 bg-white/10 border-4 rounded-2xl h-15 w-full md:w-90 px-4 body-text transition-all duration-300 hover:bg-black/50"
              />
              <button className="body_text bg-[#411015] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer py-5 px-8 rounded-2xl">
                JOIN
              </button>
            </div>
          </div>
          <div>{/* Newsletter Field and Join Button */}</div>
        </div>
      </section>

      {/* Section 8 - FAQ */}
      <section className="min-h-screen w-full bg-bl relative overflow-hidden">
        <div className="min-h-screen sm:h-screen">
          <div className="w-[80%] m-auto flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-between h-full">
            <div className="w-2/6">
              <h1 className="big_head font-bold scale-y-150">FAQ</h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-10 items-center">
              {/* Studio FAQs */}
              <div className="sm:w-3/6 flex flex-col gap-4">
                <h2 className="body_text pb-5 font-bold">Studio FAQs</h2>
                {studiofaqs.map((studiofaq, index) => (
                  <div
                    onClick={() => toggleStudioFAQ(index)}
                    // oq
                    className="cursor-pointer hover:bg-white/5 transition-all duration-300 py-2 flex flex-col gap-4 px-5 bg-white/2"
                  >
                    <hr />
                    <div
                      className="flex justify-between gap-5"
                      // aria-expanded={openIndex === index}
                    >
                      <h3 className="body_text font-bold">
                        {studiofaq.question}
                      </h3>
                      <p>{openStudioIndex === index ? " - " : " + "}</p>
                    </div>

                    <div
                      className={`w-5/6 overflow-hidden transition-all duration-500 ${openStudioIndex === index ? "max-h-96 mt-4" : "max-h-0"}`}
                    >
                      <p className="body_text opacity-85">{studiofaq.answer}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </div>
              {/* Game FAQs */}
              <div className="sm:w-3/6 flex flex-col gap-4">
                <h2 className="body_text font-bold">Game FAQs</h2>
                {gamefaqs.map((gamefaq, index) => (
                  <div
                    key={index}
                    onClick={() => toggleGameFAQ(index)}
                    // oq
                    className="cursor-pointer hover:bg-white/5 transition-all duration-300 py-2 flex flex-col gap-4 px-5 bg-white/2"
                  >
                    <hr />
                    <div
                      className="flex justify-between gap-5"
                      // aria-expanded={openIndex === index}
                    >
                      <h3 className="body_text font-bold">
                        {gamefaq.question}
                      </h3>
                      <p>{openGameIndex === index ? " - " : " + "}</p>
                    </div>

                    <div
                      className={`w-5/6 overflow-hidden transition-all duration-500 ${openGameIndex === index ? "max-h-96 mt-4" : "max-h-0"}`}
                    >
                      <p className="body_text opacity-85">{gamefaq.answer}</p>
                    </div>
                  </div>
                ))}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
