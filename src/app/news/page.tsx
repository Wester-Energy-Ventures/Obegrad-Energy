import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import NewsTabs from "@/components/news/NewsTabs";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "News, project updates, public notices and investor updates from Western Energy and Ventures Pvt. Ltd.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title="Latest News"
        subtitle="News, project updates, public notices and investor updates."
        crumbs={[{ label: "Home", href: "/" }, { label: "News & Updates" }]}
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <NewsTabs />
          </Reveal>
        </div>
      </section>
    </>
  );
}
