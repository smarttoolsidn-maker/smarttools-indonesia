"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  encodeURL,
  decodeURL,
} from "@/lib/url";

import { useStatus } from "@/hooks";

export default function URLEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const inputSize = useMemo(() => input.length, [input]);
  const outputSize = useMemo(() => output.length, [output]);

  function handleEncode() {
    if (!input.trim()) {
      error("Masukkan URL terlebih dahulu.");
      return;
    }

    try {
      const result = encodeURL(input);

      setOutput(result);

      success("URL berhasil di-encode.");
    } catch {
      error("Gagal encode URL.");
    }
  }

  function handleDecode() {
    if (!input.trim()) {
      error("Masukkan URL terlebih dahulu.");
      return;
    }

    try {
      const result = decodeURL(input);

      setOutput(result);

      success("URL berhasil di-decode.");
    } catch {
      error("URL tidak valid.");
    }
  }

  async function handleCopy() {
    if (!output) {
      error("Belum ada output untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);

      success("Output URL berhasil disalin.");
    } catch {
      error("Gagal menyalin output.");
    }
  }

  function handleUseAsInput() {
    if (!output) {
      error("Belum ada output.");
      return;
    }

    setInput(output);

    success("Output berhasil dipindahkan ke input.");
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="url-encoder"
      icon="🔗"
      title="URL Encoder / Decoder"
      description="Encode atau decode URL secara instan untuk kebutuhan web development."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="4K+"
    >
      {/* Input Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Input URL
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan URL atau teks URL yang ingin diproses.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Converter
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="URL Input"
          value={input}
          onChange={setInput}
          placeholder="https://smarttools.id/search?q=hello world"
        />
      </div>

      {/* Input Stats */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Input: {inputSize} characters
        </span>

        {input.trim() && (
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
            URL Ready
          </span>
        )}
      </div>

      {/* Main Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleEncode}>
          🔗 Encode
        </ActionButton>

        <ActionButton
          onClick={handleDecode}
          color="green"
        >
          🔓 Decode
        </ActionButton>

        <ActionButton
          onClick={handleClear}
          color="gray"
        >
          🧹 Clear
        </ActionButton>
      </div>

      {/* Output */}
      <div className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Output URL
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Hasil encode atau decode URL akan muncul di sini.
            </p>
          </div>

          {output && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Ready
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolTextarea
            label="Output"
            value={output}
            readOnly
            placeholder="Hasil akan muncul di sini..."
          />
        </div>

        {/* Output Stats */}
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Output: {outputSize} characters
          </span>
        </div>

        {/* Output Actions */}
        <div className="mt-5 flex flex-wrap gap-3">
          <ActionButton
            color="blue"
            onClick={handleCopy}
          >
            📋 Copy Output
          </ActionButton>

          <ActionButton
            color="green"
            onClick={handleUseAsInput}
          >
            🔄 Use as Input
          </ActionButton>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            🔗
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Apa itu URL Encoding?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              URL Encoding digunakan untuk mengubah karakter tertentu
              dalam URL menjadi format yang aman digunakan dalam alamat
              web dan parameter query.
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