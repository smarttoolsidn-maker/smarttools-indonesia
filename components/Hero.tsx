"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Sparkles,
  Braces,
  KeyRound,
  QrCode,
  Fingerprint,
} from "lucide-react";

const searchTools = [
  {
    title: "Password Generator",
    href: "/tools/password-generator",
  },
  {
    title: "QR Code Generator",
    href: "/tools/qr-code-generator",
  },
  {
    title: "Word Counter",
    href: "/tools/word-counter",
  },
  {
    title: "JSON Formatter",
    href: "/tools/json-formatter",
  },
  {
    title: "JSON Validator",
    href: "/tools/json-validator",
  },
  {
    title: "UUID Generator",
    href: "/tools/uuid-generator",
  },
  {
    title: "Base64 Encoder",
    href: "/tools/base64-encoder",
  },
  {
    title: "URL Encoder",
    href: "/tools/url-encoder",
  },
  {
    title: "Lorem Ipsum Generator",
    href: "/tools/lorem-ipsum-generator",
  },
  {
    title: "Text Case Converter",
    href: "/tools/text-case-converter",
  },
  {
    title: "Hash Generator",
    href: "/tools/hash-generator",
  },
  {
    title: "Timestamp Converter",
    href: "/tools/timestamp-converter",
  },
  {
    title: "Color Converter",
    href: "/tools/color-converter",
  },
  {
    title: "JWT Decoder",
    href: "/tools/jwt-decoder",
  },
  {
    title: "Markdown Preview",
    href: "/tools/markdown-preview",
  },
];

const popularTools = [
  {
    title: "JSON Formatter",
    preview: '{ "name": "SmartTools" }',
    icon: Braces,
    color: "bg-blue-500",
  },
  {
    title: "Password Generator",
    preview: "T#8j!Kp91",
    icon: KeyRound,
    color: "bg-amber-500",
  },
  {
    title: "QR Generator",
    preview: "██████████",
    icon: QrCode,
    color: "bg-green-500",
  },
  {
    title: "UUID Generator",
    preview: "550e8400-e29b...",
    icon: Fingerprint,
    color: "bg-purple-500",
  },
];

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch() {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      router.push("/tools");
      return;
    }

    const matchedTool = searchTools.find((tool) =>
      tool.title.toLowerCase().includes(query)
    );

    if (matchedTool) {
      router.push(matchedTool.href);
      return;
    }

    router.push("/tools");
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">

      {/* Background glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main container */}
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:grid lg:min-h-[90vh] lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-20">

        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 text-center lg:text-left">

          {/* Badge */}
          <div className="mx-auto inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-2 text-center text-xs font-medium text-blue-700 shadow-sm dark:border-blue-800 dark:bg-slate-800 dark:text-blue-300 sm:px-4 sm:text-sm lg:mx-0">
            <Sparkles className="h-4 w-4 shrink-0" />

            <span className="break-words">
              Platform Tools Digital Buatan Indonesia 🇮🇩
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
            Bekerja Lebih Cepat.
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Berpikir Lebih Cerdas.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 w-full max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
            SmartTools Indonesia menyediakan berbagai tools online gratis
            untuk developer, mahasiswa, UMKM dan content creator.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 flex w-full max-w-2xl min-w-0 items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">

            <Search className="ml-2 h-5 w-5 shrink-0 text-slate-400 sm:ml-3" />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleSearch();
                }
              }}
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none sm:px-4 sm:text-base"
              placeholder="Cari tools..."
            />

            <button
              type="button"
              onClick={handleSearch}
              className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 sm:px-6"
            >
              Cari
            </button>

          </div>

          {/* Buttons */}
          <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-4 sm:flex-row lg:mx-0">

            <Link
              href="/tools"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700"
            >
              Mulai Sekarang
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/tools"
              className="flex w-full items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Lihat Semua Tools
            </Link>

          </div>

        </div>

        {/* RIGHT HERO CARD
            Desktop only */}
        <div className="relative hidden items-center justify-center lg:flex">

          <div className="relative w-full max-w-xl">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-[120px]" />

            {/* New tools badge */}
            <div className="absolute -left-6 -top-14 z-20 rounded-2xl border border-slate-200 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95">
              <p className="font-bold text-blue-600 dark:text-blue-400">
                🚀 New Tools Every Week
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Built for Indonesia 🇮🇩
              </p>
            </div>

            {/* Main card */}
            <div className="relative rounded-[40px] border border-slate-200 bg-white/80 p-7 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">

              {/* Card header */}
              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  ⚡ Popular Tools
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-400">
                  LIVE
                </span>

              </div>

              {/* Tools */}
              <div className="space-y-3">

                {popularTools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <div
                      key={tool.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/70"
                    >

                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${tool.color}`}
                      >
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0">

                        <h4 className="truncate font-semibold text-slate-900 dark:text-white">
                          {tool.title}
                        </h4>

                        <p className="truncate font-mono text-xs text-slate-500 dark:text-slate-400">
                          {tool.preview}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

              {/* Explore button */}
              <Link
                href="/tools"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Explore All Tools
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}