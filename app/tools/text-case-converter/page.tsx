"use client";

import { useState } from "react";
import {
  Copy,
  Download,
  Trash2,
  ArrowUpAZ,
  ArrowDownAZ,
  RefreshCw,
  CaseSensitive,
} from "lucide-react";

import ToolHeader from "@/components/tools/ToolHeader";
import ToolTextarea from "@/components/tools/ToolTextarea";
import StatusAlert from "@/components/tools/StatusAlert";
import ActionButton from "@/components/tools/ActionButton";

export default function TextCaseConverterPage() {

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [status, setStatus] = useState("");

  function toUpperCase() {

    setOutput(input.toUpperCase());

    setStatus("✅ Converted to UPPERCASE");

  }

  function toLowerCase() {

    setOutput(input.toLowerCase());

    setStatus("✅ Converted to lowercase");

  }

  function toTitleCase() {

    const title = input.replace(
      /\w\S*/g,
      (txt) =>
        txt.charAt(0).toUpperCase() +
        txt.substring(1).toLowerCase()
    );

    setOutput(title);

    setStatus("✅ Converted to Title Case");

  }

  function toSentenceCase() {

    if (!input.trim()) return;

    const sentence =
      input.charAt(0).toUpperCase() +
      input.slice(1).toLowerCase();

    setOutput(sentence);

    setStatus("✅ Converted to Sentence case");

  }

  function toggleCase() {

    const toggled = input
      .split("")
      .map((char) =>
        char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase()
      )
      .join("");

    setOutput(toggled);

    setStatus("✅ Toggle Case berhasil");

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

    link.download =
      "text-case-result.txt";

    link.click();

    URL.revokeObjectURL(url);

  }

  return (

    <main className="mx-auto max-w-6xl px-6 py-20">

      <ToolHeader
        icon="🔤"
        title="Text Case Converter"
        description="Ubah teks menjadi UPPERCASE, lowercase, Title Case, Sentence case, atau Toggle Case dengan cepat."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        <ToolTextarea
          label="Input Text"
          value={input}
          onChange={setInput}
          placeholder="Masukkan teks di sini..."
        />

        <ToolTextarea
          label="Result"
          value={output}
          readOnly
          placeholder="Hasil konversi akan muncul di sini..."
        />

      </div>

      <StatusAlert
        status={status}
      />
            <div className="mt-8 flex flex-wrap justify-center gap-4">

        <ActionButton
          onClick={toUpperCase}
          icon={<ArrowUpAZ size={18} />}
        >
          UPPERCASE
        </ActionButton>

        <ActionButton
          onClick={toLowerCase}
          icon={<ArrowDownAZ size={18} />}
        >
          lowercase
        </ActionButton>

        <ActionButton
          onClick={toTitleCase}
          icon={<CaseSensitive size={18} />}
        >
          Title Case
        </ActionButton>

        <ActionButton
          onClick={toSentenceCase}
          icon={<RefreshCw size={18} />}
          color="green"
        >
          Sentence Case
        </ActionButton>

        <ActionButton
          onClick={toggleCase}
          icon={<RefreshCw size={18} />}
          color="gray"
        >
          Toggle Case
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

      <div className="mt-12 rounded-2xl bg-slate-100 p-6 text-center dark:bg-slate-800">

        <h2 className="mb-4 text-xl font-bold dark:text-white">
          Tentang Text Case Converter
        </h2>

        <p className="leading-8 text-slate-600 dark:text-slate-400">
          Tool ini membantu mengubah format huruf menjadi
          UPPERCASE, lowercase, Title Case, Sentence Case,
          maupun Toggle Case. Sangat berguna untuk penulisan
          artikel, coding, SEO, maupun kebutuhan akademik.
        </p>

      </div>

    </main>

  );

}