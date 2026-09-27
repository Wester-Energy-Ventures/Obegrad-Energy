export const siteConfig = {
  name: "Western Energy and Ventures Pvt. Ltd.",
  shortName: "Western Energy and Ventures",
  legalName: "Western Energy and Ventures Pvt. Ltd.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_NP",
  description:
    "Western Energy and Ventures Pvt. Ltd. is developing hydropower infrastructure in Nepal, including the 9 MW Obregad Hydropower Project in Jumla, Karnali Province.",
  keywords: [
    "Western Energy and Ventures Pvt. Ltd.",
    "hydropower",
    "hydropower Nepal",
    "renewable energy",
    "Obregad Hydropower Project",
    "Obregad Khola",
    "Jumla",
    "Karnali Province",
    "run-of-river",
    "9 MW",
  ] as string[],
} as const;

export const projectTagline = {
  name: "Obregad Hydropower Project",
  capacity: "9 MW",
  type: "Run-of-River",
  location:
    "Obregad Khola, Patrasi Rural Municipality, Jumla District, Karnali Province, Nepal",
} as const;
