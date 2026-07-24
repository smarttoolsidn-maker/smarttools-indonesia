import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur transition-colors dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-600"
        >
          SmartTools Indonesia
        </Link>

        <div className="flex items-center gap-6 text-gray-700 dark:text-gray-200">
          <Link href="/" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>

          <Link href="/tools" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            Tools
          </Link>

          <Link href="/blog" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>

          <Link href="/about" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>

          <Link href="/contact" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}