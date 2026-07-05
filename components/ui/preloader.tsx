"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { preloadAllAssets } from "../../lib/preloadAssets";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const loadAssets = async () => {
      try {
        // Fake smooth progress
        interval = setInterval(() => {
          setProgress((p) => Math.min(p + Math.random() * 15, 88));
        }, 90);

        // Real asset preloading
        await preloadAllAssets();

        // Finish loading
        clearInterval(interval);
        gsap.to(
          { value: progress },
          {
            value: 100,
            duration: 1,
            onUpdate: function () {
              setProgress(Math.round(this.targets()[0].value));
            },
            onComplete: () => {
              setTimeout(() => {
                gsap.to(".preloader", {
                  opacity: 0,
                  duration: 0.9,
                  onComplete: () => {
                    setIsComplete(true);
                    document.dispatchEvent(new Event("preloaderComplete"));
                  },
                });
              }, 300);
            },
          },
        );
      } catch (err) {
        console.error(err);
        setProgress(100);
      }
    };

    loadAssets();

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <div className="preloader fixed inset-0 z-9000 flex items-center justify-center bg-[#0a0a0a] transition-opacity">
      {/* Red Tree Background Image */}
      <Image
        className="fixed h-screen z-100 object-cover object-right bottom-0 left-0 -translate-x-1/2 opacity-20"
        src={"/red-tree.png"}
        width={1787}
        height={1597}
        priority
        alt="red-tree"
      />
      {/* WOLF Background Image */}
      <Image
        className="fixed h-[50vh] z-100 object-cover object-left bottom-0 right-0 translate-x-1/2 opacity-20 "
        src={"/wolf.png"}
        width={941}
        height={446}
        priority
        alt="wolf"
      />
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
        radial-gradient(
          circle at center,
          rgba(244, 63, 94, 0.12) 0%,
          rgba(244, 63, 94, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
        }}
      />
      {/* Body of the Preloader */}
      <div className="text-center relative z-200 flex flex-col justify-center items-center space-y-5">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-10">
          <Image
            priority
            src={"/logo.png"}
            width={613}
            height={500}
            alt="nowhere_isle_logo"
            className="max-w-[clamp(200px,8vw,400px)] h-auto"
          />
          <h1 className="pre_loader_head text-center">
            NOWHERE ISLE <br /> GAME STUDIO
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-5 bg-zinc-800 mx-auto rounded overflow-hidden mb-4">
          <div
            className="h-full bg-linear-to-r from-[#52040C] to-[#97232e] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className={`font-keania text-2xl text-white tracking-widest`}>
          {progress}%
        </div>

        <div className="text-zinc-500 font-lilex text-sm mt-2 tracking-[3px]">
          ENTETERING ISLE ...
        </div>
      </div>
    </div>
  );
}
