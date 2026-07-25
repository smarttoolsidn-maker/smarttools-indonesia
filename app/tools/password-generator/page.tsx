"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(16);

  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  function generatePassword() {
    let chars = "";

    if (includeUppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeLowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeNumbers) {
      chars += "0123456789";
    }

    if (includeSymbols) {
      chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    if (chars.length === 0) {
      setPassword("Pilih minimal satu opsi!");
      return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
  }

  function copyPassword() {
  if (!password) return;

  navigator.clipboard.writeText(password);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
}

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-5xl font-extrabold dark:text-white">
        🔐 Password Generator
      </h1>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Buat password yang kuat dan aman secara gratis.
      </p>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        {/* Password Display */}
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-300 bg-slate-50 p-5 dark:border-slate-600 dark:bg-slate-900">

  <div className="flex-1 break-all text-2xl font-bold dark:text-white">
    {password || "Klik Generate Password"}
  </div>

  <button
    onClick={copyPassword}
    className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
  >
    {copied ? "✅ Copied!" : "📋 Copy"}
  </button>

</div>

        {/* Slider */}
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-semibold dark:text-white">
              Password Length
            </span>

            <span className="rounded-lg bg-blue-100 px-3 py-1 font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              {length}
            </span>
          </div>

          <input
            type="range"
            min={8}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="mt-8 space-y-4">
          <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <span className="font-medium dark:text-white">
              Include Uppercase
            </span>

            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) =>
                setIncludeUppercase(e.target.checked)
              }
            />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <span className="font-medium dark:text-white">
              Include Lowercase
            </span>

            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) =>
                setIncludeLowercase(e.target.checked)
              }
            />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <span className="font-medium dark:text-white">
              Include Numbers
            </span>

            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) =>
                setIncludeNumbers(e.target.checked)
              }
            />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <span className="font-medium dark:text-white">
              Include Symbols
            </span>

            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) =>
                setIncludeSymbols(e.target.checked)
              }
            />
          </label>
        </div>

        {/* Button */}
        <button
  onClick={generatePassword}
  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  <RefreshCw size={18} />
  Generate Password
</button>
      </div>
    </main>
  );
}