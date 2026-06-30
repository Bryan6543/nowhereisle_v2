import type { Metadata } from "next";
import { Keania_One, Lilex, Lilita_One, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Preloader from "@/components/ui/preloader";

const keaniaOne = Keania_One({
  variable: "--font-keania-one",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  // fallback: ["",""]
});

const lilex = Lilex({
  variable: "--font-lilex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  // Check and remove the weights not used
  display: "swap",
  preload: true,
});

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  // Check and remove the weights not used
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "NoWhere Isle",
  description:
    "Discover the mysterious NoWhere Isle - A beautiful island adventure awaits.",

  keywords: ["gamestudio", "adventure", "travel", "NoWhere Isle"],
  authors: [{ name: "Bryan Fernando" }],
  creator: "Digital Power Grid",

  openGraph: {
    title: "NoWhere Isle",
    description:
      "Discover the mysterious NoWhere Isle - A beautiful island adventure awaits.",
    url: "https://nowhereisle.com",
    siteName: "NoWhere Isle",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "NoWhere Isle - Beautiful Island Landscape",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NoWhere Isle",
    description:
      "Discover the mysterious NoWhere Isle - A beautiful island adventure awaits.",
    images: ["/opengraph-image.jpg"],
    creator: "@yourtwitterhandle",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${keaniaOne.variable} ${lilex.variable} ${lilitaOne.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {/* <Preloader /> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen w-full bg-[--color-background] relative overflow-hidden">
            {/* Rose Spotlight Background */}
            <div
              className="fixed inset-0 z-0 pointer-events-none"
              style={{
                background: `
        radial-gradient(
          circle at center,
          rgba(244, 63, 94, 0.12) 0%,
          rgba(244, 63, 94, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
              }}
            />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
