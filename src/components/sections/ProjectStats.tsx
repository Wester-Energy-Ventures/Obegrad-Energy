import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

type StatItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  note?: string;
};

const stats: StatItem[] = [
  {
    value: 9,
    suffix: " MW",
    label: "Installed Capacity",
    note: "Planning figure",
  },
  { value: 190, prefix: "NPR ", suffix: " Cr", label: "Planned Project Cost" },
  {
    value: 57,
    prefix: "NPR ",
    suffix: " Cr",
    label: "Planned Equity Requirement",
  },
  {
    value: 2030,
    prefix: "June ",
    label: "Target COD",
    note: "Planning figure",
  },
];

export default function ProjectStats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.06}>
          <div className="from-brand-800 to-brand-900 shadow-card relative overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-white lg:p-7">
            <div
              aria-hidden
              className="bg-leaf-500/20 absolute -top-6 -right-6 h-24 w-24 rounded-full blur-2xl"
            />
            <CountUp
              end={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              className="block text-3xl font-bold tracking-tight sm:text-4xl"
            />
            <p className="mt-2 text-sm font-medium text-white/80">
              {stat.label}
            </p>
            {stat.note && (
              <p className="text-leaf-200 mt-1 inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium">
                {stat.note}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
