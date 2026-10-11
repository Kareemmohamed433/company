"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, MessageCircle } from "lucide-react";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#070B16] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#1E6BFF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.faq.badge}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        <div className="space-y-4 mb-12">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B1222]/80 border border-[#1E6BFF]/20 overflow-hidden transition-all duration-200 hover:border-[#00C8FF]/40"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-start font-bold text-base sm:text-lg text-[#F5F7FF] hover:text-[#00C8FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00C8FF] rounded-2xl"
                >
                  <span className="pr-4">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#1E6BFF]/15 flex items-center justify-center text-[#00C8FF] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1E6BFF] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#A3ADC2] leading-relaxed border-t border-[#1E6BFF]/15 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Query Link */}
        <div className="text-center">
          <Link
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00C8FF] hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{t.faq.contactSupport}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
