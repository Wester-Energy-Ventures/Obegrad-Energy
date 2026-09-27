import type { Metadata } from "next";
import { PiggyBank, Wallet, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import { CostDonut, CostBars, CostTable } from "@/components/charts/CostCharts";
import Button from "@/components/ui/Button";
import { financials } from "@/data/financials";
import { investment } from "@/data/investment";

export const metadata: Metadata = {
  title: "Financial Profile",
  description:
    "Financial profile of the Obregad Hydropower Project: modelled planning-case Project IRR ~18.4%, Equity IRR ~24.7%, and a planning cost breakdown of NPR 190 crore.",
  alternates: { canonical: "/investors/financials" },
};

export default function FinancialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investors · Financials"
        title="Financial Profile"
        subtitle="Modelled planning-case financial information for the Obregad Hydropower Project."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
          { label: "Financial Profile" },
        ]}
      />

      {/* IRR cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Modelled Returns"
              title="Planning-Case Financial Indicators"
              subtitle={`Label: ${financials.irrLabel}. These are modelled planning figures, not guarantees.`}
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: PiggyBank,
                label: financials.projectIrr.label,
                value: financials.projectIrr.value,
                detail: financials.projectIrr.detail,
              },
              {
                icon: Wallet,
                label: financials.equityIrr.label,
                value: financials.equityIrr.value,
                detail: financials.equityIrr.detail,
              },
            ].map((card, i) => (
              <Reveal key={card.label} delay={i * 0.06}>
                <div className="border-line bg-mist flex h-full items-start gap-5 rounded-3xl border p-7">
                  <div className="bg-brand-700 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white">
                    <card.icon aria-hidden className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-muted text-sm font-bold tracking-wider uppercase">
                      {card.label}
                    </h2>
                    <p className="text-ink mt-2 text-4xl font-bold tracking-tight">
                      {card.value}
                    </p>
                    <p className="text-muted mt-2 text-sm">{card.detail}</p>
                    <span className="mt-3 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200 ring-inset">
                      {financials.irrLabel}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <DisclaimerBox>{financials.disclaimer}</DisclaimerBox>
          </Reveal>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Project Cost"
              title="Project Cost Breakdown"
              subtitle="Planning allocation of the NPR 190 crore total project cost. This is a planning allocation, not a DPR bill of quantities."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="border-line shadow-card rounded-3xl border bg-white p-6">
                <h2 className="text-muted mb-2 text-sm font-bold tracking-wider uppercase">
                  Donut Chart
                </h2>
                <CostDonut />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="border-line shadow-card rounded-3xl border bg-white p-6">
                <h2 className="text-muted mb-2 text-sm font-bold tracking-wider uppercase">
                  Bar Chart
                </h2>
                <CostBars />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <CostTable />
          </Reveal>

          <Reveal className="mt-6">
            <DisclaimerBox>{investment.costBreakdownDisclaimer}</DisclaimerBox>
          </Reveal>
        </div>
      </section>

      {/* Capital structure summary */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Summary"
              title="Planned Capital Structure at a Glance"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Project Cost", value: "NPR 190 crore" },
              { label: "Senior Debt Target", value: "NPR 133 crore · 70%" },
              { label: "Total Equity", value: "NPR 57 crore · 30%" },
              { label: "Target COD", value: "June 2030" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <div className="border-line bg-mist h-full rounded-2xl border p-6 text-center">
                  <p className="text-muted text-xs font-semibold tracking-wider uppercase">
                    {item.label}
                  </p>
                  <p className="text-ink mt-3 text-2xl font-bold tracking-tight">
                    {item.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/downloads" variant="primary">
              Download Investor Booklet
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
