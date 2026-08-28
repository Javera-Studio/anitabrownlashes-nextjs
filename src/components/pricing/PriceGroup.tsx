import type { PriceGroupData } from "@/lib/data/priceList";
import { PriceRows } from "./PriceRows";

export function PriceGroup({ title, note, rows }: PriceGroupData) {
  return (
    <div>
      <h3 className="font-serif text-xl text-ink sm:text-2xl">{title}</h3>
      {note && <p className="mt-1.5 text-sm italic text-ink-soft">{note}</p>}
      <div className="mt-5">
        <PriceRows rows={rows} />
      </div>
    </div>
  );
}
