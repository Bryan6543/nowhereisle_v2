"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
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
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.toLowerCase().trim() });

      if (error) {
        if (error.code === "23505") { // Unique violation
          setStatus("success");
          setMessage("You're already subscribed! 🎉");
        } else {
          throw error;
        }
      } else {
        setStatus("success");
        setMessage("Thank you! You've joined the mist.");
        setEmail(""); // Clear input
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section>
      <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
        <div className="flex flex-col justify-center items-center gap-10">
          
          <FadeInSection className="flex flex-col justify-center items-center gap-5">
            <h1 className="head text-center">STEP INTO THE MIST</h1>
            <p className="body_text md:w-xl text-center">
              Receive rare updates, behind-the-scenes lore, and early access
              to new worlds.
            </p>
          </FadeInSection>

          <FadeInSection>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center w-full max-w-md">
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

          {/* Status Message */}
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