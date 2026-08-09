"use client";

import { useState } from "react";

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

  function handleFormat() {
    try {
      setOutput(formatJSON(input));
      success("JSON berhasil diformat.");
    } catch {
      error("JSON tidak valid.");
    }
  }

  function handleMinify() {
    try {
      setOutput(minifyJSON(input));
      success("JSON berhasil diminify.");
    } catch {
      error("JSON tidak valid.");
    }
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
      description="Format atau minify JSON secara instan."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="6K+"
    >
      <ToolTextarea
        label="Input JSON"
        value={input}
        onChange={setInput}
        placeholder='{"name":"SmartTools"}'
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
        <ActionButton onClick={handleFormat}>
          Format
        </ActionButton>

        <ActionButton
          onClick={handleMinify}
          color="green"
        >
          Minify
        </ActionButton>

        <ActionButton
          onClick={handleClear}
          color="gray"
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