"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  encodeBase64,
  decodeBase64,
} from "@/lib/base64";

import { useStatus } from "@/hooks";

export default function Base64EncoderPage() {
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
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    try {
      const result = encodeBase64(input);

      setOutput(result);

      success("Text berhasil di-encode.");
    } catch {
      error("Gagal melakukan encode.");
    }
  }

  function handleDecode() {
    if (!input.trim()) {
      error("Masukkan Base64 terlebih dahulu.");
      return;
    }

    try {
      const result = decodeBase64(input);

      setOutput(result);

      success("Base64 berhasil di-decode.");
    } catch {
      error("Base64 tidak valid.");
    }
  }

  async function handleCopy() {
    if (!output) {
      error("Belum ada output untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);

      success("Output berhasil disalin.");
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
      toolId="base64-encoder"
      icon="🔤"
      title="Base64 Encoder / Decoder"
      description="Encode maupun decode Base64 secara instan untuk kebutuhan development dan data processing."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="7K+"
    >
      {/* Input Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Input
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan teks biasa untuk encode atau Base64 untuk decode.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Converter
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="Input Text / Base64"
          value={input}
          onChange={setInput}
          placeholder="Masukkan text atau Base64..."
        />
      </div>

      {/* Input Stats */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Input: {inputSize} characters
        </span>
      </div>

      {/* Main Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleEncode}>
          ✨ Encode
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
              Output
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Hasil encode atau decode akan muncul di sini.
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
            🔤
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Apa itu Base64?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Base64 adalah metode encoding yang mengubah data menjadi
              representasi teks menggunakan karakter tertentu sehingga
              dapat digunakan dalam berbagai kebutuhan development dan
              pertukaran data.
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