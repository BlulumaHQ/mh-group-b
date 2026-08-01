import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/content/site";

const STORAGE_KEY = "mhgroup-language";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Chinese site is disabled — the app is English-only for now.
  const [lang] = useState<Lang>("en");

  useEffect(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((_next: Lang) => {}, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
