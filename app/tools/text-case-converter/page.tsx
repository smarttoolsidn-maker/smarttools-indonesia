"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toSentenceCase,
} from "@/lib/textcase";

import { useStatus } from "@/hooks";

export default function TextCaseConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const inputWords = useMemo(() => {
    return input.trim()
      ? input.trim().split(/\s+/).length
      : 0;
  }, [input]);

  const outputWords = useMemo(() => {
    return output.trim()
      ? output.trim().split(/\s+/).length
      : 0;
  }, [output]);

  function handleConvert(
    converter: (value: string) => string,
    message: string
  ) {
    if (!input.trim()) {
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    setOutput(converter(input));
    success(message);
  }

  function handleUpperCase() {
    handleConvert(
      toUpperCase,
      "Berhasil diubah ke UPPERCASE."
    );
  }

  function handleLowerCase() {
    handleConvert(
      toLowerCase,
      "Berhasil diubah ke lowercase."
    );
  }

  function handleTitleCase() {
    handleConvert(
      toTitleCase,
      "Berhasil diubah ke Title Case."
    );
  }

  function handleSentenceCase() {
    handleConvert(
      toSentenceCase,
      "Berhasil diubah ke Sentence case."
    );
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
      toolId="text-case-converter"
      icon="🔠"
      title="Text Case Converter"
      description="Ubah teks menjadi UPPERCASE, lowercase, Title Case, atau Sentence case dengan cepat."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="8K+"
    >
      {/* Input Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Input Text
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan teks yang ingin kamu ubah format hurufnya.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Converter
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="Text"
          value={input}
          onChange={setInput}
          placeholder="Masukkan teks..."
        />
      </div>

      {/* Input Stats */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Characters: {input.length}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Words: {inputWords}
        </span>
      </div>

      {/* Conversion Buttons */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Pilih Format
        </p>

        <div className="flex flex-wrap gap-3">
          <ActionButton onClick={handleUpperCase}>
            🔠 UPPERCASE
          </ActionButton>

          <ActionButton
            onClick={handleLowerCase}
            color="green"
          >
            🔡 lowercase
          </ActionButton>

          <ActionButton
            onClick={handleTitleCase}
            color="gray"
          >
            📝 Title Case
          </ActionButton>

          <ActionButton
            onClick={handleSentenceCase}
            color="blue"
          >
            📄 Sentence case
          </ActionButton>
        </div>
      </div>

      {/* Output */}
      <div className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Output
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Hasil konversi teks akan muncul di sini.
            </p>
          </div>

          {output && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Converted
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolTextarea
            label="Converted Text"
            value={output}
            readOnly
            placeholder="Hasil konversi akan muncul di sini..."
          />
        </div>

        {/* Output Stats */}
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Characters: {output.length}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Words: {outputWords}
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

          <ActionButton
            color="red"
            onClick={handleClear}
          >
            🧹 Clear
          </ActionButton>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            🔠
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Text Case Converter
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Gunakan converter ini untuk mengubah format huruf dengan
              cepat tanpa perlu mengedit teks secara manual. Cocok untuk
              dokumen, artikel, coding, dan kebutuhan konten.
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