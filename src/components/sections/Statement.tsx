import { Reveal } from "@/components/ui/Reveal";

export function Statement() {
  return (
    <section className="bg-ink py-[4.9rem] md:py-28">
      <div className="container-studio">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-[2rem] leading-[1.45] tracking-[0.02em] text-white sm:text-[2.6rem] md:text-[3.2rem]">
            Schönheit entsteht dort, wo man{" "}
            <em className="text-accent-on-dark not-italic">sich wohlfühlt</em> — und ein
            Blick beginnt, für sich selbst zu{" "}
            <em className="text-accent-on-dark not-italic">sprechen</em>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
