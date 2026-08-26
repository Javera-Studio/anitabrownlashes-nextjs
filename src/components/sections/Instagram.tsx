import { Reveal } from "@/components/ui/Reveal";
import { InstagramPhone } from "./InstagramPhone";
import { business } from "@/lib/data/business";

export function Instagram() {
  return (
    <section className="overflow-hidden bg-mauve/30 py-24 md:py-32">
      <div className="container-studio">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="text-center lg:col-span-7 lg:text-left">
            <Reveal>
              <span className="eyebrow">Folgen Sie mir</span>
              <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                Neue Looks,
                <br />
                <em className="text-orchid not-italic">immer aktuell</em>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft lg:mx-0">
                Aktuelle Arbeiten, Behind-the-Scenes aus dem Studio und Inspiration
                für Ihren nächsten Termin – auf Instagram teile ich regelmäßig
                Einblicke.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-3 border border-orchid px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-orchid transition-colors hover:bg-orchid hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
                {business.instagramHandle}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <InstagramPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
