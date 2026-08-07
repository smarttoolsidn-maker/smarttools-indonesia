import { useMemo } from "react";

import type { Tool } from "@/data/tools";

export default function useToolSearch(
  tools: Tool[],
  keyword: string
) {
  return useMemo(() => {
    const query = keyword.trim().toLowerCase();

    if (!query) return tools;

    return tools.filter(
      (tool) =>
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
    );
  }, [tools, keyword]);
}