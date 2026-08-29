import Image from "next/image";

export interface PriceGalleryImage {
  src: string;
  alt: string;
}

interface PriceGalleryProps {
  images: PriceGalleryImage[];
}

/**
 * Ergebnis-Galerie einer Leistung auf der Preisseite.
 * Full-Bleed schwarzer Abschnitt (100vw), Bilder bleiben in der Content-Breite.
 */
export function PriceGallery({ images }: PriceGalleryProps) {
  return (
    <div className="mt-10 bg-black py-8 md:py-10">
      <div className="container-studio">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {images.map((img) => (
            <div key={img.src} className="group relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
