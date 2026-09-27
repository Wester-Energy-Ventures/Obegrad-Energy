import { FileText, Download, ExternalLink, Tag } from "lucide-react";
import type { CompanyDocument } from "@/data/documents";
import { documentCategories } from "@/data/documents";
import { cn } from "@/lib/cn";

export function documentCategoryLabel(
  category: CompanyDocument["category"]
): string {
  return documentCategories.find((c) => c.key === category)?.label ?? category;
}

export default function DocumentCard({
  doc,
  className,
}: {
  doc: CompanyDocument;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-line shadow-card hover:shadow-card-hover flex flex-col rounded-3xl border bg-white p-6 transition-all hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="bg-brand-50 text-brand-700 ring-brand-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1">
          <FileText aria-hidden className="h-6 w-6" />
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset",
            doc.isPlaceholder
              ? "bg-amber-50 text-amber-700 ring-amber-200"
              : "bg-leaf-50 text-leaf-700 ring-leaf-200"
          )}
        >
          <Tag aria-hidden className="h-3 w-3" />
          {doc.isPlaceholder ? "Placeholder" : "Published"}
        </span>
      </div>

      <h3 className="text-ink mt-4 text-lg font-bold">{doc.title}</h3>
      <p className="text-muted mt-1 inline-flex w-fit text-xs font-medium">
        {documentCategoryLabel(doc.category)} · {doc.date}
      </p>
      <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">
        {doc.description}
      </p>

      {doc.isPlaceholder && (
        <p className="bg-mist text-ink mt-3 rounded-lg px-3 py-2 text-xs">
          Placeholder file — official document to be uploaded by the company.
        </p>
      )}

      <div className="border-line mt-5 flex flex-wrap items-center gap-2 border-t pt-5">
        <span className="text-muted mr-auto text-xs font-semibold tracking-wider uppercase">
          {doc.fileType}
          {doc.fileSize ? ` · ${doc.fileSize}` : ""}
        </span>
        <a
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-700 ring-brand-200 hover:bg-brand-50 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold ring-1 transition-colors ring-inset"
        >
          <ExternalLink aria-hidden className="h-4 w-4" />
          View
        </a>
        <a
          href={doc.href}
          download
          className="bg-brand-700 hover:bg-brand-800 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold text-white transition-colors"
        >
          <Download aria-hidden className="h-4 w-4" />
          Download
        </a>
      </div>
    </div>
  );
}
