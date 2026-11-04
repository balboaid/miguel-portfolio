import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations } from "../i18n";

export type Language = "en" | "pt";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguage(): Language {
  try {
    const stored = localStorage.getItem("mfn-lang");
    if (stored === "en" || stored === "pt") return stored;
    const nav = navigator.language || "en";
    if (nav.toLowerCase().startsWith("pt")) return "pt";
    return "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  useEffect(() => {
    try {
      localStorage.setItem("mfn-lang", lang);
    } catch {}
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
