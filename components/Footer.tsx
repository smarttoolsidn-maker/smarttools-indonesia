
import Link from "next/link";

const linkClass =
  "inline-flex transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="inline-block rounded-sm text-2xl font-bold tracking-tight transition-colors hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            SmartTools Indonesia
          </Link>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Platform tools online gratis untuk developer, mahasiswa, pekerja,
            UMKM, dan kebutuhan produktivitas digital sehari-hari.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Punya pertanyaan atau saran?
          </p>

          <a
            href="mailto:smarttoolsidn@gmail.com"
            className="mt-2 inline-flex rounded-sm text-sm font-medium text-indigo-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            smarttoolsidn@gmail.com
          </a>
        </div>

        {/* Popular Tools */}
        <nav aria-label="Popular tools">
          <h2 className="mb-4 text-base font-semibold">Popular Tools</h2>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/tools/password-generator" className={linkClass}>
                Password Generator
              </Link>
            </li>
            <li>
              <Link href="/tools/json-formatter" className={linkClass}>
                JSON Formatter
              </Link>
            </li>
            <li>
              <Link href="/tools/uuid-generator" className={linkClass}>
                UUID Generator
              </Link>
            </li>
            <li>
              <Link href="/tools/qr-code-generator" className={linkClass}>
                QR Code Generator
              </Link>
            </li>
            <li>
              <Link href="/tools" className={linkClass}>
                Lihat Semua Tools →
              </Link>
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Informasi website">
          <h2 className="mb-4 text-base font-semibold">Informasi</h2>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/about" className={linkClass}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                Hubungi Kami
              </Link>
            </li>
            <li>
              <Link href="/blog" className={linkClass}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Legal */}
        <nav aria-label="Kebijakan website">
          <h2 className="mb-4 text-base font-semibold">Kebijakan</h2>

          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/privacy-policy" className={linkClass}>
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkClass}>
                Syarat &amp; Ketentuan
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className={linkClass}>
                Disclaimer
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left sm:text-sm">
          <p>
            © {new Date().getFullYear()} SmartTools Indonesia. All rights
            reserved.
          </p>

          <p>Made with ❤️ in Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
