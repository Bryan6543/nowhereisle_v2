"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  title: string;
}

const slides: Slide[] = [
  { id: 1, image: "/img-2.png", title: "Mountain Adventure" },
  { id: 2, image: "/img-3.png", title: "Ocean Sunset" },
  { id: 3, image: "/img-4.png", title: "City Lights" },
  // { id: 4, image: "/img-4.png", title: "Forest Path" },
];

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "center",
  duration: 30,
};

const AUTOPLAY_OPTIONS = {
  delay: 3000,
  stopOnInteraction: true,
};

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay(AUTOPLAY_OPTIONS),
  ]);

  return (
    <div className="h-auto m-auto flex-col gap-5">
      {/* Viewport */}
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
            >
              <div className="h-[85vh] md:h-[90vh] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 w-full h-full bg-black"
                  style={{
                    transition: "transform 0.0.2s ease-out",
                  }}
                >
                  {/* Overlay black  */}
                  <div className="w-full bg-black/40 h-full absolute z-20" />
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={5200}
                    height={3000}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 left-4 md:left-20 ">
          <h1 className="head">Sigil Tactics: Lost Maylon</h1>
          <p className="body_text max-w-5xl">
            A brutal squad turn-based tactics RPG about leading a doomed
            Inquisition expedition into corrupted territory to reclaim the Lost
            Holy Capital of Maylon.
          </p>
        </div>
      </div>
    </div>
  );
}
