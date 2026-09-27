import type { Metadata } from "next";
import { Zap, Leaf, HeartHandshake, Landmark } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Sustainability approach at Western Energy and Ventures Pvt. Ltd. — clean hydropower energy, environmental responsibility, community engagement and long-term infrastructure.",
  alternates: { canonical: "/sustainability" },
};

const pillars = [
  {
    icon: Zap,
    title: "Clean Energy",
    body: "Hydropower generates electricity from renewable water resources. Run-of-river schemes convert the natural energy of flowing water into electricity without consuming water or fuels, supporting Nepal's transition toward cleaner and more reliable power.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    body: "Environmental studies, responsible project development and regulatory compliance are priorities for the company. Environmental and social considerations are assessed as the project moves through the development process, in line with applicable requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Local Community",
    body: "The company intends to engage responsibly with local communities throughout development, including through community programs, without prejudging specific initiatives before they are confirmed. Further community details will be shared as they are finalized.",
  },
  {
    icon: Landmark,
    title: "Long-Term Infrastructure",
    body: "The Obregad Hydropower Project is intended to contribute clean, long-term electricity infrastructure for Nepal, delivering dependable energy for decades while supporting local development.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sustainability"
        title="Sustainability at the Core"
        subtitle="Our approach to clean energy, environmental responsibility, local communities and long-term infrastructure."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Responsible Development in Everything We Do"
              subtitle="Sustainability shapes how we develop energy infrastructure — from early studies through operation."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={i * 0.06}>
                  <article className="border-line shadow-card hover:shadow-card-hover h-full rounded-3xl border bg-white p-7 transition-all hover:-translate-y-0.5">
                    <div className="bg-leaf-500 flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                      <Icon aria-hidden className="h-7 w-7" />
                    </div>
                    <h2 className="text-ink mt-5 text-xl font-bold">
                      {pillar.title}
                    </h2>
                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      {pillar.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10">
            <DisclaimerBox>
              The company does not publish unsupported numerical environmental
              claims (such as specific CO₂ reductions or carbon offsets) until
              verified data is supplied and confirmed by the company. Community
              achievements are described only when confirmed.
            </DisclaimerBox>
          </Reveal>
        </div>
      </section>

      <section className="bg-leaf-50/60 py-16 text-center lg:py-20">
        <div className="container-site">
          <Reveal>
            <h2 className="text-ink text-2xl font-bold tracking-tight sm:text-3xl">
              Learn more about the Obregad Hydropower Project
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/project" variant="primary">
                Explore Our Project
              </Button>
              <Button href="/project/development" variant="secondary">
                View Development Status
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
