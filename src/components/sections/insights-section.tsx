"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";
import { ARTICLES } from "@/lib/content";

function formatDate(iso: string, locale: "en" | "fa") {
  const date = new Date(iso);
  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-CA", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function InsightsSection() {
  const { locale } = useLanguage();

  return (
    <section id="insights" className="section-y bg-band-warm text-band-warm-foreground">
      <div className="container-pars">
        <LocalizedBlock as="h2" className="font-display text-3xl md:text-4xl">
          {t(UI.insightsHeading, locale)}
        </LocalizedBlock>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          {ARTICLES.map((article) => (
            <LocalizedBlock key={article.id} as="article" className="group">
              <div className="flex items-center justify-between type-eyebrow text-band-warm-foreground/70">
                <span>
                  {formatDate(article.date, locale)} | {t(article.category, locale)}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug md:text-2xl">
                {t(article.title, locale)}
              </h3>
              <div className="mt-4 border-t border-band-warm-foreground/20" />
              <p className="mt-4 text-band-warm-foreground/80">{t(article.excerpt, locale)}</p>
              <a
                href={article.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform group-hover:translate-x-1"
              >
                {t(UI.readMore, locale)}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
            </LocalizedBlock>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-6">
          <Button variant="secondary" size="lg" className="rounded-full px-6 type-button">
            {t(UI.insightsMoreNews, locale)}
          </Button>
          <Button variant="secondary" size="lg" className="rounded-full px-6 type-button">
            {t(UI.insightsMoreArticles, locale)}
          </Button>
        </div>
      </div>
    </section>
  );
}
