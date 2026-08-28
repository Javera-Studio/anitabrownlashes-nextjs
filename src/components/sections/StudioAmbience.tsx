import Image from "next/image";
import { studioImages } from "@/lib/data/gallery";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/data/business";

export function StudioAmbience() {
  return (
    <section className="bg-white pb-24 pt-8 md:pb-32 md:pt-10">
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-12 md:items-end md:gap-8">
          <Reveal image className="relative aspect-[4/3] overflow-hidden md:col-span-8">
            <Image
              src={studioImages[0].src}
              alt={studioImages[0].alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 62vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal
            image
            delay={120}
            className="relative mx-auto aspect-[4/3] w-full max-w-[280px] overflow-hidden md:col-span-4 md:mx-0 md:-mt-16 md:ml-auto md:aspect-[3/4]"
          >
            <Image
              src={studioImages[1].src}
              alt={studioImages[1].alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 22vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
