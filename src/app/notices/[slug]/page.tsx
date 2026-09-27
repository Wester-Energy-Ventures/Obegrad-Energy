import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ArticlePage from "@/components/news/ArticlePage";
import { notices, getArticleBySlug } from "@/data/news";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notices.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category !== "public-notices") return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/notices/${article.slug}` },
  };
}

export default async function NoticePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category !== "public-notices") notFound();

  return (
    <>
      <PageHeader
        eyebrow="Notices"
        title={article.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Notices", href: "/notices" },
          { label: article.title },
        ]}
      />
      <ArticlePage article={article} basePath="notices" />
    </>
  );
}
