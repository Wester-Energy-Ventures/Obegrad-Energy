import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import ProjectTimeline from "@/components/project/ProjectTimeline";
import Button from "@/components/ui/Button";
import { project } from "@/data/project";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Development Status",
  description:
    "Development status of the 9 MW Obregad Hydropower Project: survey licence obtained, DPR in development, PPA targeted, construction targeting a June 2030 COD.",
  alternates: { canonical: "/project/development" },
};

export default function ProjectDevelopmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project Development"
        title="Development Status"
        subtitle="Where the Obregad Hydropower Project stands today, and the stages planned ahead."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Project", href: "/project" },
          { label: "Development Status" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Status Legend"
                  title="Planned Development Roadmap"
                  subtitle="The survey licence for the project has been obtained. Remaining stages are shown in their planned sequence with clear status labels."
                />
                <p className="text-muted mt-4 text-sm leading-relaxed">
                  Statuses are colour-coded to avoid any ambiguity about work
                  that is completed versus work that is planned, targeted or
                  pending. Completed stages are shown in green; nothing else is
                  presented as completed.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    ["bg-leaf-500", "Obtained / Completed"],
                    ["bg-brand-600", "In Development"],
                    ["bg-amber-500", "Planned / Target"],
                    ["bg-slate-400", "Pending / Future"],
                  ].map(([color, label]) => (
                    <div
                      key={label}
                      className="border-line bg-mist text-ink flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium"
                    >
                      <span
                        aria-hidden
                        className={`h-2.5 w-2.5 rounded-full ${color}`}
                      />
                      {label}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href="/project" variant="outline">
                    Back to Project Overview
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
            <ProjectTimeline />
          </div>

          <Reveal className="mt-16">
            <DisclaimerBox>{project.overview[2]}</DisclaimerBox>
          </Reveal>
        </div>
      </section>
    </>
  );
}
