"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";
import { NAV_GROUPS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const { locale, setLocale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-pars flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Pars home">
          <Image src="/images/logo-mark.webp" alt="Pars" width={48} height={48} className="size-11" priority />
        </a>

        <div className="flex items-center gap-3 md:gap-5">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-5 type-button hidden sm:inline-flex"
            render={<a href="#footer" />}
          >
            {t(UI.contactCta, locale)}
          </Button>

          <div className="flex items-center gap-2 text-sm font-medium">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "px-1 underline-offset-4 transition-colors",
                locale === "en" ? "text-primary underline" : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              type="button"
              onClick={() => setLocale("fa")}
              className={cn(
                "font-farsi px-1 underline-offset-4 transition-colors",
                locale === "fa" ? "text-primary underline" : "text-muted-foreground hover:text-foreground"
              )}
            >
              فارسی
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t(UI.menuOpen, locale)}
            className="flex size-10 items-center justify-center text-foreground transition-colors hover:text-primary"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-300",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="container-pars flex h-20 items-center justify-end">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label={t(UI.menuClose, locale)}
            className="flex items-center gap-2 text-sm font-medium tracking-wide text-foreground hover:text-primary"
          >
            {t(UI.menuClose, locale)}
            <X className="size-5" />
          </button>
        </div>

        <nav className="container-pars mt-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {NAV_GROUPS.map((group) => (
              <LocalizedBlock key={group.label.en}>
                <a
                  href={group.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-primary"
                >
                  {t(group.label, locale)}
                </a>
                {group.children && (
                  <ul className="mt-4 space-y-3">
                    {group.children.map((link) => (
                      <li key={link.label.en}>
                        <a
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {t(link.label, locale)}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </LocalizedBlock>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
