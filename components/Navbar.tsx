import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xl text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            ⚡
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              SmartTools
            </h1>

            <p className="-mt-1 text-xs text-slate-500 dark:text-slate-400">
              Indonesia
            </p>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="font-medium text-slate-700 transition duration-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/tools"
            className="font-medium text-slate-700 transition duration-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Tools
          </Link>

          <Link
            href="/blog"
            className="font-medium text-slate-700 transition duration-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="font-medium text-slate-700 transition duration-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="font-medium text-slate-700 transition duration-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            Contact
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="hidden rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 md:block">
            Mulai Gratis
          </button>

          <ThemeToggle />

        </div>

      </div>
    </nav>
  );
}