"use client";

import { useState } from "react";
import Image from "next/image";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolInput from "@/components/tools/ToolInput";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { generateQRCode } from "@/lib/qrcode";
import { useStatus } from "@/hooks";

type QRType = "text" | "url" | "whatsapp" | "wifi";

export default function QRGeneratorPage() {
  const [type, setType] = useState<QRType>("text");

  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const [wifiName, setWifiName] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiSecurity, setWifiSecurity] = useState("WPA");

  const [image, setImage] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function buildQRContent(): string {
    switch (type) {
      case "url":
        return url.trim();

      case "whatsapp": {
        const number = whatsappNumber.replace(/\D/g, "");
        const message = encodeURIComponent(whatsappMessage.trim());

        if (!number) return "";

        return message
          ? `https://wa.me/${number}?text=${message}`
          : `https://wa.me/${number}`;
      }

      case "wifi": {
        const ssid = wifiName
          .replace(/([\\;,":])/g, "\\$1")
          .trim();

        const password = wifiPassword
          .replace(/([\\;,":])/g, "\\$1");

        return `WIFI:T:${wifiSecurity};S:${ssid};P:${password};;`;
      }

      case "text":
      default:
        return text.trim();
    }
  }

  async function handleGenerate() {
    const content = buildQRContent();

    if (!content) {
      error("Lengkapi data terlebih dahulu.");
      return;
    }

    try {
      const qr = await generateQRCode(content);

      setImage(qr);

      success("QR Code berhasil dibuat.");
    } catch {
      error("Gagal membuat QR Code.");
    }
  }

  function handleClear() {
    setText("");
    setUrl("");

    setWhatsappNumber("");
    setWhatsappMessage("");

    setWifiName("");
    setWifiPassword("");
    setWifiSecurity("WPA");

    setImage("");
  }

  async function handleCopyContent() {
    const content = buildQRContent();

    if (!content) {
      error("Belum ada konten untuk disalin.");
      return;
    }

    try {
      await navigator.clipboard.writeText(content);
      success("Konten QR berhasil disalin.");
    } catch {
      error("Gagal menyalin konten.");
    }
  }

  async function handleCopyQR() {
    if (!image) {
      error("Generate QR Code terlebih dahulu.");
      return;
    }

    try {
      const response = await fetch(image);
      const blob = await response.blob();

      if (!navigator.clipboard || !window.ClipboardItem) {
        error("Browser tidak mendukung copy QR.");
        return;
      }

      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);

      success("QR Code berhasil disalin.");
    } catch {
      error("Gagal menyalin QR Code.");
    }
  }

  function downloadPNG() {
    if (!image) {
      error("Generate QR Code terlebih dahulu.");
      return;
    }

    const link = document.createElement("a");

    link.href = image;
    link.download = "smarttools-qrcode.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    success("QR Code PNG berhasil didownload.");
  }

  async function downloadJPG() {
    if (!image) {
      error("Generate QR Code terlebih dahulu.");
      return;
    }

    try {
      const img = new window.Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");

        canvas.width = img.width;
        canvas.height = img.height;

        const context = canvas.getContext("2d");

        if (!context) {
          error("Gagal membuat file JPG.");
          return;
        }

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.drawImage(img, 0, 0);

        const jpg = canvas.toDataURL("image/jpeg", 0.95);

        const link = document.createElement("a");

        link.href = jpg;
        link.download = "smarttools-qrcode.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        success("QR Code JPG berhasil didownload.");
      };

      img.onerror = () => {
        error("Gagal membuat file JPG.");
      };

      img.src = image;
    } catch {
      error("Gagal membuat file JPG.");
    }
  }

  function renderInput() {
    switch (type) {
      case "url":
        return (
          <ToolInput
            label="URL"
            value={url}
            onChange={setUrl}
            placeholder="https://smarttools.id"
          />
        );

      case "whatsapp":
        return (
          <div className="space-y-6">
            <ToolInput
              label="Nomor WhatsApp"
              value={whatsappNumber}
              onChange={setWhatsappNumber}
              placeholder="628123456789"
            />

            <ToolInput
              label="Pesan"
              value={whatsappMessage}
              onChange={setWhatsappMessage}
              placeholder="Halo, saya ingin bertanya..."
            />

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Gunakan nomor WhatsApp dengan kode negara, contoh:
              628123456789.
            </p>
          </div>
        );

      case "wifi":
        return (
          <div className="space-y-6">
            <ToolInput
              label="Nama Wi-Fi (SSID)"
              value={wifiName}
              onChange={setWifiName}
              placeholder="SmartTools WiFi"
            />

            <ToolInput
              label="Password Wi-Fi"
              value={wifiPassword}
              onChange={setWifiPassword}
              placeholder="Masukkan password Wi-Fi"
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Keamanan
              </label>

              <select
                value={wifiSecurity}
                onChange={(event) => setWifiSecurity(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="WPA">WPA / WPA2 / WPA3</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Tanpa Password</option>
              </select>
            </div>
          </div>
        );

      case "text":
      default:
        return (
          <ToolInput
            label="Text"
            value={text}
            onChange={setText}
            placeholder="Masukkan teks..."
          />
        );
    }
  }

  return (
    <ToolLayout
      toolId="qr-code-generator"
      icon="📱"
      title="QR Code Generator"
      description="Generate QR Code untuk teks, URL, WhatsApp, dan Wi-Fi secara instan."
      category="Generator"
      badge="Popular"
      rating="4.9"
      users="8K+"
    >
      {/* QR Type */}
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Pilih Jenis QR
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <QRTypeButton
            active={type === "text"}
            onClick={() => setType("text")}
            icon="📝"
            title="Text"
          />

          <QRTypeButton
            active={type === "url"}
            onClick={() => setType("url")}
            icon="🌐"
            title="URL"
          />

          <QRTypeButton
            active={type === "whatsapp"}
            onClick={() => setType("whatsapp")}
            icon="💬"
            title="WhatsApp"
          />

          <QRTypeButton
            active={type === "wifi"}
            onClick={() => setType("wifi")}
            icon="📶"
            title="Wi-Fi"
          />
        </div>
      </div>

      {/* Input */}
      {renderInput()}

      {/* Actions */}
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

      {/* QR Preview */}
      {image && (
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex justify-center">
            <Image
              src={image}
              alt="Generated QR Code"
              width={260}
              height={260}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              unoptimized
            />
          </div>

          {/* QR Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ActionButton
              color="blue"
              onClick={handleCopyQR}
            >
              📋 Copy QR
            </ActionButton>

            <ActionButton
              color="green"
              onClick={handleCopyContent}
            >
              📄 Copy Content
            </ActionButton>

            <ActionButton
              color="blue"
              onClick={downloadPNG}
            >
              🖼️ Download PNG
            </ActionButton>

            <ActionButton
  color="blue"
  onClick={downloadJPG}
>
  🖼️ Download JPG
</ActionButton>
          </div>
        </div>
      )}

      {/* Status */}
      <div className="mt-8">
        <StatusAlert status={status} />
      </div>
    </ToolLayout>
  );
}

interface QRTypeButtonProps {
  active: boolean;
  onClick: () => void;
  icon: string;
  title: string;
}

function QRTypeButton({
  active,
  onClick,
  icon,
  title,
}: QRTypeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-4 text-left transition-all ${
        active
          ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-300"
          : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500"
      }`}
    >
      <div className="text-2xl">{icon}</div>

      <div className="mt-2 font-semibold">
        {title}
      </div>
    </button>
  );
}