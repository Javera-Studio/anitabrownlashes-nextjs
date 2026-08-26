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
    <section id="top" className="relative">
      <div className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
        <Image
          src="/images/heromain.png"
          alt="Drei lächelnde Frauen mit gepflegten Wimpern und Augenbrauen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

        <div className="container-studio relative z-10 pb-20 pt-40 text-white md:pb-28">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs">
                <span className="h-px w-9 bg-white/70" />
                <span className="eyebrow text-white">Lash &amp; Brow Studio · Wien 1010</span>
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-7 font-serif text-[2.6rem] leading-[1.1] tracking-[0.01em] sm:text-[3.4rem] md:text-[3.9rem] lg:text-[4.4rem]">
                Ein Blick,
                <br />
                der <em className="text-rose not-italic">bleibt</em>.
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
                Wimpernverlängerung, Lash Lifting und Brow Lifting – präzise, hochwertig
                und individuell auf Ihre Gesichtsform abgestimmt. Seit über 18 Jahren
                in meinem Studio im Herzen Wiens.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10">
                <BookingButton variant="light" />
              </div>
            </Reveal>

            <Reveal delay={460}>
              <div className="mt-12 flex items-center gap-4 border-t border-white/25 pt-6">
                <div className="flex gap-0.5 text-rose">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15.2 4.6 18l1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/85">
                  <strong className="text-white">5,0</strong> auf Treatwell &middot; 330+ Bewertungen
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container-studio">
          <ul className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <li className="h-full border-t border-border px-1 py-8 lg:border-t-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0">
                  <p className="text-sm font-semibold tracking-wide text-ink">{item.title}</p>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-soft">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
