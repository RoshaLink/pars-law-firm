"use client";

import Image from "next/image";
import { LocalizedBlock } from "@/components/localized-block";
import { useLanguage } from "@/lib/language-context";
import { UI, t } from "@/lib/dictionary";
import { TEAM, TEAM_QUOTE } from "@/lib/content";

export function TeamSection() {
  const { locale } = useLanguage();

  return (
    <section id="team" className="section-y bg-secondary/30">
      <div className="container-pars">
        <LocalizedBlock as="h2" className="font-display text-3xl md:text-4xl">
          {t(UI.teamHeading, locale)}
        </LocalizedBlock>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.id} className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden bg-[linear-gradient(135deg,_oklch(0.26_0.01_260),_oklch(0.19_0.01_260))]">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center font-display text-3xl text-foreground/25">
                    {member.initials}
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold">{member.name}</p>
                <LocalizedBlock className="text-sm text-muted-foreground">
                  {t(member.role, locale)}
                </LocalizedBlock>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl border-t border-border pt-10">
          <LocalizedBlock as="blockquote" className="font-display text-xl italic text-foreground md:text-2xl">
            {t(TEAM_QUOTE.quote, locale)}
          </LocalizedBlock>
          <div className="mt-4">
            <p className="font-semibold">{TEAM_QUOTE.name}</p>
            <LocalizedBlock className="text-sm text-muted-foreground">
              {t(TEAM_QUOTE.role, locale)}
            </LocalizedBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
