import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Tentang SmartTools Indonesia",
  description:
    "Kenali SmartTools Indonesia, platform tools online untuk produktivitas, pengolahan teks, dan pengembangan web.",
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
      description="Tools online praktis untuk produktivitas dan pengembangan web."
    >
      <h2>Selamat Datang di SmartTools Indonesia</h2>

      <p>
        SmartTools Indonesia adalah platform yang menyediakan berbagai
        tools online untuk membantu pengguna menyelesaikan pekerjaan
        digital dengan lebih praktis. Tools yang tersedia mencakup
        pengolahan teks, pembuatan konten digital, serta kebutuhan
        pengembangan web.
      </p>

      <p>
        Platform ini dikembangkan secara independen agar pengguna dapat
        mengakses berbagai alat digital melalui browser tanpa perlu
        memasang aplikasi terpisah untuk setiap kebutuhan.
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
        SmartTools Indonesia menyediakan beberapa kategori alat digital
        sesuai dengan fungsi dan kebutuhan pengguna, antara lain:
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
          <strong>Generator Tools:</strong> membantu membuat keluaran
          digital seperti kata sandi, QR Code, dan UUID.
        </li>
        <li>
          <strong>Converter Tools:</strong> membantu mengubah format
          teks atau data sesuai kebutuhan.
        </li>
        <li>
          <strong>Utility Tools:</strong> menyediakan fungsi praktis
          untuk mendukung berbagai kebutuhan digital sehari-hari.
        </li>
      </ul>

      <p>
        Untuk mengetahui fitur, batasan, dan cara penggunaan setiap alat,
        kunjungi halaman Semua Tools dan buka halaman tool yang sesuai
        dengan kebutuhan Anda.
      </p>

      <h2>Komitmen Pengembangan</h2>

      <p>
        Kami berupaya mengembangkan SmartTools Indonesia secara bertahap
        dengan memperhatikan kemudahan penggunaan, kejelasan informasi,
        dan pengalaman pengguna.
      </p>

      <p>
        Masukan, saran, dan laporan kendala dari pengguna dapat membantu
        kami mengevaluasi serta meningkatkan kualitas platform. Kami juga
        berupaya menyajikan informasi yang jelas mengenai fungsi tools
        dan penggunaannya.
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
        Jika Anda memiliki pertanyaan, saran, menemukan kendala, atau
        ingin menyampaikan masukan mengenai SmartTools Indonesia,
        silakan hubungi kami melalui email berikut:
      </p>

      <p>
        <strong>Email: </strong>
        <a href="mailto:smarttoolsidn@gmail.com">
          smarttoolsidn@gmail.com
        </a>
      </p>

      <p>
        <strong>Website: </strong>
        <a
          href="https://smarttools.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://smarttools.id
        </a>
      </p>
    </LegalLayout>
  );
}