"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { sha256 } from "@/lib/hash";

import { useStatus } from "@/hooks";

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  async function handleGenerate() {
    if (!input.trim()) {
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    const result = await sha256(input);

    setOutput(result);

    success("Hash berhasil dibuat.");
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="hash-generator"
      icon="🔒"
      title="SHA-256 Hash Generator"
      description="Generate hash SHA-256 secara instan."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      <ToolTextarea
        label="Input"
        value={input}
        onChange={setInput}
        placeholder="Masukkan teks..."
      />

      <div className="mt-8">
        <ToolTextarea
          label="SHA-256 Hash"
          value={output}
          readOnly
          placeholder="Hash akan muncul di sini..."
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <ActionButton
          onClick={handleGenerate}
        >
          Generate Hash
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          Clear
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