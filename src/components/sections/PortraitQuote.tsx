import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function PortraitQuote() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:h-[640px] md:flex-row lg:h-[680px]">
        <Reveal className="relative aspect-[3/2] w-full bg-rose/50 md:h-full md:w-[58%] md:aspect-auto lg:w-[60%]">
          <Image
            src="/images/hero2.jpg"
            alt="Nahaufnahme eines natürlich geschminkten Gesichts mit gepflegten Augenbrauen und Wimpern"
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-contain object-top"
          />
        </Reveal>

        <Reveal
          delay={180}
          className="flex w-full items-center justify-center bg-rose px-8 py-10 sm:py-14 md:h-full md:w-[42%] md:px-12 md:py-0 lg:w-[40%] lg:px-16"
        >
          <blockquote className="mx-auto max-w-[460px] text-center">
            <span aria-hidden className="mx-auto mb-4 block h-px w-10 bg-orchid/50" />
            <p
              className="font-serif leading-[1.35] tracking-[0.01em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 3.2vw, 4rem)" }}
            >
              „Schönheit soll dich nicht verändern – sondern deinen{" "}
              <em className="text-orchid not-italic">Ausdruck</em> unterstreichen.“
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
