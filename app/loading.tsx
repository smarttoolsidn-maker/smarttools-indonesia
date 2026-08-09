export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">

      <div className="text-center">

        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

        <p className="mt-6 text-slate-600 dark:text-slate-400">
          Memuat SmartTools...
        </p>

      </div>

    </main>
  );
}