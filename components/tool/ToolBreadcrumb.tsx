import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface ToolBreadcrumbProps {
  title: string;
}

export default function ToolBreadcrumb({
  title,
}: ToolBreadcrumbProps) {
  return (
    <nav
      className="mb-10 flex flex-wrap items-center gap-2 text-sm"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-slate-500 transition hover:text-blue-600"
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight size={16} className="text-slate-400" />

      <Link
        href="/tools"
        className="text-slate-500 transition hover:text-blue-600"
      >
        Tools
      </Link>

      <ChevronRight size={16} className="text-slate-400" />

      <span className="font-semibold text-slate-900 dark:text-white">
        {title}
      </span>
    </nav>
  );
}