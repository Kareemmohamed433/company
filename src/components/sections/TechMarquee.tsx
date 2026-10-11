"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Code, Cpu, Database, Flame, Layers, Sparkles, Workflow, Zap, Box } from "lucide-react";

const techStack = [
  { name: "Next.js 16", desc: "App Router & SSR", icon: Zap },
  { name: "React 19", desc: "Interactive UI", icon: Code },
  { name: "TypeScript", desc: "Type Safety", icon: Layers },
  { name: "Tailwind CSS", desc: "Responsive Design", icon: Box },
  { name: "Python", desc: "Data & AI Engines", icon: Cpu },
  { name: "Node.js", desc: "Fast Backends", icon: Database },
  { name: "OpenAI", desc: "LLM & Automation", icon: Sparkles },
  { name: "n8n", desc: "Workflow Integration", icon: Workflow },
  { name: "Firebase", desc: "Realtime Data", icon: Flame },
];

export function TechMarquee() {
  const { t } = useLanguage();

  return (
    <section className="relative py-10 bg-[#070B16] border-y border-[#1E6BFF]/15 overflow-hidden">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070B16] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070B16] to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-6">
        <span className="text-xs uppercase tracking-widest text-[#A3ADC2] font-medium">
          {t.marquee.label}
        </span>
      </div>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-6">
          {/* First set */}
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`tech-1-${idx}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0B1222]/80 border border-[#1E6BFF]/20 hover:border-[#00C8FF]/50 transition-colors shadow-sm shrink-0"
              >
                <div className="w-7 h-7 rounded-lg bg-[#1E6BFF]/15 flex items-center justify-center text-[#00C8FF]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <div className="text-sm font-bold text-[#F5F7FF] font-mono">{tech.name}</div>
                  <div className="text-[10px] text-[#A3ADC2]">{tech.desc}</div>
                </div>
              </div>
            );
          })}

          {/* Duplicate set for infinite seamless loop */}
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`tech-2-${idx}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#0B1222]/80 border border-[#1E6BFF]/20 hover:border-[#00C8FF]/50 transition-colors shadow-sm shrink-0"
              >
                <div className="w-7 h-7 rounded-lg bg-[#1E6BFF]/15 flex items-center justify-center text-[#00C8FF]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <div className="text-sm font-bold text-[#F5F7FF] font-mono">{tech.name}</div>
                  <div className="text-[10px] text-[#A3ADC2]">{tech.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
