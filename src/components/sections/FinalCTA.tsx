"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";

export function FinalCTA() {
  const { t, isArabic } = useLanguage();

  return (
    <section className="relative py-28 bg-[#04060D] overflow-hidden">
      {/* Intense electric-blue aurora glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[24rem] bg-gradient-to-r from-[#1E6BFF]/25 via-[#00C8FF]/20 to-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Glow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E6BFF]/10 border border-[#00C8FF]/40 text-[#00C8FF] text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(0,200,255,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-ping" />
          <span>NEXORA • Software Solutions</span>
        </div>

        {/* Large Typography */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F7FF] tracking-tight leading-[1.2] mb-6">
          {t.finalCta.headline}
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#A3ADC2] max-w-2xl mx-auto leading-relaxed mb-10">
          {t.finalCta.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] hover:from-[#1557DB] hover:to-[#00B4E6] shadow-[0_0_35px_rgba(30,107,255,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#1E6BFF]/40"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.finalCta.buttonText}</span>
            <ArrowUpRight className={`w-4 h-4 ${isArabic ? "rotate-270" : ""}`} />
          </Link>

          <a
            href={siteConfig.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#F5F7FF] bg-[#0B1222]/80 hover:bg-[#1E6BFF]/20 border border-[#1E6BFF]/30 transition-all font-mono"
          >
            <Phone className="w-4 h-4 text-[#00C8FF]" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
