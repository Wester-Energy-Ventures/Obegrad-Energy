import Reveal from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { project, projectStatuses } from "@/data/project";

export default function ProjectTimeline() {
  return (
    <ol className="border-brand-100 relative space-y-6 border-l-2 pl-8 sm:space-y-8">
      {project.timeline.map((item, i) => {
        const status = projectStatuses[item.status];
        return (
          <Reveal key={item.stage} delay={i * 0.05}>
            <li className="relative">
              <span
                aria-hidden
                className={`absolute top-1.5 -left-[41px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white ${status.dotClass}`}
              />
              <div className="border-line shadow-card hover:shadow-card-hover rounded-2xl border bg-white p-5 transition-shadow hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-ink text-base font-bold">
                    <span className="text-muted mr-2 text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.stage}
                  </h3>
                  <StatusBadge status={item.status} />
                </div>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.note && (
                  <p className="bg-mist text-ink mt-2 inline-flex rounded-lg px-2.5 py-1 text-xs font-medium">
                    {item.note}
                  </p>
                )}
              </div>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
