import Image from "next/image";

export interface PriceGalleryImage {
  src: string;
  alt: string;
}

interface PriceGalleryProps {
  images: PriceGalleryImage[];
}

export function PriceGallery({ images }: PriceGalleryProps) {
  return (
    <div className="container-studio mt-10">
      <div className="grid grid-cols-2 gap-3 bg-black p-3 sm:grid-cols-4 sm:gap-4 sm:p-4">
        {images.map((img) => (
          <div key={img.src} className="group relative aspect-square overflow-hidden bg-black">
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
  );
}
