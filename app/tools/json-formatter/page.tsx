"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  formatJSON,
  minifyJSON,
} from "@/lib/json";

import { useStatus } from "@/hooks";

export default function JSONFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const inputSize = useMemo(() => {
    return input.length;
  }, [input]);

  const outputSize = useMemo(() => {
    return output.length;
  }, [output]);

  function handleFormat() {
    if (!input.trim()) {
      error("Masukkan JSON terlebih dahulu.");
      return;
    }

    try {
      setOutput(formatJSON(input));
      success("JSON berhasil diformat.");
    } catch {
      error("JSON tidak valid.");
    }
  }

  function handleMinify() {
    if (!input.trim()) {
      error("Masukkan JSON terlebih dahulu.");
      return;
    }

    try {
      setOutput(minifyJSON(input));
      success("JSON berhasil diminify.");
    } catch {
      error("JSON tidak valid.");
    }
  }

  async function handleCopy() {
    if (!output) {
      error("Belum ada output untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);
      success("Output JSON berhasil disalin.");
    } catch {
      error("Gagal menyalin output.");
    }
  }

  function handleUseAsInput() {
    if (!output) {
      error("Belum ada output JSON.");
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
      toolId="json-formatter"
      icon="🧩"
      title="JSON Formatter"
      description="Format, beautify, dan minify JSON secara instan."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="6K+"
    >
      {/* Input Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Input JSON
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Masukkan atau tempel JSON yang ingin diproses.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          ⚡ Developer Tool
        </span>
      </div>

      {/* Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="JSON Input"
          value={input}
          onChange={setInput}
          placeholder={'{\n  "name": "SmartTools",\n  "country": "Indonesia"\n}'}
        />
      </div>

      {/* Input Stats */}
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Input: {inputSize} characters
        </span>

        {input.trim() && (
          <span className="rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
            JSON ready
          </span>
        )}
      </div>

      {/* Main Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleFormat}>
          ✨ Format
        </ActionButton>

        <ActionButton
          onClick={handleMinify}
          color="green"
        >
          ⚡ Minify
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
              Output JSON
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Hasil JSON yang sudah diproses akan muncul di sini.
            </p>
          </div>

          {output && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Valid JSON
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolTextarea
            label="Formatted Output"
            value={output}
            readOnly
            placeholder="Hasil akan muncul di sini..."
          />
        </div>

        {/* Output Stats */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Output: {outputSize} characters
          </span>

          {output && (
            <span className="rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Ready
            </span>
          )}
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

      {/* Status */}
      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}