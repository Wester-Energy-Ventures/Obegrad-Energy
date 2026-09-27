import {
  ArrowRight,
  Leaf,
  Mountain,
  HeartHandshake,
  Landmark,
  Gauge,
  Zap,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import ProjectStats from "@/components/sections/ProjectStats";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import TechnicalSpecGrid from "@/components/project/TechnicalSpecGrid";
import ProjectTimeline from "@/components/project/ProjectTimeline";
import CapitalChart from "@/components/charts/CapitalChart";
import NewsGrid from "@/components/news/NewsGrid";
import Button from "@/components/ui/Button";
import PartnershipStrip from "@/components/partnership/PartnershipStrip";
import { company } from "@/data/company";
import { project } from "@/data/project";
import { financials } from "@/data/financials";

const focusIcons = [Leaf, Mountain, Gauge, HeartHandshake];

const highlightIcons = [Zap, Leaf, WavesIcon, ArrowRight];

function WavesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2" />
      <path d="M2 17c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2" />
      <path d="M2 7c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="bg-mist py-14 lg:py-16">
        <div className="container-site">
          <ProjectStats />
          <p className="text-muted mt-6 text-xs">
            Source: Obregad Hydropower Project Investor Booklet. Figures are
            project planning figures and may change following detailed studies,
            approvals, financing arrangements and definitive agreements.
          </p>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="About Us"
                  title="Building Long-Term Value Through Clean Energy"
                  subtitle="Western Energy and Ventures Pvt. Ltd. is a Nepal-based energy venture focused on the development of hydropower infrastructure."
                />
                <p className="text-muted mt-4 text-sm leading-relaxed">
                  The company is engaged in responsible project development —
                  from surveying and studies through construction and
                  commissioning — with a focus on sustainable energy generation,
                  transparency and long-term value for stakeholders.
                </p>
                <div className="mt-6">
                  <Button href="/about" variant="primary">
                    Learn More About Us
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {company.focusAreas.map((area, i) => {
                const Icon = focusIcons[i % focusIcons.length];
                return (
                  <Reveal key={area.title} delay={i * 0.05}>
                    <div className="border-line bg-mist hover:border-brand-200 hover:shadow-card-hover h-full rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:bg-white">
                      <div className="bg-brand-700 flex h-10 w-10 items-center justify-center rounded-xl text-white">
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
        </div>
      </section>

      {/* Obregad project feature */}
      <section className="bg-brand-800 relative overflow-hidden py-16 text-white lg:py-24">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="bg-leaf-500/20 absolute top-0 -right-24 h-96 w-96 rounded-full blur-3xl"
        />
        <div className="container-site relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Our Project"
                title={project.name}
                subtitle={`${project.subtitle}. Located at ${project.locationText}.`}
              />
              <div className="mt-6 space-y-3 text-sm text-white/75">
                <p>{project.overview[0]}</p>
                <p>{project.overview[1]}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/project" variant="white">
                  Explore Obregad Project
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
                <Button
                  href="/project/development"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white focus-visible:outline-white"
                >
                  View Development Status
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="text-leaf-200 text-sm font-bold tracking-wider uppercase">
                  Key Project Facts
                </h3>
                <dl className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {project.keyFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-b border-white/10 pb-3"
                    >
                      <dt className="text-xs font-medium tracking-wider text-white/50 uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-base font-bold text-white">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Project Highlights"
              title="A Focused, Well-Planned Development"
              subtitle="Key characteristics of the Obregad Hydropower Project based on the current planning case."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.highlights.map((item, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="border-line shadow-card hover:shadow-card-hover h-full rounded-2xl border bg-white p-6 transition-all hover:-translate-y-0.5">
                    <div className="bg-leaf-50 text-leaf-600 ring-leaf-100 flex h-12 w-12 items-center justify-center rounded-2xl ring-1">
                      <Icon aria-hidden className="h-6 w-6" />
                    </div>
                    <h3 className="text-ink mt-4 font-bold">{item.title}</h3>
                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8">
            <DisclaimerBox>
              Figures shown are based on the current project planning case and
              may change following detailed studies, approvals, financing and
              definitive agreements.
            </DisclaimerBox>
          </Reveal>
        </div>
      </section>

      {/* Technical */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Technical Configuration"
              title="Engineering at a Glance"
              subtitle="Technical parameters on the current planning basis. Detailed dimensions will be finalized through the DPR and procurement."
            />
          </Reveal>
          <Reveal className="mt-10">
            <TechnicalSpecGrid />
          </Reveal>
          <Reveal className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-muted max-w-2xl text-sm">
                {project.technicalNote}
              </p>
              <Button href="/project/technical" variant="outline">
                View Full Technical Details
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Development Roadmap"
                title="From Survey Licence to Commissioning"
                subtitle="The project's planned stages and their current status. Colour-coded by stage."
              />
              <p className="text-muted mt-4 text-sm leading-relaxed">
                The survey licence for the project has been obtained. Detailed
                studies, approvals, financing and construction remain ahead,
                with a target commercial operation date (COD) of June 2030.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <StatusNote color="bg-leaf-500" label="Obtained" />
                <StatusNote color="bg-brand-600" label="In Development" />
                <StatusNote color="bg-amber-500" label="Planned / Target" />
                <StatusNote color="bg-slate-400" label="Pending" />
              </div>
              <div className="mt-8">
                <Button href="/project/development" variant="outline">
                  View Full Development Status
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
          <ProjectTimeline />
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-leaf-50/60 py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Sustainability"
              title="Clean Energy, Responsible Development"
              subtitle="Our approach to sustainability across the project lifecycle."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "Clean Energy",
                text: "Hydropower generates electricity from renewable water resources.",
              },
              {
                icon: Leaf,
                title: "Environmental Responsibility",
                text: "Environmental studies, responsible development and regulatory compliance are priorities.",
              },
              {
                icon: HeartHandshake,
                title: "Local Community",
                text: "Responsible engagement and community programs throughout development.",
              },
              {
                icon: Landmark,
                title: "Long-Term Infrastructure",
                text: "Intended contribution to Nepal's long-term electricity infrastructure.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="border-leaf-100 shadow-card hover:shadow-card-hover h-full rounded-2xl border bg-white p-6 transition-all hover:-translate-y-0.5">
                    <div className="bg-leaf-500 flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                      <Icon aria-hidden className="h-6 w-6" />
                    </div>
                    <h3 className="text-ink mt-4 font-bold">{item.title}</h3>
                    <p className="text-muted mt-1.5 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8">
            <div className="text-center">
              <Button href="/sustainability" variant="secondary">
                Explore Our Sustainability Approach
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investment structure */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Investment Structure"
              title="Planned Capital Structure"
              subtitle="Total project cost of NPR 190 crore, structured 70:30 between senior debt and equity on the current planning case."
            />
          </Reveal>
          <Reveal className="mt-10">
            <div className="border-line bg-mist rounded-3xl border p-6 sm:p-8">
              <CapitalChart />
              <DisclaimerBox className="mt-6">
                Financial projections are subject to detailed studies,
                approvals, financing arrangements, definitive agreements and
                actual project performance. This is a modelled planning case,
                not a guarantee of return.
              </DisclaimerBox>
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <div className="text-center">
              <Button href="/investors" variant="primary">
                View Investor Information
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <PartnershipStrip />

      {/* Financial profile */}
      <section className="bg-brand-800 py-16 text-white lg:py-24">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Financial Profile"
                title="Modelled Planning-Case Returns"
                subtitle="Internal rate of return figures from the current financial model."
              />
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {financials.disclaimer}
              </p>
              <div className="mt-8">
                <Button href="/investors/financials" variant="white">
                  View Financial Details
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[financials.projectIrr, financials.equityIrr].map((item) => (
                <Reveal key={item.label}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <p className="text-leaf-200 text-xs font-semibold tracking-wider uppercase">
                      {item.label}
                    </p>
                    <p className="mt-3 text-4xl font-bold tracking-tight">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-white/60">{item.detail}</p>
                    <p className="text-leaf-200 mt-3 inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold">
                      {financials.irrLabel}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="News & Updates"
                title="Latest News & Project Updates"
              />
              <Button
                href="/news"
                variant="outline"
                className="hidden sm:inline-flex"
              >
                View All News
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <NewsGrid limit={3} />
          </Reveal>
          <Reveal className="mt-8 text-center sm:hidden">
            <Button href="/news" variant="outline">
              View All News
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Investor CTA */}
      <section className="from-brand-900 via-brand-800 to-brand-700 relative overflow-hidden bg-gradient-to-br py-16 text-white lg:py-20">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Partnering in Nepal&rsquo;s Energy Future
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Explore participation in the equity of the Obregad Hydropower
                Project. Submissions are expressions of interest only and do not
                create any agreement.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  href="/investors#investor-inquiry"
                  variant="white"
                  size="lg"
                >
                  Submit Investor Inquiry
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
                <Button
                  href="/downloads"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white focus-visible:outline-white"
                >
                  Download Investor Booklet
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-site">
          <Reveal>
            <div className="border-line bg-mist flex flex-col items-center justify-between gap-6 rounded-3xl border px-6 py-10 text-center sm:flex-row sm:px-10 sm:text-left">
              <div>
                <h2 className="text-ink text-2xl font-bold tracking-tight sm:text-3xl">
                  Have a question about the project?
                </h2>
                <p className="text-muted mt-2 max-w-xl text-sm">
                  Our team is happy to answer questions from investors,
                  partners, contractors, communities and other stakeholders.
                  Contact details are provided once finalized by the company.
                </p>
              </div>
              <Button href="/contact" size="lg" className="shrink-0">
                Contact Us
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function StatusNote({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-white/80">
      <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${color}`} />
      {label}
    </div>
  );
}
