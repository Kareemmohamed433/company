"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CodeEditorVisual } from "@/components/ui/CodeEditorVisual";
import { Clock, Palette, Smartphone, Search, MessageSquare, HeadphonesIcon } from "lucide-react";

export function WhyNexora() {
  const { t } = useLanguage();

  const pointIcons = [
    Clock,
    Palette,
    Smartphone,
    Search,
    MessageSquare,
    HeadphonesIcon,
  ];

  return (
    <section id="why-us" className="py-24 bg-[#070B16] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#1E6BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.whyNexora.badge}
          title={t.whyNexora.title}
          subtitle={t.whyNexora.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: 6 Benefit Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-start">
            {t.whyNexora.points.map((pt, idx) => {
              const Icon = pointIcons[idx] || Clock;

              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0B1222]/80 border border-[#1E6BFF]/20 hover:border-[#00C8FF]/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E6BFF]/15 border border-[#1E6BFF]/30 flex items-center justify-center text-[#00C8FF] mb-4 group-hover:bg-[#1E6BFF] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FF] mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3ADC2] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Code Editor Visual (6 cols) */}
          <div className="lg:col-span-6">
            <CodeEditorVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
