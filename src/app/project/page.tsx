import type { Metadata } from "next";
import { ArrowRight, MapPin, Wrench, GitBranch } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import KeyFactsPanel from "@/components/project/KeyFactsPanel";
import TechnicalSpecGrid from "@/components/project/TechnicalSpecGrid";
import ProjectTimeline from "@/components/project/ProjectTimeline";
import Button from "@/components/ui/Button";
import { project } from "@/data/project";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Obregad Hydropower Project",
  description:
    "The Obregad Hydropower Project is a planned 9 MW run-of-river hydropower project on the Obregad Khola, Patrasi Rural Municipality, Jumla District, Karnali Province, Nepal.",
  alternates: { canonical: "/project" },
};

const projectJsonLd = {
  "@context": "https://schema.org",
  "@type": "Project",
  name: project.name,
  description:
    "A planned 9 MW run-of-river hydropower project on the Obregad Khola in Jumla District, Karnali Province, Nepal. Planning/development stage.",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patrasi Rural Municipality, Jumla District",
      addressRegion: "Karnali Province",
      addressCountry: "Nepal",
    },
  },
};

export default function ProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <PageHeader
        eyebrow="Our Project"
        title={project.name}
        subtitle={`${project.subtitle} · ${project.locationText}`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Project" }]}
      />

      {/* Overview + key facts */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Project Overview"
              title="A Clean-Energy Development on the Obregad Khola"
            />
            <div className="text-muted mt-5 space-y-4 text-sm leading-relaxed sm:text-base">
              {project.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-line bg-mist rounded-2xl border p-5">
                <div className="bg-leaf-50 text-leaf-600 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Wrench aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="text-ink mt-3 font-bold">9 MW Installed</h3>
                <p className="text-muted mt-1 text-sm">
                  Two generating units of approximately 4.5 MW each.
                </p>
              </div>
              <div className="border-line bg-mist rounded-2xl border p-5">
                <div className="bg-leaf-50 text-leaf-600 flex h-10 w-10 items-center justify-center rounded-xl">
                  <GitBranch aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="text-ink mt-3 font-bold">Run-of-River</h3>
                <p className="text-muted mt-1 text-sm">
                  Water returned to the river after generation.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <div className="relative">
              <div
                aria-hidden
                className="from-brand-950 via-brand-800 to-leaf-800 absolute -inset-2 rotate-1 rounded-[2rem] bg-gradient-to-br opacity-10"
              />
              <div className="border-line shadow-card relative overflow-hidden rounded-3xl border bg-white">
                <div className="border-leaf-100 absolute top-4 left-4 z-10 rounded-full border bg-white/95 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-sm">
                  <span className="text-leaf-600">{project.capacity}</span>
                  {" · "}Run-of-River
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/hydropowerproject.jpg"
                    alt="Obregad Hydropower Project site"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="from-brand-950/85 via-brand-900/50 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-6 pt-14 pb-5">
                  <p className="text-lg font-bold text-white">{project.name}</p>
                  <p className="text-leaf-300 text-sm">
                    Obregad Khola · Jumla, Karnali Province, Nepal
                  </p>
                </div>
              </div>
            </div>
            <KeyFactsPanel facts={project.keyFacts} />
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Project Highlights"
              title="Key Characteristics"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="border-line shadow-card h-full rounded-2xl border bg-white p-6">
                  <h3 className="text-ink font-bold">{item.title}</h3>
                  <p className="text-muted mt-1.5 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <DisclaimerBox>{project.technicalNote}</DisclaimerBox>
          </Reveal>
        </div>
      </section>

      {/* Route cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Explore Further"
              title="Project Information"
              subtitle="Dive deeper into the project's location, technical configuration and development status."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="border-line bg-mist hover:shadow-card-hover flex h-full flex-col rounded-3xl border p-6 transition-all hover:-translate-y-0.5 hover:bg-white">
                <div className="bg-brand-700 flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <MapPin aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="text-ink mt-4 text-lg font-bold">Location</h3>
                <p className="text-muted mt-2 flex-1 text-sm">
                  {project.locationText}
                </p>
                <Button
                  href="/project/location"
                  variant="ghost"
                  className="mt-5 justify-start px-0"
                >
                  View Location
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="border-line bg-mist hover:shadow-card-hover flex h-full flex-col rounded-3xl border p-6 transition-all hover:-translate-y-0.5 hover:bg-white">
                <div className="bg-brand-700 flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <Wrench aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="text-ink mt-4 text-lg font-bold">
                  Technical Configuration
                </h3>
                <p className="text-muted mt-2 flex-1 text-sm">
                  Engineering parameters on the current planning basis.
                </p>
                <Button
                  href="/project/technical"
                  variant="ghost"
                  className="mt-5 justify-start px-0"
                >
                  View Technical Details
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-line bg-mist hover:shadow-card-hover flex h-full flex-col rounded-3xl border p-6 transition-all hover:-translate-y-0.5 hover:bg-white">
                <div className="bg-brand-700 flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <GitBranch aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="text-ink mt-4 text-lg font-bold">
                  Development Status
                </h3>
                <p className="text-muted mt-2 flex-1 text-sm">
                  Progress from survey licence to target COD of June 2030.
                </p>
                <Button
                  href="/project/development"
                  variant="ghost"
                  className="mt-5 justify-start px-0"
                >
                  View Development Status
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical + roadmap preview */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Technical Configuration"
              title="Engineering at a Glance"
            />
          </Reveal>
          <Reveal className="mt-10">
            <TechnicalSpecGrid />
          </Reveal>
          <Reveal className="mt-6 text-center">
            <Button href="/project/technical" variant="outline">
              View Full Technical Details
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Timeline preview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Development Roadmap"
              title="Planned Development Stages"
            />
          </Reveal>
          <div className="mt-12 lg:px-6">
            <ProjectTimeline />
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/project/development" variant="primary">
              View Full Development Status
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
