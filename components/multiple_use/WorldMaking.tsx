"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import FadeInSection from "../../hooks/FadeInSection";

export default function WorldMaking() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <FadeInSection className="flex flex-col gap-2.5">
          <h1 className="head">A World In The Making</h1>
          <p className="body_text md:w-4xl">
            You run the base and the people in it. Each expedition you pick a
            squad, lead them into the ruins of Old Maylon, and come back with
            what you can. Wounds, corruption and shaken resolve come home with
            them, so who you send next time is never a simple choice. Reach the
            heart of the city and claim the lost capital of Maylon or die
            trying.
          </p>
        </FadeInSection>
        <div className="md:relative md:block grid grid-cols-1 grid-rows-2 gap-2.5 md:gap-0">
          <FadeInSection
            direction="left"
            className="md:col-start-1 md:row-start-1"
          >
            <Image
              src={"/img-3.png"}
              width={1000}
              height={1000}
              alt=""
              className="w-[clamp(250px,100vw,850px)] shadow-2xl rounded-2xl"
            />
          </FadeInSection>
          <FadeInSection
            direction="right"
            className="md:col-start-2 md:row-start-2 2xl:pb-50"
          >
            <Image
              src={"/img-2.png"}
              width={1000}
              height={1000}
              alt=""
              className="w-[clamp(250px,100vw,850px)] shadow-2xl rounded-2xl 2xl:absolute 2xl:translate-x-[clamp(150px,100vw,600px)] 2xl:-translate-y-50"
            />
          </FadeInSection>
        </div>
        <div className="flex flex-col gap-8">
          <FadeInSection direction="left">
            <h1 className="massive_shead">KRADEL</h1>
            <h1 className="massive_bhead">TACTICS</h1>
          </FadeInSection>
          <FadeInSection className="flex gap-8 opacity-75">
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
          </FadeInSection>
          <FadeInSection
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
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
