"use client";

import { useState } from "react";
import {
  Copy,
  Download,
  RefreshCw,
} from "lucide-react";

export default function UUIDGeneratorPage() {

  const [count, setCount] = useState(1);

  const [uuids, setUuids] = useState<string[]>(() => [
  crypto.randomUUID(),
]);

  const [copied, setCopied] = useState(false);

  function generateUUIDs() {

    const list = Array.from(
      { length: count },
      () => crypto.randomUUID()
    );

    setUuids(list);

  }

  

  async function copyUUIDs() {

    if (uuids.length === 0) return;

    await navigator.clipboard.writeText(
      uuids.join("\n")
    );

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  }

  function downloadTXT() {

    if (uuids.length === 0) return;

    const blob = new Blob(
      [uuids.join("\n")],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "uuid.txt";

    link.click();

    URL.revokeObjectURL(url);

  }

  return (
        <main className="mx-auto max-w-5xl px-6 py-20">

      <div className="text-center">

        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          🆔 UUID Generator
        </h1>

        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          Generate UUID v4 secara instan, gratis, dan langsung dari browser.
        </p>

      </div>

      <div className="mx-auto mt-12 max-w-md">

        <label className="mb-2 block font-semibold dark:text-white">
          Jumlah UUID
        </label>

        <select
          value={count}
          onChange={(e) =>
            setCount(Number(e.target.value))
          }
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        >
          <option value={1}>1 UUID</option>
          <option value={5}>5 UUID</option>
          <option value={10}>10 UUID</option>
          <option value={25}>25 UUID</option>
          <option value={50}>50 UUID</option>
        </select>

      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-xl font-bold dark:text-white">
            Hasil UUID
          </h2>

          {copied && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
              ✅ Copied!
            </span>
          )}

        </div>

        <div className="h-80 overflow-y-auto rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">

          <div className="space-y-3">

            {uuids.map((uuid, index) => (

              <div
                key={uuid}
                className="rounded-xl bg-white p-3 font-mono text-sm break-all shadow dark:bg-slate-900 dark:text-white"
              >
                <span className="mr-2 font-bold text-blue-600">
                  {index + 1}.
                </span>

                {uuid}
              </div>

            ))}

          </div>

        </div>
              </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <button
          onClick={generateUUIDs}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
        >
          <RefreshCw size={20} />
          Generate
        </button>

        <button
          onClick={copyUUIDs}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        >
          <Copy size={20} />
          Copy
        </button>

        <button
          onClick={downloadTXT}
          className="flex items-center gap-2 rounded-2xl border border-green-600 px-6 py-3 font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
        >
          <Download size={20} />
          Download TXT
        </button>

      </div>

      <div className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
        UUID yang dihasilkan menggunakan <b>crypto.randomUUID()</b> bawaan browser modern sehingga aman, cepat, dan tanpa koneksi internet.
      </div>

    </main>
  );
}