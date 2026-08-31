export interface ServiceMethod {
  title: string;
  tagline: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  short?: string;
  description?: string;
  /** Einzelne Methoden/Varianten der Leistung, falls die Behandlung mehrere Ansätze hat. */
  methods?: ServiceMethod[];
  image: string;
  imageAlt: string;
  /** CSS object-position, tuned so the eye/brow area stays in frame when cropped. */
  imageFocus?: string;
}

export const services: Service[] = [
  {
    slug: "wimpernverlaengerung",
    title: "Wimpernverlängerung",
    short: "Ausdrucksstark, individuell, langlebig.",
    description:
      "Für einen dauerhaft ausdrucksstarken Blick – individuell angepasst von natürlich bis voluminös. Angeboten werden die Techniken 1:1, 2D, Light Volume und Mega Volume. Ich arbeite dabei mit moderner UV-Technik: Der Kleber härtet direkt während der Behandlung aus – die klassische 24-Stunden-Wartezeit entfällt, und Ihre Wimpern dürfen im Anschluss sofort mit Wasser in Kontakt kommen.",
    image: "/images/lashextention.jpg",
    imageAlt: "Detailaufnahme einer Wimpernverlängerung",
    imageFocus: "center 32%",
  },
  {
    slug: "lash-lifting",
    title: "Lash Lifting",
    methods: [
      {
        title: "Klassisches Wimpernlifting",
        tagline: "Für einen natürlichen, eleganten Schwung.",
        text: "Die klassische Methode formt die Naturwimpern sanft nach oben und sorgt für einen schönen, offenen Blick. Pflegende Wirkstoffe wie Keratin, Proteine und Vitamine unterstützen die Wimpern während der Behandlung und verleihen ihnen ein geschmeidiges, gepflegtes Aussehen.",
      },
      {
        title: "Koreanisches Wimpernlifting",
        tagline: "Sanfter Schwung, intensive Pflege.",
        text: "Beim Korean Lash Lifting sorgen besonders sanfte Produkte und eine spezielle Auftragetechnik für einen weichen, fließenden Schwung direkt vom Wimpernansatz. Keratin, Proteine, Aminosäuren und Vitamine unterstützen die Naturwimpern während der Behandlung und verleihen ihnen ein geschmeidiges, glänzendes und gepflegtes Aussehen.",
      },
    ],
    image: "/images/lashlisting.jpg",
    imageAlt: "Wimpern nach einem Lash Lifting",
    imageFocus: "center 32%",
  },
  {
    slug: "brow-lifting",
    title: "Brow Lifting",
    short: "Perfekt geformt, ganz ohne Styling-Aufwand.",
    description:
      "Perfekt geformte und voller wirkende Augenbrauen – ganz ohne tägliches Styling. Auf Wunsch inklusive Färben und individueller Anpassung für ein harmonisches Gesamtbild.",
    image: "/images/browslifting.jpg",
    imageAlt: "Augenbrauen nach einem Brow Lifting",
    imageFocus: "center 30%",
  },
];
