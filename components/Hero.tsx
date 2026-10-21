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
import { tools } from "@/data/tools";

const previewTools = [
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
    title: "QR Code Generator",
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

    const matchedTool = tools.find((tool) => {
      const searchableText = [
        tool.title,
        tool.description,
        tool.category,
        ...(tool.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });

    if (matchedTool) {
      router.push(matchedTool.href);
      return;
    }

    router.push("/tools");
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 transition-colors dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Background glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10" />

      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main container */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 overflow-hidden px-4 py-12 sm:px-6 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-20">
        {/* Left content */}
        <div className="w-full min-w-0 text-center lg:text-left">
          {/* Brand badge */}
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
            SmartTools Indonesia menyediakan berbagai tools online untuk
            membantu developer, mahasiswa, UMKM, content creator, dan
            pengguna digital dalam pekerjaan sehari-hari.
          </p>

          {/* Search */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSearch();
            }}
            role="search"
            className="mx-auto mt-10 flex w-full max-w-2xl min-w-0 items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <Search
              aria-hidden="true"
              className="ml-2 h-5 w-5 shrink-0 text-slate-400 sm:ml-3"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              aria-label="Cari tools"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:px-4 sm:text-base dark:text-white"
              placeholder="Cari tools..."
            />

            <button
              type="submit"
              className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:px-6 dark:focus-visible:ring-offset-slate-800"
            >
              Cari
            </button>
          </form>

          {/* Main buttons */}
          <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-4 sm:flex-row lg:mx-0">
            <Link
              href="/tools"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              Mulai Sekarang
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/tools"
              className="flex w-full items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950"
            >
              Lihat Semua Tools
            </Link>
          </div>
        </div>

        {/* Right preview card: desktop only */}
        <div className="relative hidden items-center justify-center lg:flex">
          <div className="relative w-full max-w-xl">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-[120px]"
            />

            {/* Supporting badge */}
            <div className="absolute -left-6 -top-14 z-20 rounded-2xl border border-slate-200 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95">
              <p className="font-bold text-blue-600 dark:text-blue-400">
                🛠️ Tools Online
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Praktis untuk kebutuhan digital
              </p>
            </div>

            {/* Main preview card */}
            <div className="relative rounded-[40px] border border-slate-200 bg-white/80 p-7 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
              {/* Card header */}
              <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contoh Tools
                </h2>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  Preview
                </span>
              </div>

              {/* Tool previews */}
              <div className="space-y-3">
                {previewTools.map((tool) => {
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
                        <h3 className="truncate font-semibold text-slate-900 dark:text-white">
                          {tool.title}
                        </h3>

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
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                Jelajahi Semua Tools
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}