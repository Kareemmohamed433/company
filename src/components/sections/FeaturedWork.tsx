"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/config/projects";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ArrowUpRight, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";

export function FeaturedWork() {
  const { t, isArabic } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: t.projects.filterAll },
    { id: "tourism", label: t.projects.categories.tourism },
    { id: "restaurants", label: t.projects.categories.restaurants },
    { id: "fashion", label: t.projects.categories.fashion },
    { id: "natural", label: t.projects.categories.natural },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-[#070B16] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#1E6BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C8FF] ${
                  isActive
                    ? "bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] text-white shadow-[0_0_20px_rgba(30,107,255,0.4)] scale-105"
                    : "bg-[#0B1222]/80 text-[#A3ADC2] hover:text-[#F5F7FF] border border-[#1E6BFF]/25 hover:border-[#00C8FF]/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-[#1E6BFF]/25 hover:border-[#00C8FF]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(30,107,255,0.35)] cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#04060D]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-transparent to-transparent opacity-70" />

                  {/* Brand badge or concept status */}
                  <div
                    className={`absolute top-4 ${
                      isArabic ? "left-4" : "right-4"
                    } flex items-center gap-2`}
                  >
                    {project.brandLogo ? (
                      <div className="relative w-12 h-9 bg-black/60 backdrop-blur-md rounded-lg p-1 border border-white/20">
                        <Image
                          src={project.brandLogo}
                          alt="Brand Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] bg-black/60 backdrop-blur-md border border-white/15 text-[#A3ADC2]">
                        {t.projects.modalLabels.statusConcept.split(" ")[0]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-start">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#00C8FF] uppercase tracking-wider">
                      {isArabic ? project.categoryLabelAr : project.categoryLabelEn}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FF] group-hover:text-[#00C8FF] transition-colors mb-2">
                    {isArabic ? project.titleAr : project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A3ADC2] line-clamp-2 leading-relaxed mb-4">
                    {isArabic ? project.descriptionAr : project.descriptionEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#04060D] border border-[#1E6BFF]/20 text-[#93C5FD]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bottom Bar */}
              <div className="px-6 py-4 bg-[#0B1222]/60 border-t border-[#1E6BFF]/15 flex items-center justify-between text-xs font-semibold text-[#00C8FF] group-hover:text-white transition-colors">
                <span>{t.projects.viewCaseStudy}</span>
                <div className="w-7 h-7 rounded-full bg-[#1E6BFF]/20 group-hover:bg-[#1E6BFF] flex items-center justify-center transition-colors">
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? "rotate-270" : ""}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
