import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blog";

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Membuat halaman statis dari daftar artikel.
export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Metadata SEO untuk setiap artikel.
export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang dicari tidak tersedia.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://smarttools.id/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: `${article.title} | SmartTools Indonesia`,
      description: article.description,
      url: canonicalUrl,
      siteName: "SmartTools Indonesia",
      locale: "id_ID",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;

  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
        >
          <Link
            href="/"
            className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Beranda
          </Link>

          <span aria-hidden="true">/</span>

          <Link
            href="/blog"
            className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Blog
          </Link>

          <span aria-hidden="true">/</span>

          <span className="font-medium text-slate-700 dark:text-slate-200">
            Artikel
          </span>
        </nav>

        {/* Judul dan deskripsi artikel */}
        <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300">
            {article.category}
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {article.description}
          </p>

          <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <span aria-hidden="true">←</span>
              Kembali ke Blog
            </Link>
          </div>
        </header>

        {/* Isi artikel */}
        <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <div className="border-b border-slate-100 pb-7 dark:border-slate-800">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300 sm:text-xl sm:leading-9">
              {article.intro}
            </p>
          </div>

          <div className="mt-8 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold leading-snug text-slate-900 dark:text-white">
                  {section.heading}
                </h2>

                <div className="mt-4 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.heading}-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Tautan tool yang berkaitan */}
          <aside className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-400/20 dark:bg-indigo-400/5 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Praktikkan dengan SmartTools Indonesia
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Gunakan tool terkait untuk membantu menerapkan panduan
              dalam artikel ini pada kebutuhan digital sehari-hari.
            </p>

            <Link
              href={article.href}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              {article.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </article>

        {/* Navigasi bawah */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link
            href="/blog"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            ← Semua Artikel
          </Link>

          <Link
            href="/tools"
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Jelajahi Semua Tools →
          </Link>
        </div>
      </div>
    </main>
  );
}