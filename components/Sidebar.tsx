"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Gamepad2,
  BookOpen,
  ShieldQuestionMark,
  Bolt,
  Swords,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Lore", href: "/isle_dashboard", icon: Home },
  { name: "Doomed Expedition", href: "/isle_dashboard/expeditions", icon: Gamepad2 },
  // { name: "Combat Reimagined", href: "isle_dashboard/blogs", icon: Swords },
  { name: "Artworks", href: "/isle_dashboard/artworks", icon: Bolt },
  { name: "Lore Wisdom", href: "/isle_dashboard/lore_wisdom", icon: BookOpen },
  // { name: "FAQ", href: "isle_dashboard/blogs", icon: ShieldQuestionMark },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-zinc-950 border-r fixed border-zinc-800 h-screen flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <Link href={"/isle"}>
          <Image
            src="/logo2.png"
            width={484}
            height={236}
            alt="nowhere_isle_game_studio_logo"
            className=""
          />
        </Link>
      </div>

      <nav className="flex-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl mb-1 text-sm font-medium transition-all ${
                isActive
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
    </div>
  );
}
