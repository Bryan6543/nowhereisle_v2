"use client";

import Image from "next/image";
import FadeInSection from "../../../hooks/FadeInSection";

export default function page() {

  return (
    <div className="w-[90%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
      <section className="h-[60vh] w-full relative">
        <video
          src="/sigil_video.mp4"
          autoPlay
          loop
          muted
          className="absolute h-full w-full object-cover object-center opacity-85"
        />
        <div className="w-full h-full absolute z-20 flex flex-col gap-5 justify-center items-center">
          <h1 className="massive_bhead">SIGIL TACTICS</h1>
          <h2 className="massive_shead opacity-75">LOST MAYLON</h2>
          <p className="sub_head_sm">A brutal squad-based tactics RPG</p>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <div className="lora_body flex flex-col gap-4 opacity-90 ">
          <h1 className="dashboard_head">THE LOST HOLY CAPITAL</h1>
          <p className="text-red-700 font-semibold">
            A Brief Glimpse Into the Lore
          </p>
          <p className="max-w-4xl">
            In the year 1472 of the Third Reckoning, the Holy Capital of Maylon
            fell silent. No messengers returned. No ravens flew from its towers.
            The city simply... vanished into the fog.
          </p>

          <p className="max-w-4xl">
            Decades later, the Inquisition sends its most expendable force — you
            — to reclaim what was lost. Armed with forbidden sigils and dying
            faith, you must navigate a land where reality frays at the edges.
          </p>
        </div>

        <div className="lora_body flex flex-col gap-4 bg-white/10 py-10 px-10 w-fit rounded-2xl">
          <p className="text-red-700 font-semibold">The Final Edict</p>
          <p className="max-w-4xl">
            “Enter the fog. Burn what is corrupted. Die with honor if you must.
            But bring back the Heart of Maylon or do not return at all.”
          </p>
          <p className="opacity-75">— High Inquisitor Serath Veyra</p>
        </div>
      </section>

      <section>
        <div className=" m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <FadeInSection className="flex flex-col gap-2.5">
            <h1 className="dashboard_head">A World In The Making</h1>
            <p className="orange_body md:w-4xl">
              Lead the seventh doomed Inquisition expedition into corrupted
              territory and fight to reclaim the Lost Holy Capital of Maylon.
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
              <h1 className="massive_shead">SIGIL TACTICS</h1>
              <h1 className="massive_bhead">LOST MAYLON</h1>
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
          </div>
        </div>
      </section>

      {/* Meet the souls you will lead into darkness */}
      <section className="w-[70%]">
        <h1 className="dashboard_head">
          Meet the souls you will lead into darkness
        </h1>
        <div className="flex">
          <div>
            <Image
              src={"/chars/initiate_mixamo.png"}
              width={1000}
              height={1000}
              alt=""
              className="object-contain h-auto w-80"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 h-50">
            <p className="font-bold lora_head">Mixama</p>
            <p className="lora_body max-w-sm opacity-75">
              A sworn Inquisition fighter sent ahead to break the enemy line in
              the name of Maylon.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div>
            <Image
              src={"/chars/cadet_mixamo.png"}
              width={1000}
              height={1000}
              alt=""
              className="object-contain h-auto w-80"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 h-50">
            <p className="font-bold lora_head">Mixama</p>
            <p className="lora_body max-w-sm opacity-75">
              A sworn Inquisition fighter sent ahead to break the enemy line in
              the name of Maylon.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image
              src={"/chars/vicar_mixamo.png"}
              width={1000}
              height={1000}
              alt=""
              className="object-contain h-auto w-80"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 h-50">
            <p className="font-bold lora_head">Mixama</p>
            <p className="lora_body max-w-sm opacity-75">
              A sworn Inquisition fighter sent ahead to break the enemy line in
              the name of Maylon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
