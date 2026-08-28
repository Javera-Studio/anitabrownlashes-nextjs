export interface StudioGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position, tuned per photo so faces/hands stay visible when cropped. */
  focus?: string;
}

/**
 * Kuratierte Auswahl echter Studio- und Behandlungsfotos von Anita –
 * bewusst nicht in der Ordnerreihenfolge, sondern redaktionell gemischt.
 * Erstes Bild ist das große Hauptmotiv der Galerie.
 */
export const studioGalleryImages: StudioGalleryImage[] = [
  {
    src: "/images/galerie13.jpg",
    alt: "Anita bei der Wimpernverlängerung einer Kundin im Profil",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie6.jpg",
    alt: "Anita mit Pinzette vor der Studiowand mit dem Schriftzug „Beauty begins the moment you decide to be yourself“",
    width: 1080,
    height: 1920,
    focus: "center 22%",
  },
  {
    src: "/images/galerie2.jpg",
    alt: "Hand mit Wimpern-Pads und Produkten während der Behandlungsvorbereitung",
    width: 1080,
    height: 1920,
    focus: "center 30%",
  },
  {
    src: "/images/galerie10.jpg",
    alt: "Nahaufnahme einer Wimpernverlängerung mit Unterlidpads",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie3.jpg",
    alt: "Anita bei der Arbeit an den Wimpern einer Kundin",
    width: 1080,
    height: 1920,
    focus: "center 20%",
  },
  {
    src: "/images/galerie1.jpg",
    alt: "Reinigung der Arbeitsinstrumente im Ultraschallgerät im Studio",
    width: 1080,
    height: 1920,
    focus: "center 55%",
  },
  {
    src: "/images/galerie14.jpg",
    alt: "Zufriedene Kundin betrachtet das Ergebnis im Handspiegel",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie8.jpg",
    alt: "Nahaufnahme von Auge und Augenbraue nach der Behandlung",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie11.jpg",
    alt: "Anita im Studio vor dem runden Spiegel mit dem Zitat an der Wand",
    width: 1920,
    height: 1080,
  },
];
