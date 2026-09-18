"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import ToolInput from "@/components/tools/ToolInput";
import ToolResult from "@/components/tools/ToolResult";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  unixToDate,
  getCurrentTimestamp,
} from "@/lib/timestamp";

import { useStatus } from "@/hooks";

export default function TimestampConverterPage() {
  const [timestamp, setTimestamp] = useState("");
  const [result, setResult] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleConvert() {
    if (!timestamp.trim()) {
      error("Masukkan Unix Timestamp.");
      return;
    }

    const numericTimestamp = Number(timestamp);

    if (!Number.isFinite(numericTimestamp)) {
      error("Timestamp harus berupa angka.");
      setResult("");
      return;
    }

    const value = unixToDate(numericTimestamp);

    if (!value) {
      error("Timestamp tidak valid.");
      setResult("");
      return;
    }

    setResult(value);

    success("Timestamp berhasil dikonversi.");
  }

  function handleCurrentTimestamp() {
    const unix = getCurrentTimestamp();

    setTimestamp(unix.toString());
    setResult(unixToDate(unix));

    success("Menggunakan timestamp saat ini.");
  }

  async function handleCopy() {
    if (!result) {
      error("Belum ada hasil untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(result);

      success("Hasil berhasil disalin.");
    } catch {
      error("Gagal menyalin hasil.");
    }
  }

  function handleClear() {
    setTimestamp("");
    setResult("");
  }

  return (
    <ToolLayout
      toolId="timestamp-converter"
      icon="🕒"
      title="Timestamp Converter"
      description="Konversi Unix Timestamp menjadi tanggal dan waktu dengan mudah."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="8K+"
    >
      {/* Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Unix Timestamp
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan Unix Timestamp untuk melihat tanggal dan waktu.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Converter
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolInput
          label="Unix Timestamp"
          value={timestamp}
          onChange={setTimestamp}
          placeholder="Contoh: 1754750000"
        />
      </div>

      {/* Input Info */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Input: {timestamp.length} characters
        </span>

        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          Unix Time
        </span>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleConvert}>
          🕒 Convert Timestamp
        </ActionButton>

        <ActionButton
          color="blue"
          onClick={handleCurrentTimestamp}
        >
          ⚡ Current Timestamp
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          🧹 Clear
        </ActionButton>
      </div>

      {/* Result */}
      <div className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Converted Date & Time
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Hasil konversi Unix Timestamp akan muncul di sini.
            </p>
          </div>

          {result && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Converted
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolResult
            label="Hasil Konversi"
            value={result}
          />
        </div>

        {/* Result Actions */}
        <div className="mt-5 flex flex-wrap gap-3">
          <ActionButton
            color="green"
            onClick={handleCopy}
          >
            📋 Copy Result
          </ActionButton>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            🕒
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Apa itu Unix Timestamp?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Unix Timestamp adalah representasi waktu dalam bentuk angka
              yang digunakan oleh banyak sistem dan aplikasi untuk
              menyimpan serta memproses tanggal dan waktu.
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