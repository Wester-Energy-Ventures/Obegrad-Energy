import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import CapitalChart from "@/components/charts/CapitalChart";
import InvestorForm from "@/components/forms/InvestorForm";
import Button from "@/components/ui/Button";
import ChairmanSection from "@/components/partnership/ChairmanSection";
import { investment } from "@/data/investment";
import { company } from "@/data/company";
import { ArrowRight, ShieldCheck, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Investment information for the 9 MW Obregad Hydropower Project: planned capital structure of NPR 190 crore, 70:30 debt/equity, and investor inquiry information.",
  alternates: { canonical: "/investors" },
};

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investors"
        title="Investment Information"
        subtitle="Planning-stage investment structure for the Obregad Hydropower Project."
        crumbs={[{ label: "Home", href: "/" }, { label: "Investors" }]}
      />

      {/* Investment structure */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Capital Structure"
              title="Investment Structure"
              subtitle="Planned capital structure on the current planning case. Final figures depend on the DPR, approvals, financing arrangements and definitive agreements."
            />
          </Reveal>
          <Reveal className="mt-10">
            <div className="border-line bg-mist rounded-3xl border p-6 sm:p-10">
              <CapitalChart />
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <p className="text-muted text-xs">{investment.sourceLabel}</p>
          </Reveal>
        </div>
      </section>

      {/* Participation table */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Participation"
              title="Investment Tickets"
              subtitle="Illustrative equity participation at different investment amounts, based on the NPR 57 crore total equity planning allocation."
            />
          </Reveal>
          <Reveal className="mt-10">
            <div className="border-line shadow-card overflow-hidden rounded-3xl border bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-sm">
                  <caption className="sr-only">
                    Illustrative investment tickets and approximate share of the
                    NPR 57 crore equity
                  </caption>
                  <thead className="bg-brand-800 text-left text-xs font-semibold tracking-wider text-white uppercase">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Investment Ticket
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Approx. Share of NPR 57 Cr Equity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-line divide-y">
                    {investment.tickets.map((ticket) => (
                      <tr
                        key={ticket.ticket}
                        className="hover:bg-mist/60 transition-colors"
                      >
                        <td className="text-ink px-6 py-3.5 font-semibold">
                          {ticket.ticket}
                        </td>
                        <td className="text-ink px-6 py-3.5">
                          <span className="bg-leaf-50 text-leaf-700 ring-leaf-100 inline-flex min-w-[72px] items-center justify-center rounded-full px-3 py-1 text-sm font-bold ring-1 ring-inset">
                            {ticket.share}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-line bg-mist/50 border-t px-6 py-4">
                <p className="text-muted text-xs leading-relaxed">
                  {investment.disclaimer}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Governance"
              title="Proposed Governance Framework"
              subtitle="Corporate governance proposed for the project and company. Not presented as legally finalized."
            />
            <ul className="mt-8 space-y-3">
              {company.governance.map((item) => (
                <li
                  key={item}
                  className="border-line bg-mist text-ink flex items-start gap-3 rounded-2xl border p-4 text-sm"
                >
                  <span className="bg-leaf-50 text-leaf-600 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <ShieldCheck aria-hidden className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="border-leaf-100 bg-leaf-50/70 flex items-start gap-3 rounded-3xl border p-6">
                <Scale
                  aria-hidden
                  className="text-leaf-600 mt-0.5 h-6 w-6 shrink-0"
                />
                <div>
                  <h2 className="text-ink font-bold">Investor Protection</h2>
                  <p className="text-muted mt-1 text-sm leading-relaxed">
                    Controls are proposed over related-party transactions,
                    additional debt and material project contract changes, with
                    quarterly reporting and annual audited financial statements.
                  </p>
                </div>
              </div>
              <DisclaimerBox>
                Participation details, ownership percentages and governance
                rights will be set out in definitive shareholder and financing
                documentation. Nothing on this page constitutes an offer or
                investment guarantee.
              </DisclaimerBox>
              <div className="border-line shadow-card rounded-3xl border bg-white p-6">
                <h3 className="text-ink font-bold">
                  Equity Planning Allocation
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="border-line flex justify-between gap-3 border-b pb-3">
                    <span className="text-muted">
                      Founder Equity Planning Allocation
                    </span>
                    <span className="text-ink font-bold">
                      {investment.founderEquityCr} crore
                    </span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span className="text-muted">
                      Investor / Private Placement Planning Allocation
                    </span>
                    <span className="text-ink font-bold">
                      {investment.privatePlacementCr} crore
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategic partnership + chairman */}
      <ChairmanSection />

      {/* Investor form */}
      <section id="investor-inquiry" className="bg-mist py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Submit an Investor Inquiry"
              subtitle="Interested in learning more? Submit an inquiry and our team will follow up with further information."
            />
            <div className="text-muted mt-6 space-y-4 text-sm">
              <p>
                Equity participation in the Obregad Hydropower Project is
                planned at{" "}
                <strong className="text-ink">
                  NPR {investment.equityCr} crore
                </strong>{" "}
                on the current planning case.
              </p>
              <p>
                Submitting this form is an expression of interest only. It does
                not create an investment agreement and does not imply that any
                equity is reserved or allocated to you.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/downloads" variant="outline">
                Download Investor Booklet
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InvestorForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
