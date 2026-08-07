interface TimestampInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TimestampInput({
  value,
  onChange,
}: TimestampInputProps) {
  return (
    <div>

      <label className="mb-3 block font-semibold dark:text-white">
        Unix Timestamp
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Contoh: 1754222400"
        className="w-full rounded-2xl border border-slate-300 bg-white p-4 outline-none transition focus:border-blue-600 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
      />

    </div>
  );
}