import Navbar from "../../components/menus/navbar";
import Footer from "../../components/menus/footer";
import SectionNavArrow from "../../components/SectionNavArrow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <SectionNavArrow />
    </div>
  );
}
