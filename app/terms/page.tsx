import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Terms & Conditions",
  description: "Syarat dan Ketentuan SmartTools Indonesia.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Syarat & Ketentuan"
      description="Dengan menggunakan SmartTools Indonesia, Anda dianggap menyetujui syarat berikut."
    >
      <h2>Penggunaan Website</h2>

      <p>
        SmartTools Indonesia disediakan untuk penggunaan pribadi maupun
        profesional sesuai hukum yang berlaku.
      </p>

      <h2>Tanggung Jawab Pengguna</h2>

      <p>
        Pengguna bertanggung jawab atas penggunaan tools dan hasil yang
        dihasilkan dari website ini.
      </p>

      <h2>Perubahan Layanan</h2>

      <p>
        Kami dapat mengubah, memperbarui, atau menghentikan layanan kapan saja
        tanpa pemberitahuan sebelumnya.
      </p>
    </LegalLayout>
  );
}