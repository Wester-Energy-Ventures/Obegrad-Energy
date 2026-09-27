import NewsCard from "@/components/news/NewsCard";
import { newsArticles } from "@/data/news";

export default function NewsGrid({
  limit,
  className,
}: {
  limit?: number;
  className?: string;
}) {
  const items = limit ? newsArticles.slice(0, limit) : newsArticles;
  if (items.length === 0) return null;
  return (
    <div className={className}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
