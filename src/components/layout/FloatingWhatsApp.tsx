"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const { t, isArabic } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`fixed bottom-6 z-40 flex items-center gap-3 ${
        isArabic ? "left-6 flex-row-reverse" : "right-6 flex-row"
      }`}
    >
      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="hidden sm:block px-3.5 py-1.5 rounded-xl bg-[#0B1222]/95 border border-[#1E6BFF]/30 text-xs text-[#F5F7FF] font-medium shadow-xl backdrop-blur-md animate-fade-in whitespace-nowrap">
          {t.floatingWhatsapp.tooltip}
        </div>
      )}

      {/* Floating Action Button */}
      <Link
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingWhatsapp.ariaLabel}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 beacon-effect"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2]" />
        {/* Active Online Indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#00C8FF] border-2 border-[#04060D] rounded-full" />
      </Link>
    </div>
  );
}
