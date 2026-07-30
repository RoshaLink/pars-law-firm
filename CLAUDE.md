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
Header (mega-menu nav, EN/فارسی toggle, Contact CTA, logo mark) → Hero
(Toronto skyline video background) → Insights (2×2 article grid, warm band)
→ Practice Areas (split panel) → Case Results (3-card grid, anonymized
outcomes) → Team (photo grid + pull-quote) → Careers (split panel) → Culture
video moment (crossfade montage of team clips) → About (split panel) →
Footer (single Toronto office, social links, full logo lockup, legal
disclaimer, terracotta band).

## Brand assets
- `public/images/logo-mark.webp` — square monogram only, transparent
  background, used in the header (replaces the old "P" badge) and as the
  source for favicons.
- `public/images/logo-full.webp` — monogram + "Pars Law Firm" wordmark,
  transparent background, used in the footer.
- `public/images/logo.png` — original source file as supplied, kept
  untouched for regenerating the assets above if needed.
- `src/app/favicon.ico` / `icon.png` / `apple-icon.png` — Next.js
  auto-detects these by filename. `favicon.ico` is a hand-built
  multi-resolution (16/32/48px) PNG-format ICO — ffmpeg's own ICO muxer
  produces a container the Rust `image` crate (used by Turbopack's build)
  rejects, so it's assembled manually; see git history for the approach if
  it ever needs regenerating. Favicon/apple-touch-icon intentionally keep
  the logo's dark background (unlike the transparent header/footer
  versions) since a transparent favicon disappears on a light browser tab.

## Known gaps / next steps
- `PlaceholderPhoto` (`src/components/placeholder-media.tsx`) is now only a
  fallback (rendered if an image fails to load) — every section has real
  generated photography wired in.
- Team photos exist for all 7 members; the hero and culture-section videos
  currently only feature 5 of the 7 (Roya Kazemi and, in the culture
  montage, Arman Tehrani are not included — add their clips and re-run the
  ffmpeg crossfade concat if/when generated).
- Mobile layout has been visually screenshot-verified at 390px width (see
  `docs/design-references/pars-mobile.png`) — no horizontal-overflow issues
  found across sections.
