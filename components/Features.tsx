const features = [
  {
    icon: "⚡",
    title: "Cepat",
    description: "Semua tools dirancang agar bekerja dengan performa tinggi.",
  },
  {
    icon: "🔒",
    title: "Aman",
    description: "Data diproses langsung di browser tanpa dikirim ke server jika memungkinkan.",
  },
  {
    icon: "🆓",
    title: "Gratis",
    description: "Gunakan semua tools tanpa biaya dan tanpa perlu membuat akun.",
  },
  {
    icon: "🇮🇩",
    title: "Buatan Indonesia",
    description: "Dikembangkan untuk membantu pelajar, pekerja, UMKM, dan developer Indonesia.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Kenapa Memilih SmartTools?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Platform tools online yang sederhana, cepat, dan mudah digunakan.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-800"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}