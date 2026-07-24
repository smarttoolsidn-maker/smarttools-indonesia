type StatCardProps = {
  title: string;
  value: string | number;
  icon: string;
};

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">

      <div className="text-3xl">{icon}</div>

      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-blue-600 dark:text-blue-400">
        {value}
      </h2>

    </div>
  );
}