export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            SmartTools Indonesia
          </h2>

          <p className="mt-2 max-w-md text-sm text-gray-400">
            Platform tools digital gratis yang membantu pelajar, mahasiswa,
            developer, pekerja, dan UMKM Indonesia bekerja lebih cepat.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Tools
          </a>

          <a href="#" className="hover:text-white transition">
            Blog
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SmartTools Indonesia. All Rights Reserved.
      </div>
    </footer>
  );
}