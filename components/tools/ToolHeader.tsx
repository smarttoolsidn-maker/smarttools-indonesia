interface ToolHeaderProps {
  icon: string;
  title: string;
  description: string;
  category?: string;

  // Dipertahankan sementara untuk kompatibilitas dengan halaman lama.
  // Badge tidak ditampilkan jika belum didukung data yang terverifikasi.
  badge?: string;
}

export default function ToolHeader({
  icon,
  title,
  description,
  category,
}: ToolHeaderProps) {
  return (
    <header className="text-center">
      {/* Icon */}
      <div
        aria-hidden="true"
        className="mb-4 text-6xl"
      >
        {icon}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        {title}
      </h1>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
        {description}
      </p>

      {/* Category */}
      {category && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            📂 {category}
          </span>
        </div>
      )}
    </header>
  );
}