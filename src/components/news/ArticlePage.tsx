import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Info } from "lucide-react";
import { categoryLabel } from "@/components/news/NewsCard";
import { formatArticleDate } from "@/data/news";
import type { NewsArticle } from "@/data/news";
import { cn } from "@/lib/cn";

export default function ArticlePage({
  article,
  basePath,
}: {
  article: NewsArticle;
  basePath: "news" | "notices";
}) {
  const imageAspect =
    article.imageRatio === "24:10" ? "aspect-[24/10]" : "aspect-[16/9]";
  return (
    <article className="container-site py-12 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/${basePath}`}
          className="text-brand-700 hover:text-leaf-600 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
        >
          <ArrowLeft aria-hidden className="h-4 w-4" />
          Back to {basePath === "news" ? "News" : "Notices"}
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-brand-50 text-brand-700 ring-brand-100 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset">
              {categoryLabel(article.category)}
            </span>
            <span className="text-muted flex items-center gap-1 text-sm">
              <CalendarDays aria-hidden className="h-4 w-4" />
              {formatArticleDate(article.date)}
            </span>
          </div>
          <h1 className="text-ink mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {article.title}
          </h1>
          {article.isPlaceholder && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 ring-1 ring-amber-200 ring-inset">
              <Info aria-hidden className="h-4 w-4" />
              Content coming soon — this is a placeholder page.
            </p>
          )}
        </header>

        {article.image && (
          <figure className="border-line relative mt-8 overflow-hidden rounded-3xl border shadow-card">
            <div className={cn("relative", imageAspect)}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 768px) 48rem, 100vw"
                className="object-cover"
              />
            </div>
            {article.imageCaption && (
              <figcaption className="from-brand-950/85 via-brand-900/60 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-6 pt-14 pb-5">
                <p className="text-lg font-bold text-white">
                  {article.imageCaption}
                </p>
              </figcaption>
            )}
          </figure>
        )}

        <div className="text-muted mt-8 space-y-4 text-sm leading-relaxed sm:text-base">
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <footer className="border-line mt-10 border-t pt-6">
          <Link
            href={basePath === "news" ? "/news" : "/notices"}
            className="text-brand-700 hover:text-leaf-600 text-sm font-semibold transition-colors"
          >
            ← All {basePath === "news" ? "News & Updates" : "Notices"}
          </Link>
        </footer>
      </div>
    </article>
  );
}
