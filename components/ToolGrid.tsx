import ToolCard from "@/components/ToolCard";
import type { Tool } from "@/data/tools";

interface ToolGridProps {
  tools: Tool[];
}

export default function ToolGrid({
  tools,
}: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 py-20 text-center dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-700 dark:text-white">
          Tool tidak ditemukan
        </h3>

        <p className="mt-3 text-slate-500">
          Coba gunakan kata kunci lain.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
        />
      ))}
    </div>
  );
}