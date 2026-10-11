"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

export function Testimonials() {
  const { t, isArabic } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = t.testimonials.items;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const current = items[currentIndex];

  return (
    <section className="py-24 bg-[#04060D] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        {/* Demonstration Note Badge */}
        <div className="flex items-center justify-center gap-2 mb-8 text-xs text-[#64748B] bg-[#070B16] border border-[#1E6BFF]/15 px-4 py-2 rounded-full w-fit mx-auto">
          <AlertCircle className="w-3.5 h-3.5 text-[#00C8FF]" />
          <span>{t.testimonials.demoNote}</span>
        </div>

        {/* Carousel Card */}
        <GlassCard className="p-8 sm:p-12 relative border border-[#1E6BFF]/25 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-[#1E6BFF]/15 border border-[#1E6BFF]/30 flex items-center justify-center text-[#00C8FF] mb-6">
            <Quote className="w-6 h-6" />
          </div>

          <p className="text-lg sm:text-2xl font-medium text-[#F5F7FF] leading-relaxed mb-8">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1E6BFF]/15 pt-6">
            <div>
              <h4 className="text-base font-bold text-[#F5F7FF]">{current.author}</h4>
              <p className="text-xs sm:text-sm text-[#00C8FF]">
                {current.role} • {current.company}
              </p>
              <span className="text-[11px] text-[#A3ADC2]">{current.industry}</span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={isArabic ? handleNext : handlePrev}
                aria-label={t.testimonials.prev}
                className="w-10 h-10 rounded-full bg-[#0B1222] border border-[#1E6BFF]/30 flex items-center justify-center text-[#A3ADC2] hover:text-white hover:border-[#00C8FF] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#A3ADC2]">
                {currentIndex + 1} / {items.length}
              </span>
              <button
                onClick={isArabic ? handlePrev : handleNext}
                aria-label={t.testimonials.next}
                className="w-10 h-10 rounded-full bg-[#0B1222] border border-[#1E6BFF]/30 flex items-center justify-center text-[#A3ADC2] hover:text-white hover:border-[#00C8FF] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
