"use client";

import { Copy, Eye, EyeOff } from "lucide-react";

interface PasswordOutputProps {
  password: string;
  show: boolean;
  copied: boolean;
  onToggle: () => void;
  onCopy: () => void;
}

export default function PasswordOutput({
  password,
  show,
  copied,
  onToggle,
  onCopy,
}: PasswordOutputProps) {
  return (
    <div>

      <label className="mb-3 block font-semibold dark:text-white">
        Generated Password
      </label>

      <div className="flex items-center rounded-2xl border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900">

        <input
  type={show ? "text" : "password"}
  value={password}
  readOnly
  onClick={(e) => e.currentTarget.select()}
  placeholder="Password akan muncul di sini..."
  className="flex-1 bg-transparent px-4 py-4 outline-none dark:text-white"
/>

        <button
          onClick={onToggle}
          className="p-4 text-slate-500 hover:text-blue-600"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>

        <button
  onClick={onCopy}
  className="px-4 text-slate-500 hover:text-blue-600"
>
  {copied ? "✅" : <Copy size={20} />}
</button>

      </div>

    </div>
  );
}