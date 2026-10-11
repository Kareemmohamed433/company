"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Globe, Bot, Workflow, TrendingUp, Check, ArrowUpRight } from "lucide-react";

export function Services() {
  const { t, isArabic } = useLanguage();

  const serviceIcons = {
    "web-development": Globe,
    "ai-solutions": Bot,
    "automation": Workflow,
    "business-growth": TrendingUp,
  };

  return (
    <section id="services" className="py-24 bg-[#04060D] relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#1E6BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#00C8FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.services.badge}
          title={t.services.title}
          subtitle={t.services.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Globe;
            const waUrl = getWhatsAppUrl(service.ctaMessage);

            return (
              <GlassCard
                key={service.id}
                className="p-6 sm:p-7 flex flex-col justify-between group border border-[#1E6BFF]/20 hover:border-[#00C8FF]/50 transition-all duration-300"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E6BFF]/25 to-[#00C8FF]/15 border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF] mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Header */}
                  <span className="text-[11px] font-semibold text-[#00C8FF] uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F7FF] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A3ADC2] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features list */}
                  <ul className="space-y-2.5 mb-8 border-t border-[#1E6BFF]/15 pt-5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#E2E8F0]">
                        <Check className="w-3.5 h-3.5 text-[#00C8FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp CTA */}
                <Link
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#F5F7FF] bg-[#0B1222] hover:bg-[#1E6BFF] border border-[#1E6BFF]/30 hover:border-[#1E6BFF] transition-all duration-200 group-hover:shadow-[0_0_15px_rgba(30,107,255,0.35)]"
                >
                  <span>{t.services.discussCta}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? "rotate-270" : ""}`} />
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
