interface ToolTextareaProps {

  label: string;

  value: string;

  onChange?: (
    value: string
  ) => void;

  placeholder: string;

  readOnly?: boolean;

}

export default function ToolTextarea({

  label,

  value,

  onChange,

  placeholder,

  readOnly = false,

}: ToolTextareaProps) {

  return (

    <div>

      <label className="mb-3 block font-semibold dark:text-white">
        {label}
      </label>

      <textarea
        value={value}
        readOnly={readOnly}
        onChange={(e) =>
          onChange?.(
            e.target.value
          )
        }
        placeholder={placeholder}
        className={`h-80 w-full rounded-2xl border p-4 outline-none transition
          ${
            readOnly
              ? "border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800"
              : "border-slate-300 bg-white focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900"
          }
          dark:text-white`}
      />

    </div>

  );

}