"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Copy,
  Trash2,
  Download,
  FileJson,
} from "lucide-react";

export default function JsonValidatorPage() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "success" | "error" | ""
  >("");
  const [copied, setCopied] = useState(false);

  async function copyJSON() {

  if (!input) return;

  await navigator.clipboard.writeText(input);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);

}

  function clearAll() {
    setInput("");
    setMessage("");
    setStatus("");
  }

  function downloadJSON() {
    if (!input) return;

    const blob = new Blob([input], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "validated.json";
    a.click();

    URL.revokeObjectURL(url);
  }

  function validateJSON() {
    try {
      JSON.parse(input);

      setStatus("success");
      setMessage("✅ JSON Valid");
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Invalid JSON");
      }
    }
  }
  function loadExample() {

  setInput(`{
  "name": "SmartTools Indonesia",
  "version": "1.0",
  "language": "TypeScript",
  "tools": [
    "Password Generator",
    "QR Code Generator",
    "Word Counter",
    "JSON Formatter",
    "JSON Validator"
  ]
}`);

}
    return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      <h1 className="text-5xl font-extrabold dark:text-white">
        🛡️ JSON Validator
      </h1>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Validasi JSON secara gratis, cepat, dan aman langsung di browser.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {/* Input */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

          <h2 className="mb-4 text-xl font-bold dark:text-white">
            JSON Input
          </h2>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`{
            "name": "SmartTools",
            "language": "TypeScript"
            }`}
            className="h-[420px] w-full rounded-2xl border border-slate-300 p-4 font-mono text-sm outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
          />
        <div className="mt-4">

  <button
    onClick={loadExample}
    className="w-full rounded-2xl border border-green-300 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20"
  >
    📋 Load Example JSON
  </button>

</div>
        </div>

        {/* Result */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

          <h2 className="mb-4 text-xl font-bold dark:text-white">
            Validation Result
          </h2>

          <div
            className={`rounded-2xl border p-5 ${
              status === "success"
                ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20"
                : status === "error"
                ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20"
                : "border-slate-300 dark:border-slate-700"
            }`}
          >
            {message || "Belum ada hasil validasi."}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <button
              onClick={validateJSON}
              className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <ShieldCheck size={20} />
              Validate
            </button>

            <button
              onClick={copyJSON}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
            >
              <Copy size={20} />
              {copied ? "Copied!" : "Copy"}
            </button>

            <button
              onClick={downloadJSON}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
            >
              <Download size={20} />
              Download
            </button>

            <button
              onClick={clearAll}
              className="flex items-center justify-center gap-2 rounded-2xl border border-red-300 px-6 py-3 font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-700 dark:hover:bg-red-900/20"
            >
              <Trash2 size={20} />
              Clear
            </button>

            <button
              onClick={loadExample}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-green-300 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20"
>
              <FileJson size={20} />
              Load Example JSON
            </button>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

        <h3 className="text-lg font-bold dark:text-white">
          Tentang JSON Validator
        </h3>

        <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
          JSON Validator membantu memastikan struktur JSON valid sebelum
          digunakan pada API, aplikasi web, database, atau proses debugging.
          Semua proses dilakukan langsung di browser sehingga data tetap aman
          dan tidak dikirim ke server.
        </p>

      </div>

    </main>
  );
}