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
  const relatedTools = tools
    .filter((tool) => tool.id !== currentToolId)
    .slice(0, 3);

  return (
    <section className="mt-20">

      <h2 className="mb-8 text-3xl font-bold dark:text-white">
        🔗 Related Tools
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {relatedTools.map((tool) => (

          <Link
            key={tool.id}
            href={tool.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
          >

            <div className="text-4xl">
              {tool.icon}
            </div>

            <h3 className="mt-4 text-xl font-bold dark:text-white">
              {tool.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {tool.description}
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}