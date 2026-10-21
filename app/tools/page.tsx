import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Semua Tools Online",
  description:
    "Jelajahi tools online SmartTools Indonesia untuk pengolahan teks, pengembangan web, generator password, QR Code, JSON, dan kebutuhan digital lainnya.",
  alternates: {
    canonical: "https://smarttools.id/tools",
  },
  openGraph: {
    title: "Semua Tools Online | SmartTools Indonesia",
    description:
      "Temukan berbagai tools online untuk membantu produktivitas, pengolahan teks, dan pengembangan web.",
    url: "https://smarttools.id/tools",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 text-center">
          {/* Tombol Kembali */}
          <div className="mb-8 text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              ← Kembali ke Home
            </Link>
          </div>

          {/* Judul */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Semua Tools untuk Membuatmu
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Bekerja Lebih Cepat
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            Temukan berbagai tools digital dalam satu tempat. Praktis,
            mudah digunakan, dan siap membantu pekerjaan, belajar,
            pengembangan web, maupun kebutuhan sehari-hari.
          </p>

          {/* Jumlah tools aktual */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
              <span aria-hidden="true">🛠️</span>
              {tools.length}{" "}
              {tools.length === 1 ? "tool tersedia" : "tools tersedia"}
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Tools */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Jelajahi Semua Tools
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Pilih tools yang sesuai dengan kebutuhanmu.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500"
              >
                {/* Icon */}
                <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {tool.icon}
                </div>

                {/* Judul */}
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {tool.title}
                </h3>

                {/* Deskripsi */}
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {tool.description}
                </p>

                {/* CTA */}
                <div className="mt-5 border-t border-slate-100 pt-4 font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1 dark:border-slate-800 dark:text-blue-400">
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