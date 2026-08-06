"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";
import { withBasePath } from "@/lib/utils";

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
      <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
        <Image
          src={withBasePath("/images/about.webp")}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
