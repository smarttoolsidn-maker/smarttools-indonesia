import Link from "next/link";
import { tools } from "@/data/tools";

const featuredTools = tools.filter((tool) => tool.featured);

export default function PopularTools() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Tools Pilihan
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            Jelajahi pilihan tools online untuk membantu pekerjaan,
            belajar, dan kebutuhan digital sehari-hari.
          </p>
        </div>

        {/* Featured Tools */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                {tool.icon}
              </div>

              {/* Category */}
              <div className="mt-5">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  {tool.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {tool.description}
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700">
                <span className="text-sm font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-blue-400">
                  Gunakan Tool
                </span>

                <span
                  aria-hidden="true"
                  className="text-blue-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-blue-400"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            Lihat Semua Tools
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}