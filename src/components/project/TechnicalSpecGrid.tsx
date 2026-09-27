import { Gauge, Waves, Zap, Wind, ArrowDown, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SpecProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  detail?: string;
};

const specs: SpecProps[] = [
  {
    icon: Zap,
    label: "Generating Units",
    value: "2 × approximately 4.5 MW",
  },
  {
    icon: Wrench,
    label: "Turbine",
    value: "Francis configuration",
    detail: "Final selection through DPR",
  },
  {
    icon: ArrowDown,
    label: "Gross Head",
    value: "Approximately 88 m",
  },
  {
    icon: Gauge,
    label: "Net Head",
    value: "78.03 m",
    detail: "Planning basis",
  },
  {
    icon: Waves,
    label: "Design Discharge",
    value: "13.46 m³/s",
  },
  {
    icon: Wind,
    label: "Annual Saleable Energy",
    value: "51.96 GWh",
    detail: "Planning basis",
  },
  {
    icon: Zap,
    label: "Evacuation Voltage",
    value: "33 kV",
  },
  {
    icon: ArrowDown,
    label: "Evacuation Length",
    value: "Approximately 8 km",
  },
];

export function TechnicalSpecCard({
  icon: Icon,
  label,
  value,
  detail,
}: SpecProps) {
  return (
    <div className="group border-line shadow-card hover:border-brand-200 hover:shadow-card-hover rounded-2xl border bg-white p-5 transition-all hover:-translate-y-0.5">
      <div className="bg-brand-50 text-brand-700 ring-brand-100 group-hover:bg-brand-700 flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-colors group-hover:text-white">
        <Icon aria-hidden className="h-5 w-5" />
      </div>
      <h3 className="text-muted mt-4 text-xs font-semibold tracking-wider uppercase">
        {label}
      </h3>
      <p className="text-ink mt-1 text-lg font-bold">{value}</p>
      {detail && <p className="text-muted mt-1 text-sm">{detail}</p>}
    </div>
  );
}

export default function TechnicalSpecGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {specs.map((spec) => (
        <TechnicalSpecCard key={spec.label} {...spec} />
      ))}
    </div>
  );
}
