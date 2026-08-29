import type { PriceRow } from "@/lib/data/priceList";
import { Reveal } from "@/components/ui/Reveal";

export function PriceRows({ rows }: { rows: PriceRow[] }) {
  return (
    <div>
      <div className="price-row-head border-b border-ink/15 pb-2 text-[0.68rem] uppercase tracking-[0.16em] text-ink-soft">
        <span>Behandlung</span>
        <span className="price-duration">Dauer</span>
        <span className="price-price">Preis</span>
      </div>
      {rows.map((row, i) => (
        <Reveal
          key={row.treatment}
          delay={(i % 6) * 60}
          className="price-row border-b border-border py-3.5 last:border-b-0"
        >
          <span className="price-treatment text-[0.95rem] leading-snug text-ink sm:text-base">
            {row.treatment}
          </span>
          <span className="price-duration text-xs text-ink-soft tabular-nums sm:text-sm">
            {row.duration}
          </span>
          <span className="price-price text-sm font-semibold text-ink tabular-nums sm:text-base">
            {row.price}
          </span>
        </Reveal>
      ))}
    </div>
  );
}
