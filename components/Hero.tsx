"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden animate-fade-in bg-gradient-to-br from-blue-50 via-white to-cyan-50 transition-colors dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10"></div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10"></div>

      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center"
>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition dark:border-blue-800 dark:bg-slate-800 dark:text-blue-300">
          <Sparkles size={16} />
          Platform Tools Digital Buatan Indonesia 🇮🇩
        </div>

        {/* Title */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-7xl">
          Bekerja Lebih Cepat.
          <br />
          <span className="text-blue-600 dark:text-blue-400">
            Berpikir Lebih Cerdas.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          SmartTools Indonesia menyediakan berbagai tools online gratis
          untuk membantu mahasiswa, developer, pekerja,
          content creator, dan UMKM bekerja lebih efisien.
        </p>

        {/* Search */}
        <div className="mt-10 flex w-full max-w-2xl items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-lg transition dark:border-slate-700 dark:bg-slate-800">

          <Search className="ml-3 text-gray-400 dark:text-slate-400" />

          <input
            type="text"
            placeholder="Cari tools..."
            className="flex-1 bg-transparent px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none dark:text-white dark:placeholder:text-slate-500"
          />

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700">
            Cari
          </button>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700">
            Mulai Sekarang
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition duration-300 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            Lihat Semua Tools
          </button>

        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              100+
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Tools
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              24/7
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Online
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              100%
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Gratis
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              ⚡
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Cepat
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}