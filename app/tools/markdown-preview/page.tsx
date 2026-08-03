"use client";
import { useRef } from "react";
import { useState } from "react";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import {

Copy,

Download,

Trash2,

FilePlus2,

} from "lucide-react";

import ToolHeader from "@/components/tools/ToolHeader";

import ToolTextarea from "@/components/tools/ToolTextarea";

import StatusAlert from "@/components/tools/StatusAlert";

import ActionButton from "@/components/tools/ActionButton";

export default function MarkdownPreviewPage(){

const [markdown,setMarkdown]=useState("");

const [status,setStatus]=useState("");
const previewRef = useRef<HTMLDivElement>(null);

async function copyMarkdown(){

if(!markdown) return;

await navigator.clipboard.writeText(markdown);

setStatus("✅ Markdown disalin");

}
async function copyHTML() {

  if (!previewRef.current) return;

  await navigator.clipboard.writeText(
    previewRef.current.innerHTML
  );

  setStatus("✅ HTML berhasil disalin");

}

function loadExample(){

setMarkdown(`# SmartTools Indonesia

## Markdown Preview

- Cepat
- Gratis
- Modern

**Hello World**

| Tools | Status |
|-------|--------|
| JSON | ✅ |
| QR | ✅ |
| JWT | ✅ |

`);

setStatus("✅ Contoh berhasil dimuat");

}

function clearAll(){

setMarkdown("");

setStatus("");

}

function downloadHTML() {

  if (!previewRef.current) return;

  const html = `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>SmartTools Markdown</title>

</head>

<body>

${previewRef.current.innerHTML}

</body>

</html>

`;

  const blob = new Blob(

    [html],

    {

      type:"text/html"

    }

  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = "markdown.html";

  a.click();

  URL.revokeObjectURL(url);

}

return(

<main className="mx-auto max-w-7xl px-6 py-20">

<ToolHeader

icon="📝"

title="Markdown Preview"

description="Preview Markdown secara realtime."

/>

<div className="mt-12 grid gap-8 lg:grid-cols-2">

<ToolTextarea

label="Markdown"

value={markdown}

onChange={setMarkdown}

placeholder="Tulis Markdown..."

/>

<div>

<label className="mb-2 block font-semibold">

Preview

</label>

<div

ref={previewRef}

className="prose min-h-[350px] rounded-2xl border bg-white p-6 dark:prose-invert dark:bg-slate-900"
>

<ReactMarkdown

remarkPlugins={[remarkGfm]}

>

{markdown}

</ReactMarkdown>

</div>

</div>

</div>

<StatusAlert

status={status}

/>
<div className="mt-8 flex flex-wrap justify-center gap-4">

<ActionButton

onClick={loadExample}

icon={<FilePlus2 size={18}/>}

>

Example

</ActionButton>

<ActionButton

onClick={copyMarkdown}

icon={<Copy size={18}/>}

color="gray"

>

Copy Markdown

</ActionButton>

<ActionButton

onClick={copyHTML}

icon={<Copy size={18}/>}

color="green"

>

Copy HTML

</ActionButton>

<ActionButton

onClick={downloadHTML}

icon={<Download size={18}/>}

color="blue"

>

Download HTML

</ActionButton>

<ActionButton

onClick={clearAll}

icon={<Trash2 size={18}/>}

color="red"

>

Clear

</ActionButton>

</div>
<div className="mt-10 grid gap-4 md:grid-cols-4">

<div className="rounded-xl bg-slate-100 p-5 text-center dark:bg-slate-800">

<h3 className="text-sm text-slate-500">

Characters

</h3>

<p className="mt-2 text-3xl font-bold">

{markdown.length}

</p>

</div>

<div className="rounded-xl bg-slate-100 p-5 text-center dark:bg-slate-800">

<h3 className="text-sm text-slate-500">

Words

</h3>

<p className="mt-2 text-3xl font-bold">

{

markdown.trim()

? markdown.trim().split(/\s+/).length

:0

}

</p>

</div>

<div className="rounded-xl bg-slate-100 p-5 text-center dark:bg-slate-800">

<h3 className="text-sm text-slate-500">

Lines

</h3>

<p className="mt-2 text-3xl font-bold">

{

markdown

? markdown.split("\n").length

:0

}

</p>

</div>

<div className="rounded-xl bg-slate-100 p-5 text-center dark:bg-slate-800">

<h3 className="text-sm text-slate-500">

Reading

</h3>

<p className="mt-2 text-3xl font-bold">

{

Math.max(

1,

Math.ceil(

markdown.trim().split(/\s+/).length/200

)

)

}

min

</p>

</div>

</div>
<div className="mt-12 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">

<h2 className="mb-4 text-xl font-bold dark:text-white">

Tentang Markdown Preview

</h2>

<p className="leading-8 text-slate-600 dark:text-slate-400">

Markdown Preview memungkinkan Anda menulis Markdown dan melihat hasilnya secara langsung. Tool ini mendukung sintaks GitHub Flavored Markdown (GFM) seperti tabel, checklist, strikethrough, serta memudahkan pembuatan dokumentasi, README GitHub, artikel teknis, maupun catatan proyek.

</p>

</div>
</main>
  );
}
