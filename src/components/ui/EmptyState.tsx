import { FolderOpen } from "lucide-react";
import type { ReactNode } from "react";

export default function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="border-brand-200 bg-mist flex flex-col items-center justify-center rounded-3xl border border-dashed px-6 py-16 text-center">
      <div className="bg-brand-50 text-brand-600 ring-brand-100 flex h-14 w-14 items-center justify-center rounded-2xl ring-1">
        <FolderOpen aria-hidden className="h-7 w-7" />
      </div>
      <h3 className="text-ink mt-5 text-lg font-bold">{title}</h3>
      {description && (
        <p className="text-muted mt-2 max-w-md text-sm">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
