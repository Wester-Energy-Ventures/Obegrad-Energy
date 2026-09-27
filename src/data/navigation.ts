export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Project",
    href: "/project",
    children: [
      { label: "Project Overview", href: "/project" },
      { label: "Location", href: "/project/location" },
      { label: "Technical Configuration", href: "/project/technical" },
      { label: "Development Status", href: "/project/development" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Investment Structure", href: "/investors" },
      { label: "Financial Profile", href: "/investors/financials" },
    ],
  },
  {
    label: "News & Notices",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Notices", href: "/notices" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investors", href: "/investors" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

export const footerResources: { label: string; href: string }[] = [
  { label: "Investor Booklet", href: "/downloads" },
  { label: "Project Information", href: "/project" },
  { label: "Reports", href: "/downloads" },
  { label: "Notices", href: "/notices" },
  { label: "Disclaimer", href: "/disclaimer" },
];
