import Link from "next/link";
import { tools } from "@/data/tools";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <div className="mb-8 text-left">
  <Link
    href="/"
    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
  >
    ← Kembali ke Home
  </Link>
</div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
  Semua Tools untuk Membuatmu
  <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
    Bekerja Lebih Cepat
  </span>
</h1>

<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
  Temukan berbagai tools digital gratis dalam satu tempat.
  Praktis, cepat, dan siap membantu pekerjaan, belajar,
  development, maupun kebutuhan sehari-hari.
</p>

        </div>
      </section>

      {/* Tools */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500"
              >

                {/* Icon */}
                <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {tool.icon}
                </div>

                {/* Badge */}
                {tool.badge && (
                  <span
                    className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${tool.badgeColor ?? "bg-blue-500"}`}
                  >
                    {tool.badge}
                  </span>
                )}

                {/* Title */}
                <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  {tool.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {tool.description}
                </p>

                {/* Meta */}
                <div className="mt-5 flex items-center justify-between text-sm">

                  {tool.users && (
                    <span className="text-slate-500 dark:text-slate-400">
                      👥 {tool.users}
                    </span>
                  )}

                  {tool.rating && (
                    <span className="font-semibold text-yellow-500">
                      ⭐ {tool.rating}
                    </span>
                  )}

                </div>

                {/* CTA */}
                <div className="mt-5 font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-blue-400">
                  Gunakan Tool →
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}