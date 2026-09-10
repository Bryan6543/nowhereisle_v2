"use client";

import { useState } from "react";
import FadeInSection from "../../hooks/FadeInSection";

export default function GetInTouch() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("Missing NEXT_PUBLIC_API_URL");
      }

      const res = await fetch(`${apiUrl}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage(data.message || "Thank you! You've joined the mist.");
      setEmail("");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="newsletter">
      <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <div className="flex flex-col justify-center items-center gap-10">
          <FadeInSection className="flex flex-col justify-center items-center gap-5">
            <h1 className="head text-center">STEP INTO THE MIST</h1>
            <p className="body_text md:w-xl text-center">
              We send a mail when there is something worth sending. A playable
              build, the Steam page going live, a piece of lore we finished. A
              few a year, not a few a week, so don't worry about getting
              spammed.
            </p>
          </FadeInSection>

          <FadeInSection>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 items-center w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="border-white/50 bg-white/10 border-4 rounded-2xl h-15 w-full md:w-96 px-6 body-text transition-all duration-300 hover:bg-black/50 focus:outline-none focus:border-white"
                disabled={status === "loading"}
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="body_text bg-[#411015] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer py-5 px-10 rounded-2xl whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
              >
                {status === "loading" ? "JOINING..." : "JOIN"}
              </button>
            </form>
          </FadeInSection>

          {message && (
            <p
              className={`text-center text-sm font-medium transition-all ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}