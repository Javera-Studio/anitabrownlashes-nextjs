import { business } from "@/lib/data/business";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

export function FinalCta() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-studio">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[2.3rem] leading-[1.1] tracking-[0.01em] text-ink sm:text-5xl">
            Bereit für Ihren nächsten{" "}
            <em className="text-orchid not-italic">Blick</em>?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Wimpernverlängerung, Lash &amp; Brow Lifting im Herzen Wiens.
          </p>
          <div className="mt-9 flex justify-center">
            <BookingButton label="Termin online buchen" />
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            {business.address.street} &middot; {business.address.zip} {business.address.city}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
