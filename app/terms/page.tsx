import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description:
    "Syarat dan Ketentuan penggunaan SmartTools Indonesia, termasuk penggunaan layanan, tanggung jawab pengguna, hak kekayaan intelektual, dan batas tanggung jawab.",
  alternates: {
    canonical: "https://smarttools.id/terms",
  },
  openGraph: {
    title: "Syarat dan Ketentuan SmartTools Indonesia",
    description:
      "Ketentuan penggunaan website dan tools SmartTools Indonesia yang perlu dipahami oleh pengguna.",
    url: "https://smarttools.id/terms",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Syarat & Ketentuan"
      description="Ketentuan penggunaan SmartTools Indonesia yang perlu dipahami oleh setiap pengguna."
    >
      <p>
        <strong>Terakhir diperbarui: 21 Oktober 2026</strong>
      </p>

      <p>
        Selamat datang di SmartTools Indonesia (
        <a
          href="https://smarttools.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://smarttools.id
        </a>
        ). Syarat dan Ketentuan ini mengatur penggunaan website beserta
        tools yang tersedia di dalamnya. Dengan mengakses atau
        menggunakan layanan kami, Anda dianggap telah membaca dan
        memahami ketentuan ini.
      </p>

      <h2>1. Penggunaan Website</h2>

      <p>
        SmartTools Indonesia menyediakan berbagai tools digital untuk
        membantu kebutuhan pengguna, baik pribadi maupun profesional.
        Penggunaan layanan harus mematuhi hukum yang berlaku dan
        ketentuan yang tercantum dalam halaman ini.
      </p>

      <p>
        Anda bertanggung jawab memastikan bahwa penggunaan tools sesuai
        dengan kebutuhan, tujuan, dan ketentuan yang berlaku.
      </p>

      <h2>2. Penggunaan yang Diperbolehkan</h2>

      <p>
        Anda dapat menggunakan layanan kami selama tidak melakukan
        tindakan yang dilarang, termasuk:
      </p>

      <ul>
        <li>Melanggar hukum atau peraturan yang berlaku.</li>
        <li>
          Menggunakan website untuk menipu, merugikan, atau melanggar
          hak pihak lain.
        </li>
        <li>
          Berusaha mengganggu keamanan, kestabilan, atau ketersediaan
          website.
        </li>
        <li>
          Mengakses sistem atau data yang tidak memiliki izin untuk
          Anda akses.
        </li>
        <li>
          Menggunakan layanan dengan cara yang dapat merusak fungsi
          website atau mengganggu pengguna lain.
        </li>
      </ul>

      <h2>3. Tanggung Jawab Pengguna</h2>

      <p>
        Pengguna bertanggung jawab atas data yang dimasukkan, cara
        menggunakan tools, serta keputusan yang dibuat berdasarkan
        hasil yang diperoleh. Periksa kembali hasil yang penting
        sebelum menggunakannya untuk keperluan profesional atau
        pengambilan keputusan.
      </p>

      <p>
        Jangan memasukkan data rahasia atau sensitif sebelum memahami
        cara kerja tools yang digunakan dan bagaimana data tersebut
        diproses. Untuk informasi lebih lanjut, silakan baca{" "}
        <a href="/privacy-policy">Kebijakan Privasi</a>.
      </p>

      <h2>4. Akurasi dan Ketersediaan Layanan</h2>

      <p>
        Kami berupaya menjaga agar website berfungsi sebagaimana
        dirancang. Namun, kami tidak menjamin bahwa semua tools selalu
        tersedia, berjalan tanpa gangguan, atau menghasilkan keluaran
        yang sepenuhnya bebas dari kesalahan.
      </p>

      <p>
        Kami dapat melakukan pemeliharaan, memperbaiki bug, mengubah
        fitur, atau menghentikan bagian tertentu dari layanan sesuai
        kebutuhan operasional.
      </p>

      <h2>5. Hak Kekayaan Intelektual</h2>

      <p>
        Sepanjang dimiliki atau digunakan secara sah oleh SmartTools
        Indonesia, desain, identitas merek, teks, dan elemen website
        tunduk pada ketentuan kekayaan intelektual yang berlaku.
      </p>

      <p>
        Anda tidak diperkenankan menyalin, mendistribusikan, atau
        menggunakan bagian website yang dilindungi untuk tujuan yang
        melanggar hak pemilik atau hukum yang berlaku tanpa izin yang
        diperlukan.
      </p>

      <h2>6. Layanan Pihak Ketiga</h2>

      <p>
        Website dapat menyediakan tautan atau menggunakan layanan
        pihak ketiga untuk mendukung fungsi tertentu. Layanan tersebut
        dapat memiliki syarat penggunaan dan kebijakan privasi
        tersendiri. Pengguna bertanggung jawab untuk meninjau ketentuan
        penyedia terkait ketika menggunakan layanan eksternal.
      </p>

      <h2>7. Batas Tanggung Jawab</h2>

      <p>
        Sejauh diizinkan oleh hukum yang berlaku, SmartTools Indonesia
        tidak menjamin kesesuaian seluruh tools untuk setiap kebutuhan
        khusus dan tidak bertanggung jawab atas kerugian tidak langsung
        yang timbul akibat penggunaan atau ketidakmampuan menggunakan
        layanan.
      </p>

      <p>
        Ketentuan ini tidak mengesampingkan hak pengguna atau tanggung
        jawab yang tidak dapat dikecualikan berdasarkan hukum yang
        berlaku.
      </p>

      <p>
        Untuk informasi tambahan mengenai batasan penggunaan dan
        keakuratan hasil tools, silakan baca{" "}
        <a href="/disclaimer">Disclaimer</a>.
      </p>

      <h2>8. Perubahan Syarat dan Ketentuan</h2>

      <p>
        Kami dapat memperbarui Syarat dan Ketentuan ini dari waktu ke
        waktu untuk menyesuaikan perubahan layanan atau ketentuan hukum.
        Versi terbaru akan ditampilkan pada halaman ini beserta tanggal
        pembaruannya.
      </p>

      <h2>9. Hukum yang Berlaku</h2>

      <p>
        Penggunaan website tunduk pada hukum dan peraturan yang berlaku
        di Indonesia, sepanjang relevan dengan penggunaan layanan dan
        tanpa mengurangi ketentuan hukum wajib yang berlaku.
      </p>

      <h2>10. Hubungi Kami</h2>

      <p>
        Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini,
        silakan hubungi SmartTools Indonesia melalui email berikut:
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