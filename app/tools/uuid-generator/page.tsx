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

      <div className="mt-8">
        <StatusAlert
          status={status}
        />
      </div>

    </ToolLayout>
  );
}