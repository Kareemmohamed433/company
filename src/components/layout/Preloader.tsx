"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const seen = sessionStorage.getItem("nexora_preloader_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || prefersReducedMotion) {
      setLoading(false);
      return;
    }

    // Brief, polished intro
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1100);

    const finishTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("nexora_preloader_seen", "true");
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04060D] transition-opacity duration-500 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        {/* Soft atmospheric blue glow */}
        <div className="absolute w-44 h-44 rounded-full bg-[#1E6BFF]/25 blur-3xl -z-10 animate-pulse" />

        {/* NEXORA Ribbon Mark */}
        <div className="relative w-28 h-24 mb-6">
          <Image
            src="/assets/nexora-ribbon.png"
            alt="NEXORA Ribbon Mark"
            fill
            priority
            className="object-contain drop-shadow-[0_0_25px_rgba(0,200,255,0.6)]"
          />
        </div>

        {/* Brand name */}
        <div className="text-xl font-bold tracking-[0.25em] text-[#F5F7FF] uppercase">
          NEXORA
        </div>
        <div className="text-[11px] tracking-[0.3em] text-[#00C8FF] uppercase mt-1">
          Software Solutions
        </div>

        {/* Elegant glowing trace line */}
        <div className="w-36 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00C8FF] to-[#1E6BFF] animate-[marquee-scroll_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
