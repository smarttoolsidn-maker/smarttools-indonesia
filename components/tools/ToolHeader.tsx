interface ToolHeaderProps {
  icon: string;
  title: string;
  description: string;

  category?: string;
  badge?: string;
  rating?: string;
  users?: string;
}

export default function ToolHeader({
  icon,
  title,
  description,
  category,
  badge,
  rating,
  users,
}: ToolHeaderProps) {
  return (
    <header className="text-center">

      {/* Icon */}
      <div className="mb-4 text-6xl">
        {icon}
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h1>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Meta */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

        {category && (
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            📂 {category}
          </span>
        )}

        {badge && (
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
            🔥 {badge}
          </span>
        )}

        {rating && (
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
            ⭐ {rating}
          </span>
        )}

        {users && (
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
            👥 {users}
          </span>
        )}

      </div>

    </header>
  );
}