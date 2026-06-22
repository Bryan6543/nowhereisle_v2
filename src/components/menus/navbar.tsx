import Image from "next/image";

export default function navbar() {
  return (
    <nav className="w-screen h-25 flex justify-between bg-black">
      <div className="w-[80%] h-full m-auto flex justify-between">
        {/* Logo */}
        <Image
          src={"/logo2.png"}
          width={484}
          height={236}
          alt="nowhere_isle_game_studio_logo"
          className="h-full w-fit object-contain"
        />
        {/* Nav Links */}
        <div className="flex gap-5 items-center nav_link_text">
          <p>Game: Sigil Tactics: Lost Maylon</p>
          <p>Community</p>
          <p>Support</p>
          <p>About</p>
        </div>
      </div>
    </nav>
  );
}
