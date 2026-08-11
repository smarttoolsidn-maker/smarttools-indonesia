import type { Metadata } from "next";

import { tools } from "@/data/tools";
import { createToolMetadata } from "@/lib/seo";

const tool = tools.find(
  (item) => item.id === "markdown-preview"
);

export const metadata: Metadata = tool
  ? createToolMetadata(tool)
  : {};

export default function MarkdownPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}