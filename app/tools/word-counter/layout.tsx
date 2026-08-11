import type { Metadata } from "next";

import { tools } from "@/data/tools";
import { createToolMetadata } from "@/lib/seo";

const tool = tools.find(
  (item) => item.id === "word-counter"
);

export const metadata: Metadata = tool
  ? createToolMetadata(tool)
  : {};

export default function WordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}