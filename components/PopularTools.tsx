const tools = [
  {
    title: "Word Counter",
    description: "Hitung kata, karakter, dan estimasi waktu membaca.",
    icon: "📝",
  },
  {
    title: "Password Generator",
    description: "Buat password yang kuat dan aman dalam hitungan detik.",
    icon: "🔐",
  },
  {
    title: "QR Code Generator",
    description: "Ubah teks atau tautan menjadi QR Code.",
    icon: "🔗",
  },
  {
    title: "Image Compressor",
    description: "Kompres ukuran gambar tanpa mengurangi kualitas secara signifikan.",
    icon: "🖼️",
  },
];

export default function PopularTools() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            🔥 Popular Tools
          </h2>

          <p className="mt-4 text-gray-600">
            Beberapa tools yang paling sering digunakan oleh pengguna.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">{tool.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">
                {tool.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}