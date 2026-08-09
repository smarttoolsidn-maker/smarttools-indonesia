"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import ToolInput from "@/components/tools/ToolInput";
import ToolResult from "@/components/tools/ToolResult";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import {
  unixToDate,
  getCurrentTimestamp,
} from "@/lib/timestamp";

import { useStatus } from "@/hooks";

export default function TimestampConverterPage() {
  const [timestamp, setTimestamp] = useState("");
  const [result, setResult] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleConvert() {
    if (!timestamp.trim()) {
      error("Masukkan Unix Timestamp.");
      return;
    }

    const value = unixToDate(
      Number(timestamp)
    );

    if (!value) {
      error("Timestamp tidak valid.");
      setResult("");
      return;
    }

    setResult(value);

    success(
      "Timestamp berhasil dikonversi."
    );
  }

  function handleCurrentTimestamp() {
    const unix =
      getCurrentTimestamp();

    setTimestamp(
      unix.toString()
    );

    setResult(
      unixToDate(unix)
    );

    success(
      "Menggunakan waktu saat ini."
    );
  }

  return (
    <ToolLayout
      toolId="timestamp-converter"
      icon="🕒"
      title="Timestamp Converter"
      description="Konversi Unix Timestamp menjadi tanggal dan waktu dengan mudah."
      category="Converter"
      badge="Popular"
      rating="4.9"
      users="8K+"
    >
      <ToolInput
        label="Unix Timestamp"
        value={timestamp}
        onChange={setTimestamp}
        placeholder="Contoh: 1754750000"
      />

      <div className="mt-8">
        <ToolResult
          label="Hasil Konversi"
          value={result}
        />
      </div>
            <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
          onClick={handleConvert}
        >
          Convert Timestamp
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleCurrentTimestamp}
        >
          Current Timestamp
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