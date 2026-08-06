"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  

  const navClass = (href: string) =>
  
  `font-medium transition duration-300 ${
    pathname === href
      ? "text-blue-600 dark:text-blue-400"
      : "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
  }`;

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Tools",
    href: "/tools",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];





  return (
    <>
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-2xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xl text-white shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-blue-500/40"
          >
            ⚡
          </div>

          <div>

           <h1 className="text-xl font-extrabold tracking-tight text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">

              SmartTools Indonesia

            </h1>

          </div>
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">

  {navigation.map((item) => (

    <Link
      key={item.href}
      href={item.href}
      className={navClass(item.href)}
    >
      {item.name}
    </Link>

  ))}

</div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

  {/* Search */}

  <button
    className="hidden items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400 lg:flex"
  >
    🔍 Search
  </button>

<button

onClick={() => setMobileOpen(!mobileOpen)}

className="rounded-xl p-2 md:hidden"

>

{mobileOpen ? (

<X size={24}/>

) : (

<Menu size={24}/>

)}

</button>

  {/* Theme */}

  <ThemeToggle />

  {/* Github */}

  <a
    href="https://github.com/smarttoolsidn-maker/smarttools-indonesia"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500 lg:block"
  >
    GitHub
  </a>

  {/* CTA */}

  <Link
    href="/tools"
    className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-blue-500/30"
  >
    🚀 Explore Tools
  </Link>

</div>

      </div>
    </nav>

    {mobileOpen && (

  <>

    {/* Overlay */}

    <div

      onClick={() => setMobileOpen(false)}

      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"

    />

    {/* Drawer */}

    <div className="fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl transition-all dark:bg-slate-950">

      <div className="flex items-center justify-between border-b p-6 dark:border-slate-800">

        <div>

          <h2 className="text-xl font-bold">

            ⚡ SmartTools

          </h2>

          <p className="text-sm text-slate-500">

            Indonesia

          </p>

        </div>

        <button

          onClick={() => setMobileOpen(false)}

          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"

        >

          <X size={22} />

        </button>

      </div>

      <div className="flex flex-col gap-2 p-6">

        <Link

          href="/"

          className="rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"

        >

          🏠 Home

        </Link>

        <Link

          href="/tools"

          className="rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"

        >

          🛠 Tools

        </Link>

        <Link

          href="/blog"

          className="rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"

        >

          📰 Blog

        </Link>

        <Link

          href="/about"

          className="rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"

        >

          ℹ About

        </Link>

        <Link

          href="/contact"

          className="rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"

        >

          ✉ Contact

        </Link>

      </div>

      <div className="mt-auto border-t p-6 dark:border-slate-800">

        <div className="mb-5">

          <ThemeToggle />

        </div>

        <Link

          href="/tools"

          className="block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center font-semibold text-white shadow-lg"

        >

          🚀 Explore Tools

        </Link>

      </div>

    </div>

  </>

)}
    </>
  );
}