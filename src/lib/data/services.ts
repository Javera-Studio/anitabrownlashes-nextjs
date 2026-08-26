export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: "wimpernverlaengerung",
    title: "Wimpernverlängerung",
    short: "Ausdrucksstark, individuell, langlebig.",
    description:
      "Für einen dauerhaft ausdrucksstarken Blick – individuell angepasst von natürlich bis voluminös. Angeboten werden die Techniken 1:1, 2D, Light Volume und Mega Volume.",
    image: "/images/hero-eye.jpg",
    imageAlt: "Detailaufnahme einer Wimpernverlängerung",
  },
  {
    slug: "lash-lifting",
    title: "Lash Lifting",
    short: "Die natürliche Alternative zu Extensions.",
    description:
      "Die perfekte Alternative zu Extensions. Ihre Naturwimpern werden sanft angehoben, erhalten einen wunderschönen Schwung und wirken optisch länger und voller. Inklusive Färben mit hochwertigen InLei-Produkten.",
    image: "/images/lashlifting.jpg",
    imageAlt: "Wimpern nach einem Lash Lifting",
  },
  {
    slug: "brow-lifting",
    title: "Brow Lifting",
    short: "Perfekt geformt, ganz ohne Styling-Aufwand.",
    description:
      "Perfekt geformte und voller wirkende Augenbrauen – ganz ohne tägliches Styling. Auf Wunsch inklusive Färben und individueller Anpassung für ein harmonisches Gesamtbild.",
    image: "/images/brows.jpg",
    imageAlt: "Augenbrauen nach einem Brow Lifting",
  },
];
