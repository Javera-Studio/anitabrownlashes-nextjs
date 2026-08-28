import Image from "next/image";
import { services } from "@/lib/data/services";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="leistungen" className="bg-white pb-24 pt-10 md:pb-32 md:pt-12 lg:pt-20">
      <div className="container-studio">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:mb-24 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Meine Leistungen</span>
            <h2 className="mt-5 max-w-[16ch] font-serif text-[2.4rem] leading-[1.08] tracking-[0.01em] text-ink sm:text-5xl lg:text-[3.4rem]">
              Für einen Blick, der{" "}
              <em className="text-orchid not-italic">für sich spricht</em>.
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Ob natürlich elegant oder ausdrucksstark – jede Behandlung wird individuell
              auf Ihre Wünsche und Gesichtsform abgestimmt. Präzision, hochwertige
              Produkte und ein natürlich schönes Ergebnis stehen dabei stets im
              Mittelpunkt.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={service.slug}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-20`}
              >
                <Reveal
                  image
                  className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}
                >
                  <div className="group relative aspect-[16/10] w-full overflow-hidden bg-lilac/40">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </Reveal>

                <Reveal delay={120} className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                  <span className="font-serif text-sm text-orchid tabular-nums">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl leading-snug text-ink md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-orchid">{service.short}</p>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <a
                    href={`/preise#${service.slug}`}
                    className="group/link mt-6 inline-flex items-center gap-3 py-1.5 text-sm font-medium tracking-wide text-ink"
                  >
                    <span className="border-b border-orchid/60 pb-0.5 transition-colors group-hover/link:border-orchid group-hover/link:text-ink">
                      Preise ansehen
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3 text-orchid transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
