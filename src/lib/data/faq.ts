export interface FaqItem {
  question: string;
  answer: string;
  category: "wimpern" | "lifting" | "allgemein";
}

export const faqItems: FaqItem[] = [
  {
    question: "Wie lange hält eine Wimpernverlängerung?",
    answer:
      "Je nach Wachstum Ihrer Naturwimpern empfehle ich eine Auffüllung alle 2 bis 4 Wochen. Nach etwa 5 Wochen wird in der Regel ein neues Set benötigt.",
    category: "wimpern",
  },
  {
    question: "Wie lange hält ein Lash Lifting?",
    answer:
      "Der Effekt hält je nach natürlichem Wimpernwachstum etwa 6 bis 8 Wochen an. Durch das Lifting wirken die Naturwimpern länger, geschwungener und voller.",
    category: "lifting",
  },
  {
    question: "Was ist ein Brow Lifting?",
    answer:
      "Beim Brow Lifting werden die natürlichen Augenbrauen sanft in Form gebracht und fixiert. Dadurch wirken sie voller, gepflegter und erhalten eine harmonische Form – ganz ohne tägliches Styling.",
    category: "lifting",
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer:
      "Je nach Behandlung dauert Ihr Termin zwischen 60 Minuten und etwa 3 Stunden. Die genaue Dauer richtet sich nach der gewählten Behandlung.",
    category: "allgemein",
  },
  {
    question: "Arbeiten Sie mit hochwertigen Produkten?",
    answer:
      "Ja, ich verwende für alle Behandlungen ausschließlich hochwertige und professionelle Produkte, um beste Qualität und langanhaltende Ergebnisse zu gewährleisten.",
    category: "allgemein",
  },
  {
    question: "Muss ich vor meinem Termin etwas beachten?",
    answer:
      "Bitte erscheinen Sie möglichst ohne Augen-Make-up zu Ihrem Termin. So kann die Behandlung optimal vorbereitet und durchgeführt werden.",
    category: "allgemein",
  },
  {
    question: "Kann ich mich vor der Behandlung beraten lassen?",
    answer:
      "Natürlich. Vor jeder Behandlung nehme ich mir Zeit für eine persönliche Beratung, um gemeinsam den Look zu finden, der am besten zu Ihnen passt.",
    category: "allgemein",
  },
];
