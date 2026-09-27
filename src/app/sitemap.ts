import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { newsArticles, notices } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/about",
    "/project",
    "/project/location",
    "/project/technical",
    "/project/development",
    "/sustainability",
    "/investors",
    "/investors/financials",
    "/news",
    "/notices",
    "/gallery",
    "/downloads",
    "/contact",
    "/disclaimer",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const articleEntries = [...newsArticles, ...notices].map((article) => ({
    url: `${base}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...articleEntries];
}
