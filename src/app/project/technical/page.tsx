import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import TechnicalSpecGrid from "@/components/project/TechnicalSpecGrid";
import KeyFactsPanel from "@/components/project/KeyFactsPanel";
import Button from "@/components/ui/Button";
import { project } from "@/data/project";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Configuration",
  description:
    "Technical configuration of the 9 MW Obregad Hydropower Project: Francis turbine configuration, gross head ~88 m, net head 78.03 m, design discharge 13.46 m³/s.",
  alternates: { canonical: "/project/technical" },
};

export default function ProjectTechnicalPage() {
  const technicalFacts = Object.entries(project.technical).flatMap(
    ([key, value]) => {
      const labels: Record<string, string> = {
        generatingUnits: "Generating Units",
        turbine: "Turbine",
        grossHead: "Gross Head",
        netHead: "Net Head (Planning)",
        designDischarge: "Design Discharge",
        annualSaleableEnergy: "Annual Saleable Energy",
        evacuationVoltage: "Evacuation Voltage",
        evacuationLength: "Evacuation Length",
      };
      if (!labels[key]) return [];
      return [{ label: labels[key], value }];
    }
  );

  return (
    <>
      <PageHeader
        eyebrow="Project Technicals"
        title="Technical Configuration"
        subtitle="Engineering parameters of the Obregad Hydropower Project on the current planning basis."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Project", href: "/project" },
          { label: "Technical Configuration" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Planning Basis"
              title="Technical Parameters"
              subtitle="Detailed hydraulic, civil and equipment dimensions will be finalized through the Detailed Project Report (DPR) and the procurement process."
            />
          </Reveal>
          <Reveal className="mt-12">
            <TechnicalSpecGrid />
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <KeyFactsPanel facts={technicalFacts} />
              <div className="space-y-4">
                <div className="border-line bg-leaf-50/70 rounded-3xl border p-6">
                  <h2 className="text-leaf-700 text-sm font-bold tracking-wider uppercase">
                    Run-of-River Principle
                  </h2>
                  <p className="text-ink mt-3 text-sm leading-relaxed">
                    A run-of-river scheme generates electricity from the natural
                    flow of the river. Water is captured at an intake, conveyed
                    to the powerhouse through the waterway system, and returned
                    to the river downstream after passing through the turbine —
                    without large-scale storage.
                  </p>
                </div>
                <DisclaimerBox>{project.technicalNote}</DisclaimerBox>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site text-center">
          <Reveal>
            <h2 className="text-ink text-2xl font-bold tracking-tight sm:text-3xl">
              See how the project progresses
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/project/development" variant="primary">
                View Development Status
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/investors/financials" variant="outline">
                View Financial Profile
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
