@AGENTS.md

# Pars — Project Notes

Bilingual (English / Farsi) marketing site for **Pars**, a fictional Toronto
immigration & family law firm. Built as a structural/pattern rebuild inspired
by a reference law-firm site (`docs/research/maqs.com/PAGE_TOPOLOGY.md` and
`DESIGN_TOKENS.md`) — layout rhythm, grid, and spacing scale are reused as
patterns; all colors, fonts, copy, and imagery are original to this project.

## Tech stack
Next.js 16 (App Router) + Tailwind CSS v4 + shadcn/ui (`base-nova` style,
`@base-ui/react` primitives — note: shadcn's `Button` here uses a `render`
prop for polymorphism, not `asChild`, and non-button renders need
`nativeButton={false}`, already handled in `src/components/ui/button.tsx`).

## i18n / RTL
- `src/lib/language-context.tsx` — `LanguageProvider` + `useLanguage()`, holds active locale (`en` | `fa`) in React state (client-only, no routing/URL split yet).
- `src/lib/dictionary.ts` — static UI strings (nav, buttons, section copy) as `{ en, fa }` pairs, looked up via `t(entry, locale)`.
- `src/lib/content.ts` — structured content (nav groups, articles, case results, team, office) using the same `{ en, fa }` shape via `LocalizedText` (see `src/types/index.ts`).
- `src/components/localized-block.tsx` — `<LocalizedBlock>` wraps a chunk of content and flips `dir`/text-align to RTL when Farsi is active. This is **block-level RTL**, not full-page mirroring — the header/nav shell stays LTR regardless of language. `FULL_RTL_MIRROR` in `language-context.tsx` is a flag to switch to full-page mirroring later if wanted.
- Fonts: `Inter` (EN body) + `Fraunces` (EN display) + `Vazirmatn` (Farsi UI/body) + `Noto Naskh Arabic` (Farsi display option), all self-hosted via `next/font/google` in `src/app/layout.tsx`.

## Color system
`src/app/globals.css` — original dark-navy / warm-amber / terracotta
palette (oklch values), mapped through shadcn tokens plus two extra
"section band" tokens used for the alternating light/dark rhythm:
`band-warm` (the Insights section) and `band-terracotta` (the footer).
Swap the `:root/.dark` oklch values here once a locked brand palette exists
— every component reads through these tokens, nothing is hardcoded.

**Naming gotcha to preserve:** custom typography utilities are named
`type-eyebrow` / `type-display` / `type-button`, deliberately *not*
`text-eyebrow` etc. — `tailwind-merge` (used by `cn()`) buckets any
`text-*` class into its color group, so a `text-*` prefixed utility
silently disappears when combined with a real color class like
`text-primary`. Don't rename these back to a `text-` prefix.

## Sections (`src/components/sections/`, assembled in `src/app/page.tsx`)
Header (mega-menu nav, EN/فارسی toggle, Contact CTA) → Hero (video-placeholder
background) → Insights (2×2 article grid, warm band) → Practice Areas (split
panel) → Case Results (3-card grid, anonymized outcomes) → Team (photo grid +
pull-quote) → Careers (split panel) → Culture video moment → About (split
panel) → Footer (single Toronto office, social links, legal disclaimer,
terracotta band).

## Known gaps / next steps
- `public/videos/hero-placeholder.mp4` and `culture-placeholder.mp4` don't
  exist yet — sections fall back to a CSS gradient until real video is added.
- `PlaceholderPhoto` (`src/components/placeholder-media.tsx`) stands in for
  all real photography — swap for actual assets when available.
- Mobile layout wasn't visually screenshot-tested (browser window resize
  wasn't controllable in the dev session); responsive classes were code-
  audited instead (mobile-first `grid-cols-1`/`md:`/`lg:` throughout).
