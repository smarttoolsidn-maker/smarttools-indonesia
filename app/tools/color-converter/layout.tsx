import type { Metadata } from "next";

import { tools } from "@/data/tools";
import { createToolMetadata } from "@/lib/seo";

const tool = tools.find(
  (item) => item.id === "color-converter"
);

export const metadata: Metadata = tool
  ? createToolMetadata(tool)
  : {};

export default function ColorConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}