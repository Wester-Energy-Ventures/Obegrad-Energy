export type NewsCategory =
  "news" | "project-updates" | "public-notices";

export type NewsArticle = {
  slug: string;
  title: string;
  date: Date;
  category: NewsCategory;
  excerpt: string;
  body: string[];
  /** True when this is a clearly-marked placeholder published by the site scaffold. */
  isPlaceholder: boolean;
  image?: string;
  /** Optional caption overlaid on the image, e.g. a person's name and title. */
  imageCaption?: string;
  /** Image frame ratio so the photo isn't cropped or overflowing. */
  imageRatio?: "16:9" | "24:10";
  readMinutes?: number;
};

export const newsCategories: {
  key: NewsCategory;
  label: string;
  description: string;
}[] = [
  {
    key: "news",
    label: "News",
    description: "Company and industry news.",
  },
  {
    key: "project-updates",
    label: "Project Updates",
    description: "Progress and milestones for the Obregad Hydropower Project.",
  },
  {
    key: "public-notices",
    label: "Public Notices",
    description: "Formal public notices and announcements.",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    slug: "kashyap-advisors-strategic-partnership",
    title: "Kashyap Advisors Joins as Strategic Partner for the Obregad Hydropower Project",
    date: new Date(2026, 8, 23),
    category: "news",
    excerpt:
      "Western Energy and Ventures is proud to announce its partnership with Kashyap Advisors and Kashyap Capital Holdings as strategic partner and investor in the Obregad Hydropower Project.",
    body: [
      "Western Energy and Ventures Pvt. Ltd. is pleased to announce a strategic partnership with Kashyap Advisors and Kashyap Capital Holdings for the development of the 9 MW Obregad Hydropower Project.",
      "Kashyap Capital Holdings is a Nepal-based private investment institution focused on energy, infrastructure, technology and emerging industries. Under the partnership, Kashyap Advisors will support the project as a strategic partner and investor, with an intended investment commitment of NPR 15 crore in the project.",
      "This partnership reflects shared confidence in the Obregad Hydropower Project and in Nepal's growing clean-energy sector. Western Energy and Ventures will continue to work closely with its partners to deliver reliable, responsible hydropower infrastructure and lasting value for stakeholders and local communities.",
      "Further announcements regarding the project and its partners will be published here as they become available.",
    ],
    isPlaceholder: false,
    image: "/images/kashyapadivsor.jpg",
    imageRatio: "24:10",
    imageCaption: "Dipesh Ghimire · Chairman, Kashyap Capital Holdings",
    readMinutes: 2,
  },
  {
    slug: "welcome-to-western-energy-ventures",
    title: "Welcome to Western Energy and Ventures Pvt. Ltd.",
    date: new Date(2026, 0, 15),
    category: "news",
    excerpt:
      "An introduction to your company's website and the vision behind it.",
    body: [
      "This page is a placeholder. Company news will be published here as it becomes available.",
      "Please contact the company for the latest information.",
    ],
    isPlaceholder: true,
    image: "/images/herosection.png",
    imageRatio: "24:10",
    readMinutes: 1,
  },
  {
    slug: "obregad-project-development-update",
    title: "Obregad Hydropower Project — Development Update",
    date: new Date(2026, 0, 15),
    category: "project-updates",
    excerpt:
      "Updates on the development of the 9 MW Obregad Hydropower Project.",
    body: [
      "This page is a placeholder. Development updates for the Obregad Hydropower Project will be published here as they occur.",
      "For the current stage of the project, please see the Project Development page.",
    ],
    isPlaceholder: true,
    image: "/images/hydropowerproject-wide.jpg",
    imageRatio: "24:10",
    readMinutes: 1,
  },
];

export const notices: NewsArticle[] = [
  {
    slug: "notice-partnership-with-kashyap-advisors",
    title: "Strategic Partnership with Kashyap Advisors",
    date: new Date(2026, 8, 23),
    category: "public-notices",
    excerpt:
      "Notice of the strategic partnership between Western Energy and Ventures and Kashyap Advisors / Kashyap Capital Holdings for the Obregad Hydropower Project.",
    body: [
      "Western Energy and Ventures Pvt. Ltd. hereby announces that it has entered into a strategic partnership with Kashyap Advisors and Kashyap Capital Holdings for the Obregad Hydropower Project.",
      "Kashyap Capital Holdings, a Nepal-based private investment institution, will support the project as a strategic partner and investor with an intended investment commitment of NPR 15 crore, subject to definitive agreements and documentation.",
      "This notice is published for the information of shareholders, prospective investors and the public.",
    ],
    isPlaceholder: false,
    image: "/images/kashyapadivsor.jpg",
    imageRatio: "24:10",
    imageCaption: "Dipesh Ghimire · Chairman, Kashyap Capital Holdings",
    readMinutes: 1,
  },
  {
    slug: "notice-no-public-notices-yet",
    title: "Public Notices",
    date: new Date(2026, 0, 15),
    category: "public-notices",
    excerpt: "No public notices have been published yet.",
    body: [
      "No public notices have been published yet. Notices will appear here as they are issued.",
    ],
    isPlaceholder: true,
    readMinutes: 1,
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return [...newsArticles, ...notices].find((a) => a.slug === slug);
}

export function allArticleSlugs(): string[] {
  return [...newsArticles, ...notices].map((a) => a.slug);
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatArticleDate(date: Date): string {
  return formatDate(date);
}
