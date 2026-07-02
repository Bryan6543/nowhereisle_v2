import Image from "next/image";
import FadeInSection from "@/hooks/FadeInSection";

export default function page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <Image
          src={"/img-4.png"}
          width={5120}
          height={2880}
          alt=""
          className="object-cover h-full absolute z-0 scale-animation-hero"
        />
        <FadeInSection className="absolute w-full h-full flex flex-col justify-center items-center gap- z-20 bg-black/40 text-center">
          <h2 className="body_text text-red-800 font-bold">WE ARE LISTENING</h2>
          <h1 className="big_head">THE ISLE AWAITS YOU</h1>
          <p className="body_text">
            Every message helps us make the isle better.
          </p>
        </FadeInSection>
      </section>

      {/* Find your way in */}
      <section className="pt-10 md:pt-20">
        <FadeInSection>
          <h1 className="text-center big_head">FIND YOUR WAY IN</h1>
        </FadeInSection>
        <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-[clamp(50px,1vh,240px)]">
          {/* Discord */}
          <FadeInSection className="relative border-white/40 border rounded-2xl flex justify-center flex-col gap-3 md:gap-5 text-center md:text-start w-[95%] py-15 px-10">
            <div className="m-auto md:m-0 hover:cursor-pointer hover:animate-bounce">
              <Image
                src={"/icons/discord.png"}
                width={50}
                height={50}
                className="h-[clamp(38px,100vh,50px)] object-contain"
                alt=""
              />
            </div>
            <h2 className="lora_head font-bold">DISCORD</h2>
            <p className="lora_body">
              MAIN HUB FOR DISCUSSIONS. DEV UPDATES. LORE SHARING AND CHILL
              VOICE CHATS.
            </p>
          </FadeInSection>
          {/* Socials */}
          <FadeInSection className="relative border-white/40 border rounded-2xl flex justify-center flex-col gap-3 md:gap-5 text-center md:text-start w-[95%] py-15 px-10">
            <div className="flex gap-4 justify-baseline m-auto md:m-0">
              <Image
                src={"/icons/x.png"}
                width={50}
                height={50}
                className="h-[clamp(38px,100vh,50px)] object-contain cursor-pointer hover:animate-bounce"
                alt=""
              />
              <Image
                src={"/icons/instagram.png"}
                width={50}
                height={50}
                className="h-[clamp(38px,100vh,50px)] object-contain cursor-pointer hover:animate-bounce"
                alt=""
              />
            </div>
            <h2 className="lora_head font-bold">SOCIALS</h2>
            <p className="lora_body">
              MAIN HUB FOR DISCUSSIONS. DEV UPDATES. LORE SHARING AND CHILL
              VOICE CHATS.
            </p>
          </FadeInSection>
          {/* Youtube */}
          <FadeInSection className="relative border-white/40 border rounded-2xl flex justify-center flex-col gap-3 md:gap-5 text-center md:text-start w-[95%] py-15 px-10">
            <div className="m-auto md:m-0 cursor-pointer hover:animate-bounce">
              <Image
                src={"/icons/youtube.png"}
                width={50}
                height={50}
                className="h-[clamp(38px,100vh,50px)] object-contain"
                alt=""
              />
            </div>
            <h2 className="lora_head font-bold">YOUTUBE</h2>
            <p className="lora_body">
              MAIN HUB FOR DISCUSSIONS. DEV UPDATES. LORE SHARING AND CHILL
              VOICE CHATS.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Why Wanderers Join us */}
      <section className="py-20">
        <div className="w-[80%] m-auto flex flex-col gap-15 py-[clamp(50px,1vh,240px)] text-center">
          <FadeInSection>
            <h1 className="big_head text-center">WHY WANDERERS JOIN US</h1>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeInSection className="w-[95%] flex justify-center items-center gap-4 flex-col">
              <h2 className="lora_head font-semibold">DEEP LORE DISCUSSIONS</h2>
              <p className="lora_body w-xs md:w-sm">
                Talk about theories, hidden meanings, and the world we are
                slowly revealing.
              </p>
            </FadeInSection>
            <FadeInSection className="w-[95%] flex justify-center items-center gap-4 flex-col">
              <h2 className="lora_head font-semibold">SHARE YOUR CREATIONS</h2>
              <p className="lora_body w-sm">
                Post your fan art, music, stories, or theories. All creativity
                is welcomed.
              </p>
            </FadeInSection>
            <FadeInSection className="w-[95%] flex justify-center items-center gap-4 flex-col">
              <h2 className="lora_head font-semibold">A CALM CORNER</h2>
              <p className="lora_body w-sm">
                Talk about theories, hidden meanings, and the world we are
                slowly revealing.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Voices from the fog */}
      <section className="h-[60vh] bg-gray-600/10">
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <FadeInSection>
            <h1 className="big_head text-center">VOICES FROM THE FOG</h1>
          </FadeInSection>
          <div className="flex w-[80%] m-auto flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
            <FadeInSection className="bg-black px-10 py-10 rounded-2xl flex gap-5 flex-col">
              <p className="lora_body w-sm md:w-md">
                "Finally found a community that feels like home. The lore
                discussions here are next level."
              </p>
              <p className="lora_body w-sm md:w-md text-red-500">
                U/FOGWALKER87
              </p>
            </FadeInSection>
            <FadeInSection className="bg-black px-10 py-10 rounded-2xl flex gap-5 flex-col">
              <p className="lora_body w-sm md:w-md">
                "The atmosphere in this community matches the games perfectly.
                It's peaceful yet full of wonder."
              </p>
              <p className="lora_body w-sm md:w-md text-red-500">
                — ECHOES_IN_THE_MIST
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Ready to step in to the mist - Join Community */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div className="flex flex-col justify-center items-center gap-10">
            <FadeInSection className="flex flex-col justify-center items-center gap-5">
              <h1 className="head text-center">Ready to Step into the Mist?</h1>
              <p className="body_text md:w-xl text-center">
                No pressure. No noise. Just fellow souls who love strange
                stories.
              </p>
            </FadeInSection>
            <FadeInSection>
              <button className="body_text bg-red-900 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer py-4 px-8 rounded-2xl">
                JOIN THE COMMUNITY
              </button>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}
