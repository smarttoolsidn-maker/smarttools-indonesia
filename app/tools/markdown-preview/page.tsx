"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { markdownToHtml } from "@/lib/markdown";

import { useStatus } from "@/hooks";

export default function MarkdownPreviewPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleConvert() {
    if (!input.trim()) {
      error("Masukkan Markdown terlebih dahulu.");
      return;
    }

    setOutput(markdownToHtml(input));

    success("Markdown berhasil dikonversi.");
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="markdown-preview"
      icon="📝"
      title="Markdown Preview"
      description="Konversi Markdown menjadi HTML."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      <ToolTextarea
        label="Markdown"
        value={input}
        onChange={setInput}
        placeholder="# Hello World"
      />

      <div className="mt-8">
        <ToolTextarea
          label="Generated HTML"
          value={output}
          readOnly
          placeholder="HTML akan muncul di sini..."
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <ActionButton onClick={handleConvert}>
          Convert
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