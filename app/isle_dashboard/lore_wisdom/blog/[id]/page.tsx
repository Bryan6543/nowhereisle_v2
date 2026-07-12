import { supabase } from "../../../../../lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import FadeInSection from "../../../../../hooks/FadeInSection";

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
    <FadeInSection className="w-[90%] m-auto flex flex-col py-[clamp(50px,1vh,240px)]">
      {blog.thumbnail_url && (
        <FadeInSection className="relative w-full h-[50vh] mb-12 rounded-3xl overflow-hidden">
          <Image
            src={blog.thumbnail_url}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </FadeInSection>
      )}

      <h1 className="dashboard_head font-bold">{blog.title}</h1>
      <p className="text-zinc-400 mb-12">
        {new Date(blog.created_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <div
        className="prose prose-lg prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </FadeInSection>
  );
}
