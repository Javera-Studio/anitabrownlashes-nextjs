import Image from "next/image";
import { resultImages, studioImages } from "@/lib/data/gallery";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/data/business";

export function Gallery() {
  return (
    <section id="ergebnisse" className="bg-white py-24 md:py-32">
      <div className="container-studio">
        <div className="mb-14 flex flex-col items-center gap-5 text-center md:mb-20">
          <Reveal>
            <span className="eyebrow">Meine Arbeiten</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-2xl font-serif text-[2.3rem] leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Echte Ergebnisse, <em className="text-orchid not-italic">echte Blicke</em>.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-xl text-base leading-relaxed text-ink-soft">
              Eine Auswahl meiner Arbeiten – jedes Ergebnis individuell auf Gesicht,
              Augenform und Wunsch abgestimmt.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric result grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-5">
          {resultImages.map((img, i) => {
            const spanClasses = [
              "col-span-2 row-span-2 md:col-span-3",
              "col-span-1 md:col-span-3",
              "col-span-1 md:col-span-2",
              "col-span-2 md:col-span-2 md:row-span-2",
              "col-span-1 md:col-span-2",
              "col-span-2 md:col-span-6",
            ];
            return (
              <Reveal
                key={img.src}
                image
                delay={(i % 3) * 100}
                className={`${spanClasses[i] ?? "col-span-1"} group relative overflow-hidden bg-lilac/40`}
              >
                <div className="relative h-full min-h-[220px] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Studio ambience strip */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-12 md:items-center md:gap-14">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Ein Ort zum Ankommen</span>
            <h3 className="mt-5 max-w-[18ch] font-serif text-[2rem] leading-[1.15] tracking-tight text-ink md:text-4xl">
              Mehr als eine Behandlung —{" "}
              <em className="text-orchid not-italic">eine kleine Auszeit</em>.
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
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

          <div className="grid grid-cols-2 gap-4 md:col-span-7 md:grid-cols-2 md:gap-5">
            <Reveal image className="relative col-span-2 aspect-[16/10] overflow-hidden md:col-span-2">
              <Image
                src={studioImages[0].src}
                alt={studioImages[0].alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal image delay={100} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={studioImages[1].src}
                alt={studioImages[1].alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 27vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal image delay={200} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={studioImages[2].src}
                alt={studioImages[2].alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 27vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
