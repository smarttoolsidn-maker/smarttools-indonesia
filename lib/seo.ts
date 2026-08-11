import type { Metadata } from "next";

import type { Tool } from "@/data/tools";

const BASE_URL = "https://smarttools.id";

export function createToolMetadata(
  tool: Tool
): Metadata {
  const title =
    tool.seoTitle ?? tool.title;

  const description =
    tool.seoDescription ?? tool.description;

  return {
    title,

    description,

    keywords: tool.keywords,

    alternates: {
      canonical: `${BASE_URL}${tool.href}`,
    },

    openGraph: {
      title,
      description,
      url: `${BASE_URL}${tool.href}`,
      siteName: "SmartTools Indonesia",
      locale: "id_ID",
      type: "website",

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${title} - SmartTools Indonesia`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}