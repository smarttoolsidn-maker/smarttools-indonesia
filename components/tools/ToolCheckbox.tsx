interface ToolCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ToolCheckbox({
  label,
  checked,
  onChange,
}: ToolCheckboxProps) {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span className="dark:text-white">
        {label}
      </span>

    </label>
  );
}