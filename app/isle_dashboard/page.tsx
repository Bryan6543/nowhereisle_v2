import { supabase } from "../../lib/supabase";

import FadeInSection from "../../hooks/FadeInSection";

async function getBlogs() {
  const { data } = await supabase
    .from("blogs")
    .select("id, title, thumbnail_url, created_at")
    .order("created_at", { ascending: false })
    .limit(3);

  return data || [];
}

import Image from "next/image";

import Link from "next/link";
import HeroSlider from "../../components/dashboard/HeroSlider";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main>
      <div className="w-[90%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <FadeInSection className="flex flex-col gap-5">
          <h1 className="dashboard_head">A WORLD IN THE MAKING</h1>
          <div>
            <HeroSlider />
          </div>
        </FadeInSection>
        <FadeInSection className="flex flex-col gap-4">
          <h1 className="dashboard_head">Into the Lost Holy Capital</h1>
          <p className="lora_body max-w-4xl">
            Lead a desperate Inquisition force through corrupted lands to
            reclaim the fallen city of Maylon. Make hard choices. Sacrifice your
            squad. Uncover ancient sigils that twist reality itself.
          </p>
          <Image
            src={"/icons/steam_wishlist.png"}
            width={100}
            height={100}
            alt=""
            className="w-40 h-20 object-contain opacity-30"
          />
        </FadeInSection>

        <FadeInSection className="flex flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="dashboard_head">Latest Lore Wisdom</h1>
            <Link
              href={"/isle_dashboard/lore_wisdom"}
              className="pr-10 hover:opacity-60 duration-300 transition-all"
            >
              View More
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-5 w-[80%]">
            {blogs.map((blog: any) => (
              <Link
                key={blog.id}
                href={`/isle_dashboard/lore_wisdom/blog/${blog.id}`}
                className="group"
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
                  {blog.thumbnail_url && (
                    <div className="relative h-64">
                      <Image
                        src={blog.thumbnail_url}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col gap-1">
                    <h2 className="orange_subhead mb-3 group-hover:text-green-400 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="orange_body">
                      Small Sub Text of some kind of description takes up to 2
                      lines max
                    </p>
                    <p className="orange_body opacity-50">
                      {new Date(blog.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
