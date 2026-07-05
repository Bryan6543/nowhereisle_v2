import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoWhere Isle - Home",
  description: "Discover the mysterious NoWhere Isle – A beautiful island adventure awaits.",
  openGraph: {
    title: "NoWhere Isle",
    description: "Discover the mysterious NoWhere Isle...",
    images: [{ url: "/opengraph-image.jpg" }],
  },
};

export default function Games() {
  return (
    <>
      <div>
        <h1>font-families</h1>
        <ul>
          <li className="font-1 text-9xl">Keania ONse</li>
        </ul>
      </div>
    </>
  );
}
