"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Industries } from "@/components/sections/Industries";
import { WhyNexora } from "@/components/sections/WhyNexora";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <LanguageProvider>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <TechMarquee />
        <Services />
        <FeaturedWork />
        <Industries />
        <WhyNexora />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
