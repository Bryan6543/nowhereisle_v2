"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FadeInSection from "../../hooks/FadeInSection";
import FAQ from "../../components/multiple_use/FAQ";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GetInTouch from "../../components/multiple_use/GetInTouch";
import BehindTheFog from "../../components/multiple_use/BehindTheFog";
import WorldMaking from "../../components/multiple_use/WorldMaking";
import { FaFantasyFlightGames } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import { useLenis } from "../../hooks/SmoothScrollProvider";
import { usePageFields } from "../../hooks/usePageFields";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const conceptRealitySection = useRef<HTMLDivElement>(null);
  const { enableSnap, disableSnap } = useLenis();
  const t = usePageFields("home");

  const heroSlides = [
    { id: 1, image: t("hero_image_1", "/img-2.png"), title: "hero 1" },
    { id: 2, image: t("hero_image_2", "/img-3.png"), title: "hero 2" },
    { id: 3, image: t("hero_image_3", "/img-4.png"), title: "hero 3" },
  ];

  const soulsCharactersSlides = [
    {
      id: 1,
      image: t("char_1_image", "/chars/vicar_mixamo.png"),
      title: t("char_1_name", "Vicar"),
      height: 828,
      width: 555,
    },
    {
      id: 2,
      image: t("char_2_image", "/chars/cadet_mixamo.png"),
      title: t("char_2_name", "Cadet"),
      height: 608,
      width: 768,
    },
    {
      id: 3,
      image: t("char_3_image", "/chars/initiate_mixamo.png"),
      title: t("char_3_name", "Initiate"),
      height: 748,
      width: 515,
    },
  ];

  useEffect(() => {
    const id = setTimeout(() => {
      enableSnap();
    }, 150);

    return () => {
      clearTimeout(id);
      disableSnap();
    };
  }, [enableSnap, disableSnap]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      requestAnimationFrame(() => {
        startAnimations();
      });
      if (sessionStorage.getItem("preloaderFinished")) {
        startAnimations();
      }

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
          ".s2_lg_desc",
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
      <section
        data-snap
        className="h-fit  relative w-full flex-col gap-5 overflow-hidden"
      >
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
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="h-screen rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 w-full h-full bg-black">
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

        <div className="absolute bottom-20 left-4 right-4 md:space-y-2 md:left-20 md:right-20 z-30 border-white/10 border-2 shadow-sm bg-black/30 backdrop-blur-xs p-4 md:p-10 rounded-xl flex flex-col items-start gap-2">
          <h1 className="head hero_title opacity-0 translate-y-20 ">
            {t("hero_title", "Kradel Tactics")}
          </h1>
          <p className="body_text hero_subtitle max-w-5xl opacity-0 translate-y-20">
            {t(
              "hero_text",
              "Lead the seventh expedition into the heart of Old Maylon as its Grand Inquisitor. Wounds do not heal on their own, corruption spreads, and resolve runs out. A turn-based tactics RPG.",
            )}
          </p>
          <Link
            href={"/isle_dashboard/expeditions"}
            className="hero_title font-bold flex gap-2 items-center transition-all duration-500 border-2 rounded-sm hover:border-white/20 hover:text-white hover:bg-black/20 bg-white text-black py-2.5 px-5"
          >
            <FaFantasyFlightGames size={26} />
            <div className="flex gap-2 items-center">
              <p className="lora_body">{t("hero_button", "OPEN GAME PAGE")}</p>
              <ImNewTab size={12} className="-translate-y-3 " />
            </div>
          </Link>
        </div>
      </section>

      <section
        data-snap
        className="relative h-auto lg:h-[80vh] overflow-hidden flex"
      >
        <div className="s2_SliderContainer overlay-logo bg-black w-full h-full flex justify-center items-center z-10 absolute">
          <Image
            src={"/logo.png"}
            width={613}
            height={500}
            alt="nowhere_isle_game_studio_logo"
            className="h-1/3 object-contain m-auto"
          />
        </div>
        <div className="w-[80%] m-auto flex flex-col items-center gap-10 py-[clamp(50px,1vh,240px)] text-center">
          <div className="s2_lg_logo flex gap-10 flex-col items-center md:flex-row">
            <Image
              src={"/logo.png"}
              width={613}
              height={500}
              alt="nowhere_isle_game_studio_logo"
              className="h-[clamp(120px,100vh,200px)]  w-fit object-contain"
            />
            <h1 className="big_head">{t("intro_title", "NOWHERE ISLE STUDIO")}</h1>
          </div>
          <div className="s2_lg_desc body_text space-y-10">
            <p className="max-w-4xl">
              {t(
                "intro_text",
                "Nowhere Isle Studio started in 2025 because we wanted a tactics game with a real story in it, a dungeon to crawl, and a base to manage between runs. We are based in Colombo, and we intend to be the first game studio in Sri Lanka with a global release.",
              )}
            </p>
            <div className="s2_lg_fct flex flex-col justify-center items-center gap-4 md:flex-row md:gap-10">
              <div className="flex gap-5">
                <p>Established</p>
                <p className="text-green-600">{t("stat_year", "2025")}</p>
              </div>
              <div className="flex gap-5">
                <p>Team Members</p>
                <p className="text-green-600">{t("stat_team", "6")}</p>
              </div>
              <div className="flex gap-5">
                <p>Based In</p>
                <p className="text-green-600">{t("stat_place", "Sri Lanka")}</p>
              </div>
            </div>
            <Link
              href={"/isle/about"}
              className="s2_lg_link hero_title font-bold flex gap-2 items-center transition-all duration-500 border-2 rounded-sm hover:border-white/20 hover:text-white hover:bg-black/20 bg-white text-black py-2.5 px-5 w-fit m-auto"
            >
              <FaFantasyFlightGames size={26} />
              <div className="flex gap-2 items-center">
                <p className="lora_body">View About Us</p>
                <ImNewTab size={12} className="-translate-y-3 " />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section data-snap className="h-fit relative w-full">
        <WorldMaking />
      </section>

      <section data-snap>
        <div className="w-[80%] h-fit m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <FadeInSection className="flex flex-col gap-4">
            <h1 className="head">
              {t("souls_title", "Meet the souls you will lead into darkness")}
            </h1>
            <p className="body_text md:w-5xl">
              {t(
                "souls_text",
                "Every squad you send in is built from three classes. An Initiate to stand in front. A Cadet to shoot over their shoulder. A Vicar to keep the other two alive, and to bury them when they draw their last breath.",
              )}
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
              loop={false}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="my-8"
            >
              {soulsCharactersSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="h-125 w-full rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/20 hover:border hover:shadow-2xl transition-all duration-300">
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

      <section
        data-snap
        ref={conceptRealitySection}
        className="h-screen  overflow-hidden w-full relative py-20"
      >
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[80%] m-auto flex flex-col justify-center items-center h-full text-center gap-10">
          <FadeInSection className="flex flex-col items-center z-10">
            <div className="w-10 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
            <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
          </FadeInSection>
          <FadeInSection className="flex justify-center items-center flex-col gap-5">
            <h1 className="head font-bold leading-24 ">
              {t("concept_title", "FROM CONCEPT TO REALITY")}
            </h1>
            <p className="max-w-2xl body_text">
              {t(
                "concept_text",
                "The art starts with the writing. A page of lore becomes a sketch, the sketch becomes a model, and the model gets tested in the engine until it feels like Old Maylon. The gallery is all of it, including the ones we scrapped.",
              )}
            </p>
            <Link
              href={"/isle_dashboard/artworks"}
              className="hero_title font-bold flex gap-2 items-center transition-all duration-500 border-2 rounded-sm hover:border-white/20 hover:text-white hover:bg-black/20 bg-white text-black py-2.5 px-5 w-fit m-auto"
            >
              <FaFantasyFlightGames size={26} />
              <div className="flex gap-2 items-center">
                <p className="lora_body">View Our Artworks</p>
                <ImNewTab size={12} className="-translate-y-3 " />
              </div>
            </Link>
          </FadeInSection>
          <FadeInSection className="flex flex-col items-center z-10">
            <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
            <div className="w-15 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
          </FadeInSection>
        </div>
      </section>

      <section data-snap className="h-fit relative w-full">
        <BehindTheFog />
      </section>
      <section data-snap className="h-fit relative w-full">
        <GetInTouch />
      </section>
      <section data-snap className="h-fit relative w-full">
        <FAQ />
      </section>
    </main>
  );
}