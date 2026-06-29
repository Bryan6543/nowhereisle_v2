import Image from "next/image";
import React from "react";

export default function footer() {
  return (
    <footer className="flex flex-col">
      <div className="w-[80%] m-auto flex flex-col xl:flex-row xl:justify-between items-center gap-10 py-[clamp(50px,1vh,240px)]">
        {/* Section 01 */}
        <div className="flex flex-col items-center gap-2.5">
          <Image src={"/logo2.png"} width={484} height={236} alt="" />
          <p className="text-center md:text-left body-text opacity-70">
            Crafting atmospheric worlds and unforgettable stories.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Section 02 */}
          <div className="flex flex-col gap-5">
            <p className="body-text font-bold">Quick Links</p>
            <ul className="flex flex-col gap-2.5 opacity-70">
              <li>Game: Sigil Tactics: Lost Maylon</li>
              <li>Community</li>
              <li>Support</li>
              <li>About</li>
            </ul>
          </div>
          {/* Section 03 */}
          <div className="flex flex-col gap-5">
            <p className="body-text font-bold">Community</p>
            <ul className="flex flex-col gap-2.5 opacity-70">
              <li>Community HUB</li>
              <li>Fan Art Gallery</li>
              <li>Feedback Forum</li>
            </ul>
          </div>
          {/* Section 04 */}
          <div className="flex flex-col gap-5">
            <p className="body-text font-bold">Community</p>
            <ul className="flex gap-2.5 opacity-70">
              <li>X</li>
              <li>In</li>
              <li>YT</li>
              <li>DS</li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer-bottom */}
      <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <hr />
        <div className="flex flex-col md:flex-row md:justify-between gap-7 text-xs">
          <div className="flex justify-between opacity-70 gap-5">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="opacity-70 text-center">
              © 2026 NowhereIsle Studios. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
