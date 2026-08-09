import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Contact",
  description: "Hubungi SmartTools Indonesia.",
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
      </p>

      <ul>
        <li>
          <strong>Email:</strong> hello@smarttools.id
        </li>

        <li>
          <strong>Website:</strong> https://smarttools.id
        </li>
      </ul>

      <h2>Masukan & Kolaborasi</h2>

      <p>
        Kami terbuka terhadap masukan, ide pengembangan tools baru, maupun
        peluang kolaborasi untuk meningkatkan SmartTools Indonesia.
      </p>
    </LegalLayout>
  );
}