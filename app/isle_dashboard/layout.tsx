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
      <main className="pl-72 ">{children}</main>
    </div>
  );
}
