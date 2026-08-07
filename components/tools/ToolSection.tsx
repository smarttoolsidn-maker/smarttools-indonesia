interface ToolSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ToolSection({
  title,
  children,
}: ToolSectionProps) {
  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

      <h2 className="mb-6 text-xl font-bold dark:text-white">
        {title}
      </h2>

      {children}

    </section>
  );
}