"use client"

import FadeInSection from "@/hooks/FadeInSection"

export default function GetInTouch() {
  return (
    <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <div className="flex flex-col justify-center items-center gap-10">
            <FadeInSection className="flex flex-col justify-center items-center gap-5">
              <h1 className="head text-center">STEP IN TO THE MIST</h1>
              <p className="body_text md:w-xl text-center">
                Receive rare updates, behind-the-scenes lore, and early access
                to new worlds.
              </p>
            </FadeInSection>
            <FadeInSection className="flex flex-col md:flex-row gap-10 items-center">
              <input
                type="email"
                name=""
                id=""
                className="border-white/50 bg-white/10 border-4 rounded-2xl h-15 w-full md:w-90 px-4 body-text transition-all duration-300 hover:bg-black/50"
              />
              <button className="body_text bg-[#411015] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer py-5 px-8 rounded-2xl">
                JOIN
              </button>
            </FadeInSection>
          </div>
          <div>{/* Newsletter Field and Join Button */}</div>
        </div>
      </section>
  )
}
