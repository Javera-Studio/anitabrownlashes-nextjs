import { testimonials, reviewStats } from "@/lib/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";

function Stars({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex gap-0.5 ${dark ? "text-rose" : "text-orchid"}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-studio">
        <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-rose">Das sagen meine Kundinnen</span>
            <h2 className="mt-4 font-serif text-[1.9rem] leading-[1.15] tracking-[0.01em] text-white sm:text-4xl">
              Vertrauen, das für sich <em className="text-accent-on-dark not-italic">spricht</em>.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Über 330 verifizierte Bewertungen und zahlreiche zufriedene
              Stammkundinnen sprechen für sich.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex gap-6 border border-white/15 bg-white/5 px-6 py-4">
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-2xl text-white">{reviewStats.rating}</span>
                  <span className="text-[0.6rem] uppercase tracking-[0.16em] text-white/50">
                    {reviewStats.platform}
                  </span>
                </div>
                <Stars dark />
              </div>
              <div className="border-l border-white/15 pl-6">
                <div className="font-serif text-2xl text-white">{reviewStats.count}</div>
                <p className="text-[0.6rem] uppercase tracking-[0.16em] text-white/50">
                  Bewertungen
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((review, i) => (
            <Reveal key={review.name} delay={(i % 4) * 100}>
              <figure className="flex h-full flex-col gap-3 border border-border bg-white p-5 transition-shadow duration-500 hover:shadow-[0_16px_40px_-28px_rgba(0,0,0,0.35)]">
                <Stars />
                <blockquote className="flex-1 text-[0.82rem] leading-relaxed text-ink-soft">
                  {review.quote}
                </blockquote>
                <figcaption className="border-t border-border pt-2.5">
                  <div className="font-serif text-sm text-ink">{review.name}</div>
                  <div className="mt-0.5 text-[0.6rem] uppercase tracking-[0.14em] text-ink-soft">
                    {review.service}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
