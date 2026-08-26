export interface GalleryImage {
  src: string;
  alt: string;
}

export const studioImages: GalleryImage[] = [
  {
    src: "/images/studiomain.jpg",
    alt: "Behandlungsraum mit Beauty-Liege und ruhiger Atmosphäre",
  },
  {
    src: "/images/studio1.jpg",
    alt: "Wartebereich mit natürlichem Licht",
  },
  {
    src: "/images/studio2.jpg",
    alt: "Arbeitsplatz mit warmen Holzdetails",
  },
];

export const resultImages: GalleryImage[] = [
  { src: "/images/vorher1.jpg", alt: "Ergebnis einer Wimpernbehandlung bei Anita Brows & Lashes" },
  { src: "/images/vorher3.png", alt: "Ergebnis einer Brow- und Lash-Behandlung" },
  { src: "/images/vorher4.png", alt: "Ergebnis einer Wimpernverlängerung" },
  { src: "/images/vorher5.png", alt: "Ergebnis eines Lash Liftings" },
  { src: "/images/vorher6.png", alt: "Ergebnis eines Brow Liftings" },
  { src: "/images/vorher7.png", alt: "Ergebnis einer Wimpernbehandlung" },
];
