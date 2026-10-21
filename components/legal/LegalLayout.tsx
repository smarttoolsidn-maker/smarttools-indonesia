
import type { ReactNode } from "react";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  description,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* Tombol Kembali */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-x-1 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
        >
          <span aria-hidden="true">←</span>
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <header className="relative mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:px-12 sm:py-16">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
            SMARTTOOLS INDONESIA
          </span>

          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {description}
          </p>
        </header>

        {/* Main Content */}
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10 lg:p-12">
          <div className="legal-content">
            {children}
          </div>
        </article>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            SmartTools Indonesia — tools online untuk kebutuhan digital.
          </p>
        </div>

      </div>
    </main>
  );
}