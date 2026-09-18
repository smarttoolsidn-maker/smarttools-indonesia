"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { decodeJWT } from "@/lib/jwt";

import { useStatus } from "@/hooks";

export default function JWTDecoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  const tokenLength = useMemo(
    () => input.length,
    [input]
  );

  function handleDecode() {
    if (!input.trim()) {
      error("Masukkan JWT terlebih dahulu.");
      return;
    }

    try {
      const result = decodeJWT(input.trim());

      setOutput(result);

      success("JWT berhasil di-decode.");
    } catch {
      setOutput("");

      error(
        "JWT tidak valid atau format token tidak dapat dibaca."
      );
    }
  }

  async function handleCopy() {
    if (!output) {
      error("Belum ada payload untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(output);

      success("Decoded payload berhasil disalin.");
    } catch {
      error("Gagal menyalin payload.");
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="jwt-decoder"
      icon="🔑"
      title="JWT Decoder"
      description="Decode JWT Payload secara instan untuk membantu membaca data token."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      {/* Input Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            JWT Token
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tempel JWT token yang ingin kamu decode.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          🔑 Developer Tool
        </span>
      </div>

      {/* JWT Input */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all focus-within:border-blue-400 focus-within:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <ToolTextarea
          label="JWT Token"
          value={input}
          onChange={(value) => {
            setInput(value);
            setOutput("");
          }}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        />
      </div>

      {/* Token Info */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Token: {tokenLength} characters
        </span>

        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          JWT
        </span>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton onClick={handleDecode}>
          🔓 Decode JWT
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
              Decoded Payload
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Data payload dari JWT akan ditampilkan di sini.
            </p>
          </div>

          {output && (
            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Decoded
            </span>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ToolTextarea
            label="Decoded Payload"
            value={output}
            readOnly
            placeholder="Payload akan muncul di sini..."
          />
        </div>

        {/* Output Info */}
        {output && (
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              Output: {output.length} characters
            </span>

            <span className="rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
              ✓ Payload decoded
            </span>
          </div>
        )}

        {/* Copy */}
        <div className="mt-5">
          <ActionButton
            color="green"
            onClick={handleCopy}
          >
            📋 Copy Payload
          </ActionButton>
        </div>
      </div>

      {/* Information Card */}
      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
            🔑
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Apa itu JWT?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              JSON Web Token (JWT) adalah format token yang umum digunakan
              untuk pertukaran informasi dan autentikasi antara aplikasi
              dan server. Decoder ini digunakan untuk membaca data yang
              tersimpan di dalam token.
            </p>
          </div>

        </div>
      </div>

      {/* Security Notice */}
      <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
        <p className="text-sm leading-6 text-amber-800 dark:text-amber-300">
          ⚠️ Jangan masukkan token rahasia atau token produksi yang
          sensitif jika tidak diperlukan. Decoding JWT tidak sama dengan
          memverifikasi keaslian atau signature token.
        </p>
      </div>

      {/* Status */}
      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}