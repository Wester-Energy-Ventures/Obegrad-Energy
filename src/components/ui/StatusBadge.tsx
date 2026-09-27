import { projectStatuses } from "@/data/project";
import type { ProjectStatusKey } from "@/data/project";
import { cn } from "@/lib/cn";

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatusKey;
  className?: string;
}) {
  const meta = projectStatuses[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset",
        meta.badgeClass,
        className
      )}
    >
      <span
        aria-hidden
        className={cn("h-1.5 w-1.5 rounded-full", meta.dotClass)}
      />
      {meta.label}
    </span>
  );
}

export function PlanningBadge({
  className,
  children = "Planning / Development Stage",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200 ring-inset",
        className
      )}
    >
      {children}
    </span>
  );
}
