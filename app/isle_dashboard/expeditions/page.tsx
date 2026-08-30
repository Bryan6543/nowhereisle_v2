"use client";

import Image from "next/image";
import FadeInSection from "@/hooks/FadeInSection";

const characters = [
  {
    name: "Mixama",
    role: "Initiate",
    image: "/chars/initiate_mixamo.png",
    description:
      "A sworn Inquisition fighter sent ahead to break the enemy line in the name of Maylon.",
  },
  {
    name: "Cadet Mixamo",
    role: "Cadet",
    image: "/chars/cadet_mixamo.png",
    description:
      "Young, untested, and already marked by the fog. Still believes the capital can be saved.",
  },
  {
    name: "Vicar Mixamo",
    role: "Vicar",
    image: "/chars/vicar_mixamo.png",
    description:
      "Carrier of forbidden rites. Keeps the squad alive when faith alone is not enough.",
  },
];

export default function ExpeditionsPage() {
  return (
    <main className="w-[min(1200px,92%)] mx-auto flex flex-col gap-16 py-10 md:py-16">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden rounded-3xl border border-zinc-800">
        <video
          src="/sigil_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-3">
          <h1 className="massive_bhead">SIGIL TACTICS</h1>
          <h2 className="massive_shead opacity-80">LOST MAYLON</h2>
          <p className="sub_head_sm text-zinc-300">
            A brutal squad-based tactics RPG
          </p>
        </div>
      </section>

      {/* Lore intro */}
      <section className="grid lg:grid-cols-2 gap-8 items-start">
        <FadeInSection className="space-y-4">
          <h2 className="dashboard_head">The Lost Holy Capital</h2>
          <p className="text-red-500 font-semibold">
            A Brief Glimpse Into the Lore
          </p>
          <p className="lora_body text-zinc-300 leading-relaxed max-w-2xl">
            In the year 1472 of the Third Reckoning, the Holy Capital of Maylon
            fell silent. No messengers returned. No ravens flew from its towers.
            The city simply... vanished into the fog.
          </p>
          <p className="lora_body text-zinc-300 leading-relaxed max-w-2xl">
            Decades later, the Inquisition sends its most expendable force — you
            — to reclaim what was lost. Armed with forbidden sigils and dying
            faith, you must navigate a land where reality frays at the edges.
          </p>
        </FadeInSection>

        <FadeInSection className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 md:p-10">
          <p className="text-red-500 font-semibold mb-3">The Final Edict</p>
          <p className="lora_body text-zinc-200 leading-relaxed">
            “Enter the fog. Burn what is corrupted. Die with honor if you must.
            But bring back the Heart of Maylon or do not return at all.”
          </p>
          <p className="text-zinc-500 mt-5">— High Inquisitor Serath Veyra</p>
        </FadeInSection>
      </section>

      {/* World in the making */}
      <section className="space-y-10">
        <FadeInSection className="space-y-3 max-w-3xl">
          <h2 className="dashboard_head">A World In The Making</h2>
          <p className="orange_body text-zinc-300">
            Lead the seventh doomed Inquisition expedition into corrupted
            territory and fight to reclaim the Lost Holy Capital of Maylon.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5">
          <FadeInSection direction="left">
            <Image
              src="/img-3.png"
              width={1000}
              height={1000}
              alt="World concept art"
              className="w-full h-auto rounded-3xl shadow-2xl border border-zinc-800 object-cover"
            />
          </FadeInSection>
          <FadeInSection direction="right">
            <Image
              src="/img-2.png"
              width={1000}
              height={1000}
              alt="Expedition concept art"
              className="w-full h-auto rounded-3xl shadow-2xl border border-zinc-800 object-cover"
            />
          </FadeInSection>
        </div>

        <FadeInSection className="flex flex-col gap-6">
          <div>
            <h3 className="massive_shead">SIGIL TACTICS</h3>
            <h3 className="massive_bhead">LOST MAYLON</h3>
          </div>
          <div className="flex items-center gap-6 opacity-80">
            <Image
              src="/icons/kick.png"
              alt="Kickstarter"
              width={71}
              height={79}
              className="w-14 md:w-[71px] h-auto"
            />
            <Image
              src="/icons/steam.png"
              alt="Steam"
              width={85}
              height={85}
              className="w-14 md:w-[71px] h-auto"
            />
          </div>
        </FadeInSection>
      </section>

      {/* Characters */}
      <section className="space-y-8">
        <FadeInSection>
          <h2 className="dashboard_head max-w-3xl">
            Meet the souls you will lead into darkness
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <FadeInSection
              key={character.name}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 overflow-hidden hover:border-zinc-600 transition-all"
            >
              <div className="relative h-72 bg-zinc-900">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                  {character.role}
                </p>
                <h3 className="text-xl font-semibold">{character.name}</h3>
                <p className="lora_body text-sm text-zinc-400 leading-relaxed">
                  {character.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </main>
  );
}