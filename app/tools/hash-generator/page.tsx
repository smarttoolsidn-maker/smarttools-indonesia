"use client";
import * as CryptoJS from "crypto-js";
import { useState } from "react";

import {
  ShieldCheck,
  Copy,
  Download,
  Trash2,
} from "lucide-react";

import ToolHeader from "@/components/tools/ToolHeader";
import ToolTextarea from "@/components/tools/ToolTextarea";
import StatusAlert from "@/components/tools/StatusAlert";
import ActionButton from "@/components/tools/ActionButton";

export default function HashGeneratorPage() {

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [status, setStatus] = useState("");

  function generateHash(type: string) {

  if (!input.trim()) {

    setStatus("⚠️ Masukkan teks terlebih dahulu");

    return;

  }

  let hash = "";

  switch (type) {

    case "MD5":
      hash = CryptoJS.MD5(input).toString();
      break;

    case "SHA1":
      hash = CryptoJS.SHA1(input).toString();
      break;

    case "SHA256":
      hash = CryptoJS.SHA256(input).toString();
      break;

    case "SHA512":
      hash = CryptoJS.SHA512(input).toString();
      break;

    default:
      hash = "";
  }

  setOutput(hash);

  setStatus(`✅ ${type} berhasil dibuat`);

}

  async function copyOutput() {

    if (!output) return;

    await navigator.clipboard.writeText(
      output
    );

    setStatus("✅ Berhasil disalin");

  }

  function clearAll() {

    setInput("");

    setOutput("");

    setStatus("");

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

    link.download = "hash.txt";

    link.click();

    URL.revokeObjectURL(url);

  }

  return (

    <main className="mx-auto max-w-6xl px-6 py-20">

      <ToolHeader
        icon="🔐"
        title="Hash Generator"
        description="Generate hash menggunakan SHA-1, SHA-256, SHA-512, dan MD5."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        <ToolTextarea
          label="Input Text"
          value={input}
          onChange={setInput}
          placeholder="Masukkan teks..."
        />

        <ToolTextarea
          label="Hash Result"
          value={output}
          readOnly
          placeholder="Hash akan muncul di sini..."
        />

      </div>

      <StatusAlert
        status={status}
      />
<div className="mt-8 flex flex-wrap justify-center gap-4">

  <ActionButton
    onClick={() => generateHash("MD5")}
    icon={<ShieldCheck size={18} />}
  >
    MD5
  </ActionButton>

  <ActionButton
    onClick={() => generateHash("SHA1")}
    icon={<ShieldCheck size={18} />}
    color="gray"
  >
    SHA1
  </ActionButton>

  <ActionButton
    onClick={() => generateHash("SHA256")}
    icon={<ShieldCheck size={18} />}
    color="green"
  >
    SHA256
  </ActionButton>

  <ActionButton
    onClick={() => generateHash("SHA512")}
    icon={<ShieldCheck size={18} />}
    color="blue"
  >
    SHA512
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
    onClick={downloadTXT}
    icon={<Download size={18} />}
    color="green"
  >
    Download
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
    Tentang Hash Generator
  </h2>

  <p className="leading-8 text-slate-600 dark:text-slate-400">
    Hash Generator digunakan untuk menghasilkan hash dari sebuah teks
    menggunakan algoritma MD5, SHA-1, SHA-256, dan SHA-512. Tool ini
    bermanfaat untuk pengujian aplikasi, keamanan data, verifikasi
    integritas file, dan kebutuhan pengembangan perangkat lunak.
  </p>

</div>

</main>

);
}