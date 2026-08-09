"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";
import ToolTextarea from "@/components/tools/ToolTextarea";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";

import { decodeJWT } from "@/lib/jwt";

import { useStatus } from "@/hooks";

export default function JWTDecoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const {
    status,
    success,
    error,
  } = useStatus();

  function handleDecode() {
    try {
      setOutput(
        decodeJWT(input)
      );

      success(
        "JWT berhasil di-decode."
      );
    } catch {
      error(
        "JWT tidak valid."
      );
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
  }

  return (
    <ToolLayout
      toolId="jwt-decoder"
      icon="🔑"
      title="JWT Decoder"
      description="Decode JWT Payload secara instan."
      category="Developer"
      badge="Popular"
      rating="4.9"
      users="5K+"
    >
      <ToolTextarea
        label="JWT Token"
        value={input}
        onChange={setInput}
        placeholder="Masukkan JWT..."
      />

      <div className="mt-8">

        <ToolTextarea
          label="Decoded Payload"
          value={output}
          readOnly
          placeholder="Payload akan muncul di sini..."
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
          onClick={handleDecode}
        >
          Decode
        </ActionButton>

        <ActionButton
          color="gray"
          onClick={handleClear}
        >
          Clear
        </ActionButton>

      </div>

      <div className="mt-8">

        <StatusAlert
          status={status}
        />

      </div>

    </ToolLayout>
  );
}