"use client";

import { useState } from "react";
import {
  Wand2,
  Minimize2,
  Copy,
  Trash2,
  Download,
} from "lucide-react";

export default function JsonFormatterPage() {

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [status, setStatus] = useState<
    "success" | "error" | ""
  >("");

  const [message, setMessage] = useState("");
function beautifyJSON() {

  try {

    const parsed = JSON.parse(input);

    const formatted = JSON.stringify(
      parsed,
      null,
      2
    );

    setOutput(formatted);

    setStatus("success");

    setMessage("✅ Valid JSON");

  } catch {

    setStatus("error");

    setMessage("❌ Invalid JSON");

    setOutput("");

  }

}function minifyJSON() {

  try {

    const parsed = JSON.parse(input);

    setOutput(JSON.stringify(parsed));

    setStatus("success");

    setMessage("✅ Valid JSON");

  } catch {

    setStatus("error");

    setMessage("❌ Invalid JSON");

    setOutput("");

  }

}async function copyOutput() {

  if (!output) return;

  await navigator.clipboard.writeText(output);

}function clearAll() {

  setInput("");

  setOutput("");

  setMessage("");

  setStatus("");

}
function downloadJSON() {

  if (!output) return;

  const blob = new Blob(
    [output],
    {
      type: "application/json",
    }
  );

  const url = URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download = "formatted.json";

  link.click();

  URL.revokeObjectURL(url);

}
return (
  <main className="mx-auto max-w-6xl px-6 py-20">

    {/* Header */}
    <h1 className="text-5xl font-extrabold dark:text-white">
      📄 JSON Formatter
    </h1>

    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
      Format, Beautify, Minify, dan Validasi JSON secara gratis.
    </p>

    <div className="mt-12 grid gap-8 lg:grid-cols-2">

      {/* INPUT */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

        <h2 className="text-xl font-bold dark:text-white">
          Input JSON
        </h2>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"name":"SmartTools"}'
          className="mt-5 h-[420px] w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-4">

          <button
            onClick={beautifyJSON}
            className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <Wand2 size={18}/>
            Beautify
          </button>

          <button
            onClick={minifyJSON}
            className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <Minimize2 size={18}/>
            Minify
          </button>

          <button
            onClick={clearAll}
            className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <Trash2 size={18}/>
            Clear
          </button>

          <button
            onClick={copyOutput}
            className="flex items-center justify-center gap-2 rounded-2xl bg-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            <Copy size={18}/>
            Copy
          </button>

        </div>

      </div>

      {/* OUTPUT */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold dark:text-white">
            Output
          </h2>

          <button
            onClick={downloadJSON}
            className="flex items-center gap-2 rounded-xl border border-blue-600 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <Download size={18}/>
            Download
          </button>

        </div>

        <textarea
          value={output}
          readOnly
          className="mt-5 h-[420px] w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <div
          className={`mt-5 rounded-xl p-4 font-semibold ${
            status === "success"
              ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
              : status === "error"
              ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
              : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
          }`}
        >
          {message || "Belum ada proses."}
        </div>

      </div>

    
        </div>

    {/* Footer */}
    <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

      <h3 className="text-lg font-bold dark:text-white">
        Tentang JSON Formatter
      </h3>

      <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
        JSON Formatter adalah alat gratis untuk mempercantik (Beautify),
        memperkecil ukuran (Minify), dan memvalidasi struktur JSON.
        Tool ini sangat berguna bagi developer ketika membaca,
        mengedit, maupun melakukan debugging data JSON.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
          <h4 className="font-bold dark:text-white">
            ⚡ Cepat
          </h4>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Semua proses dilakukan langsung di browser tanpa
            mengirim data ke server.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
          <h4 className="font-bold dark:text-white">
            🔒 Aman
          </h4>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            JSON yang kamu masukkan tetap berada di perangkatmu.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
          <h4 className="font-bold dark:text-white">
            💯 Gratis
          </h4>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Gunakan tanpa batas kapan saja dan di perangkat apa pun.
          </p>
        </div>

      </div>

    </div>

  </main>
);
}