import type { Metadata, Viewport } from "next";
import { Cairo, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#04060D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora-solutions.vercel.app"),
  title: {
    default: "NEXORA | تطوير المواقع والذكاء الاصطناعي والأتمتة",
    template: "%s | NEXORA Software Solutions",
  },
  description:
    "طوّر حضور مشروعك الرقمي مع Nexora من خلال المواقع العصرية وحلول الذكاء الاصطناعي والأتمتة الذكية. We build modern websites, AI solutions, and smart automation systems that help businesses grow.",
  keywords: [
    "NEXORA",
    "Software Solutions",
    "تطوير مواقع",
    "برمجة مواقع في مصر",
    "حلول الذكاء الاصطناعي",
    "أتمتة العمليات",
    "Web Development Egypt",
    "AI Automation",
    "Next.js agency",
  ],
  authors: [{ name: "NEXORA Software Solutions" }],
  creator: "NEXORA",
  publisher: "NEXORA Software Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/assets/nexora-icon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/assets/nexora-icon.png" }],
  },
  openGraph: {
    title: "NEXORA — Software Solutions | Ideas → Code → Impact",
    description:
      "We build modern websites, AI solutions, and smart automation systems that help businesses grow. من الفكرة إلى الكود، ومن الكود إلى التأثير.",
    url: "https://nexora-solutions.vercel.app",
    siteName: "NEXORA",
    images: [
      {
        url: "/assets/nexora-banner.png",
        width: 1024,
        height: 381,
        alt: "NEXORA Software Solutions",
      },
    ],
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA — Software Solutions",
    description:
      "We build modern websites, AI solutions, and smart automation systems that help businesses grow.",
    images: ["/assets/nexora-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#04060D] text-[#F5F7FF] selection:bg-[#1E6BFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
