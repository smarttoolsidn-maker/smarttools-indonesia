import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi SmartTools Indonesia untuk pertanyaan, masukan, laporan kendala, dan peluang kolaborasi.",
  alternates: {
    canonical: "https://smarttools.id/contact",
  },
  openGraph: {
    title: "Hubungi SmartTools Indonesia",
    description:
      "Sampaikan pertanyaan, masukan, laporan kendala, atau peluang kolaborasi kepada SmartTools Indonesia.",
    url: "https://smarttools.id/contact",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <LegalLayout
      title="Hubungi Kami"
      description="Kami terbuka terhadap pertanyaan, masukan, dan laporan kendala dari pengguna SmartTools Indonesia."
    >
      <h2>Kontak</h2>

      <p>
        Jika Anda memiliki pertanyaan, menemukan kendala, atau ingin
        memberikan saran untuk SmartTools Indonesia, silakan hubungi
        kami melalui email. Kami akan meninjau pesan yang masuk sesuai
        kebutuhan dan ketersediaan pengelolaan.
      </p>

      <ul>
        <li>
          <strong>Email: </strong>
          <a href="mailto:smarttoolsidn@gmail.com">
            smarttoolsidn@gmail.com
          </a>
        </li>

        <li>
          <strong>Website: </strong>
          <a
            href="https://smarttools.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://smarttools.id
          </a>
        </li>
      </ul>

      <h2>Masukan dan Kolaborasi</h2>

      <p>
        Kami terbuka terhadap masukan, ide pengembangan tools baru,
        laporan kendala, dan peluang kolaborasi yang relevan dengan
        pengembangan SmartTools Indonesia.
      </p>

      <p>
        Agar kami dapat memahami kebutuhan Anda, sertakan penjelasan
        mengenai pertanyaan atau kendala yang dialami. Hindari
        menyertakan kata sandi, informasi keuangan, atau data pribadi
        sensitif dalam pesan Anda.
      </p>
    </LegalLayout>
  );
}