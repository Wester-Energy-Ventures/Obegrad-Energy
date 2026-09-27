import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import EmptyState from "@/components/ui/EmptyState";
import Reveal from "@/components/ui/Reveal";
import NewsCard from "@/components/news/NewsCard";
import { notices } from "@/data/news";

export const metadata: Metadata = {
  title: "Notices",
  description:
    "Public notices, investor notices and project announcements from Western Energy and Ventures Pvt. Ltd.",
  alternates: { canonical: "/notices" },
};

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notices"
        title="Public Notices"
        subtitle="Public notices, investor notices and project announcements."
        crumbs={[{ label: "Home", href: "/" }, { label: "Notices" }]}
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            {notices.length > 0 ? (
              <div>
                <p className="bg-mist text-muted ring-line mb-8 max-w-3xl rounded-2xl px-4 py-3 text-sm ring-1 ring-inset">
                  Notices are published as they are issued by the company.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {notices.map((article) => (
                    <NewsCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            ) : (
              <EmptyState
                title="No notices published yet"
                description="Public notices will appear here as they are issued."
              />
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
