import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="max-w-xl text-center">

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold dark:text-white">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Kembali ke Beranda
          </Link>

          <Link
            href="/tools/password-generator"
            className="rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Lihat Tools
          </Link>

        </div>

      </div>

    </main>
  );
}