"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { isValidJSON } from "@/lib/json";

import { useStatus } from "@/hooks";

export default function JSONValidatorPage() {
  const [input, setInput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleValidate() {
    if (!input.trim()) {
      error("Masukkan JSON terlebih dahulu.");
      return;
    }

    if (isValidJSON(input)) {
      success("JSON Valid ✅");
    } else {
      error("JSON Tidak Valid ❌");
    }
  }

  function handleClear() {
    setInput("");
  }

  return (
    <ToolLayout
      toolId="json-validator"
      icon="✅"
      title="JSON Validator"
      description="Validasi format JSON secara instan."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      <ToolTextarea
        label="JSON"
        value={input}
        onChange={setInput}
        placeholder='{"name":"SmartTools"}'
      />

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
          onClick={handleValidate}
        >
          Validate
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