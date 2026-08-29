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
 * Erstes Bild ist das große Hauptmotiv der Galerie, danach abwechselnd
 * Hoch- und Querformate. Die letzten zwei Bilder (galerie6, galerie16)
 * bilden den vergrößerten Abschluss der Section.
 */
export const studioGalleryImages: StudioGalleryImage[] = [
  {
    src: "/images/galerie13.jpg",
    alt: "Anita bei der Wimpernverlängerung einer Kundin im Profil",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie10.jpg",
    alt: "Nahaufnahme einer Wimpernverlängerung mit Unterlidpads",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie4.jpg",
    alt: "Wimpernverlängerung mit UV-Technik – einzelne Wimpern werden mit der Pinzette unter UV-Licht angesetzt",
    width: 1080,
    height: 1920,
    focus: "center 38%",
  },
  {
    src: "/images/galerie9.jpg",
    alt: "Nahaufnahme einer Wimpernbehandlung mit Bürstchen und Unterlidpads",
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
    src: "/images/galerie8.jpg",
    alt: "Nahaufnahme von Auge und Augenbraue nach der Behandlung",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie5.jpg",
    alt: "Anita bei der Behandlung einer Kundin unter dem Ringlicht, InLei-Produkte im Vordergrund",
    width: 1080,
    height: 1920,
    focus: "center 18%",
  },
  {
    src: "/images/galerie12.jpg",
    alt: "Vorbereitete Behandlungsinstrumente auf einem Tablett im Studio",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie2.jpg",
    alt: "Hand mit Wimpern-Pads und Produkten während der Behandlungsvorbereitung",
    width: 1080,
    height: 1920,
    focus: "center 30%",
  },
  {
    src: "/images/galerie11.jpg",
    alt: "Anita im Studio vor dem runden Spiegel mit dem Zitat an der Wand",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie7.jpg",
    alt: "Porträt von Anita mit Wimpern-Pinzette vor der Studiowand mit Zitat",
    width: 1080,
    height: 1920,
    focus: "center 15%",
  },
  {
    src: "/images/galerie15.jpg",
    alt: "Nahaufnahme eines Lash Liftings mit Silikonpad auf dem Lid",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/galerie1.jpg",
    alt: "Reinigung der Arbeitsinstrumente im Ultraschallgerät im Studio",
    width: 1080,
    height: 1920,
    focus: "center 55%",
  },
  {
    src: "/images/galerie6.jpg",
    alt: "Anita mit Pinzette vor der Studiowand mit dem Schriftzug „Beauty begins the moment you decide to be yourself“",
    width: 1080,
    height: 1920,
    focus: "center 22%",
  },
  {
    src: "/images/galerie16.jpg",
    alt: "Anita in ihrem hellen Studio am Behandlungsplatz",
    width: 1080,
    height: 1920,
    focus: "center 22%",
  },
];
