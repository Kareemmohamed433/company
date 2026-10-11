"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

export function Pricing() {
  const { t, isArabic } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-[#070B16] relative overflow-hidden">
      {/* Glow for highlighted card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1E6BFF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.pricing.badge}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
          {t.pricing.packages.map((pkg) => {
            const waUrl = getWhatsAppUrl(pkg.ctaMessage);

            return (
              <GlassCard
                key={pkg.id}
                glow={pkg.highlighted}
                className={`p-8 sm:p-9 flex flex-col justify-between relative ${
                  pkg.highlighted
                    ? "border-[#00C8FF]/50 bg-[#0B1222]/90 scale-100 lg:scale-105 shadow-[0_20px_50px_rgba(30,107,255,0.35)]"
                    : "border-[#1E6BFF]/25"
                }`}
              >
                {/* Most Popular Ribbon */}
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] shadow-[0_0_15px_rgba(0,200,255,0.5)] flex items-center gap-1.5 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.pricing.mostPopularLabel}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#F5F7FF]">{pkg.name}</h3>
                    {pkg.badge && (
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#1E6BFF]/15 text-[#00C8FF] border border-[#1E6BFF]/30">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#A3ADC2] leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Quote Label */}
                  <div className="py-4 px-5 rounded-2xl bg-[#04060D] border border-[#1E6BFF]/20 mb-8 text-center">
                    <span className="text-sm sm:text-base font-bold text-[#00C8FF]">
                      {t.pricing.quoteLabel}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2E8F0]">
                        <Check className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <Link
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                    pkg.highlighted
                      ? "text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] hover:from-[#1557DB] hover:to-[#00B4E6] shadow-[0_0_25px_rgba(30,107,255,0.4)]"
                      : "text-[#F5F7FF] bg-[#0B1222] hover:bg-[#1E6BFF] border border-[#1E6BFF]/30 hover:border-[#1E6BFF]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.pricing.discussCta}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? "rotate-270" : ""}`} />
                </Link>
              </GlassCard>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#64748B] max-w-2xl mx-auto">
          {t.pricing.disclaimer}
        </p>
      </div>
    </section>
  );
}
