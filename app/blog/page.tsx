
import Link from "next/link";

export const metadata = {
  title: "Blog Teknologi & Produktivitas",
  description:
    "Baca panduan, tutorial, dan tips seputar produktivitas digital, keamanan kata sandi, pengolahan teks, JSON, dan tools online di SmartTools Indonesia.",
};

const articles = [
  {
    category: "Keamanan Digital",
    title: "Cara Membuat Kata Sandi yang Kuat dan Aman",
    description:
      "Pelajari karakteristik kata sandi yang kuat, pentingnya kata sandi unik untuk setiap akun, dan cara mengurangi risiko akses tidak sah.",
    content: [
      "Kata sandi merupakan salah satu lapisan perlindungan akun digital. Kata sandi yang mudah ditebak, seperti tanggal lahir atau urutan angka sederhana, dapat meningkatkan risiko akun diakses oleh orang lain.",
      "Gunakan kata sandi yang panjang dan unik untuk setiap akun. Kombinasi huruf, angka, dan simbol dapat membantu, tetapi panjang serta keunikan kata sandi juga sangat penting. Pengelola kata sandi dapat membantu Anda menyimpan kata sandi yang berbeda dengan lebih praktis.",
      "Aktifkan autentikasi multifaktor jika tersedia. Hindari menggunakan kembali kata sandi yang sama pada beberapa layanan, dan jangan membagikan kata sandi kepada orang lain.",
    ],
    href: "/tools/password-generator",
    cta: "Coba Password Generator",
  },
  {
    category: "Pengolahan Data",
    title: "Apa Itu JSON dan Bagaimana Cara Membacanya?",
    description:
      "Kenali format JSON, struktur objek dan array, serta cara merapikan data agar lebih mudah dibaca dan diperiksa.",
    content: [
      "JSON (JavaScript Object Notation) adalah format pertukaran data berbasis teks yang umum digunakan dalam aplikasi web dan API. Format ini menyimpan informasi dalam bentuk pasangan key-value, objek, dan array.",
      "JSON yang ditulis dalam satu baris panjang bisa sulit diperiksa. Proses formatting menambahkan indentasi dan baris baru agar struktur data lebih mudah dibaca. Sementara itu, validasi membantu mendeteksi kesalahan sintaks, seperti tanda koma yang tidak tepat atau tanda kutip yang hilang.",
      "Perlu diingat bahwa JSON yang valid belum tentu memiliki isi yang benar secara logika. Periksa juga nama properti, tipe data, dan nilai yang diharapkan oleh aplikasi yang menggunakannya.",
    ],
    href: "/tools/json-formatter",
    cta: "Coba JSON Formatter",
  },
  {
    category: "Produktivitas",
    title: "Cara Menghitung Kata dan Karakter dengan Praktis",
    description:
      "Ketahui kapan jumlah kata dan karakter diperlukan, mulai dari tugas akademik hingga penulisan konten digital.",
    content: [
      "Jumlah kata dan karakter sering menjadi batas dalam tugas kuliah, artikel, deskripsi produk, formulir, dan unggahan media sosial. Menghitungnya secara manual bisa memakan waktu, terutama untuk teks yang panjang.",
      "Word Counter dapat membantu menghitung kata, karakter, karakter tanpa spasi, dan paragraf secara lebih cepat. Informasi ini memudahkan Anda menyesuaikan tulisan dengan ketentuan yang ditetapkan.",
      "Sebelum mengirim tulisan, periksa kembali ejaan, kejelasan kalimat, dan kesesuaian isi. Jumlah kata yang tepat memang membantu memenuhi batas panjang, tetapi kualitas tulisan tetap menjadi hal utama.",
    ],
    href: "/tools/word-counter",
    cta: "Coba Word Counter",
  },
  {
    category: "Pengembangan Web",
    title: "Mengenal Base64 dan Kegunaannya",
    description:
      "Pelajari fungsi encoding Base64, contoh penggunaannya dalam sistem digital, dan hal yang tidak bisa dijamin oleh encoding.",
    content: [
      "Base64 adalah metode untuk merepresentasikan data biner sebagai rangkaian karakter teks. Metode ini sering digunakan ketika data perlu disertakan dalam format teks, misalnya pada payload tertentu atau representasi data dalam aplikasi.",
      "Encoding Base64 bukan enkripsi. Data yang diubah ke Base64 tidak otomatis menjadi rahasia atau terlindungi dari pembacaan. Karena itu, jangan gunakan Base64 sebagai pengganti enkripsi untuk menyimpan informasi sensitif.",
      "Saat melakukan decoding, pastikan teks yang digunakan memang memiliki format yang sesuai. Hasil decoding juga perlu diperiksa sebelum diproses oleh aplikasi lain.",
    ],
    href: "/tools/base64-encoder",
    cta: "Coba Base64 Encoder",
  },
  {
    category: "Keamanan Data",
    title: "Mengenal Hash SHA-256 dan Fungsinya",
    description:
      "Pahami konsep hash kriptografis, sidik jari digital sebuah data, dan perbedaannya dengan enkripsi.",
    content: [
      "SHA-256 merupakan fungsi hash kriptografis yang menghasilkan nilai hash sepanjang 256 bit dari data masukan. Nilai tersebut sering ditampilkan sebagai 64 karakter heksadesimal.",
      "Hash dapat digunakan untuk membantu memeriksa integritas data. Jika isi masukan berubah, nilai hash yang dihasilkan umumnya ikut berubah. Namun, hash saja tidak membuktikan siapa pembuat suatu file atau menjamin bahwa file tersebut aman.",
      "Hash juga berbeda dari enkripsi. Enkripsi dirancang agar data dapat dipulihkan menggunakan kunci yang sesuai, sedangkan SHA-256 tidak dirancang untuk mengembalikan data asli dari nilai hash.",
    ],
    href: "/tools/hash-generator",
    cta: "Coba SHA-256 Hash Generator",
  },
  {
    category: "Tools Online",
    title: "Bagaimana QR Code Menyimpan Informasi?",
    description:
      "Pelajari cara kerja QR Code, contoh penggunaannya, dan hal yang perlu diperhatikan saat memindai kode.",
    content: [
      "QR Code adalah kode dua dimensi yang menyimpan informasi dalam pola kotak-kotak. Informasi tersebut dapat berupa teks, alamat website, atau data lain yang didukung oleh pembaca QR.",
      "QR Code banyak digunakan untuk membuka halaman web, membagikan informasi kontak, dan mempermudah akses ke informasi tanpa perlu mengetik alamat secara manual.",
      "Tetap periksa alamat tujuan sebelum membuka tautan dari QR Code, terutama jika kode berasal dari sumber yang tidak dikenal. QR Code sendiri tidak menjamin bahwa informasi atau tautan di dalamnya aman.",
    ],
    href: "/tools/qr-code-generator",
    cta: "Coba QR Code Generator",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300">
            SmartTools Indonesia Blog
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Wawasan Digital untuk Produktivitas
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Temukan panduan praktis, tutorial, dan penjelasan teknologi
            untuk membantu pekerjaan digital sehari-hari menjadi lebih
            mudah dan efisien.
          </p>
        </header>

        <section
          aria-labelledby="article-list"
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <h2 id="article-list" className="sr-only">
            Artikel dan panduan
          </h2>

          {articles.map((article) => (
            <article
              key={article.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="mb-4 w-fit rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
                {article.category}
              </span>

              <h2 className="text-xl font-bold leading-snug">
                {article.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {article.description}
              </p>

              <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                {article.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {article.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 text-center dark:border-indigo-400/20 dark:bg-indigo-400/5 sm:p-10">
          <h2 className="text-2xl font-bold">
            Temukan tools yang sesuai kebutuhanmu
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            Gunakan berbagai tools online SmartTools Indonesia untuk
            membantu pengolahan teks, data, dan kebutuhan digital lainnya.
          </p>

          <Link
            href="/tools"
            className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Jelajahi Semua Tools
          </Link>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
