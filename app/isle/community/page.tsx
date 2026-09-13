"use client";

import Image from "next/image";
import FadeInSection from "../../../hooks/FadeInSection";
import { useLenis } from "../../../hooks/SmoothScrollProvider";
import { useEffect } from "react";
import { usePageFields } from "../../../hooks/usePageFields";

export default function page() {
  const { enableSnap, disableSnap } = useLenis();
  const t = usePageFields("community");

  useEffect(() => {
    const first = setTimeout(() => {
      enableSnap();
    }, 200);
    const second = setTimeout(() => {
      enableSnap();
    }, 1200);
    return () => {
      clearTimeout(first);
      clearTimeout(second);
      disableSnap();
    };
  }, [enableSnap, disableSnap]);

  return (
    <main>
      <section
        data-snap
        className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden"
      >
        <Image
          src={t("hero_image", "/img-4.png")}
          width={5120}
          height={2880}
          alt=""
          className="object-cover h-full absolute z-0 scale-animation-hero"
        />
        <FadeInSection className="absolute w-full h-full flex flex-col justify-center items-center gap- z-20 bg-black/40 text-center">
          <h2 className="body_text text-red-800 font-bold">
            {t("hero_kicker", "WE ARE LISTENING")}
          </h2>
          <h1 className="big_head">{t("hero_title", "THE ISLE AWAITS YOU")}</h1>
          <p className="body_text">
            {t("hero_text", "Every message helps us make the isle better.")}
          </p>
        </FadeInSection>
      </section>

      <section data-snap className="pt-10 md:pt-20 h-fit w-full">
        <FadeInSection>
          <h1 className="text-center big_head">{t("find_title", "FIND YOUR WAY IN")}</h1>
        </FadeInSection>
        <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-[clamp(50px,1vh,240px)]">
          <FadeInSection className="relative border-white/40 border rounded-2xl flex justify-center flex-col gap-3 md:gap-5 text-center md:text-start w-[95%] py-15 px-10">
            <a href="https://discord.gg/Rp5R97JAPf" target="_blank" rel="noopener noreferrer" className="m-auto md:m-0 hover:cursor-pointer hover:animate-bounce">
              <Image src={"/icons/discord.png"} width={50} height={50} className="h-[clamp(38px,100vh,50px)] object-contain" alt="Discord" />
            </a>
            <h2 className="lora_head font-bold">{t("discord_title", "DISCORD")}</h2>
            <p className="lora_body">
              {t("discord_text", "MAIN HUB FOR DISCUSSIONS. DEV UPDATES. LORE SHARING AND CHILL VOICE CHATS.")}
            </p>
          </FadeInSection>
          <FadeInSection className="relative border-white/40 border rounded-2xl flex justify-center flex-col gap-3 md:gap-5 text-center md:text-start w-[95%] py-15 px-10">
            <div className="flex gap-4 justify-baseline m-auto md:m-0">
              <a href="https://x.com/NowhereIsleHQ" target="_blank" rel="noopener noreferrer">
                <Image src={"/icons/x.png"} width={50} height={50} className="h-[clamp(38px,100vh,50px)] object-contain cursor-pointer hover:animate-bounce" alt="X" />
              </a>
              <a href="https://bsky.app/profile/nowhereislestudio.bsky.social" target="_blank" rel="noopener noreferrer">
                <Image src={"/icons/bluesky.svg"} width={50} height={50} className="h-[clamp(38px,100vh,50px)] object-contain cursor-pointer hover:animate-bounce" alt="Bluesky" />
              </a>
            </div>
            <h2 className="lora_head font-bold">{t("socials_title", "SOCIALS")}</h2>
            <p className="lora_body">
              {t("socials_text", "Screenshots, short clips and the occasional sketch on X and Bluesky, posted when we have one worth posting.")}
            </p>
          </FadeInSection>
          <FadeInSection className="relative border-white/40 border rounded-2xl flex justify-center flex-col gap-3 md:gap-5 text-center md:text-start w-[95%] py-15 px-10">
            <a href="https://www.youtube.com/@NowhereIsleStudio" target="_blank" rel="noopener noreferrer" className="m-auto md:m-0 cursor-pointer hover:animate-bounce">
              <Image src={"/icons/youtube.png"} width={50} height={50} className="h-[clamp(38px,100vh,50px)] object-contain" alt="YouTube" />
            </a>
            <h2 className="lora_head font-bold">{t("youtube_title", "YOUTUBE")}</h2>
            <p className="lora_body">
              {t("youtube_text", "Longer looks at the game. Dev logs, a walk through a dungeon, the music on its own.")}
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-snap className="h-fit w-full py-20">
        <div className="w-[80%] m-auto flex flex-col gap-15 py-[clamp(50px,1vh,240px)] text-center">
          <FadeInSection>
            <h1 className="big_head text-center">{t("why_title", "WHY WANDERERS JOIN US")}</h1>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeInSection className="w-[95%] flex justify-center items-center gap-4 flex-col">
              <h2 className="lora_head font-semibold">{t("why_1_title", "DEEP LORE DISCUSSIONS")}</h2>
              <p className="lora_body w-auto ">{t("why_1_text", "Talk about theories, hidden meanings, and the world we are slowly revealing.")}</p>
            </FadeInSection>
            <FadeInSection className="w-[95%] flex justify-center items-center gap-4 flex-col">
              <h2 className="lora_head font-semibold">{t("why_2_title", "SHARE YOUR CREATIONS")}</h2>
              <p className="lora_body w-auto">{t("why_2_text", "Post your fan art, music, stories, or theories. All of it is welcome.")}</p>
            </FadeInSection>
            <FadeInSection className="w-[95%] flex justify-center items-center gap-4 flex-col">
              <h2 className="lora_head font-semibold">{t("why_3_title", "A CALM CORNER")}</h2>
              <p className="lora_body w-auto">{t("why_3_text", "A place to sit and talk about nothing in particular. No release dates!")}</p>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-snap>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div className="flex flex-col justify-center items-center gap-10">
            <FadeInSection className="flex flex-col justify-center items-center gap-5">
              <h1 className="head text-center">{t("cta_title", "Ready to Step into the Mist?")}</h1>
              <p className="body_text md:w-xl text-center">
                {t("cta_text", "No pressure. No noise. Just fellow souls who love strange stories.")}
              </p>
            </FadeInSection>
            <FadeInSection>
              <a href="https://discord.gg/Rp5R97JAPf" target="_blank" rel="noopener noreferrer" className="inline-block body_text bg-red-900 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer py-4 px-8 rounded-2xl">
                {t("cta_button", "JOIN THE COMMUNITY")}
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}