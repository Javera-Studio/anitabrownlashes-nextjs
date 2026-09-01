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
    short: "Individuell abgestimmt. Natürlich schön.",
    description:
      "Länge, Stärke und Curl werden passend zu Ihren Naturwimpern, Ihrer Augenform und Ihrem gewünschten Look ausgewählt. Dabei liegt der Fokus auf einer sauberen, präzisen Arbeit und einem harmonischen Ergebnis – von natürlich und elegant bis ausdrucksstärker. Anschließend erhalten Sie persönliche Pflegetipps, damit Ihre Wimpern möglichst lange schön bleiben.",
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
    short: "Natürlich geformt. Harmonisch definiert.",
    description:
      "Beim Brow Lifting werden Ihre natürlichen Brauen individuell an Ihre Gesichtszüge angepasst, in die gewünschte Richtung gebracht und fixiert. Dadurch wirken sie voller und definierter, ohne ihre Natürlichkeit zu verlieren. Eine abschließende Pflege hält die Härchen geschmeidig, zusätzlich erhalten Sie Tipps für die richtige Pflege zu Hause.",
    image: "/images/browslifting.jpg",
    imageAlt: "Augenbrauen nach einem Brow Lifting",
    imageFocus: "center 30%",
  },
];
