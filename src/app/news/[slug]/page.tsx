import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ArticlePage from "@/components/news/ArticlePage";
import { newsArticles, getArticleBySlug } from "@/data/news";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category === "public-notices") return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  if (article.category === "public-notices") notFound();

  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title={article.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News & Updates", href: "/news" },
          { label: article.title },
        ]}
      />
      <ArticlePage article={article} basePath="news" />
    </>
  );
}
