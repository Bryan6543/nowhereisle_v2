import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "../../../hooks/FadeInSection";

async function getBlogs() {
  const { data } = await supabase
    .from("blogs")
    .select("id, title, thumbnail_url, created_at")
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function page() {
  const blogs = await getBlogs();
  return (
    <main>
      <div className="w-[90%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <FadeInSection className="flex flex-col gap-5">
          <div>
            <h1 className="dashboard_head">Lore Wisdom</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-[90%]">
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
                    <h2 className="orange_subhead mb-3 group-hover:text-red-400 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="orange_body">Small Sub Text of some kind of description takes up to 2 lines max</p>
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
