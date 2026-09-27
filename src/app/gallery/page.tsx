import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Gallery of the Obregad Hydropower Project and Western Energy and Ventures. Project photographs will be added as they become available.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Project Gallery"
        subtitle="A visual look at the project's site and activity. Photos will be added as they become available."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
