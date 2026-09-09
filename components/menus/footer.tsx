"use client"

import Image from "next/image";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="flex flex-col">
      <div className="w-[80%] m-auto flex flex-col xl:flex-row xl:justify-between items-center gap-10 py-[clamp(50px,1vh,240px)]">
        {/* Section 01 */}
        <div className="flex flex-col items-center gap-2.5">
          <Image src={"/logo2.png"} width={484} height={236} alt="" />
          <p className="text-center md:text-left body-text opacity-70">
            A small game studio in Colombo, Sri Lanka.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Section 02 */}
          <div className="flex flex-col gap-5">
            <p className="body-text font-bold">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              <Link href="/isle_dashboard">
                <li>Inside the Isle</li>
              </Link>
              <Link href="/isle/community">
                <li>Community</li>
              </Link>
              <Link href="/isle/support">
                <li>Support</li>
              </Link>
              <Link href="/isle/about">
                <li>About</li>
              </Link>
            </ul>
          </div>
          {/* Section 03 - Follow */}
          <div className="flex flex-col gap-5">
            <p className="body-text font-bold">Follow</p>
            <ul className="flex flex-col gap-2.5 opacity-70">
              <li><a href="https://x.com/NowhereIsleHQ" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://bsky.app/profile/nowhereislestudio.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky</a></li>
              <li><a href="https://www.youtube.com/@NowhereIsleStudio" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://discord.gg/Rp5R97JAPf" target="_blank" rel="noopener noreferrer">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer-bottom */}
      <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <hr />
        <div className="flex flex-col md:flex-row md:justify-between gap-7 text-xs">
          <div className="flex justify-center items-center">
            <p className="opacity-70 text-center">
              © {new Date().getFullYear()} Nowhere Isle Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
