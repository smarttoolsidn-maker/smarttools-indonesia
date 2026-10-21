import Link from "next/link";
import type { Tool } from "@/data/tools";

interface ToolRelatedProps {
  currentToolId: string;
  tools: Tool[];
}

export default function ToolRelated({
  currentToolId,
  tools,
}: ToolRelatedProps) {
  // Temukan tool yang sedang dibuka.
  const currentTool = tools.find(
    (tool) => tool.id === currentToolId
  );

  // Jangan tampilkan tool yang sedang dibuka.
  const availableTools = tools.filter(
    (tool) => tool.id !== currentToolId
  );

  // Prioritaskan tool dengan kategori yang sama.
  const sameCategoryTools = currentTool
    ? availableTools.filter(
        (tool) => tool.category === currentTool.category
      )
    : [];

  // Jika belum cukup, lengkapi dengan kategori lainnya.
  const otherCategoryTools = currentTool
    ? availableTools.filter(
        (tool) => tool.category !== currentTool.category
      )
    : availableTools;

  const relatedTools = [
    ...sameCategoryTools,
    ...otherCategoryTools,
  ].slice(0, 3);

  return (
    <section
      className="mt-20"
      aria-labelledby="related-tools-heading"
    >
      <div className="mb-8">
        <h2
          id="related-tools-heading"
          className="text-3xl font-bold text-slate-900 dark:text-white"
        >
          Tools Terkait
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
          Temukan tools lain yang dapat membantu kebutuhan digitalmu.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {relatedTools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500"
          >
            {/* Icon */}
            <div
              aria-hidden="true"
              className="text-4xl transition-transform duration-300 group-hover:scale-110"
            >
              {tool.icon}
            </div>

            {/* Category */}
            <span className="mt-4 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {tool.category}
            </span>

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {tool.title}
            </h3>

            {/* Description */}
            <p className="mt-2 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {tool.description}
            </p>

            {/* CTA */}
            <span className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 font-semibold text-blue-600 transition-colors group-hover:text-blue-800 dark:border-slate-800 dark:text-blue-400 dark:group-hover:text-blue-300">
              Buka Tool
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}