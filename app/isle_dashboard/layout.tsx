// app/isle_dashboard/layout.tsx
import type { Metadata } from "next";
import Sidebar from "../../components/Sidebar";

export const metadata: Metadata = {
  title: "Inside the Isle | Nowhere Isle Studio",
  description: "Art, lore and updates from Nowhere Isle Studio and Kradel Tactics.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Sidebar />
      <div className="lg:pl-72 pt-16 lg:pt-0 min-h-screen">
      {children}
      </div>
    </div>
  );
}
