import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { ReactNode } from "react";

type CtaSectionProps = {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: ReactNode;
};

export default function CtaSection({
  title,
  subtitle,
  primary,
  secondary,
  children,
}: CtaSectionProps) {
  return (
    <section className="bg-brand-800 relative overflow-hidden text-white">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="bg-leaf-500/20 absolute top-0 -left-24 h-64 w-64 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-brand-500/30 absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl"
      />
      <div className="container-site relative py-16 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-white/70">
                {subtitle}
              </p>
            )}
            {children}
            {(primary || secondary) && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {primary && (
                  <Button href={primary.href} variant="white" size="lg">
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button
                    href={secondary.href}
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10 hover:text-white focus-visible:outline-white"
                  >
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
