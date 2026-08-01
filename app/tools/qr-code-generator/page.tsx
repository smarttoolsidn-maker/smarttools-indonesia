"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGeneratorPage() {
  // =========================
  // State
  // =========================
  const [text, setText] = useState("https://smarttools.id");
  const [size, setSize] = useState(250);

  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  // =========================
  // Download PNG
  // =========================
  function downloadQRCode() {
    const svg = document.getElementById("qr-code");

    if (!svg) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);

    const svgBlob = new Blob([source], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(svgBlob);

    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);

      ctx.drawImage(image, 0, 0, size, size);

      URL.revokeObjectURL(url);

      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");

      downloadLink.href = pngFile;
      downloadLink.download = "qr-code.png";

      downloadLink.click();
    };

    image.src = url;
  }

  // =========================
  // Download SVG
  // =========================
  function downloadSVG() {
    const svg = document.getElementById("qr-code");

    if (!svg) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);

    const blob = new Blob([source], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "qr-code.svg";

    link.click();

    URL.revokeObjectURL(url);
  }

  // =========================
  // Reset
  // =========================
  function resetSettings() {
    setText("https://smarttools.id");
    setSize(250);
    setFgColor("#000000");
    setBgColor("#FFFFFF");
  }

  return (
<main className="mx-auto max-w-6xl px-6 py-20">
  <h1 className="text-5xl font-extrabold dark:text-white">
    📱 QR Code Generator
  </h1>

  <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
    Buat QR Code gratis secara instan untuk website, teks, email,
    nomor telepon, atau informasi lainnya.
  </p>

  <div className="mt-12 grid gap-8 lg:grid-cols-2">

    {/* LEFT */}
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

      {/* Text */}
      <label className="font-semibold dark:text-white">
        Link / Text
      </label>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        placeholder="https://smarttools.id"
        className="mt-3 w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
      />

      {/* Size */}
      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">

          <span className="font-semibold dark:text-white">
            QR Code Size
          </span>

          <span className="rounded-lg bg-blue-100 px-3 py-1 font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            {size}px
          </span>

        </div>

        <input
          type="range"
          min={100}
          max={500}
          step={10}
          value={size}
          onChange={(e) =>
            setSize(Number(e.target.value))
          }
          className="w-full cursor-pointer"
        />

      </div>

      {/* Colors */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-semibold dark:text-white">
            QR Color
          </label>

          <input
            type="color"
            value={fgColor}
            onChange={(e) =>
              setFgColor(e.target.value)
            }
            className="h-12 w-full cursor-pointer rounded-xl"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold dark:text-white">
            Background
          </label>

          <input
            type="color"
            value={bgColor}
            onChange={(e) =>
              setBgColor(e.target.value)
            }
            className="h-12 w-full cursor-pointer rounded-xl"
          />

        </div>

      </div>

      {/* Reset */}
      <button
        onClick={resetSettings}
        className="mt-8 w-full rounded-2xl bg-slate-200 px-6 py-3 font-semibold transition hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
      >
        🔄 Reset
      </button>

    </div>

    {/* RIGHT */}
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

      <div className="flex justify-center rounded-2xl bg-slate-100 p-8 dark:bg-slate-900">

        <QRCode
          id="qr-code"
          value={text || "https://smarttools.id"}
          size={size}
          fgColor={fgColor}
          bgColor={bgColor}
        />

      </div>

      <p className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
        Scan QR Code menggunakan kamera HP
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <button
          onClick={downloadQRCode}
          className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          📥 PNG
        </button>

        <button
          onClick={downloadSVG}
          className="rounded-2xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          📄 SVG
        </button>

      </div>

    </div>

  </div>
      </main>
  );
}