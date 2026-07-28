"use client";

import { useState } from "react";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";

const CULTURE_VIDEO_SRC = "/videos/culture-placeholder.mp4";

export function CultureVideoSection() {
  const { locale } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_oklch(0.22_0.02_260),_oklch(0.15_0.01_260)_60%,_oklch(0.2_0.05_200/0.4))]" />

      {!videoFailed && (
        <video
          className="absolute inset-0 size-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src={CULTURE_VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      <div className="relative z-10 text-center">
        <LocalizedBlock className="!text-center type-eyebrow text-primary">
          {t(UI.cultureEyebrow, locale)}
        </LocalizedBlock>
        <LocalizedBlock as="h2" className="!text-center mt-3 font-display text-3xl md:text-4xl">
          {t(UI.cultureHeading, locale)}
        </LocalizedBlock>
      </div>
    </section>
  );
}
