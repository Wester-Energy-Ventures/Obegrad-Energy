import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EmptyState from "@/components/ui/EmptyState";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import DocumentCard, {
  documentCategoryLabel,
} from "@/components/documents/DocumentCard";
import { documentCategories, documents } from "@/data/documents";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download project documents, corporate documents and notices from Western Energy and Ventures Pvt. Ltd., including the Obregad Hydropower Project Investor Booklet.",
  alternates: { canonical: "/downloads" },
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Reports & Documents"
        subtitle="Project documents, corporate documents and notices. Placeholder files are clearly marked and will be replaced by official documents."
        crumbs={[{ label: "Home", href: "/" }, { label: "Downloads" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site space-y-16">
          {documentCategories.map((category) => {
            const items = documents.filter(
              (doc) => doc.category === category.key
            );
            return (
              <div key={category.key}>
                <Reveal>
                  <SectionHeading
                    eyebrow={documentCategoryLabel(category.key)}
                    title={category.label}
                    subtitle={category.description}
                  />
                </Reveal>
                <Reveal className="mt-8">
                  {items.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((doc) => (
                        <DocumentCard key={doc.slug} doc={doc} />
                      ))}
                    </div>
                  ) : (
                    <EmptyState
                      title="No documents in this category yet"
                      description="Documents will appear here as they become available."
                    />
                  )}
                </Reveal>
              </div>
            );
          })}

          <Reveal>
            <DisclaimerBox>
              Placeholder documents are provided so that the site structure can
              be tested. They contain no confirmed company data. Official PDFs
              supplied by the company can be dropped into the{" "}
              <code className="rounded bg-white/60 px-1 py-0.5 text-xs">
                /public/documents
              </code>{" "}
              folder (see README) and linked automatically from the data file.
            </DisclaimerBox>
          </Reveal>
        </div>
      </section>
    </>
  );
}
