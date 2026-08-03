"use client";

import { useState } from "react";

import {
  Clock3,
  Copy,
  Trash2,
} from "lucide-react";

import ToolHeader from "@/components/tools/ToolHeader";
import ToolTextarea from "@/components/tools/ToolTextarea";
import StatusAlert from "@/components/tools/StatusAlert";
import ActionButton from "@/components/tools/ActionButton";

export default function TimestampConverterPage() {

  const [timestamp, setTimestamp] = useState("");

  const [dateValue, setDateValue] = useState("");

  const [status, setStatus] = useState("");

  function convertToDate() {

    if (!timestamp.trim()) return;

    const date = new Date(Number(timestamp) * 1000);

    setDateValue(date.toLocaleString());

    setStatus("✅ Timestamp berhasil dikonversi");

  }

  function convertToTimestamp() {

    if (!dateValue.trim()) return;

    const unix = Math.floor(
      new Date(dateValue).getTime() / 1000
    );

    setTimestamp(unix.toString());

    setStatus("✅ Date berhasil dikonversi");

  }

  function currentTimestamp() {

    const now = Math.floor(Date.now() / 1000);

    setTimestamp(now.toString());

    setDateValue(
      new Date().toLocaleString()
    );

    setStatus("✅ Current Timestamp berhasil dibuat");

  }

  async function copyOutput() {

    await navigator.clipboard.writeText(

      `Timestamp : ${timestamp}

Date : ${dateValue}`

    );

    setStatus("✅ Berhasil disalin");

  }

  function clearAll() {

    setTimestamp("");

    setDateValue("");

    setStatus("");

  }

  return (

    <main className="mx-auto max-w-6xl px-6 py-20">

      <ToolHeader
        icon="⏰"
        title="Timestamp Converter"
        description="Konversi Unix Timestamp menjadi tanggal dan sebaliknya."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        <ToolTextarea
          label="Unix Timestamp"
          value={timestamp}
          onChange={setTimestamp}
          placeholder="Contoh: 1754236800"
        />

        <ToolTextarea
          label="Date & Time"
          value={dateValue}
          onChange={setDateValue}
          placeholder="Tanggal akan muncul di sini..."
        />

      </div>

      <StatusAlert
        status={status}
      />
      <div className="mt-8 flex flex-wrap justify-center gap-4">

  <ActionButton
    onClick={convertToDate}
    icon={<Clock3 size={18} />}
  >
    Timestamp → Date
  </ActionButton>

  <ActionButton
    onClick={convertToTimestamp}
    icon={<Clock3 size={18} />}
    color="green"
  >
    Date → Timestamp
  </ActionButton>

  <ActionButton
    onClick={currentTimestamp}
    icon={<Clock3 size={18} />}
    color="blue"
  >
    Current Time
  </ActionButton>

</div>

<div className="mt-6 flex flex-wrap justify-center gap-4">

  <ActionButton
    onClick={copyOutput}
    icon={<Copy size={18} />}
    color="gray"
  >
    Copy
  </ActionButton>

  <ActionButton
    onClick={clearAll}
    icon={<Trash2 size={18} />}
    color="red"
  >
    Clear
  </ActionButton>

</div>

<div className="mt-12 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">

  <h2 className="mb-4 text-xl font-bold dark:text-white">
    Tentang Timestamp Converter
  </h2>

  <p className="leading-8 text-slate-600 dark:text-slate-400">
    Timestamp Converter membantu mengubah Unix Timestamp menjadi format
    tanggal dan waktu yang mudah dibaca, maupun sebaliknya. Tool ini
    sangat berguna bagi programmer, backend developer, DevOps, serta
    administrator sistem ketika melakukan debugging, logging, atau
    pengolahan data berbasis waktu.
  </p>

</div>

</main>

);
}