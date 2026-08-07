"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

export default function TextCaseConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");

  function toUpperCase() {
    setOutput(input.toUpperCase());
    setStatus("✅ Berhasil diubah ke UPPERCASE.");
  }

  function toLowerCase() {
    setOutput(input.toLowerCase());
    setStatus("✅ Berhasil diubah ke lowercase.");
  }

  function toTitleCase() {
    const result = input.replace(
      /\w\S*/g,
      (txt) =>
        txt.charAt(0).toUpperCase() +
        txt.substring(1).toLowerCase()
    );

    setOutput(result);
    setStatus("✅ Berhasil diubah ke Title Case.");
  }

  function toSentenceCase() {
    if (!input.length) return;

    const result =
      input.charAt(0).toUpperCase() +
      input.slice(1).toLowerCase();

    setOutput(result);
    setStatus("✅ Berhasil diubah ke Sentence case.");
  }

  function toggleCase() {
    const result = input
      .split("")
      .map((char) =>
        char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase()
      )
      .join("");

    setOutput(result);
    setStatus("✅ Berhasil Toggle Case.");
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
      toolId="text-case-converter"
      icon="🔤"
      title="Text Case Converter"
      description="Ubah teks menjadi berbagai format huruf."
      category="Text"
      badge="Popular"
      rating="4.9"
      users="7K+"
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

        <ActionButton onClick={toUpperCase}>
          UPPERCASE
        </ActionButton>

        <ActionButton
          color="green"
          onClick={toLowerCase}
        >
          lowercase
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={toTitleCase}
        >
          Title Case
        </ActionButton>

        <ActionButton
          color="blue"
          onClick={toSentenceCase}
        >
          Sentence Case
        </ActionButton>

        <ActionButton
          color="green"
          onClick={toggleCase}
        >
          Toggle Case
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