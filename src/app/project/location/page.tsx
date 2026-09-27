import type { Metadata } from "next";
import { MapPin, ChevronRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import Button from "@/components/ui/Button";
import { project } from "@/data/project";

const mapQuery = encodeURIComponent(
  "Patrasi Rural Municipality, Jumla, Karnali Province, Nepal"
);
const googleMapsEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const metadata: Metadata = {
  title: "Project Location",
  description:
    "The Obregad Hydropower Project is located on the Obregad Khola, Patrasi Rural Municipality, Jumla District, Karnali Province, Nepal.",
  alternates: { canonical: "/project/location" },
};

function LocationCard({
  level,
  name,
  isLast,
}: {
  level: number;
  name: string;
  isLast?: boolean;
}) {
  return (
    <li className="flex items-center gap-3">
      <span
        aria-hidden
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          isLast
            ? "bg-leaf-500 text-white"
            : "bg-brand-50 text-brand-700 ring-brand-100 ring-1"
        }`}
      >
        {level}
      </span>
      <span className="text-ink flex-1 text-sm font-semibold">{name}</span>
      {!isLast && (
        <ChevronRight aria-hidden className="text-muted/50 h-4 w-4" />
      )}
    </li>
  );
}

export default function ProjectLocationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project Location"
        title="Project Location"
        subtitle={project.locationText}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Project", href: "/project" },
          { label: "Location" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Where the Project Is"
              title="Obregad Khola, Karnali Province"
            />
            <p className="text-muted mt-5 text-sm leading-relaxed sm:text-base">
              The project is being developed on the Obregad Khola within Patrasi
              Rural Municipality in Jumla District, Karnali Province, the
              western mountain region of Nepal. The area is consistent with
              run-of-river hydropower development.
            </p>

            <div className="border-line bg-mist mt-8 rounded-3xl border p-6">
              <h2 className="text-muted text-sm font-bold tracking-wider uppercase">
                Location Hierarchy
              </h2>
              <ol className="mt-5 space-y-3">
                {project.locationHierarchy.map((loc, i) => (
                  <LocationCard
                    key={loc}
                    level={i + 1}
                    name={loc}
                    isLast={i === project.locationHierarchy.length - 1}
                  />
                ))}
              </ol>
            </div>

            <div className="border-line shadow-card mt-8 flex items-start gap-3 rounded-2xl border bg-white p-5">
              <MapPin
                aria-hidden
                className="text-leaf-600 mt-0.5 h-5 w-5 shrink-0"
              />
              <div>
                <h3 className="text-ink text-sm font-bold">Project Location</h3>
                <p className="text-muted mt-1 text-sm">
                  Obregad Khola, Patrasi Rural Municipality, Jumla, Karnali
                  Province, Nepal
                </p>
              </div>
            </div>

            <DisclaimerBox className="mt-6">
              {project.locationNote}
            </DisclaimerBox>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <div className="border-line shadow-card overflow-hidden rounded-3xl border bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin aria-hidden className="text-leaf-600 h-4 w-4" />
                    <p className="text-ink text-sm font-bold">Google Maps</p>
                  </div>
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:text-leaf-600 text-xs font-semibold transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
                <iframe
                  title="Obregad Hydropower Project — Jumla, Karnali Province, Nepal"
                  src={googleMapsEmbed}
                  width="600"
                  height="400"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[400px] w-full border-0"
                />
              </div>
              <div className="mt-6">
                <Button href="/project" variant="outline">
                  Back to Project Overview
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
