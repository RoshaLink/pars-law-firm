# Pars Design Tokens (original palette, reference-derived structural rhythm)

MAQS's own brand colors, fonts, photography, and video are NOT reused
anywhere in this project (colors are trade dress on top of proprietary
fonts — `LAB Grotesque` for body/UI, `Ampersand` for display type — none
of it reproduced here). What's borrowed is purely structural: the type
scale ratio, the grid/spacing system, and the **alternating section
background rhythm** (dark → warm-light → dark → terracotta footer). The
actual color values, families, and all content below are original to Pars.

## Color palette (dark-navy / warm-amber / terracotta family, original values)
- `--background`: dark navy-charcoal — `oklch(0.17 0.02 265)`
- `--foreground`: warm ivory — `oklch(0.96 0.015 75)`
- `--primary` / `--accent` (CTAs): warm amber-orange — `oklch(0.68 0.13 55)`
- `--accent-fa` (Farsi content accents): deep turquoise — `oklch(0.55 0.08 200)`
- `--secondary` / `--muted`: dark navy panel — `oklch(0.24 0.018 265)`
- `--border`: hairline on dark — `oklch(1 0 0 / 12%)`

### Alternating section bands (the structural device being reused)
The reference site alternates dark, warm-light, and terracotta full-width
section backgrounds to create rhythm as you scroll. Pars reproduces that
alternation with its own values:
- `--band-warm` (Insights section): light warm tan — `oklch(0.81 0.055 75)`, text `--band-warm-foreground` — `oklch(0.22 0.02 265)`
- `--band-terracotta` (Footer): warm terracotta — `oklch(0.58 0.1 45)`, text `--band-terracotta-foreground` — `oklch(0.98 0.006 75)`

Mapped into shadcn tokens (`globals.css` `:root`): background/foreground use
the navy/ivory pair; `primary`/`accent` = amber; `secondary`/`muted` = navy
panel; `accent-fa` reserved for the turquoise Farsi accent; `band-warm` and
`band-terracotta` are custom (non-shadcn) tokens exposed as `bg-band-warm`,
`text-band-warm-foreground`, `bg-band-terracotta`, `text-band-terracotta-foreground`.

## Type scale (MAQS's ratio, new families)
MAQS pairs a large serif display face for hero/eyebrow moments with a grotesk
sans for everything else, at roughly: hero ~110-120px, section h2 ~35px/45px
line-height (500-700 weight), body 18px. Pars keeps that same 3-tier rhythm:

- **Display / hero** (EN): `Fraunces` (serif, variable) — headline moments only
- **UI / body** (EN): `Inter` — nav, body copy, buttons, cards
- **Farsi display + body**: `Vazirmatn` (primary, excellent UI legibility across weights) with `Noto Naskh Arabic` available as a secondary/heading option for a more traditional feel — both self-hosted via `next/font/google`, loaded conditionally per active language.

Scale:
| Token | Size | Weight | Use |
|---|---|---|---|
| `text-display` | clamp(48px, 8vw, 112px) | 500 | Hero headline |
| `text-h2` | 35px / 45px lh | 500-700 | Section headings |
| `text-eyebrow` | 13px, tracked +0.12em, uppercase | 600 | Section labels ("KARRIÄR"-style) |
| `text-body` | 18px / 1.6 | 400 | Paragraphs |
| `text-button` | 14px, tracked +0.08em, uppercase | 600 | Buttons/CTAs |

## Spacing / grid (reused as-is, this is the borrowed part)
- Container: `max-w-[1600px]`, `px-6 md:px-10` gutters
- Section vertical padding: `py-24 md:py-32 lg:py-40`
- Grid gaps: card grids `gap-10 md:gap-12`, button rows `gap-6`
- Split-panel sections: 2-col `lg:grid-cols-2`, stack below `lg:`
- Border radius: buttons `rounded-full` (pill, matches MAQS's pill CTAs), cards `rounded-none` (MAQS uses hard edges throughout — no rounded cards/photos)

## RTL handling
Default approach per user instruction: **block-level RTL**, not full-page
mirroring. Farsi text blocks get `dir="rtl"` and `text-align: right` applied
at the content-block level (e.g. a `<LocalizedBlock dir={lang === 'fa' ? 'rtl' : 'ltr'}>`
wrapper), while the overall page shell (header layout, section order) stays
LTR regardless of active language. Flagged in the language context as an easy
toggle (`FULL_RTL_MIRROR` constant) if full-page mirroring is wanted later.
