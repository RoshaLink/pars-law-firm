"use client";

import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface LocalizedBlockProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Applies RTL direction + right alignment to a block when Farsi is active.
 * This is the "block-level RTL" default described in DESIGN_TOKENS.md —
 * only this block flips, not the page shell around it.
 */
export function LocalizedBlock({
  as: Tag = "div",
  className,
  children,
}: LocalizedBlockProps) {
  const { locale } = useLanguage();
  const isFa = locale === "fa";

  return (
    <Tag
      dir={isFa ? "rtl" : "ltr"}
      className={cn(isFa ? "text-right font-farsi" : "text-left", className)}
    >
      {children}
    </Tag>
  );
}
