"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Palette, Code, Rocket, TrendingUp } from "lucide-react";

export function Process() {
  const { t } = useLanguage();

  const stepIcons = [Compass, Palette, Code, Rocket, TrendingUp];

  return (
    <section id="process" className="py-24 bg-[#04060D] relative overflow-hidden">
      {/* Background radial line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-48 bg-gradient-to-r from-transparent via-[#1E6BFF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.process.badge}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        {/* Desktop Process Timeline (Horizontal) & Mobile (Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-[2px] bg-gradient-to-r from-[#1E6BFF] via-[#00C8FF] to-[#38BDF8] opacity-30 -z-0" />

          {t.process.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;

            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center md:items-start text-center md:text-start group"
              >
                {/* Step Circle & Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1222] border-2 border-[#1E6BFF]/40 group-hover:border-[#00C8FF] flex items-center justify-center text-[#00C8FF] shadow-[0_0_20px_rgba(30,107,255,0.25)] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  {/* Step Number Tag */}
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#1E6BFF] text-white shadow-md">
                    {step.step}
                  </span>
                </div>

                {/* Duration Badge */}
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#00C8FF] mb-2">
                  {step.duration}
                </span>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#F5F7FF] mb-3 group-hover:text-[#00C8FF] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#A3ADC2] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
