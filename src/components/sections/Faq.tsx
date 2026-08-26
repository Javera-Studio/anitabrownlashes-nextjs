"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data/faq";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/data/business";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="container-studio">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <span className="eyebrow">Gut zu wissen</span>
            <h2 className="mt-5 font-serif text-[2.2rem] leading-[1.1] tracking-[0.01em] text-ink sm:text-5xl">
              Häufig gestellte <em className="text-orchid not-italic">Fragen</em>.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Antworten auf die häufigsten Fragen rund um meine Behandlungen. Ihre
              Frage ist nicht dabei? Ich berate Sie gerne persönlich.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-8">
            <div className="border-t border-border">
              {faqItems.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={item.question} className="border-b border-border">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full min-h-14 items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="flex items-center gap-5">
                          <span className="w-6 shrink-0 font-serif text-sm tabular-nums text-orchid">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-serif text-lg leading-snug text-ink md:text-xl">
                            {item.question}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="relative h-4 w-4 shrink-0 text-ink/60"
                        >
                          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                          <span
                            className={`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : ""}`}
                          />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      className="grid overflow-hidden transition-all duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="min-h-0">
                        <p className="max-w-2xl pb-6 pl-11 text-[0.95rem] leading-relaxed text-ink-soft md:pl-12">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-16 flex flex-col items-center gap-5 text-center">
          <p className="font-serif text-xl italic text-ink">
            Ihre Frage wurde nicht beantwortet?
          </p>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 bg-orchid px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-orchid-hover"
          >
            WhatsApp schreiben
          </a>
        </Reveal>
      </div>
    </section>
  );
}
