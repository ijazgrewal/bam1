"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type Faq = readonly [question: string, answer: string];

export function HomeFaq({ faqs }: { faqs: readonly Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {faqs.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        return (
          <article className="overflow-hidden rounded-xl border border-[#E5C378]/60 bg-[#FFFDF8] shadow-sm transition-shadow duration-200 hover:shadow-md" key={question}>
            <h3>
              <button aria-controls={`home-faq-${index}`} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-serif text-lg leading-snug text-[#00291D] sm:px-7 sm:text-xl" onClick={() => setOpenIndex(index)} type="button">
                <span>{question}</span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F8E9C4] text-[#A87808]" aria-hidden="true">
                  {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                </span>
              </button>
            </h3>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`} id={`home-faq-${index}`}>
              <div className="overflow-hidden">
                <p className="border-t border-[#E5C378]/35 px-5 py-5 text-sm leading-7 text-[#52655D] sm:px-7 sm:text-base">{answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
