import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer SmartTools Indonesia mengenai keakuratan hasil tools, tanggung jawab pengguna, dan penggunaan layanan.",
  alternates: {
    canonical: "https://smarttools.id/disclaimer",
  },
  openGraph: {
    title: "Disclaimer SmartTools Indonesia",
    description:
      "Informasi mengenai penggunaan tools, keakuratan hasil, dan batas tanggung jawab SmartTools Indonesia.",
    url: "https://smarttools.id/disclaimer",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      description="Informasi mengenai penggunaan tools, keakuratan hasil, dan batas tanggung jawab SmartTools Indonesia."
    >
      <p>
        <strong>Terakhir diperbarui: 21 Oktober 2026</strong>
      </p>

      <h2>1. Informasi Umum</h2>

      <p>
        SmartTools Indonesia melalui{" "}
        <a
          href="https://smarttools.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://smarttools.id
        </a>{" "}
        menyediakan berbagai tools online untuk membantu pengguna
        menyelesaikan kebutuhan digital sehari-hari. Tools dan
        informasi pada website disediakan untuk mendukung penggunaan
        layanan sesuai fungsi masing-masing.
      </p>

      <p>
        Dengan menggunakan website ini, pengguna bertanggung jawab
        untuk memahami fungsi, batasan, serta kesesuaian tools dengan
        kebutuhan mereka dan tetap mematuhi hukum yang berlaku.
      </p>

      <h2>2. Keakuratan Hasil</h2>

      <p>
        Kami berupaya menjaga agar tools berfungsi sebagaimana
        dirancang. Namun, kami tidak menjamin bahwa setiap hasil
        akan selalu akurat, lengkap, mutakhir, atau bebas dari
        kesalahan teknis.
      </p>

      <p>
        Hasil dapat dipengaruhi oleh data masukan, pengaturan,
        browser, perangkat, maupun cara penggunaan. Periksa kembali
        hasil yang penting sebelum menggunakannya untuk mengambil
        keputusan atau menjalankan proses lain.
      </p>

      <p>
        Untuk kebutuhan teknis, akademik, profesional, atau lainnya
        yang memerlukan tingkat ketelitian tertentu, pengguna
        disarankan melakukan verifikasi tambahan sesuai kebutuhan.
      </p>

      <h2>3. Tanggung Jawab Pengguna</h2>

      <p>
        Pengguna bertanggung jawab atas data yang dimasukkan, cara
        menggunakan tools, serta keputusan yang diambil berdasarkan
        hasil yang diperoleh.
      </p>

      <p>
        Pastikan data yang digunakan sesuai dengan kebutuhan dan
        tidak melanggar hak atau privasi pihak lain. Untuk data yang
        bersifat rahasia atau sensitif, pahami cara kerja tools
        terkait sebelum memasukkan data tersebut.
      </p>

      <h2>4. Batas Tanggung Jawab</h2>

      <p>
        Kami tidak menjamin bahwa website akan selalu tersedia tanpa
        gangguan, berjalan tanpa kesalahan, atau bahwa seluruh
        kendala teknis dapat segera diperbaiki.
      </p>

      <p>
        Sejauh diizinkan oleh hukum yang berlaku, SmartTools Indonesia
        tidak bertanggung jawab atas kerugian yang timbul akibat
        penggunaan, ketidakmampuan menggunakan, atau ketergantungan
        pada hasil tools. Ketentuan ini tidak mengesampingkan hak
        maupun tanggung jawab yang tidak dapat dikecualikan
        berdasarkan hukum yang berlaku.
      </p>

      <h2>5. Privasi dan Pemrosesan Data</h2>

      <p>
        Cara pemrosesan data dapat berbeda menurut fungsi dan
        implementasi masing-masing tool. Pengguna sebaiknya tidak
        menganggap bahwa setiap input pada seluruh tools selalu
        diproses dengan cara yang sama.
      </p>

      <p>
        Untuk informasi lebih lanjut mengenai informasi pengguna,
        cookies, penyimpanan lokal, serta layanan pihak ketiga,
        silakan baca{" "}
        <a href="/privacy-policy">
          Kebijakan Privasi SmartTools Indonesia
        </a>
        .
      </p>

      <h2>6. Tautan dan Layanan Pihak Ketiga</h2>

      <p>
        Website ini dapat memuat tautan menuju situs atau layanan
        pihak ketiga untuk membantu pengguna menemukan informasi
        atau layanan terkait. Kami tidak mengendalikan seluruh isi,
        keamanan, kebijakan privasi, atau praktik layanan eksternal
        tersebut.
      </p>

      <p>
        Pengguna disarankan membaca ketentuan dan kebijakan privasi
        masing-masing penyedia sebelum menggunakan layanan mereka.
      </p>

      <h2>7. Perubahan Layanan dan Disclaimer</h2>

      <p>
        Kami dapat mengubah, memperbarui, menambahkan, atau
        menghentikan sebagian fitur website untuk keperluan
        pemeliharaan, peningkatan kualitas, atau alasan operasional.
      </p>

      <p>
        Disclaimer ini dapat diperbarui agar sesuai dengan perubahan
        layanan dan ketentuan yang berlaku. Versi terbaru akan
        ditampilkan pada halaman ini beserta tanggal pembaruannya.
      </p>

      <h2>8. Hubungi Kami</h2>

      <p>
        Jika Anda memiliki pertanyaan, masukan, atau laporan terkait
        isi Disclaimer ini, silakan hubungi SmartTools Indonesia
        melalui email berikut:
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