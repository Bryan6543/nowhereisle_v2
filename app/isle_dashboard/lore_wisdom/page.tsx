import { supabase } from "@/lib/supabase/client";
import FadeInSection from "@/hooks/FadeInSection";
import LoreWisdomGallery from "@/components/dashboard/LoreWisdomGallery";

type BlogCard = {
  id: string;
  title: string;
  thumbnail_url?: string | null;
  created_at: string;
  category_id?: number | null;
  category_name?: string | null;
};

type BlogCategory = {
  id: number;
  name: string;
};

export const dynamic = 'force-dynamic'

async function getCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("id, name")
    .order("name");

  if (error) {
    console.error("getCategories error:", error);
    return ["All"];
  }

  const names = ((data as BlogCategory[]) || []).map((c) => c.name);
  return ["All", ...names];
}

async function getBlogs(): Promise<BlogCard[]> {
  // Try with category join first
  const { data, error } = await supabase
    .from("blogs")
    .select("id, title, thumbnail_url, created_at, category_id, blog_categories(name)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getBlogs join error:", error);

    // Fallback without join
    const fallback = await supabase
      .from("blogs")
      .select("id, title, thumbnail_url, created_at, category_id")
      .order("created_at", { ascending: false });

    if (fallback.error) {
      console.error(fallback.error);
      return [];
    }

    return (fallback.data as BlogCard[]) || [];
  }

  return (data || []).map((blog: any) => ({
    id: blog.id,
    title: blog.title,
    thumbnail_url: blog.thumbnail_url,
    created_at: blog.created_at,
    category_id: blog.category_id,
    category_name: blog.blog_categories?.name || null,
  }));
}

export default async function LoreWisdomPage() {
  const [categories, blogs] = await Promise.all([getCategories(), getBlogs()]);

  return (
    <main className="w-[min(1200px,92%)] mx-auto py-10 md:py-16">
      <FadeInSection className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-2">
          Archive
        </p>
        <h1 className="dashboard_head">Lore Wisdom</h1>
        <p className="text-zinc-400 mt-2 max-w-2xl">
          Stories, notes, and fragments from the world of Nowhere Isle.
        </p>
      </FadeInSection>

      <FadeInSection>
        <LoreWisdomGallery blogs={blogs} categories={categories} />
      </FadeInSection>
    </main>
  );
}