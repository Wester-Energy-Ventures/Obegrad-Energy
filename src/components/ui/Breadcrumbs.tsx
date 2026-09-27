import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5"
    >
      <ol className="flex list-none items-center gap-1.5 text-sm">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-semibold text-white"
                >
                  {crumb.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  aria-hidden
                  className="h-3.5 w-3.5 text-white/50"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function SectionIcon({
  icon: Icon,
  className = "h-5 w-5",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return <Icon aria-hidden className={className} />;
}
