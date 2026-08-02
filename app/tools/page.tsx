"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  {
    title: "Password Generator",
    description: "Generate password yang kuat dan aman.",
    icon: "🔐",
    href: "/tools/password-generator",
    badge: "Popular",
    color: "bg-orange-500",
  },
  {
    title: "QR Code Generator",
    description: "Generate QR Code secara gratis.",
    icon: "📱",
    href: "/tools/qr-code-generator",
    badge: "New",
    color: "bg-green-500",
  },
  {
    title: "Word Counter",
    description: "Hitung kata, karakter, dan paragraf.",
    icon: "📝",
    href: "/tools/word-counter",
    badge: "Updated",
    color: "bg-blue-500",
  },
  {
    title: "JSON Formatter",
    description: "Beautify dan Minify JSON.",
    icon: "📄",
    href: "/tools/json-formatter",
    badge: "Developer",
    color: "bg-purple-500",
  },
  {
    title: "JSON Validator",
    description: "Validasi struktur JSON secara instan.",
    icon: "🛡️",
    href: "/tools/json-validator",
    badge: "Developer",
    color: "bg-indigo-500",
  },
  {
  title: "UUID Generator",
  description: "Generate UUID v4 secara instan dan gratis.",
  icon: "🆔",
  href: "/tools/uuid-generator",
  users: "4K+",
  rating: "4.9",
  },
  {
  title: "Base64 Encoder",
  description: "Encode dan Decode Base64 secara instan.",
  icon: "🔐",
  href: "/tools/base64-encoder",
  users: "6K+",
  rating: "4.9",
  },
  {
  title: "URL Encoder",
  description: "Encode dan Decode URL secara instan.",
  icon: "🌐",
  href: "/tools/url-encoder",
  users: "5K+",
  rating: "4.9",
},
];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const filteredTools = tools.filter((tool) =>
  tool.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <h1 className="text-5xl font-extrabold dark:text-white">
          🛠️ SmartTools Indonesia
        </h1>

        <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
          Kumpulan tools gratis untuk Developer, Mahasiswa,
          Content Creator, UMKM, dan semua orang.
        </p>

      </div>
      <div className="mx-auto mt-10 max-w-xl">

  <input
    type="text"
    placeholder="🔍 Search tools..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
  />

</div>
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h2 className="text-4xl font-extrabold text-blue-600">
      5+
    </h2>

    <p className="mt-2 font-semibold dark:text-white">
      Free Tools
    </p>

    <p className="mt-1 text-sm text-slate-500">
      Siap digunakan gratis.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h2 className="text-4xl font-extrabold text-green-600">
      100%
    </h2>

    <p className="mt-2 font-semibold dark:text-white">
      Browser Based
    </p>

    <p className="mt-1 text-sm text-slate-500">
      Tanpa instalasi.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h2 className="text-4xl font-extrabold text-purple-600">
      24/7
    </h2>

    <p className="mt-2 font-semibold dark:text-white">
      Available
    </p>

    <p className="mt-1 text-sm text-slate-500">
      Bisa diakses kapan saja.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h2 className="text-4xl font-extrabold text-orange-600">
      🇮🇩
    </h2>

    <p className="mt-2 font-semibold dark:text-white">
      Made in Indonesia
    </p>

    <p className="mt-1 text-sm text-slate-500">
      Dibuat untuk semua orang.
    </p>
  </div>

</div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {filteredTools.map((tool) => (

          <Link
            key={tool.title}
            href={tool.href}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
          >

            <div className="flex items-center justify-between">

              <span className="text-5xl">
                {tool.icon}
              </span>

              <span
                className={`rounded-full ${tool.color} px-3 py-1 text-xs font-bold text-white`}
              >
                {tool.badge}
              </span>

            </div>

            <h2 className="mt-6 text-2xl font-bold dark:text-white">
              {tool.title}
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {tool.description}
            </p>

            <div className="mt-8 flex items-center font-semibold text-blue-600 transition group-hover:translate-x-1">
              Open Tool →
            </div>

          </Link>

        ))}

      </div>
      {filteredTools.length === 0 && (

  <div className="mt-16 text-center">

    <h2 className="text-2xl font-bold dark:text-white">
      😢 Tool tidak ditemukan
    </h2>

    <p className="mt-3 text-slate-500">
      Coba gunakan kata kunci lain.
    </p>

  </div>

)}

    </main>
  );
}