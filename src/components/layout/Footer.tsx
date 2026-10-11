"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const { t, isArabic } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.work, href: "#work" },
    { name: t.nav.industries, href: "#industries" },
    { name: t.nav.process, href: "#process" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.faq, href: "#faq" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#04060D] border-t border-[#1E6BFF]/20 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#1E6BFF]/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1E6BFF]/15">
          {/* Brand info (2 columns) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="#hero" className="flex items-center gap-3 group mb-4">
              <div className="relative w-10 h-9">
                <Image
                  src="/assets/nexora-ribbon.png"
                  alt="NEXORA Ribbon Mark"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(0,200,255,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-[#F5F7FF] uppercase">
                  NEXORA
                </span>
                <span className="text-[10px] tracking-widest text-[#00C8FF] uppercase font-semibold">
                  {isArabic ? "حلول البرمجيات" : "Software Solutions"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A3ADC2] leading-relaxed max-w-sm mb-6">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-3">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#0B1222] border border-[#1E6BFF]/25 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF]/50 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#0B1222] border border-[#1E6BFF]/25 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF]/50 transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#0B1222] border border-[#1E6BFF]/25 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF]/50 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full bg-[#0B1222] border border-[#1E6BFF]/25 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF]/50 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[#F5F7FF] uppercase tracking-wider mb-4">
              {t.footer.navigationTitle}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#A3ADC2] hover:text-[#00C8FF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-bold text-[#F5F7FF] uppercase tracking-wider mb-4">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {t.services.items.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href="#services"
                    className="text-[#A3ADC2] hover:text-[#00C8FF] transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-[#F5F7FF] uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A3ADC2]">
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors dir-ltr font-mono text-left"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00C8FF] shrink-0" />
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-[#00C8FF] transition-colors dir-ltr font-mono text-left"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1E6BFF] shrink-0" />
                <span className="font-mono text-xs text-[#A3ADC2]">
                  {siteConfig.email}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#A3ADC2] shrink-0" />
                <span>{isArabic ? siteConfig.addressAr : siteConfig.addressEn}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>{t.footer.rights}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#A3ADC2] hover:text-[#00C8FF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#00C8FF] rounded px-2 py-1"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
