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

      {/* Find your way in */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <div>
              <Image src={"/"} width={300} height={300} alt="" />
            </div>
            <h2>DISCORD</h2>
            <p>
              MAIN HUB FOR DISCUSSIONS. DEV UPDATES. LORE SHARING AND CHILL
              VOICE CHATS.
            </p>
          </div>
          <div>
            <div>
              <Image src={"/"} width={300} height={300} alt="" />
            </div>
            <h2>SOCIALS</h2>
            <p>
              MAIN HUB FOR DISCUSSIONS. DEV UPDATES. LORE SHARING AND CHILL
              VOICE CHATS.
            </p>
          </div>
          <div>
            <div>
              <Image src={"/"} width={300} height={300} alt="" />
            </div>
            <h2>YOUTUBE</h2>
            <p>
              MAIN HUB FOR DISCUSSIONS. DEV UPDATES. LORE SHARING AND CHILL
              VOICE CHATS.
            </p>
          </div>
        </div>
      </section>

      {/* Why Wanderers Join us */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1>WHY WANDERERS JOIN US</h1>
          </div>
          <div>
            <h2>DEEP LORE DISCUSSIONS</h2>
            <p>
              Talk about theories, hidden meanings, and the world we are slowly
              revealing.
            </p>
          </div>
          <div>
            <h2>SHARE YOUR CREATIONS</h2>
            <p>
              Post your fan art, music, stories, or theories. All creativity is
              welcomed.
            </p>
          </div>
          <div>
            <h2>A CALM CORNER</h2>
            <p>
              Talk about theories, hidden meanings, and the world we are slowly
              revealing.
            </p>
          </div>
        </div>
      </section>

      {/* Voices from the fog */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1>VOICES FROM THE FOG</h1>
          </div>
          <div>
            <div>
              <p>
                "Finally found a community that feels like home. The lore
                discussions here are next level."
              </p>
              <p>U/FOGWALKER87</p>
            </div>
            <div>
              <p>
                "The atmosphere in this community matches the games perfectly.
                It's peaceful yet full of wonder."
              </p>
              <p>— ECHOES_IN_THE_MIST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to step in to the mist - Join Community */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div>
            <h1>Ready to Step into the Mist?</h1>
            <p>
              No pressure. No noise. Just fellow souls who love strange stories.
            </p>
          </div>
          <div>
            <button>JOIN THE COMMUNITY</button>
          </div>
        </div>
      </section>
    </main>
  );
}
