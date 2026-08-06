"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";
import { withBasePath } from "@/lib/utils";

export function PracticeAreasSection() {
  const { locale } = useLanguage();

  return (
    <section id="practice-areas" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-background px-6 py-20 md:px-16 md:py-28">
        <LocalizedBlock as="h2" className="font-display text-3xl md:text-4xl">
          {t(UI.practiceHeading, locale)}
        </LocalizedBlock>
        <LocalizedBlock className="mt-6 max-w-md text-muted-foreground">
          {t(UI.practiceBody, locale)}
        </LocalizedBlock>
        <Button
          variant="outline"
          size="lg"
          className="mt-8 w-fit rounded-full border-primary px-6 type-button text-primary hover:bg-primary/10"
        >
          {t(UI.practiceCta, locale)}
        </Button>
      </div>
      <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
        <Image
          src={withBasePath("/images/practice-areas.webp")}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
