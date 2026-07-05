"use client";

import Image from "next/image";
import FadeInSection from "../../../hooks/FadeInSection";
import BehindTheFog from "../../../components/multiple_use/BehindTheFog";
import GetInTouch from "../../../components/multiple_use/GetInTouch";

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
          <h2 className="body_text text-red-800 font-bold">ESTABLISTED 2024</h2>
          <h1 className="big_head">NOWHERISLE STUDIOS</h1>
          <p className="body_text">
            A SMALL STUDIO WHERE SMALL IDEAS FIND THEIR HOME.
          </p>
        </FadeInSection>
      </section>

      {/* Mission / Vission */}
      <section>
        <div className="w-[80%] m-auto gap-10 py-[clamp(50px,1vh,240px)] font_lilita grid grid-cols-1 md:grid-cols-2">
          <FadeInSection
            direction="left"
            className="flex flex-col gap-4 w-[90%]"
          >
            <h2 className="text-[clamp(20px,7px,16px)] text-red-800">
              Our Mission
            </h2>
            <p className="text-[clamp(32px,7px,20px)]">
              TO BECOME SRI LANKA'S FIRST GLOBALLY SUCCESSFUL GAME STUDIO AND TO
              BE BEST AT WHAT WE DO. UNFORGETTABLE STORYTELLING AND DEEPLY
              ENGAGING GAMEPLAY.
            </p>
            <p className="text-[clamp(20px,7px,16px)] opacity-75">
              A SMALL STUDIO WHERE SMALL IDEAS FIND THEIR HOME.
            </p>
          </FadeInSection>
          <FadeInSection direction="right" className="flex flex-col gap-4 w-[90%]">
            <h2 className="text-[clamp(20px,7px,16px)] text-red-800">
              Our Vision
            </h2>
            <p className="text-[clamp(32px,7px,20px)]">
              FULLY INDEPEND WITH NO COMPRISE OVER CREATIVE DECISION TO CREATE
              WORLDS WE WANT TO PLAY.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Our Story */}
      <section className=" py-[clamp(50px,1vh,240px)]">
        <FadeInSection className="bg-[#313131] pb-50">
          <h1 className="big_head translate-x-[10%] translate-y-[-50%] ">
            OUR STORY
          </h1>
          <div className="w-[80%] m-auto lora_body  flex flex-col gap-5">
            <div className="w-[80%] m-auto flex flex-col gap-10 font_quot">
              <p>
                Nowhere Isle Studios is an independent game studio that dares to
                venture into the unknown strange worlds of the mind, crafting
                atmospheric strategy games filled with strong identity,
                intricate lore, meaningful tactics, and underlying mystery.
              </p>
              <p>
                Our current project is Sigil Tactics: Lost Maylon, a brutal
                tactical RPG about the Inquisition's seventh doomed expedition
                sent to reclaim a holy capital swallowed by corruption
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Team */}
      <section>
        <FadeInSection className="flex flex-col gap-10">
          <div className="relative -translate-y-50 w-full flex justify-center h-75 md:h-80">
            <Image
              className="absolute h-75 md:h-150 w-fit z-100 hover:opacit-75 duration-300 cursor-pointer"
              src={"/team/Danidu.png"}
              width={1138}
              height={549}
              alt=""
            />
            <Image
              className="absolute h-75 md:h-150 w-fit z-100 hover:opacit-75 duration-300 cursor-pointer"
              src={"/team/Spartan.png"}
              width={1138}
              height={549}
              alt=""
            />
            <Image
              className="absolute h-75 md:h-150 w-fit z-100 hover:opacit-75 duration-300 cursor-pointer"
              src={"/team/Win.png"}
              width={1138}
              height={549}
              alt=""
            />
            <Image
              className="absolute h-75 md:h-150 w-fit z-100 hover:opacit-75 duration-300 cursor-pointer"
              src={"/team/Akeil.png"}
              width={1138}
              height={549}
              alt=""
            />
            <Image
              className="absolute h-75 md:h-150 w-fit z-100 hover:opacit-75 duration-300 cursor-pointer"
              src={"/team/Lin.png"}
              width={1138}
              height={549}
              alt=""
            />
            <Image
              className="absolute h-75 md:h-150 w-fit z-100 hover:opacit-75 duration-300 cursor-pointer"
              src={"/team/Hasal.png"}
              width={1138}
              height={549}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-10 w-[80%] m-auto -translate-y-75 md:translate-y-0">
            <div className="text-center  md:-translate-y-25">
              <h1 className="big_head">Meet the Isle Outlaws</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 m-auto gap-10">
              <div>
                <h2 className="sub_head">Akeil Mohideen</h2>
                <h3 className="sub_head_sm text-red-700">
                  Chief Executive Officer
                </h3>
              </div>
              <div>
                <h2 className="sub_head">Win Khant Kyi</h2>
                <h3 className="sub_head_sm text-red-700">
                  Chief Operational & Creative Officer
                </h3>
              </div>
              <div>
                <h2 className="sub_head">Lin Kyaw Khant</h2>
                <h3 className="sub_head_sm text-red-700">
                  Chief Technical Officer
                </h3>
              </div>
              <div>
                <h2 className="sub_head">Danidu Dileka Perera</h2>
                <h3 className="sub_head_sm text-red-700">3D Artist</h3>
              </div>
              <div>
                <h2 className="sub_head">Hasal Nauranna</h2>
                <h3 className="sub_head_sm text-red-700">2D Artist</h3>
              </div>
              <div>
                <h2 className="sub_head">Spartan138</h2>
                <h3 className="sub_head_sm text-red-700">Music composer</h3>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Behind the Fog - Repeat */}
      <BehindTheFog />

      {/* Get in Touch - Repeat */}
      <GetInTouch />
    </main>
  );
}
