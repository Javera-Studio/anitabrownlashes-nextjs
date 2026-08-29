import Image from "next/image";

export interface PriceGalleryImage {
  src: string;
  alt: string;
}

interface PriceGalleryProps {
  images: PriceGalleryImage[];
}

const imgClass =
  "object-cover object-[center_38%] transition-transform duration-500 ease-out group-hover:scale-[1.03]";

/**
 * Ergebnis-Galerie einer Leistung auf der Preisseite.
 * Full-Bleed schwarzer Abschnitt, Bilder in Content-Breite.
 * Desktop: asymmetrisches Editorial-Layout – grosses Hochformat-Hauptbild links,
 * drei kleinere Bilder rechts untereinander (Gesamthoehe inkl. Gaps = Hauptbild).
 * Mobile: kompaktes 2x2-Raster.
 */
export function PriceGallery({ images }: PriceGalleryProps) {
  const tiles = images.slice(0, 4);
  const [lead, ...secondary] = tiles;

  return (
    <div className="mt-10 bg-black py-14 md:py-24">
      <div className="container-studio">
        {/* Mobile: kompaktes 2x2 */}
        <div className="grid grid-cols-2 gap-[15px] md:hidden">
          {tiles.map((img) => (
            <div key={img.src} className="group relative aspect-square overflow-hidden">
              <Image src={img.src} alt={img.alt} fill loading="lazy" sizes="50vw" className={imgClass} />
            </div>
          ))}
        </div>

        {/* Desktop: asymmetrisches Editorial-Layout */}
        <div className="hidden gap-[15px] md:grid md:grid-cols-[1.7fr_1fr]">
          <div className="group relative aspect-[4/5] overflow-hidden">
            <Image
              src={lead.src}
              alt={lead.alt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 60vw, 100vw"
              className={imgClass}
            />
          </div>
          <div className="grid h-full grid-rows-3 gap-[15px]">
            {secondary.map((img) => (
              <div key={img.src} className="group relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 36vw, 100vw"
                  className={imgClass}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
