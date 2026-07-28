import type { ComponentType, SVGProps } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderPhotoProps {
  className?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  tone?: "neutral" | "warm";
}

/**
 * Stand-in for real photography — a flat tinted panel with a centered icon.
 * Swap for actual imagery once the firm's photo library is ready; no MAQS
 * or other third-party imagery is used anywhere in this project.
 */
export function PlaceholderPhoto({
  className,
  icon: Icon = ImageIcon,
  tone = "neutral",
}: PlaceholderPhotoProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        tone === "warm"
          ? "bg-[linear-gradient(135deg,_oklch(0.3_0.02_260),_oklch(0.22_0.04_80))]"
          : "bg-[linear-gradient(135deg,_oklch(0.26_0.01_260),_oklch(0.19_0.01_260))]",
        className
      )}
    >
      <Icon className="size-10 text-foreground/20" strokeWidth={1.25} />
    </div>
  );
}
