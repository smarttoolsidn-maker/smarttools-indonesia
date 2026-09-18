"use client";

import { useMemo, useState } from "react";
import StatCard from "@/components/tools/StatCard";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  countWords,
  countCharacters,
  countCharactersNoSpaces,
  countLines,
} from "@/lib/word";

import { useStatus } from "@/hooks";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const stats = useMemo(() => {
    const words = countWords(text);
    const characters = countCharacters(text);
    const noSpaces = countCharactersNoSpaces(text);
    const lines = countLines(text);

    const readingTime =
      words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));

    return {
      words,
      characters,
      noSpaces,
      lines,
      readingTime,
    };
  }, [text]);

  async function handleCopy() {
    if (!text.trim()) {
      error("Belum ada teks untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      success("Teks berhasil disalin.");
    } catch {
      error("Gagal menyalin teks.");
    }
  }

  function handleClear() {
    setText("");
    success("Teks berhasil dibersihkan.");
  }

  return (
    <ToolLayout
      toolId="word-counter"
      icon="📝"
      title="Word Counter"
      description="Hitung jumlah kata, karakter, baris, dan estimasi waktu baca secara instan."
      category="Utility"
      badge="Popular"
      rating="4.9"
      users="9K+"
    >
      {/* Editor Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Text Editor
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Ketik atau tempel teks untuk melihat statistik secara real-time.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Real-time
        </span>
      </div>

      {/* Text Area */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="Text"
          value={text}
          onChange={setText}
          placeholder="Ketik atau tempel teks di sini..."
        />
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3">
        <ActionButton
          color="green"
          onClick={handleCopy}
        >
          📋 Copy Text
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          🧹 Clear
        </ActionButton>
      </div>

      {/* Statistics */}
      <div className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Text Statistics
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Statistik teks kamu akan diperbarui otomatis.
            </p>
          </div>

          <span className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 sm:block dark:bg-green-950/40 dark:text-green-400">
            ● Live
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          <StatCard
            title="Words"
            value={stats.words}
          />

          <StatCard
            title="Characters"
            value={stats.characters}
          />

          <StatCard
            title="No Spaces"
            value={stats.noSpaces}
          />

          <StatCard
            title="Lines"
            value={stats.lines}
          />

          <StatCard
            title="Reading Time"
            value={`${stats.readingTime} min`}
          />

        </div>
      </div>

      {/* Reading Info */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            📖
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Estimasi Waktu Baca
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Dengan kecepatan membaca rata-rata sekitar 200 kata per menit,
              teks kamu membutuhkan sekitar{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {stats.readingTime} menit
              </span>{" "}
              untuk dibaca.
            </p>
          </div>

        </div>
      </div>

      {/* Status */}
      <div className="mt-6">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}