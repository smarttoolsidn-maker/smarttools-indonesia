const features = [
  {
    icon: "🛠️",
    title: "Beragam Tools",
    description:
      "Nikmati berbagai tools produktivitas dalam satu platform, mulai dari Word Counter hingga generator dan formatter lainnya.",
  },
  {
    icon: "🚀",
    title: "Terus Berkembang",
    description:
      "Kami terus menambahkan tools baru dan meningkatkan fitur berdasarkan kebutuhan pengguna.",
  },
  {
    icon: "💻",
    title: "Mudah Digunakan",
    description:
      "Antarmuka sederhana dan intuitif sehingga siapa pun dapat menggunakan tools tanpa perlu belajar terlebih dahulu.",
  },
  {
    icon: "🌐",
    title: "Akses Kapan Saja",
    description:
      "Gunakan SmartTools langsung melalui browser di komputer, tablet, maupun smartphone tanpa instalasi aplikasi.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Apa yang Bisa Anda Lakukan?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            SmartTools Indonesia menyediakan berbagai solusi digital yang dirancang
            untuk membantu pekerjaan menjadi lebih mudah dan efisien.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-800"
            >
              <div className="text-5xl transition duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

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