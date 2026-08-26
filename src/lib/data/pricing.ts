export interface PriceItem {
  label: string;
  price: string;
}

export interface PriceGroup {
  title: string;
  from: string;
  items: PriceItem[];
}

export const pricingGroups: PriceGroup[] = [
  {
    title: "Wimpernverlängerung",
    from: "99",
    items: [
      { label: "Neuanlage", price: "ab 99 €" },
      { label: "Auffüllen", price: "ab 55 €" },
    ],
  },
  {
    title: "Lash Lifting",
    from: "69",
    items: [
      { label: "ohne Färben", price: "69 €" },
      { label: "mit Färben", price: "79 €" },
    ],
  },
  {
    title: "Brow Lifting",
    from: "49",
    items: [
      { label: "Brow Lifting", price: "49 €" },
      { label: "mit Färben", price: "59 €" },
      { label: "mit Färben & Zupfen", price: "69 €" },
    ],
  },
];
