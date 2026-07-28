"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/types";

/**
 * Set to true for full-page RTL mirroring (flips header/nav order, section
 * alignment, everything) instead of the default block-level RTL used for
 * Farsi copy blocks only.
 */
export const FULL_RTL_MIRROR = false;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "fa" : "en"));
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
