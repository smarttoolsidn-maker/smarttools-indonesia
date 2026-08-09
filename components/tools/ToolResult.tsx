interface ToolResultProps {
  label: string;
  value: string;
}

export default function ToolResult({
  label,
  value,
}: ToolResultProps) {
  return (
    <div>
      <label className="mb-3 block font-semibold dark:text-white">
        {label}
      </label>

      <div className="min-h-[56px] break-all rounded-2xl border border-slate-300 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
        {value || "-"}
      </div>
    </div>
  );
}