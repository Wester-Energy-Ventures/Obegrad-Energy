export type GalleryCategory =
  "project" | "site" | "engineering" | "community" | "corporate";

export type GalleryImage = {
  id: string;
  caption: string;
  category: GalleryCategory;
  src: string;
  /** Concept/illustration placeholder — NOT an actual photograph of the Obregad project. */
  isIllustration: boolean;
};

export const galleryCategories: {
  key: GalleryCategory;
  label: string;
}[] = [
  { key: "project", label: "Project" },
  { key: "site", label: "Site" },
  { key: "engineering", label: "Engineering" },
  { key: "community", label: "Community" },
  { key: "corporate", label: "Corporate" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g-photo-01",
    caption: "Hydropower project field and works activity",
    category: "project",
    src: "/images/hydropowerphoto-work-43.jpg",
    isIllustration: false,
  },
  {
    id: "g-photo-02",
    caption: "9 MW Obregad Hydropower Project site",
    category: "site",
    src: "/images/hydropowerproject-site-43.jpg",
    isIllustration: false,
  },
];

export const galleryNotice =
  "Project photographs from the Obregad Hydropower Project site and activity. Additional photos will be added here as they become available.";
