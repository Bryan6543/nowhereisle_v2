import { supabase } from "@/lib/supabase/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/hooks/FadeInSection";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: blog } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (!blog) notFound();

  return (
    <main className="w-[min(900px,92%)] mx-auto py-10 md:py-16">
      <FadeInSection>
        <Link
          href="/isle_dashboard/lore_wisdom"
          className="text-sm text-zinc-500 hover:text-white transition"
        >
          ← Back to Lore Wisdom
        </Link>

        {blog.thumbnail_url && (
          <div className="relative w-full h-[40vh] md:h-[50vh] mt-6 mb-10 rounded-3xl overflow-hidden border border-zinc-800">
            <Image
              src={blog.thumbnail_url}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="dashboard_head font-bold">{blog.title}</h1>
        <p className="text-zinc-500 mt-3 mb-10">
          {new Date(blog.created_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-a:text-red-400"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </FadeInSection>
    </main>
  );
}