import Image from "next/image";
import { studioImages } from "@/lib/data/gallery";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/data/business";

export function StudioAmbience() {
  return (
    <section className="bg-white pb-7 pt-6 md:pb-10 md:pt-8">
      <div className="container-studio">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
          <Reveal>
            <span className="eyebrow">Das Studio</span>
            <h3 className="mt-5 max-w-[18ch] font-serif text-[2rem] leading-[1.15] tracking-[0.01em] text-ink md:text-4xl">
              Ein heller Raum.
              <span className="block">Ganz für dich.</span>
            </h3>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              Der großzügige, lichtdurchflutete Behandlungsraum verbindet
              professionelle Ausstattung mit einer ruhigen, persönlichen
              Atmosphäre – mitten im 1. Bezirk.
            </p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orchid"
            >
              Am Hof Färbergasse 4 · 1010 Wien
            </a>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16">
          <Reveal image className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
            <Image
              src={studioImages[0].src}
              alt={studioImages[0].alt}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
