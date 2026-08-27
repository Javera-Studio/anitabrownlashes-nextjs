"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { studioGalleryImages } from "@/lib/data/studioGallery";

export function StudioGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [hero, ...rest] = studioGalleryImages;

  return (
    <section className="bg-white pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="container-studio">
        <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-14">
          <Reveal>
            <span className="eyebrow">Studioeinblicke</span>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="max-w-xl font-serif text-[1.9rem] leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
              Wo Präzision auf <em className="text-orchid not-italic">Erfahrung</em> trifft.
            </h3>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              Einblicke in meine Arbeit und die besondere Atmosphäre meines Studios.
            </p>
          </Reveal>
        </div>

        <Reveal image>
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            aria-label={hero.alt}
            className="group relative block w-full overflow-hidden"
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              loading="lazy"
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </button>
        </Reveal>

        <div className="mt-4 columns-2 gap-4 sm:columns-3 md:mt-5 md:gap-5">
          {rest.map((img, i) => {
            const realIndex = i + 1;
            return (
              <Reveal
                key={img.src}
                image
                delay={(i % 3) * 90}
                className="mb-4 break-inside-avoid md:mb-5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(realIndex)}
                  aria-label={img.alt}
                  className="group relative block w-full overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 48vw"
                    className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={studioGalleryImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
