export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6">
      <div className="max-w-4xl text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🚀 Platform Tools Digital Indonesia
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Semua Tools Digital
          <br />
          dalam Satu Tempat
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          SmartTools Indonesia menyediakan berbagai tools online yang cepat,
          gratis, dan mudah digunakan untuk mahasiswa, developer, pekerja,
          UMKM, maupun siapa saja.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Mulai Gunakan
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            Lihat Semua Tools
          </button>
        </div>
      </div>
    </section>
  );
}