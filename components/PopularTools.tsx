import Link from "next/link";

const tools = [
  {
    title: "Word Counter",
    description: "Hitung jumlah kata, karakter, paragraf, dan estimasi waktu baca.",
    icon: "📝",
    href: "/tools/word-counter",
  },
  {
    title: "Password Generator",
    description: "Buat password yang aman dan kuat hanya dalam sekali klik.",
    icon: "🔐",
    href: "#",
  },
  {
    title: "QR Code Generator",
    description: "Ubah teks atau link menjadi QR Code dengan cepat.",
    icon: "📱",
    href: "#",
  },
  {
    title: "JSON Formatter",
    description: "Format dan validasi data JSON secara instan.",
    icon: "📄",
    href: "#",
  },
];

export default function PopularTools() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Popular Tools
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Tools favorit yang paling sering digunakan pengguna.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="text-5xl">{tool.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                {tool.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {tool.description}
              </p>

              <div className="mt-6 font-semibold text-blue-600 dark:text-blue-400">
                Gunakan →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}