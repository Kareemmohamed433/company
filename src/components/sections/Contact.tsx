"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";

interface FormState {
  fullName: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export function Contact() {
  const { t, isArabic } = useLanguage();

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const budgetOptionsEn = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $7,000",
    "$7,000+",
    "Undecided / Need Consultation",
  ];

  const budgetOptionsAr = [
    "أقل من ٢٠,٠٠٠ جنيه",
    "٢٠,٠٠٠ - ٥٠,٠٠٠ جنيه",
    "٥٠,٠٠٠ - ١٠٠,٠٠٠ جنيه",
    "+١٠٠,٠٠٠ جنيه",
    "غير محدد / نحتاج استشارة",
  ];

  const budgetOptions = isArabic ? budgetOptionsAr : budgetOptionsEn;

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = t.contact.form.errors.nameRequired;
    }

    if (!formData.phone.trim()) {
      errs.phone = t.contact.form.errors.phoneRequired;
    } else if (formData.phone.trim().length < 8) {
      errs.phone = t.contact.form.errors.phoneInvalid;
    }

    if (!formData.service) {
      errs.service = t.contact.form.errors.serviceRequired;
    }

    if (!formData.message.trim()) {
      errs.message = t.contact.form.errors.messageRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build formatted message
    const msg = isArabic
      ? `السلام عليكم فريق نيكسورا، أود بدء مشروع جديد:
• الاسم: ${formData.fullName.trim()}
• الهاتف: ${formData.phone.trim()}
• الخدمة المطلوبة: ${formData.service}
${formData.budget ? `• الميزانية التقديرية: ${formData.budget}` : ""}
• تفاصيل المشروع:
${formData.message.trim()}`
      : `Hello Nexora Team, I would like to start a project:
• Name: ${formData.fullName.trim()}
• Phone: ${formData.phone.trim()}
• Service: ${formData.service}
${formData.budget ? `• Budget: ${formData.budget}` : ""}
• Project Overview:
${formData.message.trim()}`;

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    setSubmitted(true);

    // Open WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Reset status after a few seconds while preserving data
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#070B16] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#1E6BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: WhatsApp Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-10 border border-[#1E6BFF]/25 shadow-xl text-start">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold text-[#F5F7FF] uppercase tracking-wider mb-2"
                    >
                      {t.contact.form.fullName} <span className="text-[#00C8FF]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder={t.contact.form.fullNamePlaceholder}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#04060D] border text-sm text-[#F5F7FF] placeholder-[#64748B] focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-[#1E6BFF]/25 focus:border-[#00C8FF]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-[#F5F7FF] uppercase tracking-wider mb-2"
                    >
                      {t.contact.form.phone} <span className="text-[#00C8FF]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder={t.contact.form.phonePlaceholder}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#04060D] border text-sm text-[#F5F7FF] placeholder-[#64748B] focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-[#1E6BFF]/25 focus:border-[#00C8FF]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold text-[#F5F7FF] uppercase tracking-wider mb-2"
                    >
                      {t.contact.form.service} <span className="text-[#00C8FF]">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: undefined });
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#04060D] border text-sm text-[#F5F7FF] focus:outline-none transition-colors ${
                        errors.service
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-[#1E6BFF]/25 focus:border-[#00C8FF]"
                      }`}
                    >
                      <option value="" className="bg-[#0B1222] text-[#64748B]">
                        {t.contact.form.serviceSelectPlaceholder}
                      </option>
                      {t.services.items.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#0B1222]">
                          {srv.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-bold text-[#F5F7FF] uppercase tracking-wider mb-2"
                    >
                      {t.contact.form.budget}{" "}
                      <span className="text-[#64748B] font-normal">
                        {t.contact.form.budgetOptional}
                      </span>
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#04060D] border border-[#1E6BFF]/25 text-sm text-[#F5F7FF] focus:outline-none focus:border-[#00C8FF] transition-colors"
                    >
                      <option value="" className="bg-[#0B1222] text-[#64748B]">
                        {t.contact.form.budgetPlaceholder}
                      </option>
                      {budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-[#0B1222]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#F5F7FF] uppercase tracking-wider mb-2"
                  >
                    {t.contact.form.message} <span className="text-[#00C8FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder={t.contact.form.messagePlaceholder}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#04060D] border text-sm text-[#F5F7FF] placeholder-[#64748B] focus:outline-none transition-colors ${
                      errors.message
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-[#1E6BFF]/25 focus:border-[#00C8FF]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#1E6BFF] to-[#00C8FF] hover:from-[#1557DB] hover:to-[#00B4E6] shadow-[0_0_25px_rgba(30,107,255,0.45)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#1E6BFF]/40"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.form.submitButton}</span>
                </button>

                {/* Notice text */}
                <p className="text-xs text-[#64748B] text-center leading-relaxed">
                  {t.contact.form.notice}
                </p>

                {/* Success feedback toast */}
                {submitted && (
                  <div className="p-4 rounded-xl bg-[#0B1222] border border-[#25D366]/40 text-[#25D366] text-xs sm:text-sm flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>{t.contact.form.successHint}</span>
                  </div>
                )}
              </form>
            </GlassCard>
          </div>

          {/* Right Column: Contact Channels & Business Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-start">
            {/* WhatsApp Direct Card */}
            <GlassCard className="p-6 border border-[#25D366]/30 bg-[#0B1222]/90">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F5F7FF] uppercase tracking-wider mb-1">
                    {t.contact.info.whatsappTitle}
                  </h3>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-[#25D366] hover:underline font-mono dir-ltr inline-block text-left"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#A3ADC2] mt-1">
                    {isArabic
                      ? "رد فوري ومباشر خلال دقائق طوال ساعات العمل"
                      : "Instant response during official working hours"}
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Direct Telephone Card */}
            <GlassCard className="p-6 border border-[#1E6BFF]/25">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1E6BFF]/15 border border-[#1E6BFF]/30 flex items-center justify-center text-[#00C8FF] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F5F7FF] uppercase tracking-wider mb-1">
                    {t.contact.info.phoneTitle}
                  </h3>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-base font-bold text-[#F5F7FF] hover:text-[#00C8FF] transition-colors font-mono dir-ltr inline-block text-left"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Email & Hours */}
            <GlassCard className="p-6 border border-[#1E6BFF]/25 space-y-4">
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#A3ADC2]">
                <Mail className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#F5F7FF] block">
                    {t.contact.info.emailTitle}
                  </span>
                  <span className="font-mono text-xs">{siteConfig.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#A3ADC2] pt-3 border-t border-[#1E6BFF]/15">
                <Clock className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#F5F7FF] block">
                    {t.contact.info.hoursTitle}
                  </span>
                  <span>{isArabic ? siteConfig.workingHoursAr : siteConfig.workingHoursEn}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#A3ADC2] pt-3 border-t border-[#1E6BFF]/15">
                <MapPin className="w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#F5F7FF] block">
                    {t.contact.info.locationTitle}
                  </span>
                  <span>{isArabic ? siteConfig.addressAr : siteConfig.addressEn}</span>
                </div>
              </div>
            </GlassCard>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-[#0B1222]/80 border border-[#1E6BFF]/20">
              <h4 className="text-xs font-bold text-[#A3ADC2] uppercase tracking-wider mb-4">
                {t.contact.info.socialTitle}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-[#04060D] border border-[#1E6BFF]/30 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-[#04060D] border border-[#1E6BFF]/30 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#04060D] border border-[#1E6BFF]/30 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-[#04060D] border border-[#1E6BFF]/30 flex items-center justify-center text-[#A3ADC2] hover:text-[#00C8FF] hover:border-[#00C8FF] transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
