"use client";

import { useState } from "react";

import ToolLayout from "@/components/tool/ToolLayout";

import PasswordOutput from "@/components/tools/PasswordOutput";
import PasswordStrength from "@/components/tools/PasswordStrength";
import StatusAlert from "@/components/tools/StatusAlert";

import PasswordOptions from "./components/PasswordOptions";
import PasswordActions from "./components/PasswordActions";

import { generatePassword } from "@/lib/password";

import {
  useClipboard,
  useStatus,
  useToggle,
} from "@/hooks";

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");

  const {
    value: showPassword,
    toggle: handleTogglePassword,
  } = useToggle(false);

  const {
    copied,
    copy,
  } = useClipboard();

  const {
    status,
    success,
    error,
  } = useStatus();

  const [length, setLength] = useState(16);

  const [uppercase, setUppercase] =
    useState(true);

  const [lowercase, setLowercase] =
    useState(true);

  const [numbers, setNumbers] =
    useState(true);

  const [symbols, setSymbols] =
    useState(false);

  function handleGeneratePassword() {
    const result = generatePassword({
      length,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });

    if (!result) {
      setPassword("");
      error("Pilih minimal satu jenis karakter.");
      return;
    }

    setPassword(result);

    success("Password berhasil dibuat.");
  }

  async function handleCopyPassword() {
    const ok = await copy(password);

    if (ok) {
      success("Password berhasil disalin.");
    }
  }

  return (
    <ToolLayout
      toolId="password-generator"
      icon="🔐"
      title="Password Generator"
      description="Generate password yang kuat, aman, dan dapat dikustomisasi."
      category="Generator"
      badge="Popular"
      rating="4.9"
      users="12K+"
    >
      <PasswordOutput
        password={password}
        show={showPassword}
        copied={copied}
        onToggle={handleTogglePassword}
        onCopy={handleCopyPassword}
      />

      <PasswordStrength
        password={password}
      />
            <PasswordOptions
        length={length}
        setLength={setLength}
        uppercase={uppercase}
        lowercase={lowercase}
        numbers={numbers}
        symbols={symbols}
        setUppercase={() =>
          setUppercase((prev) => !prev)
        }
        setLowercase={() =>
          setLowercase((prev) => !prev)
        }
        setNumbers={() =>
          setNumbers((prev) => !prev)
        }
        setSymbols={() =>
          setSymbols((prev) => !prev)
        }
      />

      <PasswordActions
        onGenerate={handleGeneratePassword}
      />

      <StatusAlert
        status={status}
      />
    </ToolLayout>
  );
}