import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "About",
  description: "Tentang SmartTools Indonesia",
};

export default function AboutPage() {
  return (
    <LegalLayout
      title="Tentang SmartTools Indonesia"
      description="Platform tools online gratis untuk membantu pekerjaan sehari-hari."
    >
      <h2>Misi Kami</h2>

      <p>
        SmartTools Indonesia hadir untuk menyediakan berbagai tools online
        gratis yang cepat, mudah digunakan, dan dapat diakses langsung melalui
        browser tanpa instalasi.
      </p>

      <h2>Apa yang Kami Sediakan?</h2>

      <ul>
        <li>Password Generator</li>
        <li>QR Code Generator</li>
        <li>JSON Formatter</li>
        <li>UUID Generator</li>
        <li>Timestamp Converter</li>
        <li>Dan berbagai tools produktivitas lainnya.</li>
      </ul>

      <h2>Komitmen Kami</h2>

      <p>
        Kami terus mengembangkan SmartTools Indonesia agar menjadi platform
        tools online yang cepat, aman, ringan, dan bermanfaat bagi developer,
        mahasiswa, pekerja profesional, maupun masyarakat umum.
      </p>
    </LegalLayout>
  );
}