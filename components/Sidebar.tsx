"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Gamepad2, BookOpen, Bolt, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/isle_dashboard", icon: Home },
  { name: "Kradel Tactics", href: "/isle_dashboard/expeditions", icon: Gamepad2 },
  { name: "Artworks", href: "/isle_dashboard/artworks", icon: Bolt },
  { name: "Lore Wisdom", href: "/isle_dashboard/lore_wisdom", icon: BookOpen },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/isle_dashboard"
      ? pathname === href
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 border-b border-zinc-800 px-4 py-3 flex items-center justify-between backdrop-blur">
        <Link href="/isle">
          <Image src="/logo2.png" width={140} height={68} alt="Nowhere Isle" className="h-8 w-auto" />
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-screen w-72 bg-zinc-950 border-r border-zinc-800 flex flex-col transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="p-6 border-b border-zinc-800 hidden lg:block">
          <Link href="/isle">
            <Image
              src="/logo2.png"
              width={484}
              height={236}
              alt="nowhere_isle_game_studio_logo"
              className="w-full h-auto"
            />
          </Link>
        </div>

        <nav className="flex-1 p-4 pt-20 lg:pt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl mb-1 text-sm font-medium transition-all ${
                  active
                    ? "bg-white text-black"
                    : "hover:bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}