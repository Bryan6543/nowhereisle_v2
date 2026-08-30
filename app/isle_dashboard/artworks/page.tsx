import { supabase } from "@/lib/supabase/client";
import HeroSlider from "@/components/dashboard/HeroSlider";
import FadeInSection from "@/hooks/FadeInSection";
import ArtworksGallery from "@/components/dashboard/ArtworksGallery";
import type { Artwork, ArtworkCategory } from "@/types";

export const dynamic = 'force-dynamic'

async function getCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from("artwork_categories")
    .select("name")
    .order("name");

  if (error) {
    console.error("getCategories error:", error);
    return ["All"];
  }

  const names = (data as ArtworkCategory[] | null)?.map((c) => c.name) || [];
  return ["All", ...names];
}

async function getArtworks(): Promise<Artwork[]> {
  const { data, error } = await supabase
    .from("artworks")
    .select("id, title, description, image_url, category")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getArtworks error:", error);
    return [];
  }

  return (data as Artwork[]) || [];
}

export default async function ArtworksPage() {
  const [categories, artworks] = await Promise.all([
    getCategories(),
    getArtworks(),
  ]);

  return (
    <main className="w-[min(1200px,92%)] mx-auto flex flex-col gap-10 py-10 md:py-16">
      <FadeInSection className="flex flex-col gap-5">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-2">
            Gallery
          </p>
          <h1 className="dashboard_head">Artworks</h1>
          <p className="text-zinc-400 mt-2 max-w-2xl">
            Concept art, environments, and worlds from Nowhere Isle. Search, filter, and click any piece to view it larger.
          </p>
        </div>
        <HeroSlider />
      </FadeInSection>

      <FadeInSection>
        <ArtworksGallery artworks={artworks} categories={categories} />
      </FadeInSection>
    </main>
  );
}