"use client";

import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";
import { OFFICE } from "@/lib/content";

const SOCIAL_LINKS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer id="footer" className="bg-band-terracotta text-band-terracotta-foreground">
      <div className="container-pars border-b border-band-terracotta-foreground/20 py-14">
        <h2 className="type-eyebrow text-band-terracotta-foreground">{t(OFFICE.city, locale)}</h2>
        <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3 sm:gap-8">
          <p>
            <a href={`tel:${OFFICE.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
              {OFFICE.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${OFFICE.email}`} className="hover:underline">
              {OFFICE.email}
            </a>
          </p>
          <address className="not-italic text-band-terracotta-foreground/75">
            {OFFICE.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className="container-pars grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
        <div className="flex flex-col gap-6">
          <Image src="/images/logo-full.webp" alt="Pars Law Firm" width={116} height={134} className="h-16 w-auto self-start" />
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-band-terracotta-foreground/30 text-band-terracotta-foreground transition-colors hover:border-band-terracotta-foreground hover:bg-band-terracotta-foreground/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="type-eyebrow text-band-terracotta-foreground/70">{t(UI.footerLegalHeading, locale)}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">{t(UI.footerTerms, locale)}</a></li>
            <li><a href="#" className="hover:underline">{t(UI.footerPrivacy, locale)}</a></li>
            <li><a href="#" className="hover:underline">{t(UI.footerAccessibility, locale)}</a></li>
            <li><a href="#" className="hover:underline">{t(UI.footerCookies, locale)}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="type-eyebrow text-band-terracotta-foreground/70">{t(UI.footerResourcesHeading, locale)}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#insights" className="hover:underline">{t(UI.insightsHeading, locale)}</a></li>
            <li><a href="#careers" className="hover:underline">{t(UI.careersEyebrow, locale)}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-pars border-t border-band-terracotta-foreground/20 py-8">
        <LocalizedBlock className="text-xs text-band-terracotta-foreground/75">
          {t(UI.footerDisclaimer, locale)}
        </LocalizedBlock>
        <p className="mt-3 text-xs text-band-terracotta-foreground/75">
          © {new Date().getFullYear()} Pars. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
