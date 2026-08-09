"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  encodeBase64,
  decodeBase64,
} from "@/lib/base64";

import { useStatus } from "@/hooks";

export default function Base64EncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleEncode() {
    try {
      const result = encodeBase64(input);

      setOutput(result);

      success("Text berhasil di-encode.");
    } catch {
      error("Gagal melakukan encode.");
    }
  }

  function handleDecode() {
    try {
      const result = decodeBase64(input);

      setOutput(result);

      success("Text berhasil di-decode.");
    } catch {
      error("Base64 tidak valid.");
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="base64-encoder"
      icon="🔤"
      title="Base64 Encoder / Decoder"
      description="Encode maupun decode Base64 secara instan."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="7K+"
    >
      <ToolTextarea
        label="Input"
        value={input}
        onChange={setInput}
        placeholder="Masukkan text atau Base64..."
      />

      <div className="mt-8">

        <ToolTextarea
          label="Output"
          value={output}
          readOnly
          placeholder="Hasil akan muncul di sini..."
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
          onClick={handleEncode}
        >
          Encode
        </ActionButton>

        <ActionButton
          onClick={handleDecode}
          color="green"
        >
          Decode
        </ActionButton>

        <ActionButton
          onClick={handleClear}
          color="gray"
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