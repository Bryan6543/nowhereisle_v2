"use client";

import FadeInSection from "../../hooks/FadeInSection";
import { useState } from "react";

type StudioFAQItem = {
  question: string;
  answer: string;
};

const studiofaqs: StudioFAQItem[] = [
  {
    question: "What is Nowhere Isle Studio?",
    answer:
      "Nowhere Isle Studios is an independent game studio creating single-player narrative and strategy games with rich worldbuilding, distinctive systems, and a strong sense of atmosphere.",
  },
  {
    question: "Where is NowhereIsle based?",
    answer: "Sri Lanka, Colombo",
  },
  {
    question: "Are you hiring or looking for collaborators?",
    answer:
      "We're always open to connecting with talented artists, programmers, composers, and writers. Feel free to reach out via email",
  },
  {
    question: "I found a bug / have feedback. How do I report it?",
    answer: "File a feedback or bug report on the website.",
  },
];

type GameFAQItem = {
  question: string;
  answer: string;
};

const gamefaqs: GameFAQItem[] = [
  {
    question: "What is Sigil Tactics: Lost Maylon?",
    answer:
      "A brutal squad-based turn-based tactics RPG about leading a doomed Inquisition expedition into corrupted territory to reclaim the Lost Holy Capital of Maylon.",
  },
  {
    question: "What platform is it coming to?",
    answer: "PC.",
  },
  {
    question: "Is it single-player?",
    answer: "Yes.",
  },
  {
    question: "Is there a release date?",
    answer: "Coming Soon.",
  },
  {
    question: "Is there a demo?",
    answer: "To be announced.",
  },
  {
    question: "Can I wishlist it?",
    answer: "Wishlist links will be added when the Steam page is available.",
  },
  {
    question: "Is there a trailer?",
    answer: "A trailer will be added when ready.",
  },
];

export default function FAQ() {
  const [openStudioIndex, setOpenStudioINdex] = useState<number | null>(null);
  const [openGameIndex, setOpenGameINdex] = useState<number | null>(null);

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
            <h1 className="big_head font-bold scale-y-150">FAQ</h1>
          </FadeInSection>
          <FadeInSection className="flex flex-col sm:flex-row gap-10 sm:gap-10 items-center">
            {/* Studio FAQs */}
            <div className="sm:w-3/6 flex flex-col gap-4">
              <h2 className="body_text pb-5 font-bold">Studio FAQs</h2>
              {studiofaqs.map((studiofaq, index) => (
                <div
                  onClick={() => toggleStudioFAQ(index)}
                  // oq
                  className="cursor-pointer hover:bg-white/5 transition-all duration-300 py-2 flex flex-col gap-4 px-5 bg-white/2"
                >
                  <hr />
                  <div
                    className="flex justify-between gap-5"
                    // aria-expanded={openIndex === index}
                  >
                    <h3 className="body_text font-bold">
                      {studiofaq.question}
                    </h3>
                    <p>{openStudioIndex === index ? " - " : " + "}</p>
                  </div>

                  <div
                    className={`w-5/6 overflow-hidden transition-all duration-500 ${openStudioIndex === index ? "max-h-96 mt-4" : "max-h-0"}`}
                  >
                    <p className="body_text opacity-85">{studiofaq.answer}</p>
                  </div>
                </div>
              ))}
              <hr />
            </div>
            {/* Game FAQs */}
            <div className="sm:w-3/6 flex flex-col gap-4">
              <h2 className="body_text font-bold">Game FAQs</h2>
              {gamefaqs.map((gamefaq, index) => (
                <div
                  key={index}
                  onClick={() => toggleGameFAQ(index)}
                  // oq
                  className="cursor-pointer hover:bg-white/5 transition-all duration-300 py-2 flex flex-col gap-4 px-5 bg-white/2"
                >
                  <hr />
                  <div
                    className="flex justify-between gap-5"
                    // aria-expanded={openIndex === index}
                  >
                    <h3 className="body_text font-bold">{gamefaq.question}</h3>
                    <p>{openGameIndex === index ? " - " : " + "}</p>
                  </div>

                  <div
                    className={`w-5/6 overflow-hidden transition-all duration-500 ${openGameIndex === index ? "max-h-96 mt-4" : "max-h-0"}`}
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
