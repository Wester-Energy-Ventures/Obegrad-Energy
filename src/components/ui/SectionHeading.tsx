import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase",
            tone === "dark"
              ? "bg-brand-50 text-brand-700 ring-brand-100 ring-1"
              : "text-leaf-200 bg-white/10 ring-1 ring-white/20"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl",
          tone === "dark" ? "text-ink" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-muted" : "text-white/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SectionHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-10", className)}>{children}</div>;
}
