import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { partnership } from "@/data/partnership";

export default function PartnershipStrip() {
  const chairman = partnership.chairman;

  return (
    <section className="border-line bg-white py-10">
      <div className="container-site">
        <div className="border-leaf-100 bg-leaf-50/50 flex flex-col items-center justify-between gap-6 rounded-3xl border p-6 sm:flex-row sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="relative shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-md">
              <Image
                src={chairman.image}
                alt={`${chairman.name}, ${chairman.title}`}
                width={88}
                height={88}
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-leaf-600 text-xs font-bold tracking-wider uppercase">
                Strategic Partnership
              </p>
              <h2 className="text-ink mt-1 text-lg font-bold">
                {partnership.advisorName} · {partnership.holdingName}
              </h2>
              <p className="text-muted mt-1 text-sm">
                {chairman.name}, {chairman.title} —{" "}
                <span className="text-brand-700 font-semibold">
                  {chairman.commitmentCr}
                </span>{" "}
                intended investor in the Obregad Hydropower Project.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-3 sm:items-end">
            <Link
              href="/investors"
              className="bg-brand-700 hover:bg-brand-800 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              <TrendingUp aria-hidden className="h-4 w-4" />
              Investor Details
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a
              href={chairman.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 hover:text-brand-900 text-xs font-semibold"
            >
              {chairman.websiteLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}