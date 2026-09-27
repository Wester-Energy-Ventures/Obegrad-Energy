import type { TechnicalSpec } from "@/data/project";
import { PlanningBadge } from "@/components/ui/StatusBadge";

export default function KeyFactsPanel({
  facts,
  tone = "light",
}: {
  facts: TechnicalSpec[];
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={
        tone === "dark"
          ? "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          : "border-line bg-mist rounded-3xl border p-6 sm:p-8"
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-muted text-sm font-bold tracking-wider uppercase">
          Key Project Facts
        </h2>
        <PlanningBadge />
      </div>
      <dl className="mt-6 space-y-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className={
              tone === "dark"
                ? "flex items-start justify-between gap-4 border-b border-white/10 pb-3"
                : "border-line flex items-start justify-between gap-4 border-b pb-3"
            }
          >
            <dt
              className={
                tone === "dark"
                  ? "text-sm font-medium text-white/60"
                  : "text-muted text-sm font-medium"
              }
            >
              {fact.label}
            </dt>
            <dd
              className={`text-right text-sm font-bold ${
                tone === "dark" ? "text-white" : "text-ink"
              }`}
            >
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
