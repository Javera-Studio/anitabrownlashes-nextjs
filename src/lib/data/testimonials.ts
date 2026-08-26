export interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ich kann diese Kosmetikerin von Herzen weiterempfehlen! Ich war mit allen Behandlungen – Augenbrauen und Wimpern – mehr als zufrieden. Sie arbeitet sehr präzise, professionell und nimmt sich immer Zeit für ihre Kundinnen. Das Ergebnis war wunderschön und genau so, wie ich es mir vorgestellt habe.",
    name: "Emese",
    service: "Augenbrauen · Wimpern",
  },
  {
    quote:
      "Top Wimpernverlängerung! Wie immer bin ich super zufrieden – seit 3,5 Jahren komme ich zu Anita. Sehr empfehlenswert!",
    name: "Noémi",
    service: "Wimpernverlängerung",
  },
  {
    quote:
      "Jedes Mal sehr happy bei Anita. Das neue Wimpernlifting ist auch super geworden. Bin sehr zufrieden und komme immer wieder gerne. Danke!",
    name: "Yvonne",
    service: "Lash Lifting",
  },
  {
    quote:
      "Einfach wow! Perfekte Wimpernverlängerung und dazu eine entspannte Wohlfühlatmosphäre. Bin mehr als zufrieden! Beste Ergebnisse – empfehlenswert!",
    name: "Ivona",
    service: "Wimpernverlängerung",
  },
];

export const reviewStats = {
  rating: "5,0",
  platform: "Treatwell",
  count: "330+",
  topRatedYears: "23 · 24 · 25",
};
