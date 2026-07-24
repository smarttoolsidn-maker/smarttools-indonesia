"use client";

import { useEffect, useMemo, useState } from "react";

export default function WordCounterPage() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
  if (!copied) return;

  const timer = setTimeout(() => {
    setCopied(false);
  }, 2000);

  return () => clearTimeout(timer);
}, [copied]);  
  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words =
      trimmed.length === 0
        ? 0
        : trimmed.split(/\s+/).filter(Boolean).length;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const paragraphs =
      trimmed.length === 0
        ? 0
        : text.split(/\n+/).filter((p) => p.trim() !== "").length;

    const readingTime =
  words === 0 ? "0 min" : `${Math.ceil(words / 200)} min`;

    return {
      words,
      characters,
      charactersNoSpaces,
      paragraphs,
      readingTime,
    };
  }, [text]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      <h1 className="text-5xl font-extrabold tracking-tight dark:text-white">
        📝 Word Counter
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        Hitung jumlah kata, karakter, paragraf, dan estimasi waktu baca.
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tulis atau tempel teks di sini..."
        className="mt-10 h-80 w-full rounded-3xl border border-gray-300 bg-white p-6 text-lg leading-8 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
  {stats.characters} / 10000 Characters
</p>
      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
  <div
    className="h-full rounded-full bg-blue-600 transition-all duration-300"
    style={{
      width: `${Math.min((stats.characters / 10000) * 100, 100)}%`,
    }}
  />
</div>  
      <div className="mt-6 flex flex-wrap gap-4">

  <button
    onClick={() => {
  navigator.clipboard.writeText(text);
  setCopied(true);
}}
    className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
  >
    {copied ? "✅ Copied!" : "📋 Copy"}
  </button>

  <button
  onClick={() => {
    if (text.trim() === "") return;

    const confirmClear = window.confirm(
      "Apakah Anda yakin ingin menghapus semua teks?"
    );

    if (confirmClear) {
  setText("");
  setCopied(false);
}
  }}
  className="rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-red-600"
>
  🗑 Clear
</button>

</div>  
      <div className="mt-10 grid gap-6 md:grid-cols-5">

        <StatCard
  title="Words"
  value={stats.words}
  icon="📝"
/>

        <StatCard
  title="Characters"
  value={stats.characters}
  icon="🔤"
/>

        <StatCard
  title="No Spaces"
  value={stats.charactersNoSpaces}
  icon="✂️"
/>

        <StatCard
  title="Paragraphs"
  value={stats.paragraphs}
  icon="📄"
/>

        <StatCard
  title="Reading"
  value={stats.readingTime}
  icon="📖"
/>

      </div>

    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">

      <div className="text-3xl">{icon}</div>

<p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
  {title}
</p>

      <h2 className="mt-3 text-4xl font-extrabold text-blue-600 dark:text-blue-400">
        {value}
      </h2>

    </div>
  );
}