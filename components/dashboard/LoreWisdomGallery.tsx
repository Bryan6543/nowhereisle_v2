"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BlogCard = {
  id: string;
  title: string;
  thumbnail_url?: string | null;
  created_at: string;
  category_id?: number | null;
  category_name?: string | null;
};

export default function LoreWisdomGallery({
  blogs,
  categories,
}: {
  blogs: BlogCard[];
  categories: string[];
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const category = blog.category_name || "Uncategorized";

      const matchCategory =
        selectedCategory === "All" || category === selectedCategory;

      const matchSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [blogs, search, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Search + count */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lore by title or category..."
          className="w-full md:max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 outline-none focus:border-zinc-600"
        />
        <p className="text-sm text-zinc-500">
          {filtered.length} post{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* Categories */}
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
          No lore found. Try another search or category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog) => (
            <Link
              key={blog.id}
              href={`/isle_dashboard/lore_wisdom/blog/${blog.id}`}
              className="group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition-all"
            >
              <div className="relative h-52 bg-zinc-900">
                {blog.thumbnail_url ? (
                  <Image
                    src={blog.thumbnail_url}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-sm">
                    No image
                  </div>
                )}
              </div>

              <div className="p-5">
                {blog.category_name && (
                  <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                    {blog.category_name}
                  </p>
                )}
                <h2 className="text-lg font-semibold group-hover:text-red-400 transition-colors">
                  {blog.title}
                </h2>
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
      )}
    </div>
  );
}