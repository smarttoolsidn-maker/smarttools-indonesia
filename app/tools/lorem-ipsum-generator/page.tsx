"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolSlider from "@/components/tools/ToolSlider";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function LoremIpsumGeneratorPage() {
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");

  function generateLorem() {
    const result = Array(count)
      .fill(paragraph)
      .join("\n\n");

    setOutput(result);
    setStatus("✅ Lorem Ipsum berhasil dibuat.");
  }

  async function copyResult() {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    setStatus("✅ Hasil berhasil disalin.");
  }

  function clearAll() {
    setOutput("");
    setStatus("");
  }

  return (
    <ToolLayout
      toolId="lorem-ipsum-generator"
      icon="📝"
      title="Lorem Ipsum Generator"
      description="Generate Lorem Ipsum sesuai jumlah paragraf."
      category="Text"
      badge="Popular"
      rating="4.9"
      users="4K+"
    >
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

        <ToolSlider
          label="Jumlah Paragraf"
          value={count}
          min={1}
          max={20}
          onChange={setCount}
        />

      </div>

      <div className="mt-8">

        <ToolTextarea
          label="Generated Text"
          value={output}
          placeholder="Lorem Ipsum akan muncul di sini..."
          readOnly
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton onClick={generateLorem}>
          Generate
        </ActionButton>

        <ActionButton
          color="green"
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