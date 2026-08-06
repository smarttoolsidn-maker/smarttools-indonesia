import { ReactNode } from "react";

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
  rating,
  users,
  children,
}: ToolLayoutProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      <ToolBreadcrumb title={title} />

      <ToolHeader
        icon={icon}
        title={title}
        description={description}
        category={category}
        badge={badge}
        rating={rating}
        users={users}
      />

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        {children}
      </div>

      <ToolFAQ
        items={[
          {
            question: "Apakah tool ini gratis?",
            answer:
              "Ya. Semua tool di SmartTools Indonesia dapat digunakan secara gratis.",
          },
          {
            question: "Apakah data saya disimpan?",
            answer:
              "Tidak. Semua proses dilakukan langsung di browser sehingga data tetap aman.",
          },
          {
            question: "Apakah tool ini bisa digunakan di HP?",
            answer:
              "Ya. Semua tool telah dioptimalkan untuk desktop maupun perangkat mobile.",
          },
        ]}
      />

      <ToolRelated
        currentToolId={toolId}
        tools={tools}
      />

    </main>
  );
}