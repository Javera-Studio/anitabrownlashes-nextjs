import Image from "next/image";
import { resultImages } from "@/lib/data/gallery";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
  return (
    <section id="ergebnisse" className="bg-white py-24 md:py-32">
      <div className="container-studio">
        <div className="mb-14 flex flex-col items-center gap-5 text-center md:mb-20">
          <Reveal>
            <span className="eyebrow">Meine Arbeiten</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-2xl font-serif text-[2.3rem] leading-[1.1] tracking-[0.01em] text-ink sm:text-5xl">
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5">
          {resultImages.map((img, i) => (
            <Reveal
              key={img.src}
              image
              delay={(i % 3) * 100}
              className="relative aspect-[3/4] overflow-hidden bg-lilac/40"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 50vw"
                style={i === 3 || i === 5 ? { objectPosition: "center 65%" } : undefined}
                className="object-contain"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
