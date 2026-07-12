"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import HeroSlider from "../../../components/dashboard/HeroSlider";


type Artwork = {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  category: string;
};

export default function ArtworksPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const backendUrl = "http://localhost:3000"; // Change later for production

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/categories`);
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      const catNames = data.map((c: any) => c.name);
      setCategories(["All", ...catNames]);
    } catch (err) {
      console.error(err);
      setCategories(["All"]);
    }
  };

  const fetchArtworks = async () => {
    setLoading(true);
    setError("");
    try {
      const url = selectedCategory === "All"
        ? `${backendUrl}/api/artworks`
        : `${backendUrl}/api/artworks?category=${encodeURIComponent(selectedCategory)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load artworks");

      const data = await res.json();
      setArtworks(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to load artworks. Please try again.");
      setArtworks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchArtworks();
  }, [selectedCategory]);

  return (
    <main className="w-[90%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)] h-auto">
      <section className="flex flex-col gap-5">
        <h1 className="dashboard_head">ART WORKS</h1>
        <HeroSlider />
      </section>

      <section className="flex flex-col gap-5">
        <h1 className="dashboard_head">Artworks from concept to reality</h1>

        <div className="flex flex-wrap gap-1 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 lora_body font-semibold text-black transition-all ${
                selectedCategory === cat ? "bg-white" : "bg-gray-100/80 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center py-12 text-lg">Loading artworks...</p>
        ) : error ? (
          <p className="text-center py-12 text-red-600">{error}</p>
        ) : artworks.length === 0 ? (
          <p className="text-center py-12 text-lg">No artworks found in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artworks.map((art) => (
              <div key={art.id} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all">
                <Image
                  src={art.image_url}
                  alt={art.title}
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-5">
                  <h3 className="text-white text-lg font-semibold">{art.title}</h3>
                  <p className="text-gray-500 text-sm">{art.description}</p>
                  <p className="text-gray-300 text-sm pt-2">{art.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}