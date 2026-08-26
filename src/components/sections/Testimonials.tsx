import { testimonials, reviewStats } from "@/lib/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";

function Stars() {
  return (
    <div className="flex gap-1 text-orchid" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-studio">
        <div className="mb-14 flex flex-col gap-10 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Das sagen meine Kundinnen</span>
            <h2 className="mt-5 font-serif text-[2.3rem] leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Vertrauen, das für sich <em className="text-orchid not-italic">spricht</em>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Über 330 verifizierte Bewertungen und zahlreiche zufriedene
              Stammkundinnen sprechen für sich.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex gap-8 border border-orchid/30 bg-rose/20 px-7 py-6">
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl text-ink">{reviewStats.rating}</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-soft">
                    {reviewStats.platform}
                  </span>
                </div>
                <Stars />
              </div>
              <div className="border-l border-orchid/30 pl-8">
                <div className="font-serif text-3xl text-ink">{reviewStats.count}</div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-soft">
                  Bewertungen
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((review, i) => (
            <Reveal key={review.name} delay={(i % 4) * 100}>
              <figure className="flex h-full flex-col gap-4 border border-border bg-white p-6 transition-shadow duration-500 hover:shadow-[0_20px_50px_-30px_rgba(22,18,26,0.25)]">
                <Stars />
                <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
                  {review.quote}
                </blockquote>
                <figcaption className="border-t border-border pt-3">
                  <div className="font-serif text-base text-ink">{review.name}</div>
                  <div className="mt-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-ink-soft">
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
