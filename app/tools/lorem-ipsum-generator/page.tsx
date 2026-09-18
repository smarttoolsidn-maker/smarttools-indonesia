"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import ToolSlider from "@/components/tools/ToolSlider";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { generateLorem } from "@/lib/lorem";

import { useStatus } from "@/hooks";

export default function LoremIpsumPage() {
  const [words, setWords] = useState(50);
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const characterCount = useMemo(
    () => output.length,
    [output]
  );

  async function handleCopy() {
    if (!output) {
      error("Belum ada teks untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);

      success("Lorem Ipsum berhasil disalin.");
    } catch {
      error("Gagal menyalin teks.");
    }
  }

  function handleGenerate() {
    try {
      const result = generateLorem(words);

      setOutput(result);

      success("Lorem Ipsum berhasil dibuat.");
    } catch {
      error("Gagal membuat Lorem Ipsum.");
    }
  }

  function handleClear() {
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="lorem-ipsum-generator"
      icon="📄"
      title="Lorem Ipsum Generator"
      description="Generate Lorem Ipsum dengan jumlah kata yang dapat diatur."
      category="Generator"
      badge="Popular"
      rating="4.9"
      users="6K+"
    >
      {/* Generator Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Text Generator
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tentukan jumlah kata yang kamu butuhkan.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Generator
        </span>
      </div>

      {/* Word Slider */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <ToolSlider
          label="Jumlah Kata"
          value={words}
          min={10}
          max={500}
          onChange={setWords}
        />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            10 kata
          </span>

          <span className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-bold text-white shadow-sm">
            {words} kata
          </span>

          <span className="text-sm text-slate-500 dark:text-slate-400">
            500 kata
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleGenerate}>
          ✨ Generate
        </ActionButton>

        <ActionButton
          color="green"
          onClick={handleCopy}
        >
          📋 Copy
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          🧹 Clear
        </ActionButton>
      </div>

      {/* Output */}
      <div className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Generated Text
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Lorem Ipsum yang dihasilkan akan muncul di sini.
            </p>
          </div>

          {output && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Generated
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolTextarea
            label="Lorem Ipsum"
            value={output}
            readOnly
            placeholder="Lorem Ipsum akan muncul di sini..."
          />
        </div>

        {/* Output Stats */}
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Words: {output ? words : 0}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Characters: {characterCount}
          </span>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            📄
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Apa itu Lorem Ipsum?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Lorem Ipsum adalah teks placeholder yang umum digunakan
              dalam desain, pengembangan website, dan layout untuk
              membantu melihat tampilan konten sebelum teks sebenarnya
              tersedia.
            </p>
          </div>

        </div>
      </div>

      {/* Status */}
      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}