"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ToolFAQProps {
  items: FAQItem[];
}

export default function ToolFAQ({ items }: ToolFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <section className="mt-20" aria-labelledby={`${id}-heading`}>
      <h2
        id={`${id}-heading`}
        className="mb-8 text-3xl font-bold text-slate-900 dark:text-white"
      >
        Pertanyaan yang Sering Diajukan
      </h2>

      <div className="space-y-4">
        {items.map((faq, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${id}-trigger-${index}`;
          const panelId = `${id}-panel-${index}`;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left font-semibold text-slate-900 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                <span>{faq.question}</span>

                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="border-t border-slate-200 bg-slate-50 px-6 py-5 leading-7 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}