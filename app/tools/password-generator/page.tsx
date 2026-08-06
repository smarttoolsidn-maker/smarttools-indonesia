"use client";

import { useState } from "react";
import PasswordStrength from "@/components/tools/PasswordStrength";
import ToolLayout from "@/components/tool/ToolLayout";
import PasswordOutput from "@/components/tools/PasswordOutput";
import ActionButton from "@/components/tools/ActionButton";
import StatusAlert from "@/components/tools/StatusAlert";


export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
 function generatePassword() {
  
  let charset = "";

  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%^&*()_+-=[]{}<>?";

  if (!charset.length) {
    setPassword("");
    setStatus("❌ Pilih minimal satu jenis karakter.");
    return;
  }

  const randomValues = new Uint32Array(length);

  crypto.getRandomValues(randomValues);

  let generated = "";

  randomValues.forEach((value) => {
    generated += charset[value % charset.length];
  });

  setPassword(generated);
  setStatus("✅ Password berhasil dibuat.");
}

async function copyPassword() {
  if (!password) return;

  await navigator.clipboard.writeText(password);

  setCopied(true);
  setStatus("✅ Password berhasil disalin.");

  setTimeout(() => {
    setCopied(false);
  }, 2000);
}
  
  const [length, setLength] = useState(16);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);


  
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
  onToggle={() => setShowPassword(!showPassword)}
  onCopy={copyPassword}
/>

<PasswordStrength
    password={password}
/>  

      <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

  <h2 className="mb-6 text-xl font-bold dark:text-white">
    Password Settings
  </h2>

  {/* Slider */}

  <div>

    <div className="mb-2 flex items-center justify-between">

      <label className="font-semibold dark:text-white">
        Password Length
      </label>

      <span className="rounded-lg bg-blue-600 px-3 py-1 text-sm font-bold text-white">
        {length}
      </span>

    </div>

    <input
      type="range"
      min={8}
      max={64}
      value={length}
      onChange={(e) => setLength(Number(e.target.value))}
      className="w-full accent-blue-600"
    />

  </div>

  {/* Options */}

  <div className="mt-8 grid gap-4 sm:grid-cols-2">

    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={uppercase}
        onChange={() => setUppercase(!uppercase)}
      />

      <span className="dark:text-white">
        Uppercase (A-Z)
      </span>

    </label>

    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={lowercase}
        onChange={() => setLowercase(!lowercase)}
      />

      <span className="dark:text-white">
        Lowercase (a-z)
      </span>

    </label>

    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={numbers}
        onChange={() => setNumbers(!numbers)}
      />

      <span className="dark:text-white">
        Numbers (0-9)
      </span>

    </label>

    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={symbols}
        onChange={() => setSymbols(!symbols)}
      />

      <span className="dark:text-white">
        Symbols (!@#$%)
      </span>

    </label>

  </div>

</div>

      <div className="mt-8 flex flex-wrap gap-4">

        <ActionButton
  onClick={generatePassword}
>
  Generate Password
</ActionButton>

      </div>

      <StatusAlert status={status} />

    </ToolLayout>
  );
}