"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";

export function CareersSection() {
  const { locale } = useLanguage();

  return (
    <section id="careers" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative order-2 min-h-[420px] overflow-hidden lg:order-1 lg:min-h-full">
        <Image
          src="/images/careers.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="order-1 flex flex-col justify-center bg-secondary/40 px-6 py-20 md:px-16 md:py-28 lg:order-2">
        <LocalizedBlock className="type-eyebrow text-primary">{t(UI.careersEyebrow, locale)}</LocalizedBlock>
        <LocalizedBlock as="h2" className="mt-3 font-display text-3xl md:text-4xl">
          {t(UI.careersHeading, locale)}
        </LocalizedBlock>
        <LocalizedBlock className="mt-6 max-w-md text-muted-foreground">
          {t(UI.careersBody, locale)}
        </LocalizedBlock>
        <a
          href="#careers"
          className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
        >
          {t(UI.careersLink, locale)}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
        </a>
      </div>
    </section>
  );
}
