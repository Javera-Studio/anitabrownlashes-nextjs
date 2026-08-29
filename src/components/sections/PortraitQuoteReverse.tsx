import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { AiLabel } from "@/components/ui/AiLabel";

export function PortraitQuoteReverse() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:h-[640px] md:flex-row lg:h-[680px]">
        <Reveal
          delay={180}
          className="order-2 flex w-full items-center justify-center bg-orchid px-8 py-10 sm:py-14 md:order-none md:h-full md:w-[42%] md:px-12 md:py-0 lg:w-[40%] lg:px-16"
        >
          <blockquote className="mx-auto max-w-[460px] text-center">
            <span aria-hidden className="mx-auto mb-4 block h-px w-10 bg-white/40" />
            <p className="font-serif text-[2.1rem] leading-[1.35] tracking-[0.01em] text-white sm:text-[2.4rem] md:text-[2.6rem] lg:text-[3rem]">
              „<em className="not-italic">Präzision</em> sieht man.{" "}
              <em className="not-italic">Erfahrung</em> spürt man.“
            </p>
          </blockquote>
        </Reveal>

        <Reveal
          className="relative order-1 w-full bg-lilac/50 md:order-none md:flex md:h-full md:w-[58%] md:items-center md:justify-center lg:w-[60%]"
        >
          <div className="relative aspect-[2/1] w-full max-h-full">
            <Image
              src="/images/hero3.jpg"
              alt="Nahaufnahme einer Frau mit zusammengebundenen Haaren und natürlichem Make-up"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
            <AiLabel className="bottom-3 left-3" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
