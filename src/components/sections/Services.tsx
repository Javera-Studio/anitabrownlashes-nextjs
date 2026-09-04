import Image from "next/image";
import { services } from "@/lib/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { AiLabel } from "@/components/ui/AiLabel";

export function Services() {
  return (
    <section id="leistungen" className="bg-white pb-24 pt-8 md:pb-32 md:pt-10 lg:pt-14">
      <div className="container-studio">
        <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-14 lg:grid-cols-12 lg:items-end lg:gap-16">
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

        <div className="flex flex-col gap-16 md:gap-16 lg:gap-20">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={service.slug}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-20`}
              >
                <div className={`md:col-span-6 ${reversed ? "md:order-2" : ""}`}>
                  <div
                    className={`relative aspect-[4/5] w-full overflow-hidden bg-lilac/40 md:w-[clamp(496px,37vw,544px)] ${
                      reversed ? "md:ml-auto" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) min(37vw, 544px), 100vw"
                      style={{ objectPosition: service.imageFocus }}
                      className="object-cover"
                    />
                    <AiLabel />
                  </div>
                </div>

                <Reveal delay={120} className={`md:col-span-6 ${reversed ? "md:order-1" : ""}`}>
                  <h3 className="flex items-center gap-2.5 font-serif text-[1.4rem] leading-snug text-ink sm:gap-4 sm:text-3xl md:text-4xl">
                    <span aria-hidden className="h-px flex-1 bg-orchid/50" />
                    <span className="whitespace-nowrap text-center">{service.title}</span>
                    <span aria-hidden className="h-px flex-1 bg-orchid/50" />
                  </h3>
                  {service.short && (
                    <p
                      className={`mt-[5.25rem] text-sm font-medium text-orchid ${
                        service.slug === "wimpernverlaengerung" ? "md:mt-[2.5rem]" : ""
                      }`}
                    >
                      {service.short}
                    </p>
                  )}
                  {service.description && (
                    <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                      {service.description}
                    </p>
                  )}
                  {service.methods && (
                    <div className="mt-[5.25rem] space-y-6">
                      {service.methods.map((method, mi) => (
                        <div
                          key={method.title}
                          className={`max-w-md ${mi > 0 ? "border-t border-border pt-6" : ""}`}
                        >
                          <h4 className="font-serif text-lg text-ink">{method.title}</h4>
                          <p className="mt-1 text-sm font-medium text-orchid">{method.tagline}</p>
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{method.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <a
                    href={`/preise#${service.slug}`}
                    className="mt-6 inline-flex items-center justify-center rounded-none border border-orchid bg-paper px-8 py-3 text-sm font-medium tracking-wide text-orchid transition-colors duration-300 hover:bg-orchid hover:text-white"
                  >
                    Preise ansehen
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
