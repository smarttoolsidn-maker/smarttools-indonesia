interface ToolCardProps {
  title: string;
  value: number | string;
  color?: string;
}

export default function ToolCard({
  title,
  value,
  color = "text-blue-600",
}: ToolCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

      <h3 className={`text-4xl font-extrabold ${color}`}>
        {value}
      </h3>

      <p className="mt-2 font-semibold dark:text-white">
        {title}
      </p>

    </div>
  );
}