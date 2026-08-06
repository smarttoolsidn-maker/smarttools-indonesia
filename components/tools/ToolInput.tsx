interface ToolInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export default function ToolInput({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
}: ToolInputProps) {
  return (
    <div>
      <label className="mb-2 block font-semibold dark:text-white">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
      />
    </div>
  );
}