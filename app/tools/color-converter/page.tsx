"use client";

import { useState } from "react";

import {
  Palette,
  Copy,
  Trash2,
} from "lucide-react";

import ToolHeader from "@/components/tools/ToolHeader";
import ToolTextarea from "@/components/tools/ToolTextarea";
import StatusAlert from "@/components/tools/StatusAlert";
import ActionButton from "@/components/tools/ActionButton";

export default function ColorConverterPage() {

  const [hex, setHex] = useState("#3B82F6");

  const [rgb, setRgb] = useState("");

  const [status, setStatus] = useState("");

  function hexToRgb() {

  const value = hex.replace("#", "").trim();

  if (!/^[0-9A-Fa-f]{6}$/.test(value)) {

    setStatus("❌ Format HEX tidak valid");

    return;

  }

  const bigint = parseInt(value, 16);

  const r = (bigint >> 16) & 255;

  const g = (bigint >> 8) & 255;

  const b = bigint & 255;

  setRgb(`${r}, ${g}, ${b}`);

  setStatus("✅ HEX berhasil dikonversi");

}

  function rgbToHex() {

  const values = rgb.split(",");

  if (values.length !== 3) {

    setStatus("❌ Format RGB tidak valid");

    return;

  }

  const [r, g, b] = values.map(v => Number(v.trim()));

  if (

    [r, g, b].some(

      n => isNaN(n) || n < 0 || n > 255

    )

  ) {

    setStatus("❌ Nilai RGB harus 0 - 255");

    return;

  }

  const hexColor =

    "#" +

    [r, g, b]

      .map(x =>

        x.toString(16).padStart(2, "0")

      )

      .join("")

      .toUpperCase();

  setHex(hexColor);

  setStatus("✅ RGB berhasil dikonversi");

}

  async function copyHex(){

    await navigator.clipboard.writeText(hex);

    setStatus("✅ HEX disalin");

  }

  async function copyRgb(){

    await navigator.clipboard.writeText(rgb);

    setStatus("✅ RGB disalin");

  }

  function clearAll(){

    setHex("#3B82F6");

    setRgb("");

    setStatus("");

  }

  return(

    <main className="mx-auto max-w-6xl px-6 py-20">

      <ToolHeader
        icon="🎨"
        title="Color Converter"
        description="Konversi warna HEX dan RGB dengan live preview."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        <ToolTextarea
          label="HEX"
          value={hex}
          onChange={setHex}
          placeholder="#3B82F6"
        />

        <ToolTextarea
          label="RGB"
          value={rgb}
          onChange={setRgb}
          placeholder="59,130,246"
        />

      </div>

      <StatusAlert
        status={status}
      />

      <div className="mt-8 flex justify-center">

        <div
          className="h-40 w-40 rounded-3xl border-4 border-white shadow-xl"
          style={{
            backgroundColor:hex
          }}
        />

      </div>
<div className="mt-8 flex flex-wrap justify-center gap-4">

  <ActionButton
    onClick={hexToRgb}
    icon={<Palette size={18} />}
  >
    HEX → RGB
  </ActionButton>

  <ActionButton
    onClick={rgbToHex}
    icon={<Palette size={18} />}
    color="green"
  >
    RGB → HEX
  </ActionButton>

</div>
<div className="mt-8 flex flex-wrap justify-center gap-4">

  <ActionButton
    onClick={copyHex}
    icon={<Copy size={18} />}
    color="gray"
  >
    Copy HEX
  </ActionButton>

  <ActionButton
    onClick={copyRgb}
    icon={<Copy size={18} />}
    color="blue"
  >
    Copy RGB
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

    Tentang Color Converter

  </h2>

  <p className="leading-8 text-slate-600 dark:text-slate-400">

    Color Converter membantu mengubah format warna dari HEX ke RGB
    maupun sebaliknya. Tool ini berguna bagi web developer,
    UI/UX designer, graphic designer, dan content creator ketika
    bekerja dengan kode warna digital.

  </p>

</div>

</main>

);

}