"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { isValidJSON } from "@/lib/json";

import { useStatus } from "@/hooks";

export default function JSONValidatorPage() {
  const [input, setInput] = useState("");
  const [validationResult, setValidationResult] = useState<
    "valid" | "invalid" | null
  >(null);

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleValidate() {
    if (!input.trim()) {
      setValidationResult(null);
      error("Masukkan JSON terlebih dahulu.");
      return;
    }

    const valid = isValidJSON(input);

    if (valid) {
      setValidationResult("valid");
      success("JSON Valid ✅");
    } else {
      setValidationResult("invalid");
      error("JSON Tidak Valid ❌");
    }
  }

  function handleClear() {
    setInput("");
    setValidationResult(null);
  }

  function handleExample() {
    const example = `{
  "name": "SmartTools Indonesia",
  "country": "Indonesia",
  "tools": 15,
  "free": true
}`;

    setInput(example);
    setValidationResult(null);
  }

  return (
    <ToolLayout
      toolId="json-validator"
      icon="✅"
      title="JSON Validator"
      description="Validasi format JSON secara instan dan pastikan data JSON kamu memiliki struktur yang benar."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      {/* Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            JSON Input
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan atau tempel JSON yang ingin kamu validasi.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Developer Tool
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="JSON"
          value={input}
          onChange={(value) => {
            setInput(value);
            setValidationResult(null);
          }}
          placeholder={'{\n  "name": "SmartTools"\n}'}
        />
      </div>

      {/* Character Count */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Input: {input.length} characters
        </span>

        {input.trim() && (
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
            JSON Ready
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleValidate}>
          ✅ Validate JSON
        </ActionButton>

        <ActionButton
          color="blue"
          onClick={handleExample}
        >
          💡 Example
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          🧹 Clear
        </ActionButton>
      </div>

      {/* Validation Result */}
      {validationResult && (
        <div
          className={`mt-8 rounded-3xl border p-6 ${
            validationResult === "valid"
              ? "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-950/30"
              : "border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-950/30"
          }`}
        >
          <div className="flex items-start gap-4">

            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-white shadow-lg ${
                validationResult === "valid"
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {validationResult === "valid" ? "✓" : "!"}
            </div>

            <div>
              <h3
                className={`text-lg font-bold ${
                  validationResult === "valid"
                    ? "text-green-700 dark:text-green-400"
                    : "text-red-700 dark:text-red-400"
                }`}
              >
                {validationResult === "valid"
                  ? "JSON Valid"
                  : "JSON Tidak Valid"}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {validationResult === "valid"
                  ? "JSON yang kamu masukkan memiliki format yang valid dan dapat diproses."
                  : "JSON yang kamu masukkan memiliki format yang tidak valid. Periksa kembali tanda kurung, koma, tanda kutip, dan struktur JSON."}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Status */}
      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}