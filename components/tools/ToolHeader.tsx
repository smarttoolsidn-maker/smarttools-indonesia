interface ToolHeaderProps {
  icon: string;
  title: string;
  description: string;
}

export default function ToolHeader({
  icon,
  title,
  description,
}: ToolHeaderProps) {
  return (
    <div className="text-center">

      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {icon} {title}
      </h1>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
        {description}
      </p>

    </div>
  );
}