"use client";

import { useState } from "react";

import { tools } from "@/data/tools";

import ToolGrid from "@/components/ToolGrid";

import FeaturedTools from "@/components/FeaturedTools";


export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const filteredTools = tools.filter((tool) => {
  const matchSearch = tool.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "Semua"
      ? true
      : tool.category === category;

  return matchSearch && matchCategory;
});
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

<div className="mt-10 text-center">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">

    Browse By Category

  </p>

</div>

<div className="mt-10 flex flex-wrap justify-center gap-4">

  {[
  { name: "Semua", icon: "✨" },
  { name: "Developer", icon: "💻" },
  { name: "Generator", icon: "⚡" },
  { name: "Converter", icon: "🔄" },
  { name: "Text", icon: "📝" },
  { name: "Utility", icon: "🛠️" },
  { name: "Color", icon: "🎨" },
].map((item) => (

  <button
    key={item.name}
    onClick={() => setCategory(item.name)}
    className={`group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300

      ${
        category === item.name
          ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-500/30"
          : "border border-slate-300 bg-white text-slate-700 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      }`}
  >

    <span className="text-base">
      {item.icon}
    </span>

    {item.name}

  </button>

))}

 

</div>

<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h2 className="text-4xl font-extrabold text-blue-600">
    {tools.length}+
    </h2>

    <p className="mt-2 font-semibold dark:text-white">
      Available Tools
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

      {search === "" && category === "Semua" && (
  <FeaturedTools />
)}

<div className="mt-16">
  <ToolGrid tools={filteredTools} />
</div>


    </main>
  );
}