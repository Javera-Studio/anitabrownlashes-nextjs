import type { Metadata } from "next";
import { BookingButton } from "@/components/ui/BookingButton";
import { PriceAccordion } from "@/components/pricing/PriceAccordion";
import { PriceGroup } from "@/components/pricing/PriceGroup";
import { PriceRows } from "@/components/pricing/PriceRows";
import {
  lashExtensionTechniques,
  lashLiftingGroups,
  browGroups,
  comboPackageRows,
  priceJumpLinks,
} from "@/lib/data/priceList";

export const metadata: Metadata = {
  title: "Preise | Anita Brows & Lashes Wien",
  description:
    "Preise für Wimpernverlängerung, Lash Lifting, Brow Lifting und Augenbrauenbehandlungen bei Anita Brows & Lashes in Wien.",
};

export default function PreisePage() {
  return (
    <div className="pt-20 md:pt-[92px]">
      {/* Seitenkopf */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-studio">
          <span className="eyebrow">Preisliste</span>
          <h1 className="mt-5 max-w-2xl font-serif text-[2.4rem] leading-[1.1] tracking-[0.01em] text-ink sm:text-5xl lg:text-[3.4rem]">
            Preise &amp; Behandlungen
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Finden Sie hier alle Preise für Wimpernverlängerung, Lash Lifting, Brow
            Lifting und Augenbrauenbehandlungen im Überblick.
          </p>

          <nav
            aria-label="Sprungnavigation Preisliste"
            className="mt-8 flex gap-6 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible"
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
      </section>

      {/* 1. Wimpernverlängerung */}
      <section id="wimpernverlaengerung" className="bg-white py-16 md:py-20">
        <div className="container-studio max-w-3xl">
          <span className="eyebrow">Wimpernverlängerung</span>
          <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
            Von natürlich bis ausdrucksstark.
          </h2>

          <div className="mt-10">
            <PriceAccordion groups={lashExtensionTechniques} />
          </div>

          <div className="mt-10">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>

      {/* 2. Lash Lifting */}
      <section id="lash-lifting" className="bg-lilac/30 py-16 md:py-20">
        <div className="container-studio max-w-3xl">
          <span className="eyebrow">Lash Lifting</span>
          <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
            Natürlicher Schwung für Ihre Wimpern.
          </h2>

          <div className="mt-10 space-y-10">
            {lashLiftingGroups.map((group) => (
              <PriceGroup key={group.title} {...group} />
            ))}
          </div>

          <div className="mt-10">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>

      {/* 3. Brow Lifting & Augenbrauen */}
      <section id="brow-lifting" className="bg-white py-16 md:py-20">
        <div className="container-studio max-w-3xl">
          <span className="eyebrow">Brow Lifting</span>
          <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
            Perfekt geformte Augenbrauen.
          </h2>

          <div className="mt-10 space-y-10">
            {browGroups.map((group) => (
              <PriceGroup key={group.title} {...group} />
            ))}
          </div>

          <div className="mt-10">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>

      {/* 4. Kombi-Paket */}
      <section id="kombi-paket" className="bg-rose/25 py-16 md:py-20">
        <div className="container-studio max-w-3xl">
          <span className="eyebrow">Kombi-Paket</span>
          <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
            Lashes &amp; Brows perfekt kombiniert.
          </h2>

          <div className="mt-10">
            <PriceRows rows={comboPackageRows} />
          </div>

          <div className="mt-10">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>
    </div>
  );
}
