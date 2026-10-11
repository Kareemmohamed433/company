"use client";

import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl mb-14 md:mb-20 ${
        align === "center" ? "mx-auto text-center" : "text-start"
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E6BFF]/10 border border-[#1E6BFF]/30 text-[#00C8FF] text-xs font-medium tracking-wide uppercase mb-4 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(0,200,255,0.25)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF] animate-ping" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F7FF] leading-[1.25]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A3ADC2] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
