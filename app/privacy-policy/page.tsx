import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Privacy Policy",
  description: "Kebijakan Privasi SmartTools Indonesia.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Kebijakan Privasi"
      description="Privasi pengguna merupakan prioritas kami."
    >
      <h2>Informasi yang Kami Kumpulkan</h2>

      <p>
        Sebagian besar tools di SmartTools Indonesia memproses data langsung di
        browser pengguna dan tidak mengirimkan data tersebut ke server kami.
      </p>

      <h2>Cookies</h2>

      <p>
        Kami dapat menggunakan cookies untuk meningkatkan pengalaman pengguna,
        analitik, dan layanan pihak ketiga seperti Google Analytics atau Google
        AdSense.
      </p>

      <h2>Layanan Pihak Ketiga</h2>

      <p>
        Website ini dapat menggunakan layanan pihak ketiga untuk analitik,
        periklanan, atau pengukuran performa website.
      </p>

      <h2>Perubahan Kebijakan</h2>

      <p>
        Kebijakan Privasi ini dapat diperbarui sewaktu-waktu tanpa pemberitahuan
        sebelumnya.
      </p>
    </LegalLayout>
  );
}