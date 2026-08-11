import type { Metadata } from "next";

import { tools } from "@/data/tools";
import { createToolMetadata } from "@/lib/seo";

const tool = tools.find(
  (item) => item.id === "base64-encoder"
);

export const metadata: Metadata = tool
  ? createToolMetadata(tool)
  : {};

export default function Base64EncoderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}