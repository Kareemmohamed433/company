"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Compass, Utensils, Shirt, Building2, ArrowUpRight } from "lucide-react";

export function Industries() {
  const { t, isArabic } = useLanguage();

  const industryIcons = {
    tourism: Compass,
    restaurants: Utensils,
    fashion: Shirt,
    "any-business": Building2,
  };

  return (
    <section id="industries" className="py-24 bg-[#04060D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.industries.badge}
          title={t.industries.title}
          subtitle={t.industries.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.industries.items.map((item) => {
            const Icon = industryIcons[item.id as keyof typeof industryIcons] || Building2;
            const waUrl = getWhatsAppUrl(item.ctaMessage);

            return (
              <GlassCard
                key={item.id}
                className="p-7 flex flex-col justify-between group border border-[#1E6BFF]/20 hover:border-[#00C8FF]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1222] border border-[#1E6BFF]/30 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 group-hover:border-[#00C8FF] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#93C5FD] px-2.5 py-1 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F7FF] mb-3 group-hover:text-[#00C8FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A3ADC2] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#1E6BFF]/15 text-xs font-semibold text-[#00C8FF] group-hover:text-white transition-colors"
                >
                  <span>{t.industries.inquireCta}</span>
                  <div className="w-6 h-6 rounded-full bg-[#1E6BFF]/20 group-hover:bg-[#1E6BFF] flex items-center justify-center transition-colors">
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? "rotate-270" : ""}`} />
                  </div>
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
