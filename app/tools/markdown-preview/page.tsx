"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { markdownToHtml } from "@/lib/markdown";

import { useStatus } from "@/hooks";

export default function MarkdownPreviewPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const inputSize = useMemo(
    () => input.length,
    [input]
  );

  const outputSize = useMemo(
    () => output.length,
    [output]
  );

  function handleConvert() {
    if (!input.trim()) {
      error("Masukkan Markdown terlebih dahulu.");
      return;
    }

    try {
      const html = markdownToHtml(input);

      setOutput(html);

      success("Markdown berhasil dikonversi.");
    } catch {
      error("Gagal mengonversi Markdown.");
    }
  }

  async function handleCopy() {
    if (!output) {
      error("Belum ada HTML untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);

      success("HTML berhasil disalin.");
    } catch {
      error("Gagal menyalin HTML.");
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="markdown-preview"
      icon="📝"
      title="Markdown Preview"
      description="Konversi Markdown menjadi HTML dan lihat hasilnya dengan mudah."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      {/* Input Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Markdown Input
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tulis atau tempel Markdown yang ingin kamu preview.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          📝 Markdown
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="Markdown"
          value={input}
          onChange={setInput}
          placeholder={`# Hello World

Ini adalah **contoh Markdown**.

- Item pertama
- Item kedua
- Item ketiga`}
        />
      </div>

      {/* Input Stats */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Input: {inputSize} characters
        </span>

        {input.trim() && (
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
            ✓ Markdown Ready
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleConvert}>
          ✨ Generate Preview
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          🧹 Clear
        </ActionButton>
      </div>

      {/* Preview */}
      <div className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Preview
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Tampilan hasil Markdown setelah dikonversi.
            </p>
          </div>

          {output && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Preview Ready
            </span>
          )}
        </div>

        <div className="min-h-[220px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {output ? (
            <div
              className="prose prose-slate max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{
                __html: output,
              }}
            />
          ) : (
            <div className="flex min-h-[180px] items-center justify-center text-center">
              <div>
                <div className="text-5xl">📝</div>

                <p className="mt-4 font-semibold text-slate-600 dark:text-slate-300">
                  Preview akan muncul di sini
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Masukkan Markdown lalu klik Generate Preview.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* HTML Output */}
      <div className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Generated HTML
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              HTML hasil konversi Markdown.
            </p>
          </div>

          {output && (
            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
              {outputSize} characters
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolTextarea
            label="HTML Output"
            value={output}
            readOnly
            placeholder="HTML akan muncul di sini..."
          />
        </div>

        {/* Copy */}
        <div className="mt-5">
          <ActionButton
            color="green"
            onClick={handleCopy}
          >
            📋 Copy HTML
          </ActionButton>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            📝
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Apa itu Markdown?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Markdown adalah format penulisan ringan yang memungkinkan
              pengguna membuat teks terstruktur menggunakan sintaks
              sederhana. Markdown banyak digunakan dalam dokumentasi,
              README, blog, dan kebutuhan development.
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