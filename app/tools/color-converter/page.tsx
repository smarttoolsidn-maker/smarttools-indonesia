"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolInput from "@/components/tools/ToolInput";
import ToolResult from "@/components/tools/ToolResult";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { hexToRgb } from "@/lib/color";

import { useStatus } from "@/hooks";

export default function ColorConverterPage() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleConvert() {
    if (!hex.trim()) {
      error("Masukkan kode HEX terlebih dahulu.");
      return;
    }

    try {
      const normalizedHex = hex.startsWith("#")
        ? hex
        : `#${hex}`;

      const result = hexToRgb(normalizedHex);

      setRgb(result);

      success("Warna berhasil dikonversi.");
    } catch {
      setRgb("");
      error("HEX tidak valid.");
    }
  }

  async function handleCopy() {
    if (!rgb) {
      error("Belum ada nilai RGB untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(rgb);

      success("Nilai RGB berhasil disalin.");
    } catch {
      error("Gagal menyalin RGB.");
    }
  }

  function handleClear() {
    setHex("");
    setRgb("");
  }

  const previewColor =
    /^#([0-9A-Fa-f]{6})$/.test(hex.startsWith("#") ? hex : `#${hex}`)
      ? (hex.startsWith("#") ? hex : `#${hex}`)
      : "#3b82f6";

  return (
    <ToolLayout
      toolId="color-converter"
      icon="🎨"
      title="Color Converter"
      description="Konversi kode warna HEX menjadi RGB dengan cepat dan mudah."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="4K+"
    >
      {/* Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            HEX Color
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan kode warna HEX untuk melihat nilai RGB-nya.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          🎨 Color Converter
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolInput
          label="HEX"
          value={hex}
          onChange={setHex}
          placeholder="#3b82f6"
        />
      </div>

      {/* Color Preview */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div
          className="h-32 w-full transition-colors duration-300"
          style={{
            backgroundColor: previewColor,
          }}
        />

        <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Color Preview
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {previewColor}
            </p>
          </div>

          <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
            HEX
          </span>
        </div>
      </div>

      {/* Action */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleConvert}>
          🎨 Convert to RGB
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
              RGB Result
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Nilai RGB dari warna yang kamu masukkan.
            </p>
          </div>

          {rgb && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Converted
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolResult
            label="RGB"
            value={rgb}
          />
        </div>

        {/* Result Info */}
        {rgb && (
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              HEX: {previewColor}
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
              RGB: {rgb}
            </span>
          </div>
        )}

        {/* Copy */}
        <div className="mt-5">
          <ActionButton
            color="green"
            onClick={handleCopy}
          >
            📋 Copy RGB
          </ActionButton>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            🎨
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              HEX dan RGB
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              HEX adalah format warna yang umum digunakan dalam desain
              dan pengembangan web, sedangkan RGB merepresentasikan
              warna berdasarkan nilai Red, Green, dan Blue.
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