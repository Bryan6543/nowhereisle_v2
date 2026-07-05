import { redirect } from "next/navigation";

export default function Page() {
  redirect("/isle");
}

export const dynamic = 'force-dynamic';