import type { Metadata } from "next";
import { FileWarning } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Website disclaimer for Western Energy and Ventures Pvt. Ltd. and the Obregad Hydropower Project.",
  alternates: { canonical: "/disclaimer" },
};

const sections: { title: string; body: string }[] = [
  {
    title: "Informational Purpose Only",
    body: "This website is for general informational purposes and does not constitute a public offer, solicitation, investment guarantee or financial advice. Nothing on this website should be relied upon as an offer to sell or a solicitation to buy any securities or investment.",
  },
  {
    title: "Planning Stage Information",
    body: "Project information presented on this website, including capacity, technical parameters, costs, financial projections and timelines, is based on the current planning/development-stage case for the Obregad Hydropower Project. Project specifications may change.",
  },
  {
    title: "Financial Projections Are Estimates",
    body: "All financial projections, including modelled project and equity returns, are planning-case estimates that are subject to detailed studies, approvals, financing arrangements, definitive agreements and actual project performance. Returns are not guaranteed.",
  },
  {
    title: "Investor Participation",
    body: "Any investor participation is subject to applicable laws, agreed valuation, subscription price, allotment and definitive shareholder and financing documentation. Nothing on this website implies that equity is reserved, allocated or guaranteed to any person.",
  },
  {
    title: "Regulatory Approvals",
    body: "Project development is subject to required technical, financial, environmental and regulatory approvals and other factors. The survey licence stage has been obtained; other approvals and financing remain to be completed.",
  },
  {
    title: "Accuracy of Information",
    body: "While we aim to keep information accurate and up to date, information on this website may change without notice. We are not liable for any loss arising from reliance on the information provided.",
  },
  {
    title: "Placeholders and Unconfirmed Information",
    body: "Some information is not yet published because it has not been confirmed by the company (for example, official contact details and corporate registration details). Placeholder content is clearly marked and does not represent confirmed facts. Conceptual illustrations are not actual project photographs.",
  },
  {
    title: "External Links",
    body: "This website may contain links to external websites. We are not responsible for the content or privacy practices of external sites.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Disclaimer"
        subtitle="Important information for users of this website."
        crumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <DisclaimerBox>
              Please read this disclaimer carefully before using this website or
              relying on any information it contains.
            </DisclaimerBox>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.03}>
                <div className="border-line bg-mist h-full rounded-3xl border p-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-50 text-brand-700 ring-brand-100 flex h-8 w-8 items-center justify-center rounded-full ring-1">
                      <FileWarning aria-hidden className="h-4 w-4" />
                    </span>
                    <h2 className="text-ink font-bold">{section.title}</h2>
                  </div>
                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <p className="text-muted text-sm">
              Privacy Policy and Terms of Use are incorporated into this
              disclaimer for the purposes of this website.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="/" variant="primary">
                Back to Home
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
