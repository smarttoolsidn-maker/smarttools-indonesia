interface ToolCheckboxProps {
  checked: boolean;
  label: string;
  onChange: () => void;
}

export default function ToolCheckbox({
  checked,
  label,
  onChange,
}: ToolCheckboxProps) {
  return (
    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-blue-600"
      />

      <span className="dark:text-white">
        {label}
      </span>

    </label>
  );
}