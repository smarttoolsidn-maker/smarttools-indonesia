"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

export default function URLEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");

  function encodeURL() {
    try {
      setOutput(encodeURIComponent(input));
      setStatus("✅ URL berhasil di-encode.");
    } catch {
      setStatus("❌ Gagal encode URL.");
    }
  }

  function decodeURL() {
    try {
      setOutput(decodeURIComponent(input));
      setStatus("✅ URL berhasil di-decode.");
    } catch {
      setStatus("❌ URL tidak valid.");
    }
  }

  async function copyResult() {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    setStatus("✅ Hasil berhasil disalin.");
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setStatus("");
  }

  return (
    <ToolLayout
      toolId="url-encoder"
      icon="🌐"
      title="URL Encoder & Decoder"
      description="Encode dan Decode URL secara instan."
      category="Developer"
      badge="Developer"
      rating="4.9"
      users="5K+"
    >
      <div className="grid gap-6 lg:grid-cols-2">

        <ToolTextarea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Masukkan URL..."
        />

        <ToolTextarea
          label="Output"
          value={output}
          placeholder="Hasil..."
          readOnly
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton onClick={encodeURL}>
          Encode
        </ActionButton>

        <ActionButton
          color="green"
          onClick={decodeURL}
        >
          Decode
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={copyResult}
        >
          Copy
        </ActionButton>

        <ActionButton
          color="red"
          onClick={clearAll}
        >
          Clear
        </ActionButton>

      </div>

      <StatusAlert status={status} />

    </ToolLayout>
  );
}