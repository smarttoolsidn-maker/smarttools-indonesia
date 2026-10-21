import type { MetadataRoute } from "next";

import { tools } from "@/data/tools";
import { blogArticles } from "@/data/blog";

const baseUrl = "https://smarttools.id";

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage dan halaman informasi
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/disclaimer`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Halaman tools
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Halaman artikel Blog
  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Gabungkan seluruh URL
  return [...staticPages, ...toolPages, ...blogPages];
}