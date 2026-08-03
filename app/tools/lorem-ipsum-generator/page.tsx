"use client";

import { useState } from "react";

import {
  Copy,
  Download,
  Trash2,
  RefreshCw,
} from "lucide-react";

import ToolHeader from "@/components/tools/ToolHeader";
import ToolTextarea from "@/components/tools/ToolTextarea";
import StatusAlert from "@/components/tools/StatusAlert";
import ActionButton from "@/components/tools/ActionButton";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.`;

export default function LoremGeneratorPage() {

  const [count, setCount] = useState(3);

  const [output, setOutput] = useState(() =>
    Array(3).fill(lorem).join("\n\n")
  );

  const [status, setStatus] = useState("");

  function generateLorem() {

    setOutput(
      Array(count)
        .fill(lorem)
        .join("\n\n")
    );

    setStatus("✅ Lorem Ipsum berhasil dibuat");

  }

  async function copyOutput() {

    await navigator.clipboard.writeText(
      output
    );

    setStatus("✅ Berhasil disalin");

  }

  function clearAll() {

    setOutput("");

    setStatus("");

  }

  function downloadTXT() {

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

    link.download = "lorem-ipsum.txt";

    link.click();

    URL.revokeObjectURL(url);

  }

  return (
      <main className="mx-auto max-w-6xl px-6 py-20">

      <ToolHeader
        icon="📝"
        title="Lorem Ipsum Generator"
        description="Buat teks Lorem Ipsum untuk kebutuhan desain, website, dan aplikasi."
      />

      <div className="mt-12">

        <label className="mb-3 block font-semibold dark:text-white">
          Jumlah Paragraph
        </label>

        <input
          type="number"
          min={1}
          max={20}
          value={count}
          onChange={(e) =>
            setCount(Number(e.target.value))
          }
          className="w-40 rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

      </div>

      <div className="mt-8">

        <ToolTextarea
          label="Lorem Ipsum"
          value={output}
          readOnly
          placeholder="Lorem Ipsum akan muncul di sini..."
        />

      </div>

      <StatusAlert
        status={status}
      />
            <div className="mt-8 flex flex-wrap justify-center gap-4">

        <ActionButton
          onClick={generateLorem}
          icon={<RefreshCw size={18} />}
          color="blue"
        >
          Generate
        </ActionButton>

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

      <div className="mt-12 rounded-2xl bg-slate-100 p-6 text-center text-sm leading-7 text-slate-600 dark:bg-slate-800 dark:text-slate-400">

        <h2 className="mb-3 text-lg font-bold dark:text-white">
          Tentang Lorem Ipsum
        </h2>

        <p>
          Lorem Ipsum merupakan teks dummy yang telah digunakan sejak
          abad ke-16 oleh industri percetakan dan desain sebagai contoh
          isi sebelum konten asli tersedia. Tool ini membantu desainer,
          developer, dan content creator menghasilkan placeholder text
          secara instan.
        </p>

      </div>

    </main>
  );
}