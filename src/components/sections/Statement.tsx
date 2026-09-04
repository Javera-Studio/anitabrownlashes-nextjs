import { Reveal } from "@/components/ui/Reveal";
import { AnimatedQuote } from "@/components/ui/AnimatedQuote";

export function Statement() {
  return (
    <section className="bg-ink py-[4.9rem] md:py-28">
      <div className="container-studio">
        <Reveal className="mx-auto max-w-2xl text-center">
          <AnimatedQuote
            className="font-serif text-[1.6rem] leading-[1.55] tracking-[0.02em] text-white sm:text-[2.1rem] md:text-[2.6rem]"
            parts={[
              { text: "Schönheit entsteht dort, wo man" },
              { text: "sich wohlfühlt", emphasis: true },
              { text: "— und ein Blick beginnt, für sich selbst zu" },
              { text: "sprechen.", emphasis: true },
            ]}
            emphasisClassName="text-accent-on-dark not-italic"
          />
        </Reveal>
      </div>
    </section>
  );
}
