"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const codeLines = [
  { text: "// Transforming ideas into digital impact", type: "comment" },
  { text: "import { NexoraCore, AI, Automation } from '@nexora/solutions';", type: "import" },
  { text: "", type: "empty" },
  { text: "interface ProjectPipeline {", type: "keyword" },
  { text: "  clientVision: 'Modern Website' | 'AI Integration';", type: "type" },
  { text: "  performance: 'Ultra-Fast' | 'Production-Ready';", type: "type" },
  { text: "  impact: 'Measurable Growth';", type: "type" },
  { text: "}", type: "keyword" },
  { text: "", type: "empty" },
  { text: "export async function buildFuture(idea: ProjectPipeline) {", type: "function" },
  { text: "  const architecture = await NexoraCore.engineer({", type: "statement" },
  { text: "    responsive: true,", type: "prop" },
  { text: "    intelligentWorkflows: AI.orchestrate(),", type: "prop" },
  { text: "    conversionOptimized: true,", type: "prop" },
  { text: "  });", type: "statement" },
  { text: "  return architecture.deploy({ impact: 'Guaranteed' });", type: "return" },
  { text: "}", type: "keyword" },
];

export function CodeEditorVisual() {
  const { isArabic } = useLanguage();
  const [displayedLines, setDisplayedLines] = useState<number>(codeLines.length);

  useEffect(() => {
    // If reduced motion is preferred, show all lines immediately
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayedLines(codeLines.length);
      return;
    }

    // Gentle typing reveal animation loop
    let current = 1;
    const interval = setInterval(() => {
      setDisplayedLines(current);
      current++;
      if (current > codeLines.length) {
        clearInterval(interval);
      }
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      dir="ltr"
      className="relative rounded-2xl overflow-hidden bg-[#070B16] border border-[#1E6BFF]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] font-mono text-xs sm:text-sm"
    >
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0B1222] border-b border-[#1E6BFF]/20 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          <span className="ml-3 text-[#A3ADC2] text-xs font-medium">nexora-engine.ts</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
          <span className="text-[11px] text-[#00C8FF] tracking-wider uppercase">
            {isArabic ? "جاهز للإنتاج • بدون أخطاء" : "TypeScript v5.6 • Clean"}
          </span>
        </div>
      </div>

      {/* Editor Code Body */}
      <div className="p-4 sm:p-6 overflow-x-auto text-left leading-relaxed">
        {codeLines.slice(0, displayedLines).map((line, idx) => {
          let color = "text-[#F5F7FF]";
          if (line.type === "comment") color = "text-[#64748B] italic";
          else if (line.type === "import" || line.type === "return") color = "text-[#00C8FF]";
          else if (line.type === "keyword") color = "text-[#818CF8]";
          else if (line.type === "function") color = "text-[#38BDF8] font-semibold";
          else if (line.type === "prop") color = "text-[#93C5FD]";
          else if (line.type === "type") color = "text-[#FCD34D]";

          return (
            <div key={idx} className="flex gap-4">
              <span className="select-none text-[#334155] w-6 text-right shrink-0">
                {idx + 1}
              </span>
              <span className={`${color} whitespace-pre`}>
                {line.text}
                {idx === displayedLines - 1 && (
                  <span className="inline-block w-1.5 h-4 ml-1 bg-[#00C8FF] animate-pulse align-middle" />
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* Status Bar */}
      <div className="px-4 py-1.5 bg-[#04060D] border-t border-[#1E6BFF]/15 flex items-center justify-between text-[11px] text-[#64748B] select-none">
        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-2 text-[#00C8FF]">
          <span>Build: passing</span>
          <span>100% Core Web Vitals</span>
        </div>
      </div>
    </div>
  );
}
