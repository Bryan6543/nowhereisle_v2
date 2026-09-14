"use client";

import FadeInSection from "../../hooks/FadeInSection";
import { useState } from "react";
import { usePageFields } from "../../hooks/usePageFields";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openStudioIndex, setOpenStudioINdex] = useState<number | null>(null);
  const [openGameIndex, setOpenGameINdex] = useState<number | null>(null);
  const t = usePageFields("faq");

  const studiofaqs: FAQItem[] = [
    {
      question: t("studio_q1", "What is Nowhere Isle Studio?"),
      answer: t(
        "studio_a1",
        "Six people in Colombo, Sri Lanka, making turn-based tactics games with a story in them. Our first is Kradel Tactics.",
      ),
    },
    {
      question: t("studio_q2", "Where is Nowhere Isle Studio based?"),
      answer: t("studio_a2", "Colombo, Sri Lanka."),
    },
    {
      question: t("studio_q3", "Are you hiring or looking for collaborators?"),
      answer: t(
        "studio_a3",
        "Sometimes. Send a short note and a link to your work to studio@nowhereisle.com, and say what you would want to do on the game.",
      ),
    },
    {
      question: t("studio_q4", "I found a bug / have feedback. How do I report it?"),
      answer: t(
        "studio_a4",
        "Use the Support page. Pick the game, pick bug or feedback, and tell us what happened.",
      ),
    },
  ];

  const gamefaqs: FAQItem[] = [
    {
      question: t("game_q1", "What is Kradel Tactics?"),
      answer: t(
        "game_a1",
        "A turn-based tactics RPG. You lead the seventh expedition into the heart of Old Maylon as its Grand Inquisitor. Wounds do not heal on their own, corruption spreads, and resolve runs out.",
      ),
    },
    {
      question: t("game_q2", "What platform is it coming to?"),
      answer: t("game_a2", "PC."),
    },
    {
      question: t("game_q3", "Is it single-player?"),
      answer: t("game_a3", "Yes."),
    },
    {
      question: t("game_q4", "Is there a release date?"),
      answer: t("game_a4", "Coming Soon."),
    },
    {
      question: t("game_q5", "Is there a demo?"),
      answer: t("game_a5", "To be announced."),
    },
    {
      question: t("game_q6", "Can I wishlist it?"),
      answer: t(
        "game_a6",
        "Wishlist links will be added when the Steam page is available.",
      ),
    },
    {
      question: t("game_q7", "Is there a trailer?"),
      answer: t("game_a7", "A trailer will be added when ready."),
    },
  ];

  const toggleStudioFAQ = (index: number) => {
    setOpenStudioINdex(openStudioIndex === index ? null : index);
  };

  const toggleGameFAQ = (index: number) => {
    setOpenGameINdex(openGameIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-full bg-bl relative overflow-hidden">
      <div className="min-h-screen sm:h-screen">
        <div className="w-[80%] m-auto flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-between h-full">
          <FadeInSection direction="left" className="w-2/6">
            <h1 className="big_head font-bold scale-y-150">
              {t("title", "FAQ")}
            </h1>
          </FadeInSection>
          <FadeInSection className="flex flex-col sm:flex-row gap-10 sm:gap-10 items-center">
            <div className="sm:w-3/6 flex flex-col gap-4">
              <h2 className="body_text pb-5 font-bold">
                {t("studio_heading", "Studio FAQs")}
              </h2>
              {studiofaqs.map((studiofaq, index) => (
                <div
                  key={index}
                  onClick={() => toggleStudioFAQ(index)}
                  className="cursor-pointer hover:bg-white/5 transition-all duration-300 py-2 flex flex-col gap-4 px-5 bg-white/2"
                >
                  <hr />
                  <div className="flex justify-between gap-5">
                    <h3 className="body_text font-bold">{studiofaq.question}</h3>
                    <p>{openStudioIndex === index ? " - " : " + "}</p>
                  </div>
                  <div
                    className={`w-5/6 overflow-hidden transition-all duration-500 ${
                      openStudioIndex === index ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="body_text opacity-85">{studiofaq.answer}</p>
                  </div>
                </div>
              ))}
              <hr />
            </div>

            <div className="sm:w-3/6 flex flex-col gap-4">
              <h2 className="body_text font-bold">
                {t("game_heading", "Game FAQs")}
              </h2>
              {gamefaqs.map((gamefaq, index) => (
                <div
                  key={index}
                  onClick={() => toggleGameFAQ(index)}
                  className="cursor-pointer hover:bg-white/5 transition-all duration-300 py-2 flex flex-col gap-4 px-5 bg-white/2"
                >
                  <hr />
                  <div className="flex justify-between gap-5">
                    <h3 className="body_text font-bold">{gamefaq.question}</h3>
                    <p>{openGameIndex === index ? " - " : " + "}</p>
                  </div>
                  <div
                    className={`w-5/6 overflow-hidden transition-all duration-500 ${
                      openGameIndex === index ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="body_text opacity-85">{gamefaq.answer}</p>
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}