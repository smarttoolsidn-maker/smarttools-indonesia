"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import ToolResult from "@/components/tools/ToolResult";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { generateUUID } from "@/lib/uuid";

import { useClipboard, useStatus } from "@/hooks";

export default function UUIDGeneratorPage() {
  const [uuid, setUuid] = useState("");

  const {
    copied,
    copy,
  } = useClipboard();

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleGenerateUUID() {
    try {
      const value = generateUUID();

      setUuid(value);

      success("UUID berhasil dibuat.");
    } catch {
      error("Gagal membuat UUID.");
    }
  }

  async function handleCopyUUID() {
    const ok = await copy(uuid);

    if (ok) {
      success("UUID berhasil disalin.");
    }
  }

  return (
    <ToolLayout
      toolId="uuid-generator"
      icon="🆔"
      title="UUID Generator"
      description="Generate UUID v4 secara instan dan aman."
      category="Generator"
      badge="Popular"
      rating="4.9"
      users="6K+"
    >
      <ToolResult
        label="Generated UUID"
        value={uuid}
      />
            <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
          onClick={handleGenerateUUID}
        >
          Generate UUID
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleCopyUUID}
          disabled={!uuid}
        >
          {copied ? "Copied!" : "Copy UUID"}
        </ActionButton>

      </div>

      <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg">
      🆔
    </div>

    <div>
      <h3 className="font-bold text-slate-900 dark:text-white">
        Apa itu UUID?
      </h3>

      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
        UUID (Universally Unique Identifier) adalah identifier unik
        yang dapat digunakan untuk database, aplikasi, API, dan
        berbagai kebutuhan development.
      </p>
    </div>
  </div>
</div>

      <div className="mt-8">
        <StatusAlert
          status={status}
        />
      </div>

    </ToolLayout>
  );
}