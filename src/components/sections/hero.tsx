"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";

/**
 * Swap this for the generated AI video, then flip `hasVideo` to true (or
 * just let the <video> element load — the gradient placeholder only shows
 * while the video is absent/loading/erroring).
 */
const HERO_VIDEO_SRC = "/videos/hero-placeholder.mp4";

export function Hero() {
  const { locale } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.24_0.02_260)_0%,_oklch(0.14_0.01_260)_60%)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(120deg,_oklch(0.72_0.09_80/0.25),_transparent_40%,_oklch(0.55_0.08_200/0.2))]" />

      {!videoFailed && (
        <video
          className="absolute inset-0 size-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-background/30" />

      <div className="container-pars relative z-10 flex flex-col items-center gap-8 pt-20 text-center">
        <LocalizedBlock as="h1" className="!text-center font-display type-display text-foreground">
          {t(UI.heroHeadline, locale)}
        </LocalizedBlock>
        <LocalizedBlock className="!text-center max-w-2xl text-lg text-muted-foreground md:text-xl">
          {t(UI.heroSubhead, locale)}
        </LocalizedBlock>
        <Button
          variant="default"
          size="lg"
          className="rounded-full px-8 py-6 type-button"
          render={<a href="#footer" />}
        >
          {t(UI.heroCta, locale)}
        </Button>
      </div>
    </section>
  );
}
