import type { Metadata } from "next";
import { BookingButton } from "@/components/ui/BookingButton";
import { PriceHero } from "@/components/sections/PriceHero";
import { PriceAccordion } from "@/components/pricing/PriceAccordion";
import { PriceGroup } from "@/components/pricing/PriceGroup";
import { PriceRows } from "@/components/pricing/PriceRows";
import {
  lashExtensionTechniques,
  lashLiftingGroups,
  browGroups,
  comboPackageRows,
} from "@/lib/data/priceList";

export const metadata: Metadata = {
  title: "Preise | Anita Brows & Lashes Wien",
  description:
    "Preise für Wimpernverlängerung, Lash Lifting, Brow Lifting und Augenbrauenbehandlungen bei Anita Brows & Lashes in Wien.",
};

export default function PreisePage() {
  return (
    <div>
      <PriceHero />

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
