// app/isle_dashboard/layout.tsx
import type { Metadata } from "next";
import Sidebar from "../../components/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard | NoWhere Isle",
  description: "Blog Management Dashboard",
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
