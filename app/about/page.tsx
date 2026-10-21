
import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Tentang SmartTools Indonesia",
  description:
    "Kenali SmartTools Indonesia, platform tools online gratis untuk produktivitas, pengolahan teks, dan web development.",
  alternates: {
    canonical: "https://smarttools.id/about",
  },
  openGraph: {
    title: "Tentang SmartTools Indonesia",
    description:
      "Mengenal tujuan, layanan, dan pengembangan platform SmartTools Indonesia.",
    url: "https://smarttools.id/about",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <LegalLayout
      title="Tentang SmartTools Indonesia"
      description="Tools online praktis untuk produktivitas dan web development."
    >
      <h2>Selamat Datang di SmartTools Indonesia</h2>
      <p>
        SmartTools Indonesia adalah platform yang menyediakan berbagai
        tools online untuk membantu pengguna menyelesaikan pekerjaan
        digital dengan lebih praktis. Berbagai alat tersedia untuk
        kebutuhan pengolahan teks, pembuatan konten digital, dan
        pengembangan web.
      </p>
      <p>
        Platform ini dikembangkan secara independen agar pengguna dapat
        mengakses alat digital melalui browser tanpa perlu memasang
        aplikasi tambahan untuk setiap kebutuhan.
      </p>

      <h2>Misi Kami</h2>
      <p>
        Misi SmartTools Indonesia adalah menyediakan tools online yang
        mudah diakses, praktis digunakan, dan bermanfaat bagi pelajar,
        mahasiswa, developer, pekerja profesional, pelaku UMKM, serta
        masyarakat umum.
      </p>
      <p>
        Kami ingin membantu pengguna menyelesaikan berbagai tugas digital
        melalui satu platform yang sederhana dan mudah dijelajahi.
      </p>

      <h2>Apa yang Kami Sediakan?</h2>
      <p>
        SmartTools Indonesia menyediakan berbagai kategori alat digital,
        antara lain:
      </p>
      <ul>
        <li>
          <strong>Text Tools:</strong> membantu menghitung, mengolah,
          dan mengubah format teks.
        </li>
        <li>
          <strong>Developer Tools:</strong> membantu memformat,
          memvalidasi, dan mengolah data yang umum digunakan dalam
          pengembangan web.
        </li>
        <li>
          <strong>Generator Tools:</strong> membuat output digital
          seperti password, QR code, dan UUID.
        </li>
        <li>
          <strong>Converter Tools:</strong> membantu mengubah format
          teks atau data sesuai kebutuhan.
        </li>
      </ul>
      <p>
        Daftar fitur dapat berkembang seiring dengan pengembangan
        platform. Pengguna dapat menjelajahi halaman tools untuk
        mengetahui fungsi dan cara penggunaan masing-masing alat.
      </p>

      <h2>Komitmen Pengembangan</h2>
      <p>
        Kami berupaya mengembangkan SmartTools Indonesia secara bertahap
        dengan memperhatikan kemudahan penggunaan, kejelasan informasi,
        dan pengalaman pengguna.
      </p>
      <p>
        Masukan, saran, serta laporan kendala dari pengguna merupakan
        bagian yang dapat membantu kami mengevaluasi dan meningkatkan
        kualitas platform.
      </p>

      <h2>Pengelolaan Platform</h2>
      <p>
        SmartTools Indonesia saat ini dikembangkan secara independen.
        Seiring pertumbuhan platform, pengelolaan dan pengembangannya
        dapat melibatkan tim atau bentuk organisasi yang sesuai dengan
        kebutuhan di masa depan.
      </p>

      <h2>Hubungi Kami</h2>
      <p>
        Jika Anda memiliki pertanyaan, saran, atau menemukan kendala
        saat menggunakan tools, silakan hubungi kami melalui email:
      </p>
      <p>
        <a href="mailto:smarttoolsidn@gmail.com">
          smarttoolsidn@gmail.com
        </a>
      </p>
    </LegalLayout>
  );
}