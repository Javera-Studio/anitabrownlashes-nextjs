import type { Metadata } from "next";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="pb-24 pt-36 md:pt-44">
      <div className="container-studio max-w-3xl">
        <span className="eyebrow">Rechtliches</span>
        <h1 className="mb-12 mt-4 font-serif text-4xl text-ink md:text-5xl">Datenschutz</h1>

        <div className="space-y-10 text-[0.95rem] leading-relaxed text-ink-soft">
          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Verantwortlicher</h2>
            <p>
              {business.name} · {business.legalName}
              <br />
              {business.address.full}
              <br />
              <a className="hover:text-orchid" href={business.phoneHref}>{business.phone}</a> ·{" "}
              <a className="hover:text-orchid" href={business.emailHref}>{business.email}</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Erhebung &amp; Verarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen
              Bestimmungen (DSGVO, DSG, TKG 2003). Personenbezogene Daten werden nur erhoben, wenn
              Sie uns diese im Rahmen einer Terminanfrage, Kontaktaufnahme oder Behandlung freiwillig
              mitteilen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Terminbuchung über Treatwell</h2>
            <p>
              Buchungen erfolgen über die Plattform Treatwell. Es gelten zusätzlich die
              Datenschutzbestimmungen von Treatwell.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Cookies</h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies. Eine Auswertung
              des Nutzerverhaltens findet nicht ohne Ihre Einwilligung statt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Ihre Rechte</h2>
            <p>
              Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
              Datenübertragbarkeit, Widerruf und Widerspruch zu. Bei Verstößen können Sie sich an die
              Datenschutzbehörde (
              <a className="hover:text-orchid" href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
                dsb.gv.at
              </a>
              ) wenden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Kontakt zum Datenschutz</h2>
            <p>
              Für Anliegen rund um den Datenschutz erreichen Sie uns unter{" "}
              <a className="hover:text-orchid" href={business.emailHref}>{business.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
