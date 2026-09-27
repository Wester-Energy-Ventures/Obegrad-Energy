import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { NewsArticle } from "@/data/news";
import { newsCategories, formatArticleDate } from "@/data/news";
import { cn } from "@/lib/cn";

export function categoryLabel(category: NewsArticle["category"]): string {
  return newsCategories.find((c) => c.key === category)?.label ?? category;
}

export default function NewsCard({
  article,
  className,
}: {
  article: NewsArticle;
  className?: string;
}) {
  const isNotice = article.category === "public-notices";
  const imageAspect =
    article.imageRatio === "24:10" ? "aspect-[24/10]" : "aspect-[16/9]";

  return (
    <article
      className={cn(
        "group border-line shadow-card hover:shadow-card-hover flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-all hover:-translate-y-1",
        className
      )}
    >
      {article.image ? (
        <div className={cn("relative overflow-hidden", imageAspect)}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {article.imageCaption && (
            <p className="from-brand-950/85 via-brand-900/60 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-4 pt-12 pb-3 text-xs font-semibold text-white">
              {article.imageCaption}
            </p>
          )}
        </div>
      ) : (
        <div
          aria-hidden
          className="from-brand-800 via-brand-700 to-brand-600 relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br"
        >
          <div className="bg-grid absolute inset-0 opacity-40" />
          <span className="text-4xl font-bold text-white/80">
            {article.title.slice(0, 1)}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="text-muted flex items-center gap-2 text-xs font-semibold">
          <span
            className={cn(
              "rounded-full px-2.5 py-1 ring-1 ring-inset",
              isNotice
                ? "bg-amber-50 text-amber-700 ring-amber-200"
                : "bg-brand-50 text-brand-700 ring-brand-100"
            )}
          >
            {categoryLabel(article.category)}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays aria-hidden className="h-3.5 w-3.5" />
            {formatArticleDate(article.date)}
          </span>
        </div>

        <h3 className="text-ink mt-3 text-lg leading-snug font-bold">
          <Link
            href={
              isNotice ? `/notices/${article.slug}` : `/news/${article.slug}`
            }
            className="group-hover:text-brand-700 transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
          {article.excerpt}
        </p>

        {article.isPlaceholder && (
          <p className="bg-mist text-ink mt-3 inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold">
            Content coming soon
          </p>
        )}

        <Link
          href={isNotice ? `/notices/${article.slug}` : `/news/${article.slug}`}
          className="text-brand-700 hover:text-leaf-600 mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
        >
          Read More
          <ArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
