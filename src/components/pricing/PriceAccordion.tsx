"use client";

import { useState } from "react";
import type { PriceGroupData } from "@/lib/data/priceList";
import { PriceRows } from "./PriceRows";

export function PriceAccordion({ groups }: { groups: PriceGroupData[] }) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  function toggle(i: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  }

  return (
    <div className="border-t border-border">
      {groups.map((group, i) => {
        const isOpen = openIndexes.has(i);
        const buttonId = `preise-accordion-button-${i}`;
        const panelId = `preise-accordion-panel-${i}`;

        return (
          <div key={group.title} className="border-b border-border">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex min-h-[56px] w-full items-center justify-between gap-6 py-4 text-left"
              >
                <span className="font-serif text-lg text-ink sm:text-xl">{group.title}</span>
                <span aria-hidden className="relative h-4 w-4 shrink-0 text-ink/60">
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                      isOpen ? "rotate-90 opacity-0" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <div className="pb-6">
                  <PriceRows rows={group.rows} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
