"use client";

import { useEffect, useMemo, useState } from "react";
import Toolbar from "./components/Toolbar";
import TextEditor from "./components/TextEditor";
import CharacterProgress from "./components/CharacterProgress";
import StatsGrid from "./components/StatsGrid";

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

      <TextEditor
  text={text}
  onChange={setText}
/>
      <CharacterProgress
  characters={stats.characters}
/>  
<Toolbar
  text={text}
  copied={copied}
  onCopy={() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  }}
  onClear={() => {
    if (text.trim() === "") return;

    const confirmClear = window.confirm(
      "Apakah Anda yakin ingin menghapus semua teks?"
    );

    if (confirmClear) {
      setText("");
      setCopied(false);
    }
  }}
/>  
      <StatsGrid
  stats={stats}
/>

    </main>
  );
}