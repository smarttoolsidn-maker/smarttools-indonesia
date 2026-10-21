const stats = [
  {
    number: "15",
    title: "Tools Tersedia",
    description: "Berbagai tools online yang bisa langsung digunakan.",
  },
  {
    number: "Online",
    title: "Akses Praktis",
    description: "Gunakan tools melalui browser tanpa perlu instalasi aplikasi.",
  },
  {
    number: "Gratis",
    title: "Mudah Digunakan",
    description: "Tools tersedia untuk membantu kebutuhan digital sehari-hari.",
  },
  {
    number: "⚡",
    title: "Ringkas & Praktis",
    description: "Antarmuka dirancang agar penggunaan tools lebih sederhana.",
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
            Beragam tools online untuk membantu pekerjaan digital sehari-hari.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="break-words text-4xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-5xl">
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