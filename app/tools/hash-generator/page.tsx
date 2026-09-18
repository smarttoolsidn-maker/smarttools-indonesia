"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { sha256 } from "@/lib/hash";

import { useStatus } from "@/hooks";

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const inputSize = useMemo(() => input.length, [input]);

  async function handleGenerate() {
    if (!input.trim()) {
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    try {
      const result = await sha256(input);

      setOutput(result);

      success("Hash SHA-256 berhasil dibuat.");
    } catch {
      error("Gagal membuat hash.");
    }
  }

  async function handleCopy() {
    if (!output) {
      error("Belum ada hash untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);

      success("Hash berhasil disalin.");
    } catch {
      error("Gagal menyalin hash.");
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="hash-generator"
      icon="🔒"
      title="SHA-256 Hash Generator"
      description="Generate hash SHA-256 dari teks secara instan."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      {/* Input Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Input Text
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan teks yang ingin diubah menjadi hash SHA-256.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          🔐 SHA-256
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="Text"
          value={input}
          onChange={setInput}
          placeholder="Masukkan teks yang ingin di-hash..."
        />
      </div>

      {/* Input Stats */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Input: {inputSize} characters
        </span>

        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          Algorithm: SHA-256
        </span>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleGenerate}>
          🔐 Generate Hash
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
              SHA-256 Hash
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Hasil hash SHA-256 akan muncul di sini.
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
            label="Hash Output"
            value={output}
            readOnly
            placeholder="Hash akan muncul di sini..."
          />
        </div>

        {/* Hash Information */}
        {output && (
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              Length: {output.length} characters
            </span>

            <span className="rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ SHA-256
            </span>
          </div>
        )}

        {/* Output Action */}
        <div className="mt-5 flex flex-wrap gap-3">
          <ActionButton
            color="blue"
            onClick={handleCopy}
          >
            📋 Copy Hash
          </ActionButton>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            🔒
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Apa itu SHA-256?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              SHA-256 adalah fungsi hash kriptografis yang menghasilkan
              nilai hash dengan panjang 256 bit. Hash bersifat satu arah
              sehingga nilai yang dihasilkan tidak dirancang untuk
              dikembalikan menjadi teks asli.
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