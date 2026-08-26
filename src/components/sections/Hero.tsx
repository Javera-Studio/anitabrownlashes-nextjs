import Image from "next/image";
import { BookingButton } from "@/components/ui/BookingButton";
import { Reveal } from "@/components/ui/Reveal";

const trustItems = [
  { title: "18+ Jahre Erfahrung", text: "Langjährige Expertise in Lash- & Brow-Styling." },
  { title: "Premium-Produkte", text: "Ausschließlich hochwertige, ausgewählte Produkte." },
  { title: "Persönliche Beratung", text: "Individuell abgestimmt auf Ihre Wünsche." },
  { title: "Studio im 1. Bezirk", text: "Zentrale Lage im Herzen Wiens." },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-lilac/40 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container-studio">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs">
                <span className="h-px w-9 bg-orchid" />
                <span className="eyebrow">Lash &amp; Brow Studio · Wien 1010</span>
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-7 font-serif text-[2.6rem] leading-[1.06] tracking-tight text-ink sm:text-[3.4rem] md:text-[3.9rem] lg:text-[4.4rem]">
                Ein Blick,
                <br />
                der <em className="text-orchid not-italic">bleibt</em>.
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                Wimpernverlängerung, Lash Lifting und Brow Lifting – präzise, hochwertig
                und individuell auf Ihre Gesichtsform abgestimmt. Seit über 18 Jahren
                in meinem Studio im Herzen Wiens.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10">
                <BookingButton />
              </div>
            </Reveal>

            <Reveal delay={460}>
              <div className="mt-12 flex items-center gap-4 border-t border-ink/10 pt-6">
                <div className="flex gap-0.5 text-orchid">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15.2 4.6 18l1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-ink-soft">
                  <strong className="text-ink">5,0</strong> auf Treatwell &middot; 330+ Bewertungen
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} image className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-rose/40">
              <Image
                src="/images/hero-eye.jpg"
                alt="Detailaufnahme von Wimpern und Augenbrauen"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -bottom-4 -left-4 hidden h-20 w-20 border-b border-l border-orchid/40 md:block" />
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-6">
          {trustItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <li className="h-full border border-ink/10 bg-white/70 px-5 py-5">
                <p className="text-sm font-semibold tracking-wide text-ink">{item.title}</p>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
