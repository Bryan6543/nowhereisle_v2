"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Artwork } from "@/types";

export default function ArtworksGallery({
  artworks,
  categories,
}: {
  artworks: Artwork[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<Artwork | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return artworks.filter((art) => {
      const matchCategory =
        selectedCategory === "All" || art.category === selectedCategory;
      const matchSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        (art.description || "").toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [artworks, selectedCategory, search]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search artworks..."
          className="w-full md:max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 outline-none focus:border-zinc-600"
        />

        <p className="text-sm text-zinc-500">
          {filtered.length} artwork{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              selectedCategory === cat
                ? "bg-white text-black"
                : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">
          No artworks found. Try another search or category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((art) => (
            <button
              key={art.id}
              onClick={() => setActive(art)}
              className="group text-left rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={art.image_url}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white line-clamp-1">{art.title}</h3>
                <p className="text-xs text-zinc-500 mt-1">{art.category}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/70 text-sm"
            >
              Close
            </button>

            <div className="relative w-full h-[50vh] md:h-[65vh] bg-black">
              <Image
                src={active.image_url}
                alt={active.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="p-5 md:p-6">
              <h2 className="text-2xl font-semibold">{active.title}</h2>
              <p className="text-zinc-500 text-sm mt-1">{active.category}</p>
              {active.description && (
                <p className="text-zinc-300 mt-3 leading-relaxed">
                  {active.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}