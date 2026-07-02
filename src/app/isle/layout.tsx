import Navbar from "@/components/menus/navbar";
import Footer from "@/components/menus/footer";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Image
          src={"/red-tree.png"}
          width={1787}
          height={1597}
          className="z-9999 fixed right-5 bottom-5 w-50 hover:bg-red-700/10 rounded-5xl"
          alt=""
        /> */}

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
