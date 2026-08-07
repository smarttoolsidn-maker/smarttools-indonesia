"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tools/ToolSection";
import ToolActions from "@/components/tools/ToolActions";

import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import TimestampInput from "./components/TimestampInput";
import TimestampResult from "./components/TimestampResult";

export default function TimestampConverterPage() {
  const [timestamp, setTimestamp] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  function convertTimestamp() {
    if (!timestamp.trim()) {
      setStatus("❌ Masukkan Unix Timestamp.");
      return;
    }

    const unix = Number(timestamp);

    if (Number.isNaN(unix)) {
      setStatus("❌ Timestamp tidak valid.");
      return;
    }

    const date = new Date(unix * 1000);

    if (isNaN(date.getTime())) {
      setStatus("❌ Timestamp tidak valid.");
      return;
    }

    setResult(date.toLocaleString("id-ID"));

    setStatus("✅ Berhasil dikonversi.");
  }

  function currentTimestamp() {
    const unix = Math.floor(Date.now() / 1000);

    setTimestamp(unix.toString());

    setResult(
      new Date(unix * 1000).toLocaleString("id-ID")
    );

    setStatus("✅ Menggunakan waktu saat ini.");
  }

  async function copyResult() {
    if (!result) return;

    await navigator.clipboard.writeText(result);

    setStatus("✅ Hasil berhasil disalin.");
  }

  function clearAll() {
    setTimestamp("");
    setResult("");
    setStatus("");
  }

  return (
    <ToolLayout
      toolId="timestamp-converter"
      icon="⏰"
      title="Timestamp Converter"
      description="Konversi Unix Timestamp menjadi tanggal dan waktu."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      <ToolSection title="Input">

        <TimestampInput
          value={timestamp}
          onChange={setTimestamp}
        />

      </ToolSection>

      <ToolSection title="Result">

        <TimestampResult
          result={result}
        />

      </ToolSection>

      <ToolActions>

        <ActionButton
          onClick={convertTimestamp}
        >
          Convert
        </ActionButton>

        <ActionButton
          color="green"
          onClick={currentTimestamp}
        >
          Current Time
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

      </ToolActions>

      <StatusAlert
        status={status}
      />

    </ToolLayout>
  );
}