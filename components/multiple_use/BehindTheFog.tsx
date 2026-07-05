import FadeInSection from "../../hooks/FadeInSection"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { worldBuildingSlides } from "../../data/SlidesData";
import { artisticObsessionSlides } from "../../data/SlidesData";
import { playerExperienceSlides } from "../../data/SlidesData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BehindTheFog() {
  return (
    <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <FadeInSection>
            <h1 className="big_head text-center">BEHIND THE FOG</h1>
          </FadeInSection>
          {/* World Building */}
          <div className="flex flex-col gap-12">
            <FadeInSection direction="left" className="flex flex-col gap-2.5">
              <h1 className="head">WORLD BUILDING</h1>
              <p className="text-body md:w-md">
                We begin with lore, mood boards, and soundscapes before writing
                a single line of code.
              </p>
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
            </FadeInSection>
          </div>
          {/* Artistic Obsession */}
          <div className="flex flex-col gap-12">
            <FadeInSection
              direction="right"
              className="flex flex-col gap-2.5 text-right items-end"
            >
              <h1 className="head">ARTISTIC OBSESSION</h1>
              <p className="text-body md:w-md">
                Every frame, every particle, and every shadow is crafted with
                intention.
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
              </FadeInSection>
            </div>
          </div>
          {/* Player Experience */}
          <div className="flex flex-col gap-12">
            <FadeInSection direction="left" className="flex flex-col gap-2.5">
              <h1 className="head">PLAYER EXPERIENCE</h1>
              <p className="text-body md:w-md">
                We design for those who enjoy slow discovery, deep immersion,
                and emotional payoff.
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
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
  )
}
