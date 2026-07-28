"use client";

import { ArrowRight, Landmark } from "lucide-react";
import { LocalizedBlock } from "@/components/localized-block";
import { PlaceholderPhoto } from "@/components/placeholder-media";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";

export function AboutSection() {
  const { locale } = useLanguage();

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-background px-6 py-20 md:px-16 md:py-28">
        <LocalizedBlock className="type-eyebrow text-primary">{t(UI.aboutEyebrow, locale)}</LocalizedBlock>
        <a href="#footer" className="group mt-3 inline-flex w-fit items-center gap-3">
          <LocalizedBlock as="h2" className="font-display text-3xl md:text-4xl">
            {t(UI.aboutHeading, locale)}
          </LocalizedBlock>
          <ArrowRight className="size-6 shrink-0 text-primary transition-transform group-hover:translate-x-1 rtl:rotate-180" />
        </a>
      </div>
      <PlaceholderPhoto icon={Landmark} className="min-h-[420px] lg:min-h-full" />
    </section>
  );
}
