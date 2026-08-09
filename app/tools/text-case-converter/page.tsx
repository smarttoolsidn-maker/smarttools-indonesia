"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toSentenceCase,
} from "@/lib/textcase";

import { useStatus } from "@/hooks";

export default function TextCaseConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleUpperCase() {
    if (!input.trim()) {
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    setOutput(toUpperCase(input));
    success("Berhasil diubah ke UPPERCASE.");
  }

  function handleLowerCase() {
    if (!input.trim()) {
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    setOutput(toLowerCase(input));
    success("Berhasil diubah ke lowercase.");
  }

  function handleTitleCase() {
    if (!input.trim()) {
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    setOutput(toTitleCase(input));
    success("Berhasil diubah ke Title Case.");
  }

  function handleSentenceCase() {
    if (!input.trim()) {
      error("Masukkan teks terlebih dahulu.");
      return;
    }

    setOutput(toSentenceCase(input));
    success("Berhasil diubah ke Sentence case.");
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="text-case-converter"
      icon="🔠"
      title="Text Case Converter"
      description="Ubah teks menjadi UPPERCASE, lowercase, Title Case, atau Sentence case."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="8K+"
    >
      <ToolTextarea
        label="Input"
        value={input}
        onChange={setInput}
        placeholder="Masukkan teks..."
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
        <ActionButton onClick={handleUpperCase}>
          UPPERCASE
        </ActionButton>

        <ActionButton
          onClick={handleLowerCase}
          color="green"
        >
          lowercase
        </ActionButton>

        <ActionButton
          onClick={handleTitleCase}
          color="gray"
        >
          Title Case
        </ActionButton>

        <ActionButton
          onClick={handleSentenceCase}
          color="blue"
        >
          Sentence case
        </ActionButton>

        <ActionButton
          onClick={handleClear}
          color="red"
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