export const business = {
  name: "Anita Brows & Lashes",
  legalName: "Anita Lakatos e. U.",
  phone: "+43 699 1716 0022",
  phoneHref: "tel:+4369917160022",
  email: "anitabrowslashes@gmail.com",
  emailHref: "mailto:anitabrowslashes@gmail.com",
  whatsapp: "https://wa.me/4369917160022",
  website: "https://wimpernverlangerungwien.at/",
  address: {
    street: "Am Hof Färbergasse 4",
    zip: "1010",
    city: "Wien",
    country: "AT",
    full: "Am Hof Färbergasse 4, 1010 Wien",
  },
  geo: {
    latitude: 48.2103,
    longitude: 16.3691,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Anita Brows & Lashes 1010 Wien Am Hof Färbergasse 4"),
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Anita Brows & Lashes, Am Hof Färbergasse 4, 1010 Wien") +
    "&output=embed",
  instagram: "https://www.instagram.com/anita.browslashes/",
  instagramHandle: "@anita.browslashes",
  facebook: "https://www.facebook.com/100080103438845/",
  openingHours: [
    { days: "Montag – Dienstag", hours: "10:00 – 18:00" },
    { days: "Mittwoch", hours: "Geschlossen" },
    { days: "Donnerstag – Freitag", hours: "10:00 – 18:00" },
    { days: "Samstag – Sonntag", hours: "Geschlossen" },
  ],
  openingHoursSchema: [
    { dayOfWeek: ["Monday", "Tuesday"], opens: "10:00", closes: "18:00" },
    { dayOfWeek: ["Thursday", "Friday"], opens: "10:00", closes: "18:00" },
  ],
  copyright: "© 2026 Anita Brows & Lashes",
} as const;

/**
 * Zentrale Booking-Konfiguration. Aktuell Treatwell – kann später ohne
 * Codeänderung an anderen Stellen gegen eine andere Lösung (z. B.
 * SimplyBook.me) ausgetauscht werden, da alle CTAs hierher verweisen.
 */
export const bookingUrl = "https://buchung.treatwell.at/ort/anita-brows-lashes/";

export const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über Anita", href: "#ueber-anita" },
  { label: "Ergebnisse", href: "#ergebnisse" },
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
