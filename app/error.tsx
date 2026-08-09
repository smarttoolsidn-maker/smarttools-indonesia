"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  if (process.env.NODE_ENV === "development") {
  console.error(error);
}

  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="max-w-xl text-center">

        <h1 className="text-6xl font-bold text-red-600">
          Oops!
        </h1>

        <h2 className="mt-6 text-2xl font-bold dark:text-white">
          Terjadi Kesalahan
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Terjadi kesalahan yang tidak terduga.
          Silakan coba lagi.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Coba Lagi
        </button>

      </div>

    </main>
  );
}