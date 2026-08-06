import Link from "next/link";
import { ArrowRight, Star, Users } from "lucide-react";
import type { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className="group block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="text-5xl">
          {tool.icon}
        </div>

        {tool.badge && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold text-white ${tool.badgeColor}`}
          >
            {tool.badge}
          </span>
        )}

      </div>

      {/* Title */}

      <h2 className="mt-6 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white">
        {tool.title}
      </h2>

      {/* Description */}

      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
        {tool.description}
      </p>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">

          <div className="flex items-center gap-1">

            <Star
              size={15}
              className="fill-yellow-400 text-yellow-400"
            />

            {tool.rating}

          </div>

          <div className="flex items-center gap-1">

            <Users size={15} />

            {tool.users}

          </div>

        </div>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

      </div>

    </Link>
  );
}