"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import StatCard from "@/components/tools/StatCard";

import {
  countWords,
  countCharacters,
  countCharactersNoSpaces,
  countLines,
} from "@/lib/word";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  return (
    <ToolLayout
      toolId="word-counter"
      icon="📝"
      title="Word Counter"
      description="Hitung jumlah kata, karakter, dan baris secara instan."
      category="Utility"
      badge="Popular"
      rating="4.9"
      users="9K+"
    >
      <ToolTextarea
        label="Text"
        value={text}
        onChange={setText}
        placeholder="Ketik atau tempel teks di sini..."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Words"
          value={countWords(text)}
        />

        <StatCard
          title="Characters"
          value={countCharacters(text)}
        />

        <StatCard
          title="No Spaces"
          value={countCharactersNoSpaces(text)}
        />

        <StatCard
          title="Lines"
          value={countLines(text)}
        />
      </div>
    </ToolLayout>
  );
}