import { pricingGroups } from "@/lib/data/pricing";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

export function Pricing() {
  return (
    <section id="preise" className="bg-lilac/40 py-24 md:py-32">
      <div className="container-studio">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <Reveal>
            <span className="eyebrow">Preise</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-serif text-[2.3rem] leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Transparente Preise —{" "}
              <em className="text-orchid not-italic">Schönheit beginnt mit Vertrauen</em>.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Alle Behandlungen werden individuell auf Ihre Wünsche abgestimmt. Hier
              finden Sie eine Auswahl der beliebtesten Leistungen.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {pricingGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 120}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_18px_50px_-30px_rgba(22,18,26,0.25)] transition-transform duration-500 hover:-translate-y-1.5 lg:p-8">
                <h3 className="font-serif text-xl text-ink">{group.title}</h3>
                <span className="mt-4 h-px w-10 bg-orchid/50" />
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">ab</span>
                  <span className="font-serif text-4xl leading-none text-ink lg:text-[2.6rem]">
                    {group.from}
                  </span>
                  <span className="font-serif text-lg text-ink-soft">€</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3 text-sm text-ink-soft">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-baseline justify-between gap-4 border-b border-border pb-2 last:border-b-0"
                    >
                      <span>{item.label}</span>
                      <span className="whitespace-nowrap font-medium text-ink">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl text-sm italic text-ink-soft">
            Sie sind unsicher, welche Behandlung am besten zu Ihnen passt? Ich berate
            Sie gerne persönlich.
          </p>
          <BookingButton label="Alle Preise & Termine ansehen" />
        </Reveal>
      </div>
    </section>
  );
}
