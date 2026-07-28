import type { SVGProps } from "react";

/**
 * Small original line-icon set for social links, drawn in the same stroke
 * style as lucide-react (24 viewBox, round caps/joins). lucide-react's
 * current version ships no brand/logo icons, so these are hand-authored
 * generic glyphs rather than trademarked brand marks.
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 9V6.5A1.5 1.5 0 0 1 15.5 5H17V2h-2a4 4 0 0 0-4 4v3H8v3h3v9h3v-9h2.5l.5-3H14Z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V13a2 2 0 0 1 4 0v3.5M12 12v4.5" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}
