import Image from "next/image";
import { ExternalLink, Eye, Quote, Target, TrendingUp, Landmark } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import { partnership } from "@/data/partnership";
import { company } from "@/data/company";

export default function ChairmanSection() {
  const chairman = partnership.chairman;

  return (
    <section className="bg-mist py-16 lg:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Strategic Partnership"
            title="A Message from the Chairman of Kashyap Capital Holdings"
            subtitle="Western Energy and Ventures is proud to be associated with Kashyap Advisors and Kashyap Capital Holdings as a strategic partner and investor in the Obregad Hydropower Project."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Photograph */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col">
              <div className="border-line relative overflow-hidden rounded-3xl border shadow-card">
                <div className="border-leaf-100 absolute top-4 left-4 z-10 rounded-full border bg-white/95 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-sm">
                  <span className="text-leaf-600">{chairman.commitmentCr}</span>{" "}
                  Investor
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={chairman.image}
                    alt={`${chairman.name}, ${chairman.title}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="from-brand-950/85 via-brand-900/60 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-6 pt-14 pb-6">
                  <p className="text-lg font-bold text-white">
                    {chairman.name}
                  </p>
                  <p className="text-leaf-300 text-sm">{chairman.title}</p>
                </div>
              </div>
              <a
                href={chairman.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-800 hover:bg-brand-50 ring-brand-200 mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold ring-1 transition-colors"
              >
                <Landmark aria-hidden className="h-4 w-4" />
                {chairman.websiteLabel}
                <ExternalLink aria-hidden className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          {/* Chairman's message */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="border-line relative h-full rounded-3xl border bg-white p-8 shadow-card sm:p-10">
              <span
                aria-hidden
                className="text-leaf-500/15 absolute top-6 right-8 font-serif text-[7rem] leading-none select-none"
              >
                &ldquo;
              </span>
              <div className="relative space-y-4 text-base leading-relaxed text-ink/90">
                {chairman.message.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <Image
                  src={chairman.image}
                  alt=""
                  aria-hidden
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-leaf-100"
                />
                <div>
                  <p className="text-ink font-bold">{chairman.name}</p>
                  <p className="text-muted text-sm">{chairman.title}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Commitment + mission & vision */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <div className="border-brand-100 shadow-card h-full rounded-3xl border bg-white p-6">
              <div className="bg-brand-700 flex h-11 w-11 items-center justify-center rounded-xl text-white">
                <TrendingUp aria-hidden className="h-5 w-5" />
              </div>
              <h3 className="text-ink mt-4 font-bold">Strategic Investment</h3>
              <p className="text-brand-700 mt-1 text-xl font-bold">
                {chairman.commitmentCr}
              </p>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Intended investment commitment in the Obregad Hydropower Project
                as a strategic partner and investor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="border-leaf-100 shadow-card h-full rounded-3xl border bg-white p-6">
              <div className="bg-leaf-500 flex h-11 w-11 items-center justify-center rounded-xl text-white">
                <Target aria-hidden className="h-5 w-5" />
              </div>
              <h3 className="text-ink mt-4 font-bold">
                {partnership.holdingName}
              </h3>
              <h4 className="text-leaf-600 mt-2 text-xs font-bold tracking-wider uppercase">
                Mission
              </h4>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">
                &ldquo;{chairman.mission}&rdquo;
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border-leaf-100 shadow-card h-full rounded-3xl border bg-white p-6">
              <div className="bg-leaf-500 flex h-11 w-11 items-center justify-center rounded-xl text-white">
                <Eye aria-hidden className="h-5 w-5" />
              </div>
              <h3 className="text-ink mt-4 font-bold">
                {partnership.holdingName}
              </h3>
              <h4 className="text-leaf-600 mt-2 text-xs font-bold tracking-wider uppercase">
                Vision
              </h4>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">
                &ldquo;{chairman.vision}&rdquo;
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="border-line rounded-3xl border bg-white p-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="text-leaf-600 text-xs font-bold tracking-wider uppercase">
                  {company.shortName} — Mission
                </h4>
                <p className="text-ink mt-2 font-medium">{company.mission}</p>
              </div>
              <div>
                <h4 className="text-leaf-600 text-xs font-bold tracking-wider uppercase">
                  {company.shortName} — Vision
                </h4>
                <p className="text-ink mt-2 font-medium">{company.vision}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-start justify-center gap-3">
            <Quote aria-hidden className="text-leaf-400 mt-1 h-4 w-4 shrink-0" />
            <DisclaimerBox className="max-w-3xl">
              {chairman.commitmentNote} Mission and vision statements are those of
              Kashyap Capital Holdings Ltd. as published publicly on{" "}
              {chairman.websiteLabel}. Western Energy and Ventures&rsquo; own mission
              and vision are shown for information only.
            </DisclaimerBox>
          </div>
        </Reveal>
      </div>
    </section>
  );
}