# MAQS (maqs.com/sv/start) — Structural Topology

> Extracted for STRUCTURE/PATTERN reference only. No MAQS copy, images, video,
> logo, or brand colors are retained anywhere in this repo. All values below
> describe layout mechanics (order, grid, spacing, interaction model) so the
> **Pars** rebuild can borrow section pacing without reproducing MAQS content.

## Global shell
- Header is fixed/overlay on the hero, transparent-over-dark at top.
  - Left: logo mark (square monogram + wordmark under it)
  - Right, in order: solid-fill CTA pill button → language toggle (2-letter code, active one underlined) → search icon → hamburger icon
  - Hamburger opens a full-screen dark mega-menu: 6 columns, each a nav group label (bold) with optional sub-links underneath. One column has no sub-links (single destination).
- Container: `max-width: 1600px`, side gutters `40px` (class pattern `wrapper` + `site-md-padding`).
- Section-to-section background alternates: dark navy → warm tan → dark navy → warm/duotone photo → light/white → dark navy → dark (photo) → dark (photo) → terracotta (footer). This dark/light/warm alternation is the main rhythm device — carry it into Pars with the new palette.
- Button groups use `gap: 24px` between siblings.

## Section order (top → bottom)
1. **Header** (fixed overlay)
2. **Hero** — full-bleed dark background (video in production), huge centered serif display wordmark-style headline, no visible subhead/CTA until scroll reveals next section (CTA lives in header).
3. **Intro/Welcome statement** — warm/tan full-width band. Centered serif heading + centered 2-line body paragraph. Pure statement section, no image.
4. **Recent news/insights grid** — same warm band continues. Left-aligned section heading. 2×2 grid of article cards (desktop); each card: eyebrow row (date + category label, left / "read more" arrow-link, right), title (bold, 2-line clamp), horizontal divider rule, excerpt text (2-3 lines). Grid gap generous (~40-48px column gap, ~48-64px row gap). Below grid: two secondary CTA buttons side by side (dark fill, tracked-out uppercase small label).
5. **Practice-area statement (split panel)** — 50/50 split. Left: dark navy panel, heading (2-line) + paragraph + outlined pill CTA button. Right: full-bleed grayscale photo, no crop padding (photo touches panel edge and viewport edge).
6. **Case results carousel** — full-bleed photo background, warm duotone/color-wash overlay tinting the photo (not true grayscale). Content anchored center-left: small tracked eyebrow label, large bold case/client name, solid CTA button below with a gap. Bottom-left dot pagination (3 dots, active dot filled with accent color). **Interaction model: time-driven auto-rotation** (content changed mid-session without any click) — treat as autoplay carousel, ~5-6s per slide, crossfade transition implied by dot state change. Same panel also carries a pull-quote line that appears layered near the transition into the next section (short 1-sentence testimonial, centered, large italic-ish quote type).
7. **Team teaser (split panel)** — 50/50 split, no dark text panel this time — both sides are photography. Left: large portrait-style photo with a small caption/signature mark and a text label + arrow link overlaid near the bottom (dark scrim gradient under the text for legibility). Right: architectural/office photo, plain.
8. **Careers CTA (split panel)** — mirrors pattern from section 5 but sides flipped: left = grayscale photo, right = dark panel with small tracked eyebrow label, heading, paragraph, and a text link with a trailing arrow (not a filled button this time).
9. **Second photographic moment** — full-bleed section, split into two stacked/columned photo blocks (office/culture imagery), minimal or no text overlay observed at capture time — functions as a breather/texture beat before the About teaser. This is the natural slot for the "second video moment."
10. **About teaser (split panel)** — same construction as section 5/8: dark image panel with small tracked eyebrow label ("About"), heading link styled like a headline, trailing arrow. Mirrors the team teaser link pattern.
11. **Footer** — terracotta/warm accent full-width band, two stacked rows:
    - Row 1: office-contact grid, one column per office (city name bold caps, phone line, email link, address block). For Pars this collapses to a **single column** (Toronto only).
    - Row 2: social icon row (circular outline icons, left) + legal/policy link list (column) + a secondary resource link list (column, e.g. podcasts — for Pars this slot can hold "Resources" or be dropped).

## Interaction model summary
- Header: static overlay, no observed scroll-shrink during this pass (treat as simple sticky, background stays transparent/dark-matching).
- Case-results section: **time-driven** (autoplay carousel + dot pagination), not click-only — build with an interval-based state cycle, pause-on-hover is a reasonable default.
- Split-panel sections (5, 8, 10): static content, hover states expected on buttons/links only (underline/arrow-shift or fill-shift).
- News cards: hover state expected on card/link (underline or arrow shift on "read more").
- Fade/slide-in-on-scroll entrance animations were observed (content briefly blank until scrolled into view) — implement as a lightweight IntersectionObserver fade-up on section entry, not required to match exact timing.

## Grid/spacing takeaways to reuse in Pars
- Container `max-w-[1600px]` with `px-10` (40px) gutters, scaling down on mobile.
- Section vertical rhythm: generous — large sections read as ~120-160px of breathing room top/bottom on desktop, tightening on mobile.
- 2-column news grid → collapses to 1 column under ~768px.
- 50/50 split panels → stack vertically under ~1024px (image on top or bottom depending on section, text panel keeps its own padding).
- Footer office grid → 1 column per breakpoint step down (4 → 2 → 1).
