import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { content, t } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 48 48" className="h-8 w-8 shrink-0" aria-hidden="true">
        <path d="M5 13.5 17 8v32H5z" fill="var(--brass)" />
        <path d="M21 5.5 37 13v27H21z" fill="var(--brass)" />
      </svg>
      <span
        className={cn(
          "font-display text-[1.05rem] tracking-[0.02em] whitespace-nowrap",
          tone === "light" ? "text-ivory" : "text-teal",
        )}
      >
        MH Group LLC
      </span>
    </span>
  );
}

export function Header() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-brass/20 bg-teal/95 backdrop-blur-[2px]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-[76px] items-center justify-between gap-6 lg:h-[82px]">
        <Link to="/" className="shrink-0" aria-label="MH Group LLC — Home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {content.nav.map((item) => {
              const active = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "relative block py-2 text-[0.72rem] font-semibold tracking-[0.16em] whitespace-nowrap uppercase transition-colors duration-300",
                      active ? "text-brass" : "text-ivory/85 hover:text-brass",
                    )}
                  >
                    {t(item, lang)}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-brass transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch lang={lang} setLang={setLang} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center text-ivory lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-brass/15 bg-teal lg:hidden"
      >
        <nav aria-label="Mobile" className="shell py-6">
          <ul className="flex flex-col">
            {content.nav.map((item) => (
              <li key={item.to} className="border-b border-ivory/10 last:border-b-0">
                <Link
                  to={item.to}
                  className={cn(
                    "block py-4 text-sm font-semibold tracking-[0.16em] uppercase",
                    pathname === item.to ? "text-brass" : "text-ivory",
                  )}
                >
                  {t(item, lang)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-6">
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function LanguageSwitch({
  lang,
  setLang,
}: {
  lang: "en" | "zh-TW";
  setLang: (l: "en" | "zh-TW") => void;
}) {
  return (
    <div className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.14em] uppercase">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "py-1 transition-colors duration-300",
          lang === "en" ? "text-brass" : "text-ivory/70 hover:text-brass",
        )}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-ivory/30">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("zh-TW")}
        aria-pressed={lang === "zh-TW"}
        lang="zh-TW"
        className={cn(
          "py-1 transition-colors duration-300",
          lang === "zh-TW" ? "text-brass" : "text-ivory/70 hover:text-brass",
        )}
      >
        中文
      </button>
    </div>
  );
}
