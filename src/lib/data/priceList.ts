export interface PriceRow {
  treatment: string;
  duration: string;
  price: string;
}

export interface PriceGroupData {
  title: string;
  note?: string;
  rows: PriceRow[];
}

/** Wimpernverlängerung – als Akkordeons dargestellt, in dieser Reihenfolge. */
export const lashExtensionTechniques: PriceGroupData[] = [
  {
    title: "1:1 Technik",
    rows: [
      { treatment: "Neuanlage", duration: "1 Std. 20 Min.", price: "99 €" },
      { treatment: "Auffüllen nach 2 Wochen", duration: "1 Std. 20 Min.", price: "55 €" },
      { treatment: "Auffüllen nach 3 Wochen", duration: "1 Std. 30 Min.", price: "60 €" },
      { treatment: "Auffüllen nach 4 Wochen", duration: "1 Std. 30 Min.", price: "65 €" },
    ],
  },
  {
    title: "2D Technik",
    rows: [
      { treatment: "Neuanlage", duration: "2 Std.", price: "130 €" },
      { treatment: "Auffüllen nach 2 Wochen", duration: "1 Std. 30 Min.", price: "65 €" },
      { treatment: "Auffüllen nach 3 Wochen", duration: "1 Std. 30 Min.", price: "75 €" },
      { treatment: "Auffüllen nach 4 Wochen", duration: "1 Std. 30 Min.", price: "85 €" },
    ],
  },
  {
    title: "3D Technik",
    rows: [
      { treatment: "Neuanlage", duration: "2 Std.", price: "140 €" },
      { treatment: "Auffüllen nach 2 Wochen", duration: "1 Std. 30 Min.", price: "70 €" },
      { treatment: "Auffüllen nach 3 Wochen", duration: "1 Std. 45 Min.", price: "80 €" },
      { treatment: "Auffüllen nach 4 Wochen", duration: "1 Std. 45 Min.", price: "90 €" },
    ],
  },
  {
    title: "4D Technik",
    rows: [
      { treatment: "Neuanlage", duration: "2 Std.", price: "140 €" },
      { treatment: "Auffüllen nach 2 Wochen", duration: "1 Std. 30 Min.", price: "70 €" },
      { treatment: "Auffüllen nach 3 Wochen", duration: "1 Std. 40 Min.", price: "80 €" },
      { treatment: "Auffüllen nach 4 Wochen", duration: "1 Std. 45 Min.", price: "90 €" },
    ],
  },
  {
    title: "5D Technik",
    rows: [
      { treatment: "Neuanlage", duration: "2 Std.", price: "150 €" },
      { treatment: "Auffüllen nach 2 Wochen", duration: "1 Std. 30 Min.", price: "80 €" },
      { treatment: "Auffüllen nach 3 Wochen", duration: "1 Std. 45 Min.", price: "90 €" },
      { treatment: "Auffüllen nach 4 Wochen", duration: "1 Std. 45 Min.", price: "100 €" },
    ],
  },
  {
    title: "Entfernen",
    rows: [{ treatment: "Wimpernverlängerung entfernen", duration: "30 Min.", price: "25 €" }],
  },
];

export const lashLiftingGroups: PriceGroupData[] = [
  {
    title: "Klassisches Wimpernlifting",
    rows: [
      { treatment: "Ohne Färben", duration: "45 Min.", price: "69 €" },
      { treatment: "Mit Färben", duration: "1 Std.", price: "79 €" },
    ],
  },
  {
    title: "Koreanisches Wimpernlifting",
    note: "Für extra Schwung – neue Technologie.",
    rows: [
      { treatment: "Ohne Färben", duration: "40 Min.", price: "69 €" },
      { treatment: "Mit Färben", duration: "50 Min.", price: "79 €" },
    ],
  },
];

export const browGroups: PriceGroupData[] = [
  {
    title: "Augenbrauenstyling",
    rows: [
      { treatment: "Augenbrauen färben", duration: "25 Min.", price: "20 €" },
      { treatment: "Augenbrauen färben und zupfen", duration: "30 Min.", price: "35 €" },
    ],
  },
  {
    title: "Brow Lifting und Laminierung",
    rows: [
      { treatment: "Augenbrauenlifting", duration: "40 Min.", price: "49 €" },
      { treatment: "Augenbrauenlaminierung mit Färben", duration: "45 Min.", price: "59 €" },
      { treatment: "Augenbrauenlaminierung mit Färben und Zupfen", duration: "45 Min.", price: "69 €" },
    ],
  },
];

export const comboPackageRows: PriceRow[] = [
  {
    treatment: "Wimpernlifting mit Färben + Augenbrauenlifting mit Färben und Zupfen",
    duration: "1 Std. 30 Min.",
    price: "128 €",
  },
];

export const priceJumpLinks = [
  { label: "Wimpernverlängerung", href: "#wimpernverlaengerung" },
  { label: "Lash Lifting", href: "#lash-lifting" },
  { label: "Brow Lifting", href: "#brow-lifting" },
  { label: "Kombi-Paket", href: "#kombi-paket" },
] as const;
