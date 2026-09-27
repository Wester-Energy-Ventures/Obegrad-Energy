import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import HeroVisual from "@/components/visuals/HeroVisual";

export default function NotFound() {
  return (
    <section className="bg-brand-900 relative overflow-hidden text-white">
      <div
        aria-hidden
        className="from-brand-950 via-brand-900 to-brand-700 absolute inset-0 bg-gradient-to-br"
      />
      <div className="container-site relative grid min-h-[70vh] items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="text-leaf-200 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase ring-1 ring-white/20 ring-inset">
            <Compass aria-hidden className="h-3.5 w-3.5" />
            404
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            The page you&rsquo;re looking for may have moved or is no longer
            available.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="text-brand-800 hover:bg-brand-50 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold shadow-sm transition-colors"
            >
              <ArrowLeft aria-hidden className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Our Project
            </Link>
          </div>
        </div>
        <div className="relative">
          <HeroVisual className="w-full rounded-3xl opacity-80 ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
