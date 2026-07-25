import { Zap, ShieldCheck, Smartphone, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Super Cepat",
    description: "Semua tools berjalan langsung di browser tanpa proses yang rumit.",
  },
  {
    icon: ShieldCheck,
    title: "Privasi Aman",
    description: "Data diproses di perangkat Anda sebisa mungkin tanpa menyimpan informasi pribadi.",
  },
  {
    icon: BadgeCheck,
    title: "100% Gratis",
    description: "Nikmati berbagai tools tanpa biaya, tanpa registrasi, dan tanpa batasan dasar.",
  },
  {
    icon: Smartphone,
    title: "Responsif",
    description: "Nyaman digunakan di laptop, tablet, maupun smartphone.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-24 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Kenapa Memilih SmartTools Indonesia?
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Dibuat untuk membantu pekerjaan menjadi lebih cepat, mudah, dan efisien.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}