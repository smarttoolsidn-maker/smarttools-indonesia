type ToolbarProps = {
  text: string;
  copied: boolean;
  onCopy: () => void;
  onClear: () => void;
};

export default function Toolbar({
  text,
  copied,
  onCopy,
  onClear,
}: ToolbarProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-4">

      <button
        onClick={onCopy}
        disabled={text.trim() === ""}
        className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>

      <button
        onClick={onClear}
        disabled={text.trim() === ""}
        className="rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        🗑 Clear
      </button>

    </div>
  );
}