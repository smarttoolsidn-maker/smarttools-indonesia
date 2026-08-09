import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer SmartTools Indonesia.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      description="Informasi mengenai batas tanggung jawab SmartTools Indonesia."
    >
      <h2>Informasi Umum</h2>

      <p>
        Seluruh tools dan informasi pada website ini disediakan sebagaimana
        adanya tanpa jaminan apa pun.
      </p>

      <h2>Keakuratan</h2>

      <p>
        Kami berupaya menjaga keakuratan tools, namun tidak menjamin bahwa hasil
        selalu bebas dari kesalahan.
      </p>

      <h2>Tanggung Jawab</h2>

      <p>
        SmartTools Indonesia tidak bertanggung jawab atas kerugian yang timbul
        akibat penggunaan website maupun hasil dari tools yang tersedia.
      </p>
    </LegalLayout>
  );
}