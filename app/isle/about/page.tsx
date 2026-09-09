"use client";

import { useEffect } from "react";

import Image from "next/image";
import FadeInSection from "../../../hooks/FadeInSection";
import BehindTheFog from "../../../components/multiple_use/BehindTheFog";
import GetInTouch from "../../../components/multiple_use/GetInTouch";
import { useLenis } from "../../../hooks/SmoothScrollProvider";

export default function page() {
  const { enableSnap, disableSnap } = useLenis();

  useEffect(() => {
    // wait a tick so all sections exist in the DOM
    const id = setTimeout(() => {
      enableSnap();
    }, 100);

    return () => {
      clearTimeout(id);
      disableSnap();
    };
  }, [enableSnap, disableSnap]);
  return (
    <main>
      {/* Hero */}
      <section
        data-snap
        className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden"
      >
        <Image
          src={"/img-4.png"}
          width={5120}
          height={2880}
          alt=""
          className="object-cover h-full absolute z-0 scale-animation-hero"
        />
        <FadeInSection className="absolute w-full h-full flex flex-col justify-center items-center gap- z-20 bg-black/40 text-center">
          <h2 className="body_text text-red-800 font-bold">ESTABLISHED 2025</h2>
          <h1 className="big_head">NOWHERE ISLE STUDIO</h1>
          <p className="body_text">
            A SMALL STUDIO WHERE SMALL IDEAS FIND THEIR HOME.
          </p>
        </FadeInSection>
      </section>
      {/* Mission / Vission */}
      <section data-snap className="h-fit w-full">
        <div className="w-[80%] m-auto gap-10 py-[clamp(50px,1vh,240px)] font_lilita grid grid-cols-1 md:grid-cols-2">
          <FadeInSection
            direction="left"
            className="flex flex-col gap-4 w-[90%]"
          >
            <h2 className="text-[clamp(20px,7px,16px)] text-red-800">
              Our Mission
            </h2>
            <p className="text-[clamp(32px,7px,20px)]">
              TO BECOME SRI LANKA'S FIRST GLOBALLY SUCCESSFUL GAME STUDIO, AND
              TO GET THERE BY MAKING GAMES WE WOULD PLAY OURSELVES.
            </p>
          </FadeInSection>
          <FadeInSection
            direction="right"
            className="flex flex-col gap-4 w-[90%]"
          >
            <h2 className="text-[clamp(20px,7px,16px)] text-red-800">
              Our Vision
            </h2>
            <p className="text-[clamp(32px,7px,20px)]">
              FULLY INDEPENDENT WITH NO COMPROMISE OVER CREATIVE DECISIONS TO CREATE
              WORLDS WE WANT TO PLAY.
            </p>
          </FadeInSection>
        </div>
      </section>
      {/* Our Story */}
      <section data-snap className=" py-[clamp(50px,1vh,240px)]">
        <FadeInSection className="bg-[#313131] pb-50">
          <h1 className="big_head translate-x-[10%] translate-y-[-50%] ">
            OUR STORY
          </h1>
          <div className="w-[80%] m-auto lora_body  flex flex-col gap-5">
            <div className="w-[80%] m-auto flex flex-col gap-10 font_quot">
              <div className="flex flex-col gap-2">
                <h3 className="sub_head_sm text-red-700">
                  How did the six of you end up in a room together?
                </h3>
              <p>
                  Three friends who love playing games and had nothing better to
                  do with our lives: Win Khant Kyi, Lin Kyaw Khant and
                  Akeil Mohideen. The rest we picked up along the way in Colombo.
              </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="sub_head_sm text-red-700">
                  When did it become a studio?
                </h3>
                <p>When we finished our degrees and saw the job market...</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="sub_head_sm text-red-700">Why &quot;Nowhere Isle&quot;?</h3>
              <p>
                  Nowhere Isle is not a place. It is the state we are in when we
                  hang out together, hidden from the world and the isolation we
                  feel in it.
              </p>
            </div>
              <div className="flex flex-col gap-2">
                <h3 className="sub_head_sm text-red-700">
                  What is the studio doing this year?
                </h3>
                <p>Road to Early Access, road to the heart of Old Maylon.</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
      {/* Team */}
      <section data-snap>
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
                <h3 className="sub_head_sm text-red-700">Music Composer</h3>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
      {/* Behind the Fog - Repeat */}\
      <div data-snap className="h-fit w-full">
        <BehindTheFog />
      </div>
      {/* Get in Touch - Repeat */}
      <div data-snap className="h-fit w-full">
        <GetInTouch />
      </div>
    </main>
  );
}
