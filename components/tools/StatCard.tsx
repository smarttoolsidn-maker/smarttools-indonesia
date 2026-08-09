interface StatCardProps {
  title: string;
  value: string | number;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 break-all text-3xl font-bold dark:text-white">
        {value}
      </h2>

    </div>
  );
}