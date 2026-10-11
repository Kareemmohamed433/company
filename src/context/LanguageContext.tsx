"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "@/config/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  dir: "rtl" | "ltr";
  t: Translations;
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Arabic as requested by user prompt
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    // Check saved preference if present
    const saved = localStorage.getItem("nexora_lang") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    // Update document element attributes
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem("nexora_lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const isArabic = language === "ar";
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        dir,
        t,
        isArabic,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
