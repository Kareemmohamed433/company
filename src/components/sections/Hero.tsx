"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, MessageCircle, Code2, Bot, Cpu, ShieldCheck, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";

export function Hero() {
  const { t, isArabic } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center bg-[#04060D] bg-grid-pattern overflow-hidden"
    >
      {/* Background Aurora Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E6BFF]/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-[#00C8FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(30,107,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#00C8FF]">
                {t.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#F5F7FF] tracking-tight leading-[1.15] mb-6">
              {isArabic ? (
                <>
                  بنحوّل أفكارك{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E6BFF] via-[#00C8FF] to-[#38BDF8] drop-shadow-[0_0_25px_rgba(0,200,255,0.4)]">
                    لتأثير رقمي حقيقي.
                  </span>
                </>
              ) : (
                <>
                  We turn ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E6BFF] via-[#00C8FF] to-[#38BDF8] drop-shadow-[0_0_25px_rgba(0,200,255,0.4)]">
                    digital impact
                  </span>{" "}
                  that scales.
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A3ADC2] leading-relaxed max-w-2xl mb-8">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] hover:from-[#1557DB] hover:to-[#00B4E6] shadow-[0_0_30px_rgba(30,107,255,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#1E6BFF]/40"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className={`w-4 h-4 ${isArabic ? "rotate-270" : ""}`} />
              </Link>

              <Link
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-[#F5F7FF] bg-[#0B1222]/80 hover:bg-[#1E6BFF]/20 border border-[#1E6BFF]/30 hover:border-[#00C8FF]/50 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 pt-6 border-t border-[#1E6BFF]/20 w-full max-w-2xl">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A3ADC2]">
                <CheckCircle2 className="w-4 h-4 text-[#00C8FF] shrink-0" />
                <span>{t.hero.trustIndicators.customBuilt}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A3ADC2]">
                <Smartphone className="w-4 h-4 text-[#00C8FF] shrink-0" />
                <span>{t.hero.trustIndicators.mobileFirst}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A3ADC2]">
                <MessageCircle className="w-4 h-4 text-[#00C8FF] shrink-0" />
                <span>{t.hero.trustIndicators.directComm}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A3ADC2]">
                <ShieldCheck className="w-4 h-4 text-[#00C8FF] shrink-0" />
                <span>{t.hero.trustIndicators.supportAfter}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature 3D Workspace Visual & Holographic Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden glass-panel-glow p-2 bg-[#070B16]/90 border border-[#1E6BFF]/30 group">
              {/* Official Workspace Image */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/hero-workspace.png"
                  alt="NEXORA Workspace - Laptop with Code and Floating Tech Panels"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle cyber grid vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060D] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating holographic card 1: Web Development */}
              <div
                className={`absolute -top-3 ${
                  isArabic ? "-right-3" : "-left-3"
                } hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0B1222]/90 border border-[#00C8FF]/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,200,255,0.25)] animate-float`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#1E6BFF]/20 flex items-center justify-center text-[#00C8FF]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F5F7FF]">{t.hero.visualTags.web}</div>
                  <div className="text-[10px] text-[#00C8FF]">Clean Code</div>
                </div>
              </div>

              {/* Floating holographic card 2: AI Solutions */}
              <div
                className={`absolute -bottom-3 ${
                  isArabic ? "-left-3" : "-right-3"
                } hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0B1222]/90 border border-[#1E6BFF]/40 backdrop-blur-md shadow-[0_10px_25px_rgba(30,107,255,0.3)] animate-float [animation-delay:2s]`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#00C8FF]/20 flex items-center justify-center text-[#00C8FF]">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F5F7FF]">{t.hero.visualTags.ai}</div>
                  <div className="text-[10px] text-[#38BDF8]">Smart Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
