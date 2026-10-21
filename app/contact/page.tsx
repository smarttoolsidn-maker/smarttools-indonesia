
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Contact",
  description:
    "Hubungi SmartTools Indonesia untuk pertanyaan, masukan, laporan bug, dan peluang kolaborasi.",
};

export default function ContactPage() {
  return (
    <LegalLayout
      title="Hubungi Kami"
      description="Kami senang menerima pertanyaan, masukan, maupun laporan bug."
    >
      <h2>Kontak</h2>

      <p>
        Jika Anda memiliki pertanyaan, menemukan bug, atau ingin memberikan
        saran untuk SmartTools Indonesia, silakan hubungi kami melalui email.
        Kami akan berusaha meninjau setiap pesan yang masuk.
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

      <h2>Masukan &amp; Kolaborasi</h2>

      <p>
        Kami terbuka terhadap masukan, ide pengembangan tools baru, laporan
        kendala, maupun peluang kolaborasi untuk meningkatkan kualitas dan
        pengalaman pengguna SmartTools Indonesia.
      </p>

      <p>
        Untuk membantu kami memahami kebutuhan Anda, sertakan penjelasan
        mengenai pertanyaan atau kendala yang dialami saat menghubungi kami.
      </p>
    </LegalLayout>
  );
}
