import { Search, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 transition-colors dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
          <Sparkles size={16} />
          Platform Tools Digital Buatan Indonesia 🇮🇩
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-7xl">
          Bekerja Lebih Cepat.
          <br />
          <span className="text-blue-600">
            Berpikir Lebih Cerdas.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          SmartTools Indonesia menyediakan berbagai tools online gratis
          untuk membantu mahasiswa, developer, pekerja,
          content creator, dan UMKM bekerja lebih efisien.
        </p>

        {/* Search */}
        <div className="mt-10 flex w-full max-w-2xl items-center rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 shadow-lg">
          <Search className="ml-3 text-gray-400" />

          <input
            type="text"
            placeholder="Cari tools..."
            className="flex-1 bg-transparent px-4 py-3 outline-none dark:text-white"
          />

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Cari
          </button>
        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
            Mulai Sekarang
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold transition hover:bg-gray-100">
            Lihat Semua Tools
          </button>

        </div>

        {/* Stats */}

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold text-blue-600">100+</h2>
            <p className="text-gray-600">Tools</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
            <p className="text-gray-600">Online</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">100%</h2>
            <p className="text-gray-600">Gratis</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">⚡</h2>
            <p className="text-gray-600">Cepat</p>
          </div>

        </div>

      </div>
    </section>
  );
}