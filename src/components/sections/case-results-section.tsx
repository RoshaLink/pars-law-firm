"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LocalizedBlock } from "@/components/localized-block";
import { PlaceholderPhoto } from "@/components/placeholder-media";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";
import { CASE_RESULTS } from "@/lib/content";
import { withBasePath } from "@/lib/utils";

export function CaseResultsSection() {
  const { locale } = useLanguage();

  return (
    <section id="case-results" className="section-y bg-background">
      <div className="container-pars">
        <LocalizedBlock as="h2" className="font-display text-3xl md:text-4xl">
          {t(UI.caseResultsHeading, locale)}
        </LocalizedBlock>
        <LocalizedBlock className="mt-3 text-sm text-muted-foreground">
          {t(UI.caseResultsSub, locale)}
        </LocalizedBlock>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {CASE_RESULTS.map((item) => (
            <div key={item.id} className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden">
              {item.image ? (
                <Image
                  src={withBasePath(item.image)}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <PlaceholderPhoto tone="warm" className="absolute inset-0" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <LocalizedBlock className="relative z-10 p-6">
                <span className="type-eyebrow text-primary">{t(item.practiceArea, locale)}</span>
                <h3 className="mt-2 text-2xl font-semibold">{t(item.title, locale)}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t(item.summary, locale)}</p>
                <Button
                  variant="default"
                  size="sm"
                  className="mt-5 rounded-full px-5 type-button"
                >
                  {t(UI.caseResultsCta, locale)}
                </Button>
              </LocalizedBlock>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
