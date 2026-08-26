"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { business } from "@/lib/data/business";
import { resultImages } from "@/lib/data/gallery";

export function InstagramPhone() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-settled");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="phone-mockup mx-auto w-[240px] sm:w-[260px]">
      <div className="rounded-[2.2rem] border-[6px] border-ink bg-ink p-1.5 shadow-[0_40px_80px_-30px_rgba(22,18,26,0.5)]">
        <div className="overflow-hidden rounded-[1.6rem] bg-white">
          <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
            <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-orchid to-rose" />
            <div className="min-w-0">
              <p className="truncate text-[0.65rem] font-semibold text-ink">
                {business.instagramHandle}
              </p>
              <p className="text-[0.55rem] text-ink-soft">Wien, Österreich</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[2px] bg-border">
            {resultImages.slice(0, 6).map((img) => (
              <div key={img.src} className="relative aspect-square bg-lilac/40">
                <Image src={img.src} alt="" fill sizes="90px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .phone-mockup {
          transform: rotate(-6deg) translateY(24px);
          opacity: 0;
          transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease-out;
        }
        .phone-mockup.is-settled {
          transform: rotate(-3deg) translateY(0);
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .phone-mockup {
            transform: rotate(-3deg) translateY(0) !important;
            opacity: 1 !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
