"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";
import ToolSlider from "@/components/tools/ToolSlider";

export default function UUIDGeneratorPage() {
  const [count, setCount] = useState(5);
  const [uuids, setUUIDs] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  function generateUUIDs() {
    const generated = Array.from(
      { length: count },
      () => crypto.randomUUID()
    );

    setUUIDs(generated);
    setStatus("✅ UUID berhasil dibuat.");
  }

  async function copyUUID(uuid: string) {
    await navigator.clipboard.writeText(uuid);

    setStatus("✅ UUID berhasil disalin.");
  }

  async function copyAll() {
    if (!uuids.length) return;

    await navigator.clipboard.writeText(
      uuids.join("\n")
    );

    setStatus("✅ Semua UUID berhasil disalin.");
  }

  function downloadTXT() {
    if (!uuids.length) return;

    const blob = new Blob(
      [uuids.join("\n")],
      {
        type: "text/plain",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "uuid.txt";

    a.click();

    URL.revokeObjectURL(url);

    setStatus("✅ File berhasil diunduh.");
  }

  function clearAll() {
    setUUIDs([]);
    setStatus("🗑️ Semua UUID dihapus.");
  }

  return (
    <ToolLayout
      toolId="uuid-generator"
      icon="🆔"
      title="UUID Generator"
      description="Generate UUID v4 secara instan dan gratis."
      category="Generator"
      badge="Developer"
      rating="4.9"
      users="4K+"
    >
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

        <h2 className="mb-6 text-xl font-bold dark:text-white">
          UUID Settings
        </h2>

        <ToolSlider
          label="Jumlah UUID"
          value={count}
          min={1}
          max={100}
          onChange={setCount}
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
          onClick={generateUUIDs}
        >
          Generate UUID
        </ActionButton>

        <ActionButton
          color="green"
          onClick={copyAll}
        >
          Copy All
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={downloadTXT}
        >
          Download TXT
        </ActionButton>

        <ActionButton
          color="red"
          onClick={clearAll}
        >
          Clear
        </ActionButton>

      </div>

      {uuids.length > 0 && (

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">

          <h2 className="mb-6 text-xl font-bold dark:text-white">
            Generated UUID
          </h2>

          <div className="space-y-3">

            {uuids.map((uuid) => (

              <div
                key={uuid}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 dark:border-slate-700"
              >

                <code className="break-all text-sm dark:text-white">
                  {uuid}
                </code>

                <ActionButton
                  color="green"
                  onClick={() => copyUUID(uuid)}
                >
                  Copy
                </ActionButton>

              </div>

            ))}

          </div>

        </div>

      )}

      <StatusAlert
        status={status}
      />

    </ToolLayout>
  );
}