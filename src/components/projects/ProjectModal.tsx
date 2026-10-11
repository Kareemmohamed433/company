"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/config/projects";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/config/site";
import { X, ArrowUpRight, MessageCircle, Layers, CheckCircle2, AlertCircle } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, isArabic } = useLanguage();

  // Escape key support & scroll locking
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const waMessage = isArabic ? project.whatsappMessageAr : project.whatsappMessageEn;
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#070B16] border border-[#1E6BFF]/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.projects.modalLabels.close}
          className={`absolute top-6 ${
            isArabic ? "left-6" : "right-6"
          } p-2 rounded-full bg-[#0B1222] border border-[#1E6BFF]/30 text-[#A3ADC2] hover:text-white hover:border-[#00C8FF] transition-all z-20 focus:outline-none focus:ring-2 focus:ring-[#00C8FF]`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#1E6BFF]/15 border border-[#1E6BFF]/30 text-[#00C8FF]">
            {isArabic ? project.categoryLabelAr : project.categoryLabelEn}
          </span>

          {project.isConcept ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#0B1222] text-[#A3ADC2] border border-slate-700">
              <AlertCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{t.projects.modalLabels.statusConcept}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#65A30D]/15 text-[#84CC16] border border-[#65A30D]/30 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>{t.projects.modalLabels.statusLive}</span>
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="flex items-center gap-4 mb-4">
          {project.brandLogo && (
            <div className="relative w-16 h-12 bg-white/5 rounded-xl p-1 shrink-0 border border-white/10">
              <Image
                src={project.brandLogo}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FF]">
              {isArabic ? project.titleAr : project.title}
            </h2>
            <p className="text-sm text-[#00C8FF] font-medium mt-1">
              {isArabic ? project.taglineAr : project.taglineEn}
            </p>
          </div>
        </div>

        {/* Showcase Image Banner */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden my-6 border border-[#1E6BFF]/25 shadow-lg bg-[#04060D]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overview & Challenge / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-5 rounded-2xl bg-[#0B1222]/80 border border-[#1E6BFF]/20">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#00C8FF] mb-2">
              {t.projects.modalLabels.theChallenge}
            </h3>
            <p className="text-xs sm:text-sm text-[#A3ADC2] leading-relaxed">
              {isArabic ? project.challengeAr : project.challengeEn}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B1222]/80 border border-[#1E6BFF]/20">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#00C8FF] mb-2">
              {t.projects.modalLabels.ourSolution}
            </h3>
            <p className="text-xs sm:text-sm text-[#A3ADC2] leading-relaxed">
              {isArabic ? project.solutionAr : project.solutionEn}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-[#F5F7FF] mb-4">
            {t.projects.modalLabels.coreFeatures}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(isArabic ? project.featuresAr : project.featuresEn).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-10 pt-4 border-t border-[#1E6BFF]/20">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-[#A3ADC2] mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00C8FF]" />
            <span>{t.projects.modalLabels.technologies}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-[#04060D] border border-[#1E6BFF]/25 text-[#93C5FD]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Action: Build Something Similar CTA */}
        <div className="pt-6 border-t border-[#1E6BFF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A3ADC2]">
            {isArabic
              ? "هل لديك فكرة أو متطلب مشابه؟ يمكننا تخصيص الحل بالكامل لمشروعك."
              : "Have a similar vision? We build bespoke systems tailored to your business."}
          </div>

          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] hover:from-[#1557DB] hover:to-[#00B4E6] shadow-[0_0_20px_rgba(30,107,255,0.4)] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.projects.buildSimilarCta}</span>
            <ArrowUpRight className={`w-4 h-4 ${isArabic ? "rotate-270" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
