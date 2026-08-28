import Image from "next/image";
import { priceJumpLinks } from "@/lib/data/priceList";

export function PriceHero() {
  return (
    <section className="relative">
      <div className="relative flex h-[62vh] min-h-[480px] w-full items-center justify-center overflow-hidden bg-ink">
        <Image
          src="/images/hero1.jpg"
          alt="Nahaufnahme eines lächelnden Gesichts mit gepflegten Wimpern und Augenbrauen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/50" />

        <div className="relative z-10 w-full max-w-2xl px-6 text-center text-white">
          <span className="inline-flex items-center gap-3 text-xs">
            <span className="h-px w-8 bg-white/70" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/90">
              Preisliste
            </span>
            <span className="h-px w-8 bg-white/70" />
          </span>

          <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.1] tracking-[0.01em] text-balance sm:text-5xl lg:text-[3.4rem]">
            Preise &amp; Behandlungen
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Finden Sie hier alle Preise für Wimpernverlängerung, Lash Lifting, Brow
            Lifting und Augenbrauenbehandlungen im Überblick.
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="container-studio">
          <nav
            aria-label="Sprungnavigation Preisliste"
            className="flex gap-6 overflow-x-auto py-6 sm:flex-wrap sm:overflow-visible"
          >
            {priceJumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap border-b border-orchid/50 pb-1 text-sm font-medium tracking-wide text-ink transition-colors hover:border-orchid hover:text-orchid"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
