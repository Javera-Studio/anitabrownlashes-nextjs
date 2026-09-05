export interface FaqItem {
  question: string;
  answer: string;
  category: "wimpern" | "lifting" | "allgemein";
}

export const faqItems: FaqItem[] = [
  {
    question: "Wie lange hält eine Wimpernverlängerung?",
    answer:
      "Je nach Wachstum deiner Naturwimpern empfehle ich eine Auffüllung alle 2 bis 4 Wochen. Nach etwa 5 Wochen wird in der Regel ein neues Set benötigt.",
    category: "wimpern",
  },
  {
    question: "Wie oft muss man die Wimpernverlängerung auffüllen lassen?",
    answer:
      "In der Regel empfiehlt sich ein Auffülltermin alle 2 bis 4 Wochen, abhängig vom natürlichen Wimpernwachstum.",
    category: "wimpern",
  },
  {
    question: "Ist eine Wimpernverlängerung schädlich für die natürlichen Wimpern?",
    answer:
      "Bei fachgerechter Anwendung und der richtigen Technik werden die natürlichen Wimpern nicht geschädigt. Wichtig sind eine professionelle Applikation und die passende Länge und Stärke der Extensions.",
    category: "wimpern",
  },
  {
    question: "Wie lange hält ein Lash Lifting?",
    answer:
      "Der Effekt hält je nach natürlichem Wimpernwachstum etwa 6 bis 8 Wochen an. Durch das Lifting wirken die Naturwimpern länger, geschwungener und voller.",
    category: "lifting",
  },
  {
    question: "Was ist ein Lash Lifting?",
    answer:
      "Ein Lash Lifting ist eine Behandlung, bei der die natürlichen Wimpern dauerhaft nach oben geformt werden. Dadurch wirken die Wimpern länger, geschwungener und offener – ganz ohne Extensions.",
    category: "lifting",
  },
  {
    question: "Schädigt ein Lash Lifting die natürlichen Wimpern?",
    answer:
      "Bei einer professionellen Durchführung und der richtigen Einwirkzeit werden die natürlichen Wimpern nicht geschädigt.",
    category: "lifting",
  },
  {
    question: "Werden die Wimpern beim Lash Lifting auch gefärbt?",
    answer:
      "Ja, auf Wunsch können die Wimpern im Rahmen der Behandlung zusätzlich gefärbt werden. Dadurch wirken sie dunkler und definierter.",
    category: "lifting",
  },
  {
    question: "Was ist ein Korean Lash Lifting?",
    answer:
      "Das Korean Lash Lifting ist eine moderne Lifting-Methode, bei der besonders auf eine schonende Behandlung und eine intensive Pflege der natürlichen Wimpern geachtet wird.",
    category: "lifting",
  },
  {
    question: "Warum ist ein Korean Lash Lifting besser?",
    answer:
      "Das Korean Lash Lifting kombiniert einen schönen, natürlichen Schwung mit einem besonderen Fokus auf Pflege und Feuchtigkeit. Die Wimpern wirken gepflegt, glänzend und gesund.",
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
      "Je nach Behandlung dauert dein Termin zwischen 60 Minuten und etwa 3 Stunden. Die genaue Dauer richtet sich nach der gewählten Behandlung.",
    category: "allgemein",
  },
  {
    question: "Arbeitest du mit hochwertigen Produkten?",
    answer:
      "Ja, ich verwende für alle Behandlungen ausschließlich hochwertige und professionelle Produkte, um beste Qualität und langanhaltende Ergebnisse zu gewährleisten.",
    category: "allgemein",
  },
  {
    question: "Muss ich vor meinem Termin etwas beachten?",
    answer:
      "Bitte erscheine möglichst ohne Augen-Make-up zu deinem Termin. So kann die Behandlung optimal vorbereitet und durchgeführt werden.",
    category: "allgemein",
  },
  {
    question: "Kann ich mich vor der Behandlung beraten lassen?",
    answer:
      "Natürlich. Vor jeder Behandlung nehme ich mir Zeit für eine persönliche Beratung, um gemeinsam den Look zu finden, der am besten zu dir passt.",
    category: "allgemein",
  },
];
