"use client";

import { useState } from "react";
import Image from "next/image";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolInput from "@/components/tools/ToolInput";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { generateQRCode } from "@/lib/qrcode";

import { useStatus } from "@/hooks";

export default function QRGeneratorPage() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  async function handleGenerate() {
    if (!text.trim()) {
      error("Masukkan teks atau URL.");
      return;
    }

    try {
      const qr = await generateQRCode(text);

      setImage(qr);

      success("QR Code berhasil dibuat.");
    } catch {
      error("Gagal membuat QR Code.");
    }
  }

  function handleClear() {
    setText("");
    setImage("");
  }

  return (
    <ToolLayout
      toolId="qr-generator"
      icon="📱"
      title="QR Code Generator"
      description="Generate QR Code secara instan."
      category="Generator"
      badge="Popular"
      rating="4.9"
      users="8K+"
    >
      <ToolInput
        label="Text / URL"
        value={text}
        onChange={setText}
        placeholder="https://smarttools.id"
      />

      {image && (
  <div className="mt-8 flex justify-center">
    <Image
      src={image}
      alt="QR Code"
      width={220}
      height={220}
      className="rounded-2xl border border-slate-200 bg-white p-4"
      unoptimized
    />
  </div>
)}

      <div className="mt-8 flex flex-wrap gap-4">
        <ActionButton onClick={handleGenerate}>
          Generate
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          Clear
        </ActionButton>
      </div>

      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}