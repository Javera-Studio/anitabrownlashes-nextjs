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
 * Full-Bleed schwarzer Abschnitt, viel schwarzer Freiraum ringsum.
 * Desktop: asymmetrisches Editorial-Layout – grosses Hochformat-Hauptbild links,
 * drei kleinere Bilder rechts untereinander (Gesamthoehe inkl. Gaps = Hauptbild).
 * Kompakt gehalten (ca. 62vw, max. 1180px) und mittig in der schwarzen Section.
 * Mobile: kompaktes 2x2-Raster (separat responsiv, kein herunterskaliertes Desktop).
 */
export function PriceGallery({ images }: PriceGalleryProps) {
  const tiles = images.slice(0, 4);
  const [lead, ...secondary] = tiles;

  return (
    <div className="mt-10 bg-black py-12 md:py-20">
      {/* Mobile: kompaktes 2x2 */}
      <div className="container-studio md:hidden">
        <div className="grid grid-cols-2 gap-[15px]">
          {tiles.map((img) => (
            <div key={img.src} className="group relative aspect-square overflow-hidden">
              <Image src={img.src} alt={img.alt} fill loading="lazy" sizes="50vw" className={imgClass} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: asymmetrisches Editorial-Layout, kompakt und mittig */}
      <div className="hidden gap-[15px] md:mx-auto md:grid md:w-[62vw] md:max-w-[1180px] md:grid-cols-[1.7fr_1fr]">
        <div className="group relative aspect-[4/5] overflow-hidden">
          <Image
            src={lead.src}
            alt={lead.alt}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 40vw, 100vw"
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
                sizes="(min-width: 768px) 24vw, 100vw"
                className={imgClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
