// Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Sparkles,
  Braces,
  KeyRound,
  QrCode,
  Fingerprint,
  FileText,
} from "lucide-react";

const tools = [
  { title:"JSON Formatter", preview:'{ "name":"SmartTools" }', icon:Braces, color:"bg-blue-500"},
  { title:"Password Generator", preview:"T#8j!Kp91", icon:KeyRound, color:"bg-amber-500"},
  { title:"QR Generator", preview:"██████████", icon:QrCode, color:"bg-green-500"},
  { title:"UUID Generator", preview:"550e8400-e29b...", icon:Fingerprint, color:"bg-purple-500"},
  { title:"Markdown Preview", preview:"# Hello SmartTools", icon:FileText, color:"bg-pink-500"},
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{backgroundImage:`linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)`,backgroundSize:"40px 40px"}} />

      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}
        className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-20">

        <div className="text-center lg:text-left">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-2 text-center text-xs font-medium text-blue-700 shadow-sm sm:px-4 sm:text-sm dark:border-blue-800 dark:bg-slate-800 dark:text-blue-300">
  <Sparkles size={16} className="shrink-0" />
  <span>Platform Tools Digital Buatan Indonesia 🇮🇩</span>
</div>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            Bekerja Lebih Cepat.<br/>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Berpikir Lebih Cerdas.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
            SmartTools Indonesia menyediakan berbagai tools online gratis untuk developer, mahasiswa, UMKM dan content creator.
          </p>

          <div className="mt-10 flex w-full max-w-2xl items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
  <Search className="ml-2 h-5 w-5 shrink-0 text-slate-400 sm:ml-3" />

  <input
    className="min-w-0 flex-1 bg-transparent px-3 py-3 outline-none sm:px-4"
    placeholder="Cari tools..."
  />

  <button className="shrink-0 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 sm:px-6">
    Cari
  </button>
</div>

          <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
            <Link
  href="/tools"
  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700 sm:w-auto"
>
  Mulai Sekarang <ArrowRight size={18}/>
</Link>
                <Link
  href="/tools"
  className="w-full rounded-xl border border-slate-300 px-7 py-4 text-center font-semibold hover:bg-slate-100 sm:w-auto dark:border-slate-700 dark:hover:bg-slate-800"
>
  Lihat Semua Tools
</Link>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <motion.div animate={{y:[0,-8,0]}} transition={{duration:6,repeat:Infinity}} className="relative w-full max-w-xl">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-[140px]" />
            <div className="absolute -left-8 -top-8 z-20 rounded-2xl bg-white/90 px-5 py-3 shadow-xl dark:bg-slate-900/90">
              <p className="font-bold text-blue-600">🚀 New Tools Every Week</p>
              <p className="text-xs text-slate-500">Built for Indonesia 🇮🇩</p>
            </div>

            <div className="relative rounded-[40px] border border-slate-200 bg-white/80 p-8 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">⚡ Popular Tools</h3>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">LIVE</span>
              </div>

                <div className="space-y-4">
                {tools.map((tool)=>{
                  const Icon=tool.icon;
                  return (
                    <div key={tool.title} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:shadow-xl dark:border-slate-700">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${tool.color}`}>
                        <Icon size={20}/>
                      </div>
                      <div>
                        <h4 className="font-semibold">{tool.title}</h4>
                        <p className="font-mono text-xs text-slate-500">{tool.preview}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                Explore All Tools <ArrowRight size={18}/>
              </button>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}