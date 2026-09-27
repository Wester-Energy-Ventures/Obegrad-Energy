export type DocumentCategory =
  "project-documents" | "corporate-documents" | "notices";

export type CompanyDocument = {
  slug: string;
  title: string;
  category: DocumentCategory;
  description: string;
  date: string;
  fileType: string;
  fileSize?: string;
  href: string;
  /** True when the file is a placeholder waiting to be replaced by the official document. */
  isPlaceholder: boolean;
};

export const documentCategories: {
  key: DocumentCategory;
  label: string;
  description: string;
}[] = [
  {
    key: "project-documents",
    label: "Project Documents",
    description:
      "Investor Booklet, project overview, technical documents and updates.",
  },
  {
    key: "corporate-documents",
    label: "Corporate Documents",
    description: "Company profile and corporate information.",
  },
  {
    key: "notices",
    label: "Notices",
    description: "Public notices, investor notices and project announcements.",
  },
];

export const documents: CompanyDocument[] = [
  {
    slug: "investor-booklet",
    title: "Investor Booklet",
    category: "project-documents",
    description:
      "Overview of the Obregad Hydropower Project and the investment opportunity.",
    date: "2026",
    fileType: "PDF",
    fileSize: "Placeholder",
    href: "/documents/investor-booklet.pdf",
    isPlaceholder: true,
  },
  {
    slug: "project-overview",
    title: "Project Overview",
    category: "project-documents",
    description: "Summary of the Obregad Hydropower Project planning case.",
    date: "2026",
    fileType: "PDF",
    fileSize: "Placeholder",
    href: "/documents/project-overview.pdf",
    isPlaceholder: true,
  },
  {
    slug: "company-profile",
    title: "Company Profile",
    category: "corporate-documents",
    description: "Corporate profile of Western Energy and Ventures Pvt. Ltd.",
    date: "2026",
    fileType: "PDF",
    fileSize: "Placeholder",
    href: "/documents/company-profile.pdf",
    isPlaceholder: true,
  },
];

export function documentsByCategory(
  category: DocumentCategory
): CompanyDocument[] {
  return documents.filter((d) => d.category === category);
}
