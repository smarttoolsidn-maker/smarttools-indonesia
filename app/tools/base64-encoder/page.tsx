"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  Copy,
  Download,
  Trash2,
} from "lucide-react";

export default function Base64EncoderPage() {

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [status, setStatus] = useState("");

  function encodeText() {

    try {

      const encoded = btoa(
        unescape(
          encodeURIComponent(input)
        )
      );

      setOutput(encoded);

      setStatus("✅ Text berhasil di-encode");

    } catch {

      setStatus("❌ Gagal melakukan encode");

    }

  }

  function decodeText() {

    try {

      const decoded = decodeURIComponent(
        escape(
          atob(output || input)
        )
      );

      setOutput(decoded);

      setStatus("✅ Text berhasil di-decode");

    } catch {

      setStatus("❌ Base64 tidak valid");

    }

  }

  async function copyOutput() {

    if (!output) return;

    await navigator.clipboard.writeText(output);

    setStatus("✅ Berhasil disalin");

  }

  function clearAll() {

    setInput("");

    setOutput("");

    setStatus("");

  }

  function swapText() {

    setInput(output);

    setOutput(input);

  }

  function downloadTXT() {

    if (!output) return;

    const blob = new Blob(
      [output],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "base64.txt";

    link.click();

    URL.revokeObjectURL(url);

  }

  return (
        <main className="mx-auto max-w-6xl px-6 py-20">

      <div className="text-center">

        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          🔐 Base64 Encoder / Decoder
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Encode dan Decode Base64 secara instan langsung dari browser.
        </p>

      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {/* INPUT */}

        <div>

          <label className="mb-3 block font-semibold dark:text-white">
            Input
          </label>

          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Masukkan text atau Base64..."
            className="h-80 w-full rounded-2xl border border-slate-300 bg-white p-4 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
          />

        </div>

        {/* OUTPUT */}

        <div>

          <label className="mb-3 block font-semibold dark:text-white">
            Output
          </label>

          <textarea
            value={output}
            readOnly
            placeholder="Hasil akan muncul di sini..."
            className="h-80 w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          />

        </div>

      </div>

      {status && (

        <div
          className={`mt-6 rounded-2xl p-4 text-center font-medium ${
            status.startsWith("✅")
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {status}
        </div>

      )}
            <div className="mt-8 flex flex-wrap justify-center gap-4">

        <button
          onClick={encodeText}
          className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
        >
          Encode
        </button>

        <button
          onClick={decodeText}
          className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
        >
          Decode
        </button>

        <button
          onClick={swapText}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        >
          <ArrowRightLeft size={18} />
          Swap
        </button>

        <button
          onClick={copyOutput}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        >
          <Copy size={18} />
          Copy
        </button>

        <button
          onClick={downloadTXT}
          className="flex items-center gap-2 rounded-2xl border border-green-600 px-6 py-3 font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
        >
          <Download size={18} />
          Download
        </button>

        <button
          onClick={clearAll}
          className="flex items-center gap-2 rounded-2xl border border-red-600 px-6 py-3 font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          <Trash2 size={18} />
          Clear
        </button>

      </div>

      <div className="mt-12 rounded-2xl bg-slate-100 p-6 text-center text-sm leading-7 text-slate-600 dark:bg-slate-800 dark:text-slate-400">

        <p>
          Base64 digunakan untuk mengubah data menjadi format teks ASCII sehingga
          mudah dikirim melalui HTTP, Email, JSON, XML, JWT, Basic Authentication,
          dan berbagai kebutuhan pengembangan aplikasi.
        </p>

      </div>

    </main>
  );
}