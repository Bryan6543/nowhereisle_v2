"use client";

import { usePageFields } from "../../hooks/usePageFields";
import FadeInSection from "../../hooks/FadeInSection";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BehindTheFog() {
  const t = usePageFields("behind_the_fog");

  const worldBuildingSlides = [
    { id: 1, image: t("wb_image_1", "/a-4.png"), title: "world 1" },
    { id: 2, image: t("wb_image_2", "/a-5.png"), title: "world 2" },
    { id: 3, image: t("wb_image_3", "/a-6.png"), title: "world 3" },
  ];

  const artisticObsessionSlides = [
    { id: 1, image: t("art_image_1", "/sketch-rino.png"), title: "art 1" },
    { id: 2, image: t("art_image_2", "/corrupt_wolf.png"), title: "art 2" },
    { id: 3, image: t("art_image_3", "/a2-1.png"), title: "art 3" },
    { id: 4, image: t("art_image_4", "/a2-2.png"), title: "art 4" },
    { id: 5, image: t("art_image_5", "/a2-3.png"), title: "art 5" },
    { id: 6, image: t("art_image_6", "/a2-4.png"), title: "art 6" },
    { id: 7, image: t("art_image_7", "/a2-5.png"), title: "art 7" },
  ];

  const playerExperienceSlides = [
    { id: 1, image: t("px_image_1", "/art-1.png"), title: "player 1" },
    { id: 2, image: t("px_image_2", "/glowing-tree.png"), title: "player 2" },
    { id: 3, image: t("px_image_3", "/img-3s.png"), title: "player 3" },
  ];

  return (
    <section className="h-fit w-full">
      <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <FadeInSection>
          <h1 className="big_head text-center">{t("title", "BEHIND THE FOG")}</h1>
        </FadeInSection>

        <section className="flex flex-col gap-12">
          <FadeInSection direction="left" className="flex flex-col gap-2.5">
            <h1 className="head">{t("wb_title", "WORLD BUILDING")}</h1>
            <p className="text-body md:w-md">
              {t(
                "wb_text",
                "We begin with lore, mood boards, and soundscapes before writing a single line of code.",
              )}
            </p>
          </FadeInSection>
          <FadeInSection className="xl:w-2/3 flex">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 30 } }}
              className="my-8"
            >
              {worldBuildingSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="h-100 w-full rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-black">
                      <Image src={slide.image} alt={slide.title} fill className="w-full h-full object-contain" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeInSection>
        </section>

        <div className="flex flex-col gap-12">
          <FadeInSection direction="right" className="flex flex-col gap-2.5 text-right items-end">
            <h1 className="head">{t("art_title", "ARTISTIC OBSESSION")}</h1>
            <p className="text-body md:w-md">
              {t(
                "art_text",
                "We redo things. A lot. The gallery has the same enemy at every stage we put it through.",
              )}
            </p>
          </FadeInSection>
          <div className="flex justify-end">
            <FadeInSection className="w-full flex ">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 30 } }}
                className="my-8"
              >
                {artisticObsessionSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="h-100 w-full rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-black">
                        <Image src={slide.image} alt={slide.title} fill className="w-full h-full object-contain " />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </FadeInSection>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <FadeInSection direction="left" className="flex flex-col gap-2.5">
            <h1 className="head">{t("px_title", "PLAYER EXPERIENCE")}</h1>
            <p className="text-body md:w-md">
              {t(
                "px_text",
                "This is a slow game. You will lose people you spent hours on, and the game will not soften it. We are making it for players who want that to matter.",
              )}
            </p>
          </FadeInSection>
          <div>
            <FadeInSection className="w-full  flex">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 30 } }}
                className="my-8"
              >
                {playerExperienceSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="h-100 w-full rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-black">
                        <Image src={slide.image} alt={slide.title} fill className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}