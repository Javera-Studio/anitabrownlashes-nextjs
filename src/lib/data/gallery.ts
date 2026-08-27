export interface GalleryImage {
  src: string;
  alt: string;
}

export const studioImages: GalleryImage[] = [
  {
    src: "/images/studio1.jpg",
    alt: "Behandlungsraum mit Beauty-Liege und ruhiger Atmosphäre",
  },
  {
    src: "/images/studio4.jpg",
    alt: "Arbeitsplatz im Studio von Anita Brows & Lashes",
  },
];

export const resultImages: GalleryImage[] = [
  { src: "/images/vorher1.jpg", alt: "Ergebnis einer Wimpernbehandlung bei Anita Brows & Lashes" },
  { src: "/images/vorher3.jpg", alt: "Ergebnis einer Brow- und Lash-Behandlung" },
  { src: "/images/vorher4.jpg", alt: "Ergebnis einer Wimpernverlängerung" },
  { src: "/images/vorher5.jpg", alt: "Ergebnis eines Lash Liftings" },
  { src: "/images/vorher6.jpg", alt: "Ergebnis eines Brow Liftings" },
  { src: "/images/vorher7.jpg", alt: "Ergebnis einer Wimpernbehandlung" },
];
