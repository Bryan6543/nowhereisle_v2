import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/hooks/FadeInSection";
import HeroSlider from "@/components/dashboard/HeroSlider";

async function getBlogs() {
  const { data } = await supabase
    .from("blogs")
    .select("id, title, thumbnail_url, created_at")
    .order("created_at", { ascending: false })
    .limit(3);

  return data || [];
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="w-[min(1200px,92%)] mx-auto flex flex-col gap-14 py-10 md:py-16">
      <FadeInSection className="flex flex-col gap-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Studio World</p>
        <h1 className="dashboard_head">A World in the Making</h1>
        <HeroSlider />
      </FadeInSection>

      <FadeInSection className="flex flex-col gap-4 max-w-3xl">
        <h2 className="dashboard_head">Into the Lost Holy Capital</h2>
        <p className="lora_body text-zinc-300">
          Lead a desperate Inquisition force through corrupted lands to reclaim
          the fallen city of Maylon. Make hard choices. Sacrifice your squad.
          Uncover ancient sigils that twist reality itself.
        </p>
        <Image
          src="/icons/steam_wishlist.png"
          width={160}
          height={80}
          alt="Steam wishlist"
          className="w-40 h-20 object-contain opacity-40"
        />
      </FadeInSection>

      <FadeInSection className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="dashboard_head">Latest Lore Wisdom</h2>
          <Link
            href="/isle_dashboard/lore_wisdom"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            View more →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog: any) => (
            <Link
              key={blog.id}
              href={`/isle_dashboard/lore_wisdom/blog/${blog.id}`}
              className="group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition-all"
            >
              <div className="relative h-48 bg-zinc-900">
                {blog.thumbnail_url && (
                  <Image
                    src={blog.thumbnail_url}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold group-hover:text-red-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-2">
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </FadeInSection>
    </main>
  );
}