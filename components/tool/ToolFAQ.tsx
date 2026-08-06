"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ToolFAQProps {
  items: FAQItem[];
}

export default function ToolFAQ({
  items,
}: ToolFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-20">

      <h2 className="mb-8 text-3xl font-bold dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">

        {items.map((faq, index) => {

          const isOpen = openIndex === index;

          return (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700"
            >

              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between bg-white px-6 py-5 text-left font-semibold transition hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800"
              >

                {faq.question}

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {isOpen && (

                <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 leading-7 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">

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