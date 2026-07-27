"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Copy,
  Check,
} from "lucide-react";

export default function PasswordGeneratorPage() {
    function getStrength() {
  let score = 0;

  if (length >= 12) score++;
  if (length >= 20) score++;

  if (includeUppercase) score++;
  if (includeLowercase) score++;
  if (includeNumbers) score++;
  if (includeSymbols) score++;

  if (score <= 2) {
    return {
      text: "Weak",
      color: "bg-red-500",
      width: "25%",
    };
  }

  if (score <= 4) {
    return {
      text: "Medium",
      color: "bg-yellow-500",
      width: "60%",
    };
  }

  return {
    text: "Strong",
    color: "bg-green-500",
    width: "100%",
  };
}

  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    let result = "";

    for (let i = 0; i < 16; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    return result;
  });

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
async function copyPassword() {
  if (!password) return;

  await navigator.clipboard.writeText(password);

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

    {/* Card */}
    {/* Password Display */}
<div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

  <p className="text-sm text-slate-500 dark:text-slate-400">
    Generated Password
  </p>

  <div className="mt-4 flex items-center gap-4">

  <div className="flex-1 break-all text-2xl font-bold dark:text-white">

    {showPassword
      ? password
      : "•".repeat(password.length)}

  </div>

  <button
    onClick={() => setShowPassword(!showPassword)}
    className="rounded-xl border border-slate-300 p-3 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
  >
    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
  </button>

  <button
    onClick={copyPassword}
    className="rounded-xl border border-slate-300 p-3 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
  >
    {copied ? <Check size={20}/> : <Copy size={20}/>}
  </button>

</div>

</div>

{/* Generate Button */}
<div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">

  <button
    onClick={generatePassword}
    className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
  >
    🔄 Generate Password
  </button>

</div>

{/* Password Options */}
<div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

  <h3 className="text-xl font-bold dark:text-white">
    Password Options
  </h3>

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

  {/* Checkbox */}
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

</div>

{/* Password Strength */}
<div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">

  <div className="mb-3 flex items-center justify-between">

    <span className="font-semibold dark:text-white">
      Password Strength
    </span>

    <span className="font-bold dark:text-white">
      {getStrength().text}
    </span>

  </div>

  <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

    <div
      className={`h-full ${getStrength().color} transition-all duration-500`}
      style={{
        width: getStrength().width,
      }}
    />

  </div>

</div>

  </main>
)}