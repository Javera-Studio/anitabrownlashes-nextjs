import Image from "next/image";
import { studioImages } from "@/lib/data/gallery";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/data/business";

export function StudioAmbience() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-studio">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
          <Reveal>
            <span className="eyebrow">Ein Ort zum Ankommen</span>
            <h3 className="mt-5 max-w-[18ch] font-serif text-[2rem] leading-[1.15] tracking-[0.01em] text-ink md:text-4xl">
              Mehr als eine Behandlung —{" "}
              <em className="text-orchid not-italic">eine kleine Auszeit</em>.
            </h3>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              Helle Räume, liebevolle Details und ein stilvolles Ambiente schaffen
              den perfekten Ort, um dem Alltag für einen Moment zu entfliehen –
              mitten im 1. Bezirk.
            </p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orchid"
            >
              Am Hof Färbergasse 4, 1010 Wien
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          <Reveal image className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={studioImages[0].src}
              alt={studioImages[0].alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal image delay={100} className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={studioImages[1].src}
              alt={studioImages[1].alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
