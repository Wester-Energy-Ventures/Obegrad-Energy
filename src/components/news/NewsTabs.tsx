"use client";

import { useState } from "react";
import { newsArticles, newsCategories } from "@/data/news";
import type { NewsCategory } from "@/data/news";
import NewsCard from "@/components/news/NewsCard";
import EmptyState from "@/components/ui/EmptyState";
import { cn } from "@/lib/cn";

const tabs: ("all" | NewsCategory)[] = [
  "all",
  ...newsCategories.map((c) => c.key),
];

export default function NewsTabs() {
  const [active, setActive] = useState<"all" | NewsCategory>("all");

  const filtered =
    active === "all"
      ? newsArticles
      : newsArticles.filter((a) => a.category === active);

  const activeMeta = newsCategories.find((c) => c.key === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="News categories"
        className="-mx-4 flex scrollbar-none gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {tabs.map((tab) => {
          const label =
            tab === "all"
              ? "All"
              : (newsCategories.find((c) => c.key === tab)?.label ?? tab);
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={cn(
                "focus-visible:outline-leaf-500 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                active === tab
                  ? "bg-brand-700 text-white shadow-sm"
                  : "text-muted ring-line hover:text-brand-800 hover:ring-brand-200 bg-white ring-1 ring-inset"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {active !== "all" && activeMeta && (
        <p className="text-muted mt-4 text-sm">{activeMeta.description}</p>
      )}

      <div className="mt-8">
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No items here yet"
            description="Content will be published in this category as it becomes available."
          />
        )}
      </div>
    </div>
  );
}
