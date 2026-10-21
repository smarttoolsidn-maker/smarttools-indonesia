import type { ReactNode } from "react";

import ToolBreadcrumb from "./ToolBreadcrumb";
import ToolFAQ from "./ToolFAQ";
import ToolRelated from "./ToolRelated";

import ToolHeader from "@/components/tools/ToolHeader";

import { tools } from "@/data/tools";

interface ToolLayoutProps {
  toolId: string;
  icon: string;
  title: string;
  description: string;

  category?: string;
  badge?: string;

  // Dipertahankan sementara untuk kompatibilitas dengan halaman lama.
  rating?: string;
  users?: string;

  children: ReactNode;
}

export default function ToolLayout({
  toolId,
  icon,
  title,
  description,
  category,
  badge,
  children,
}: ToolLayoutProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Breadcrumb */}
      <ToolBreadcrumb title={title} />

      {/* Header */}
      <ToolHeader
        icon={icon}
        title={title}
        description={description}
        category={category}
        badge={badge}
      />

      {/* Area utama tool */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        {children}
      </div>

      {/* FAQ */}
      <ToolFAQ
        items={[
          {
            question: "Apakah tool ini gratis?",
            answer:
              "Tools yang tersedia di SmartTools Indonesia saat ini dapat digunakan secara gratis. Anda dapat langsung membuka halaman tool yang dibutuhkan tanpa berlangganan.",
          },
          {
            question: "Apakah data yang saya masukkan disimpan?",
            answer:
              "Cara pemrosesan data bergantung pada tool yang digunakan. Beberapa tool dapat memproses input langsung di browser, sedangkan kebutuhan pemrosesan lainnya dapat berbeda. Jangan masukkan informasi sensitif sebelum memahami cara kerja tool tersebut. Baca Kebijakan Privasi untuk mengetahui informasi lebih lanjut.",
          },
          {
            question: "Apakah tools bisa digunakan di HP?",
            answer:
              "SmartTools Indonesia dirancang untuk digunakan melalui browser pada desktop maupun perangkat mobile. Tampilan dan pengalaman penggunaan dapat berbeda bergantung pada ukuran layar, browser, dan fungsi masing-masing tool.",
          },
        ]}
      />

      {/* Tools terkait */}
      <ToolRelated currentToolId={toolId} tools={tools} />
    </main>
  );
}