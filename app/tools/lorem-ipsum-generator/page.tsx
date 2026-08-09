"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import ToolSlider from "@/components/tools/ToolSlider";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { generateLorem } from "@/lib/lorem";

import { useStatus } from "@/hooks";

export default function LoremIpsumPage() {
  const [words, setWords] = useState(50);

  const [output, setOutput] = useState("");

  const {
    status,
    success,
  } = useStatus();

  function handleGenerate() {
    setOutput(
      generateLorem(words)
    );

    success(
      "Lorem Ipsum berhasil dibuat."
    );
  }

  function handleClear() {
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="lorem-ipsum"
      icon="📄"
      title="Lorem Ipsum Generator"
      description="Generate Lorem Ipsum dengan jumlah kata yang dapat diatur."
      category="Generator"
      badge="Popular"
      rating="4.9"
      users="6K+"
    >
      <ToolSlider
        label="Jumlah Kata"
        value={words}
        min={10}
        max={500}
        onChange={setWords}
      />

      <div className="mt-8">
        <ToolTextarea
          label="Generated Text"
          value={output}
          readOnly
          placeholder="Lorem Ipsum akan muncul di sini..."
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <ActionButton
          onClick={handleGenerate}
        >
          Generate
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