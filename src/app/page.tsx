import { redirect } from "next/navigation";

export default function Page() {
  redirect("/isle");
}

// Force it to run on the server (important for static hosting)
export const dynamic = 'force-dynamic';