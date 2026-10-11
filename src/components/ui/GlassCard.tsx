"use client";

import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  glow = false,
  className = "",
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 ${
        glow ? "glass-panel-glow" : "glass-panel"
      } ${
        hoverEffect
          ? "hover:border-[#00C8FF]/40 hover:-translate-y-1 hover:shadow-[0_12px_36px_-10px_rgba(30,107,255,0.28)]"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
