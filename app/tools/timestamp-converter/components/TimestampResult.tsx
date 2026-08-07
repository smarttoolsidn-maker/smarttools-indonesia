interface TimestampResultProps {
  result: string;
}

export default function TimestampResult({
  result,
}: TimestampResultProps) {
  return (
    <div>

      <label className="mb-3 block font-semibold dark:text-white">
        Hasil
      </label>

      <textarea
        readOnly
        value={result}
        className="h-40 w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
      />

    </div>
  );
}