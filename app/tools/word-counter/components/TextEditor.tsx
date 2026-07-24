type TextEditorProps = {
  text: string;
  onChange: (value: string) => void;
};

export default function TextEditor({
  text,
  onChange,
}: TextEditorProps) {
  return (
    <textarea
      value={text}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Tulis atau tempel teks di sini..."
      className="mt-10 h-80 w-full rounded-3xl border border-gray-300 bg-white p-6 text-lg leading-8 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
    />
  );
}