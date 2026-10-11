"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { Menu, X, Globe, ArrowUpRight, MessageCircle } from "lucide-react";

export function Navbar() {
  const { t, language, toggleLanguage, isArabic } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ["hero", "services", "work", "industries", "process", "pricing", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#hero", id: "hero" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.work, href: "#work", id: "work" },
    { name: t.nav.process, href: "#process", id: "process" },
    { name: t.nav.pricing, href: "#pricing", id: "pricing" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070B16]/85 backdrop-blur-md border-b border-[#1E6BFF]/20 shadow-[0_10px_30px_rgba(4,6,13,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00C8FF] rounded-lg p-1"
          >
            <div className="relative w-9 h-8 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/nexora-ribbon.png"
                alt="NEXORA Ribbon Logo"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(0,200,255,0.5)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-[#F5F7FF] uppercase">
                NEXORA
              </span>
              <span className="text-[9px] tracking-widest text-[#00C8FF] font-medium uppercase -mt-1">
                {isArabic ? "حلول البرمجيات" : "Software Solutions"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0B1222]/80 border border-[#1E6BFF]/25 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#00C8FF] ${
                    isActive
                      ? "bg-[#1E6BFF] text-white shadow-[0_0_15px_rgba(30,107,255,0.5)]"
                      : "text-[#A3ADC2] hover:text-[#F5F7FF] hover:bg-[#1E6BFF]/15"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Area: Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === "ar" ? "English" : "العربية"}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#A3ADC2] hover:text-[#F5F7FF] bg-[#0B1222]/80 border border-[#1E6BFF]/25 hover:border-[#00C8FF]/50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
            >
              <Globe className="w-3.5 h-3.5 text-[#00C8FF]" />
              <span>{t.nav.languageToggle}</span>
            </button>

            {/* Primary CTA Button */}
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs lg:text-sm font-bold text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] hover:from-[#1557DB] hover:to-[#00B4E6] shadow-[0_0_20px_rgba(30,107,255,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? "rotate-270" : ""}`} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="p-2 rounded-lg bg-[#0B1222] border border-[#1E6BFF]/30 text-xs text-[#00C8FF] font-bold"
            >
              {language === "ar" ? "EN" : "عربي"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg bg-[#0B1222] border border-[#1E6BFF]/30 text-[#F5F7FF] hover:text-[#00C8FF] focus:outline-none focus:ring-2 focus:ring-[#00C8FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B16]/98 border-b border-[#1E6BFF]/25 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-[#F5F7FF] hover:bg-[#1E6BFF]/20 hover:text-[#00C8FF] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#1E6BFF]/20 flex flex-col gap-3">
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.nav.ctaButton}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
