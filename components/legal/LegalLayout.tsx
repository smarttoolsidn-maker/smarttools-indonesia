import { ReactNode } from "react";

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
    <main className="mx-auto max-w-4xl px-6 py-16">

      <header className="mb-12 text-center">

        <h1 className="text-4xl font-bold dark:text-white">
          {title}
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-300">
          {description}
        </p>

      </header>

      <article className="prose prose-slate max-w-none dark:prose-invert">
        {children}
      </article>

    </main>
  );
}