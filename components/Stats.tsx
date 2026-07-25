const stats = [
  {
    number: "100+",
    title: "Tools Segera Hadir",
    description: "Koleksi tools yang akan terus bertambah.",
  },
  {
    number: "24/7",
    title: "Siap Digunakan",
    description: "Akses kapan saja tanpa batas waktu.",
  },
  {
    number: "100%",
    title: "Gratis",
    description: "Sebagian besar tools dapat digunakan tanpa biaya.",
  },
  {
    number: "⚡",
    title: "Cepat",
    description: "Dirancang agar ringan dan responsif.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            SmartTools dalam Angka
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Kami membangun platform yang cepat, mudah digunakan, dan terus berkembang.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                {item.number}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}