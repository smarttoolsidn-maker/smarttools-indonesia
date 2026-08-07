"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

export default function Base64EncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");

  function encodeBase64() {
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)));

      setOutput(encoded);

      setStatus("✅ Base64 berhasil di-encode.");
    } catch {
      setStatus("❌ Gagal encode Base64.");
    }
  }

  function decodeBase64() {
    try {
      const decoded = decodeURIComponent(escape(atob(input)));

      setOutput(decoded);

      setStatus("✅ Base64 berhasil di-decode.");
    } catch {
      setStatus("❌ Base64 tidak valid.");
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
      toolId="base64-encoder"
      icon="🔐"
      title="Base64 Encoder & Decoder"
      description="Encode dan Decode Base64 secara instan."
      category="Developer"
      badge="Developer"
      rating="4.9"
      users="6K+"
    >
      <div className="grid gap-6 lg:grid-cols-2">

        <ToolTextarea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Masukkan teks..."
        />

        <ToolTextarea
          label="Output"
          value={output}
          placeholder="Hasil..."
          readOnly
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton onClick={encodeBase64}>
          Encode
        </ActionButton>

        <ActionButton
          color="green"
          onClick={decodeBase64}
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