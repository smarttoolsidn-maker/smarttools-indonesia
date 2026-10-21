import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog Teknologi & Produktivitas",
  description:
    "Baca panduan dan tutorial seputar keamanan digital, pengembangan web, pengolahan data, dan produktivitas bersama SmartTools Indonesia.",
  alternates: {
    canonical: "https://smarttools.id/blog",
  },
  openGraph: {
    title: "Blog Teknologi & Produktivitas | SmartTools Indonesia",
    description:
      "Temukan panduan praktis mengenai keamanan digital, pengembangan web, dan tools online untuk produktivitas sehari-hari.",
    url: "https://smarttools.id/blog",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300">
            SmartTools Indonesia Blog
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Wawasan Digital untuk Produktivitas
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Temukan panduan praktis dan penjelasan teknologi untuk
            membantu pekerjaan, belajar, serta kebutuhan digital
            sehari-hari.
          </p>
        </header>

        {/* Article list */}
        <section aria-labelledby="article-list">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="article-list"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Artikel dan Panduan
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Pelajari konsep, contoh, dan tips untuk kebutuhan digitalmu.
              </p>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {blogArticles.length} artikel tersedia
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500"
              >
                <span className="mb-4 w-fit rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-white">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {article.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Baca Artikel
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 text-center dark:border-indigo-400/20 dark:bg-indigo-400/5 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Temukan Tools yang Sesuai Kebutuhanmu
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            Praktikkan pengetahuan yang kamu pelajari dengan berbagai
            tools online SmartTools Indonesia.
          </p>

          <Link
            href="/tools"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            Jelajahi Semua Tools
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        {/* Back to home */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}