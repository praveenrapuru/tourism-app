import { createContext, useContext } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    skipToContent: "SKIP TO MAIN CONTENT",
    screenReader: "SCREEN READER",
    english: "English",
    search: "SEARCH",
    discover: "DISCOVER",
    experience: "EXPERIENCE",
    plan: "PLAN",
    aboutUs: "ABOUT US",
    stay: "STAY",
    eTicketing: "E-TICKETING",
    rajasthan: "Rajasthan",
    tagline: "The Incredible State of India !",
    udaipur: "UDAIPUR",
    monsoonPalace: "MONSOON PALACE",
    places: "Popular Tourist Places",
  }
};

export function LanguageProvider({ children }) {
  const lang = "en";

  function t(key) {
    return translations[lang][key] || key;
  }

  return (
    <LanguageContext.Provider value={{ language: lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
