"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import FadeInSection from "@/hooks/FadeInSection";

import FAQ from "@/components/multiple_use/FAQ";
import GetInTouch from "@/components/multiple_use/GetInTouch";

type ReportType = "studio" | "game" | "";
type GameReportType = "bug" | "feedback" | "";

export default function page() {
  const [reportType, setReportType] = useState<ReportType>("");
  const [gameReportType, setGameReportType] = useState<GameReportType>("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const finalSubject =
        reportType === "game"
          ? `[${gameReportType?.toUpperCase()}] ${subject}`
          : subject;

      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportType,
          gameReportType,
          subject: finalSubject,
          description,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        // Reset form
        setReportType("");
        setGameReportType("");
        setSubject("");
        setDescription("");
      } else {
        console.error("Server error:", data);
        alert(`Error: ${data.error || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <Image
          src={"/img-4.png"}
          width={5120}
          height={2880}
          alt=""
          className="object-cover h-full absolute z-0 scale-animation-hero"
        />
        <FadeInSection className="absolute w-full h-full flex flex-col justify-center items-center gap- z-20 bg-black/40 text-center">
          <h2 className="body_text text-red-800 font-bold">WE ARE LISTENING</h2>
          <h1 className="big_head">SUPPORT</h1>
          <p className="body_text">
            Every message helps us make the isle better.
          </p>
        </FadeInSection>
      </section>

      {/* Support Catalogs */}
      <section>
        <div className="w-[80%] m-auto flex flex-col gap-10 py-[clamp(50px,1vh,240px)]">
          <FadeInSection>
            <h1 className="text-center big_head pt:10 md:pt-20">
              TELL US WHATS WRONG
            </h1>
          </FadeInSection>
        </div>
      </section>

      {/* Form */}
      <FadeInSection className="max-w-5xl mx-auto px-6 md:py-20">
        {/* Main Form Section */}
        <div className="bg-black border border-zinc-800 rounded-3xl p-10 md:p-16">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🌫️</div>
              <h3 className="text-3xl font-semibold text-red-400 mb-4">
                Message Received
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Thank you. We’ve received your message and will reply as soon as
                possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-10 px-10 py-4 border border-red-700 hover:bg-red-950 rounded-2xl transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Report Type */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setReportType("studio")}
                    className={`p-8 rounded-2xl border text-left transition-all ${reportType === "studio" ? "border-red-800 bg-red-950/20" : "border-zinc-800 hover:border-zinc-700"}`}
                  >
                    <p className="font-medium text-lg">
                      Studio / General Inquiry
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Press, business, partnerships, etc.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReportType("game")}
                    className={`p-8 rounded-2xl border text-left transition-all ${reportType === "game" ? "border-red-800 bg-red-950/20" : "border-zinc-800 hover:border-zinc-700"}`}
                  >
                    <p className="font-medium text-lg">
                      Sigil Tactics: Lost Maylon
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Bugs, feedback, or suggestions
                    </p>
                  </button>
                </div>
              </div>

              {/* Game Sub-Type */}
              {reportType === "game" && (
                <div>
                  <label className="block text-gray-400 mb-4 text-sm uppercase tracking-widest">
                    What kind of report?
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setGameReportType("bug")}
                      className={`flex-1 py-5 rounded-2xl border transition ${gameReportType === "bug" ? "border-red-800 bg-red-950/30" : "border-zinc-800 hover:border-zinc-700"}`}
                    >
                      Bug Report
                    </button>
                    <button
                      type="button"
                      onClick={() => setGameReportType("feedback")}
                      className={`flex-1 py-5 rounded-2xl border transition ${gameReportType === "feedback" ? "border-red-800 bg-red-950/30" : "border-zinc-800 hover:border-zinc-700"}`}
                    >
                      Feedback / Suggestion
                    </button>
                  </div>
                </div>
              )}

              {/* Subject & Description */}
              {(reportType === "studio" ||
                (reportType === "game" && gameReportType)) && (
                <div className="space-y-8 pt-6 border-t border-zinc-800">
                  <div>
                    <label className="block text-gray-400 mb-3">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 focus:border-red-800 outline-none transition"
                      placeholder="e.g. Game crashes during sigil activation"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-3">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      rows={12}
                      className="w-full bg-black border border-zinc-800 rounded-3xl px-6 py-5 focus:border-red-800 outline-none resize-y min-h-[200px]"
                      placeholder="Please describe the issue in as much detail as possible. Include steps to reproduce if it's a bug."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-70 py-6 rounded-2xl text-lg font-medium transition-all duration-300"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </FadeInSection>

      {/* Get in Touch  */}
      <div className="md:pt-30">
        <GetInTouch />
      </div>
      {/* FAQ */}
      <FAQ />
    </main>
  );
}
