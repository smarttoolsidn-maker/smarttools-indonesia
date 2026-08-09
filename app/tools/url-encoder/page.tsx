"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  encodeURL,
  decodeURL,
} from "@/lib/url";

import { useStatus } from "@/hooks";

export default function URLEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleEncode() {
    try {
      setOutput(encodeURL(input));
      success("URL berhasil di-encode.");
    } catch {
      error("Gagal encode URL.");
    }
  }

  function handleDecode() {
    try {
      setOutput(decodeURL(input));
      success("URL berhasil di-decode.");
    } catch {
      error("URL tidak valid.");
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="url-encoder"
      icon="🔗"
      title="URL Encoder / Decoder"
      description="Encode atau decode URL secara instan."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="4K+"
    >
      <ToolTextarea
        label="Input"
        value={input}
        onChange={setInput}
        placeholder="Masukkan URL..."
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
        <ActionButton onClick={handleEncode}>
          Encode
        </ActionButton>

        <ActionButton
          color="green"
          onClick={handleDecode}
        >
          Decode
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          Clear
        </ActionButton>
      </div>

      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}