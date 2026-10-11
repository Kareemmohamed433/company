export interface SiteConfig {
  name: string;
  descriptorEn: string;
  descriptorAr: string;
  taglineEn: string;
  taglineAr: string;
  statementEn: string;
  statementAr: string;
  phoneDisplay: string;
  phoneRaw: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  addressEn: string;
  addressAr: string;
  workingHoursEn: string;
  workingHoursAr: string;
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
    github: string;
  };
  colors: {
    primaryBg: string;
    secondaryBg: string;
    elevatedSurface: string;
    electricBlue: string;
    cyanAccent: string;
    primaryText: string;
    secondaryText: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "NEXORA",
  descriptorEn: "Software Solutions",
  descriptorAr: "حلول البرمجيات والأنظمة الذكية",
  taglineEn: "Ideas → Code → Impact",
  taglineAr: "من الفكرة إلى الكود، ومن الكود إلى التأثير.",
  statementEn:
    "We build modern websites, AI solutions, and smart automation systems that help businesses grow.",
  statementAr:
    "بنحوّل أفكارك لحلول رقمية تساعد مشروعك يكبر، وتوصل لعملاء أكتر، وتنجز شغلك بكفاءة.",
  phoneDisplay: "+20 155 644 1133",
  phoneRaw: "01556441133",
  phoneHref: "tel:+201556441133",
  whatsappNumber: "201556441133",
  whatsappUrl:
    "https://wa.me/201556441133?text=Hello%20Nexora%2C%20I%20want%20to%20start%20a%20project",
  email: "contact@nexorasolutions.com",
  addressEn: "Cairo, Egypt",
  addressAr: "القاهرة، مصر",
  workingHoursEn: "Sun - Thu: 9:00 AM - 6:00 PM (GMT+2)",
  workingHoursAr: "الأحد - الخميس: ٩:٠٠ ص - ٦:٠٠ م (توقيت القاهرة)",
  socials: {
    instagram: "https://instagram.com/nexora.solutions", // Editable placeholder
    facebook: "https://facebook.com/nexora.solutions", // Editable placeholder
    linkedin: "https://linkedin.com/company/nexora-solutions", // Editable placeholder
    github: "https://github.com/nexora-tech", // Editable placeholder
  },
  colors: {
    primaryBg: "#04060D",
    secondaryBg: "#070B16",
    elevatedSurface: "#0B1222",
    electricBlue: "#1E6BFF",
    cyanAccent: "#00C8FF",
    primaryText: "#F5F7FF",
    secondaryText: "#A3ADC2",
  },
};

export function getWhatsAppUrl(customMessage: string): string {
  const encoded = encodeURIComponent(customMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
