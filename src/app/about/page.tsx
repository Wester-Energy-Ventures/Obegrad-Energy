import type { Metadata } from "next";
import {
  Compass,
  Target,
  ShieldCheck,
  Eye,
  Scale,
  Users,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/ui/CtaSection";
import { company } from "@/data/company";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Western Energy and Ventures Pvt. Ltd., a Nepal-based energy venture focused on hydropower development, sustainable energy and long-term value creation.",
  alternates: { canonical: "/about" },
};

const valueIcons = [
  ShieldCheck,
  LeafProfile,
  LayoutEngineer,
  ClipboardCheck,
  Users,
  ChartLong,
];

function LeafProfile() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-6 w-6"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function LayoutEngineer() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-6 w-6"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function ChartLong() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-6 w-6"
    >
      <path d="M3 3v18h18" />
      <path d="M7 15l3-4 3 3 4-6" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Western Energy and Ventures"
        subtitle="A Nepal-based energy venture focused on responsible hydropower development."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Company intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="Building Long-Term Value Through Clean Energy"
            />
            <div className="text-muted mt-5 space-y-4 text-sm leading-relaxed sm:text-base">
              <p>{company.description}</p>
              <p>
                Our current focus is the development of the{" "}
                <strong className="text-ink">Obregad Hydropower Project</strong>
                , a planned 9 MW run-of-river project on the Obregad Khola in
                Jumla District, Karnali Province. We approach development
                methodically — from survey and studies through approvals,
                financing, construction and commissioning.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {company.focusAreas.map((area, i) => {
              const Icon = [Compass, LeafProfile, LayoutEngineer, Scale][i % 4];
              return (
                <Reveal key={area.title} delay={i * 0.05}>
                  <div className="border-line bg-mist hover:border-brand-200 hover:shadow-card-hover h-full rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:bg-white">
                    <div className="bg-brand-700 flex h-11 w-11 items-center justify-center rounded-xl text-white">
                      <Icon aria-hidden className="h-5 w-5" />
                    </div>
                    <h3 className="text-ink mt-4 font-bold">{area.title}</h3>
                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="bg-brand-800 relative overflow-hidden py-16 text-white lg:py-24">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="Vision, Mission & Values"
              title="What Guides Us"
              subtitle="The following vision, mission and values are proposed corporate statements."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="bg-leaf-500 flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                  <Eye aria-hidden className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">Our Vision</h3>
                <p className="mt-2 text-white/75">{company.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="bg-leaf-500 flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                  <Target aria-hidden className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">Our Mission</h3>
                <p className="mt-2 text-white/75">{company.mission}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <h3 className="text-lg font-bold">Our Values</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {company.values.map((value, i) => {
                  const Icon = valueIcons[i % valueIcons.length];
                  return (
                    <div key={value.title} className="flex items-start gap-3">
                      <div className="text-leaf-200 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon aria-hidden className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">{value.title}</p>
                        <p className="mt-0.5 text-sm text-white/70">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 text-xs text-white/50">
                Proposed corporate values — subject to final confirmation by the
                company.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Governance & Transparency"
              title="Proposed Governance Framework"
              subtitle="A corporate governance framework proposed for the project and company. This is not presented as already legally finalized."
            />
            <p className="text-muted mt-4 text-sm leading-relaxed">
              The framework is designed to provide investors and stakeholders
              with transparency, oversight and regular reporting as the project
              develops.
            </p>
            <div className="mt-8">
              <Button href="/investors" variant="outline">
                View Investor Information
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {company.governance.map((item) => (
                <li
                  key={item}
                  className="border-line text-ink shadow-card flex items-start gap-3 rounded-2xl border bg-white p-4 text-sm"
                >
                  <span className="bg-leaf-50 text-leaf-600 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <ClipboardCheck aria-hidden className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Corporate details placeholders */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Corporate Information"
              title="Company Details"
              subtitle="Formal registration and corporate details will be published here once confirmed by the company."
            />
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Date of Establishment",
                  value: "To be provided",
                  icon: FileSearch,
                },
                {
                  label: "Registration Number",
                  value: "To be provided",
                  icon: FileSearch,
                },
                {
                  label: "Corporate Office",
                  value: "To be provided",
                  icon: Compass,
                },
                {
                  label: "Contact Details",
                  value: "To be provided",
                  icon: Users,
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="border-brand-200 bg-mist rounded-2xl border border-dashed p-5"
                  >
                    <div className="text-brand-500 ring-brand-100 flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1">
                      <Icon aria-hidden className="h-5 w-5" />
                    </div>
                    <h3 className="text-ink mt-3 text-sm font-bold">
                      {card.label}
                    </h3>
                    <p className="text-muted mt-1 text-sm">{card.value}</p>
                  </div>
                );
              })}
            </div>
            <DisclaimerBox className="mt-6">
              No company history, registration numbers or contact details are
              published because the information has not yet been confirmed by
              the company. We do not publish unconfirmed corporate information.
            </DisclaimerBox>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Explore the Obregad Hydropower Project"
        subtitle="A planned 9 MW run-of-river hydropower project in Jumla, Karnali Province, Nepal."
        primary={{ label: "Explore Our Project", href: "/project" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
