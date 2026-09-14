"use client";

import { useState } from "react";

export default function ShareBlogButton({
  blogId,
  title,
}: {
  blogId: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);
  const url = `https://www.nowhereisle.com/isle_dashboard/lore_wisdom/blog/${blogId}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled
      }
    }
    copyLink();
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button
        type="button"
        onClick={share}
        className="px-4 py-2 rounded-xl border border-zinc-700 hover:border-white text-sm"
      >
        Share
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="px-4 py-2 rounded-xl border border-zinc-700 hover:border-white text-sm"
      >
        {copied ? "Copied" : "Copy link"}
      </button>
      <input
        readOnly
        value={url}
        onClick={(e) => e.currentTarget.select()}
        className="flex-1 min-w-[220px] bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-400"
      />
    </div>
  );
}