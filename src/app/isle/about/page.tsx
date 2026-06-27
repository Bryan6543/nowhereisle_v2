import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      {/* Hero */}
      <div>
        <h2>WE ARE LISTENING</h2>
        <h1>THE ISLE AWAITS YOU</h1>
        <p>Every message helps us make the isle better.</p>
      </div>

      {/* Mission / Vission */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h2>Our Mission</h2>
            <p>
              TO BECOME SRI LANKA'S FIRST GLOBALLY SUCCESSFUL GAME STUDIO AND TO
              BE BEST AT WHAT WE DO. UNFORGETTABLE STORYTELLING AND DEEPLY
              ENGAGING GAMEPLAY.
            </p>
            <p>A SMALL STUDIO WHERE SMALL IDEAS FIND THEIR HOME.</p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>
              FULLY INDEPEND WITH NO COMPRISE OVER CREATIVE DECISION TO CREATE
              WORLDS WE WANT TO PLAY.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <h1>Our Story</h1>
          <div>
            <p>
              Nowhere Isle Studios is an independent game studio that dares to
              venture into the unknown strange worlds of the mind, crafting
              atmospheric strategy games filled with strong identity, intricate
              lore, meaningful tactics, and underlying mystery.
            </p>
            <p>
              Our current project is Sigil Tactics: Lost Maylon, a brutal
              tactical RPG about the Inquisition's seventh doomed expedition
              sent to reclaim a holy capital swallowed by corruption
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <Image src={"/"} width={1000} height={1000} alt="" />
            <Image src={"/"} width={1000} height={1000} alt="" />
            <Image src={"/"} width={1000} height={1000} alt="" />
            <Image src={"/"} width={1000} height={1000} alt="" />
            <Image src={"/"} width={1000} height={1000} alt="" />
            <Image src={"/"} width={1000} height={1000} alt="" />
          </div>
          <div>
            <h1>Meet the Isle Outlaws</h1>
          </div>
          <div>
            <div>
              <h2>Akeil Mohideen</h2>
              <h3>Chief Executive Officer</h3>
            </div>
            <div>
              <h2>Win Khant Kyi</h2>
              <h3>Chief Operational & Creative Officer</h3>
            </div>
            <div>
              <h2>Lin Kyaw Khant</h2>
              <h3>Chief Technical Officer</h3>
            </div>
            <div>
              <h2>Danidu Dileka Perera</h2>
              <h3>3D Artist</h3>
            </div>
            <div>
              <h2>Hasal Nauranna</h2>
              <h3>2D Artist</h3>
            </div>
            <div>
              <h2>Spartan138</h2>
              <h3>Music composer</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Fog - Repeat */}
      <section></section>

      {/* Get in Touch - Repeat */}
      <section></section>
    </main>
  );
}
