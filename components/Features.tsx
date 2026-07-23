const features = [
  {
    icon: "⚡",
    title: "Super Cepat",
    description: "Semua tools berjalan langsung di browser dengan performa yang optimal.",
  },
  {
    icon: "🔒",
    title: "Privasi Aman",
    description: "Kami mengutamakan keamanan data pengguna tanpa proses yang rumit.",
  },
  {
    icon: "🆓",
    title: "Gratis",
    description: "Mayoritas tools dapat digunakan tanpa biaya dan tanpa registrasi.",
  },
  {
    icon: "📱",
    title: "Responsive",
    description: "Nyaman digunakan di laptop, tablet, maupun smartphone.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Kenapa Memilih SmartTools Indonesia?
          </h2>

          <p className="mt-4 text-gray-600">
            Dibangun untuk memberikan pengalaman yang cepat, aman, dan mudah digunakan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-5 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}