import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-950 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-4">

        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold">
            SmartTools Indonesia
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Platform tools online gratis untuk developer, mahasiswa,
            pekerja, UMKM, dan kebutuhan produktivitas sehari-hari.
          </p>

        </div>

        {/* Tools */}

        <div>

          <h3 className="mb-4 font-semibold">
            Popular Tools
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">

            <li>
              <Link
                href="/tools/password-generator"
                className="hover:text-white"
              >
                Password Generator
              </Link>
            </li>

            <li>
              <Link
                href="/tools/json-formatter"
                className="hover:text-white"
              >
                JSON Formatter
              </Link>
            </li>

            <li>
              <Link
                href="/tools/uuid-generator"
                className="hover:text-white"
              >
                UUID Generator
              </Link>
            </li>

            <li>
              <Link
                href="/tools/qr-code-generator"
                className="hover:text-white"
              >
                QR Code Generator
              </Link>
            </li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="mb-4 font-semibold">
            Company
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">

            <li>
              <Link href="/about">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>

          </ul>

        </div>

        {/* Legal */}

        <div>

          <h3 className="mb-4 font-semibold">
            Legal
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">

            <li>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link href="/disclaimer">
                Disclaimer
              </Link>
            </li>

          </ul>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} SmartTools Indonesia.
            All rights reserved.
          </p>

          <p>
            Made with ❤️ in Indonesia
          </p>

        </div>

      </div>

    </footer>
  );
}