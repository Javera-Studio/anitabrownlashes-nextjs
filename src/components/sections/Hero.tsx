import Image from "next/image";
import { bookingUrl } from "@/lib/data/business";
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
      <div className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden bg-ink">
        <Image
          src="/images/heromain.png"
          alt="Drei lächelnde Frauen mit gepflegten Wimpern und Augenbrauen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Vertical overlay: transparent/light on top and middle, warm dark only in the lower third */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,12,8,0) 0%, rgba(20,12,8,0) 46%, rgba(36,20,14,0.32) 64%, rgba(26,15,11,0.72) 82%, rgba(22,13,10,0.85) 100%)",
          }}
        />

        {/* Spacer keeps the top ~60% of the hero (faces, hair) completely clear */}
        <div className="basis-[54%] shrink-0 sm:basis-[57%] lg:basis-[60%]" aria-hidden />

        <div className="relative z-10 flex flex-1 justify-center px-6">
          <div className="w-full max-w-[820px] text-center text-white">
            <Reveal duration={1400}>
              <span className="inline-flex items-center gap-3 text-xs">
                <span className="h-px w-8 bg-white/70" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/90">
                  Lash &amp; Brow Studio · Wien 1010
                </span>
                <span className="h-px w-8 bg-white/70" />
              </span>
            </Reveal>

            <Reveal delay={240} duration={1400}>
              <h1 className="mt-5 font-serif text-[2.9rem] leading-[1.1] tracking-[0.01em] text-balance sm:text-[3.4rem] md:text-[4rem] lg:whitespace-nowrap lg:text-[4.6rem] xl:text-[5rem]"
                  style={{ textShadow: "0 2px 18px rgba(0,0,0,0.22)" }}>
                Ein Blick, der <em className="text-rose not-italic">bleibt</em>.
              </h1>
            </Reveal>

            <Reveal delay={480} duration={1400}>
              <p className="mx-auto mt-5 max-w-[620px] text-[1.15rem] leading-[1.5] text-white/90 md:text-[1.35rem]">
                Wimpernverlängerung, Lash &amp; Brow Lifting in Wien – individuell
                abgestimmt und mit über 18 Jahren Erfahrung.
              </p>
            </Reveal>

            <Reveal delay={720} duration={1400}>
              <div className="mt-8 flex justify-center">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-[54px] items-center justify-center gap-2.5 bg-orchid px-8 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-orchid-hover"
                >
                  Termin online buchen
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={920} duration={1400}>
              <div className="mt-6 flex items-center justify-center gap-2.5">
                <div className="flex gap-0.5 text-rose">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15.2 4.6 18l1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/90">
                  <strong className="text-white">5,0</strong> auf Treatwell &middot; 330+ Bewertungen
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="h-8 shrink-0 sm:h-10 lg:h-14" aria-hidden />
      </div>

      <div className="bg-white py-10 md:py-14">
        <div className="container-studio">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {trustItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <li className="h-full border border-ink px-6 py-6">
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
