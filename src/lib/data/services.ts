export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
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
    short: "Die natürliche Alternative zu Extensions.",
    description:
      "Die perfekte Alternative zu Extensions. Ihre Naturwimpern werden sanft angehoben, erhalten einen wunderschönen Schwung und wirken optisch länger und voller. Inklusive Färben mit hochwertigen InLei-Produkten.",
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
