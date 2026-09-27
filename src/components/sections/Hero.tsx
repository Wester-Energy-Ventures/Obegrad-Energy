import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <Image
        src="/images/hydropowerprojectphoto.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="from-brand-950 via-brand-900/80 to-brand-700/40 absolute inset-0 bg-gradient-to-r"
      />
      <div
        aria-hidden
        className="from-brand-950/80 via-transparent to-brand-950/30 absolute inset-0 bg-gradient-to-t"
      />

      <div className="container-site relative flex min-h-[560px] items-center py-24 lg:min-h-[640px] lg:py-28">
        <div className="max-w-2xl">
          <p className="text-leaf-200 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase ring-1 ring-white/20 ring-inset">
            <Info aria-hidden className="h-3.5 w-3.5" />
            Hydropower &middot; Renewable Energy &middot; Nepal
          </p>

          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Powering Nepal&rsquo;s Future Through{" "}
            <span className="text-gradient">Clean Energy</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Western Energy and Ventures Pvt. Ltd. is developing sustainable hydropower
            infrastructure with a focus on long-term energy generation,
            responsible development and value creation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/project"
              className="text-brand-800 hover:bg-brand-50 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Our Project
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Investor Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}