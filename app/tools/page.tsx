"use client";

import { useMemo, useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/).length
      : 0;

    const characters = text.length;

    const charactersNoSpace = text.replace(/\s/g, "").length;

    const paragraphs = trimmed
      ? trimmed.split(/\n+/).length
      : 0;

    const readingTime = Math.max(
      1,
      Math.ceil(words / 200)
    );

    return {
      words,
      characters,
      charactersNoSpace,
      paragraphs,
      readingTime,
    };
  }, [text]);

  function clearText() {
    setText("");
  }

  async function copyText() {
    if (!text) return;

    await navigator.clipboard.writeText(text);
  }

  return (
    <ToolLayout
      toolId="word-counter"
      icon="📊"
      title="Word Counter"
      description="Hitung kata, karakter, paragraf, dan estimasi waktu baca."
      category="Text"
      badge="Popular"
      rating="4.9"
      users="9K+"
    >
      <ToolTextarea
        label="Input Text"
        value={text}
        onChange={setText}
        placeholder="Mulai mengetik..."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

        <StatCard
          title="Words"
          value={stats.words}
          color="text-blue-600"
        />

        <StatCard
          title="Characters"
          value={stats.characters}
          color="text-green-600"
        />

        <StatCard
          title="No Spaces"
          value={stats.charactersNoSpace}
          color="text-purple-600"
        />

        <StatCard
          title="Paragraphs"
          value={stats.paragraphs}
          color="text-orange-600"
        />

        <StatCard
          title="Reading Time"
          value={`${stats.readingTime} min`}
          color="text-pink-600"
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
          color="green"
          onClick={copyText}
        >
          Copy
        </ActionButton>

        <ActionButton
          color="red"
          onClick={clearText}
        >
          Clear
        </ActionButton>

      </div>

    </ToolLayout>
  );
}

interface StatCardProps {
  title: string;
  value: number | string;
  color: string;
}

function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">

      <h3
        className={`text-4xl font-extrabold ${color}`}
      >
        {value}
      </h3>

      <p className="mt-2 font-semibold dark:text-white">
        {title}
      </p>

    </div>
  );
}