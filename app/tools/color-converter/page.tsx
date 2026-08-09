"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolInput from "@/components/tools/ToolInput";
import ToolResult from "@/components/tools/ToolResult";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { hexToRgb } from "@/lib/color";

import { useStatus } from "@/hooks";

export default function ColorConverterPage() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleConvert() {
    try {
      setRgb(hexToRgb(hex));
      success("Berhasil dikonversi.");
    } catch {
      error("HEX tidak valid.");
    }
  }

  return (
    <ToolLayout
      toolId="color-converter"
      icon="🎨"
      title="Color Converter"
      description="Konversi HEX ke RGB."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="4K+"
    >
      <ToolInput
        label="HEX"
        value={hex}
        onChange={setHex}
        placeholder="#3b82f6"
      />

      <div className="mt-8">
        <ToolResult
          label="RGB"
          value={rgb}
        />
      </div>

      <div className="mt-8">
        <ActionButton onClick={handleConvert}>
          Convert
        </ActionButton>
      </div>

      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}