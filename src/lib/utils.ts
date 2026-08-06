import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefixes a root-relative public asset path (e.g. "/videos/hero.mp4") with
 * the deployment's basePath. next/image and next/font apply basePath on
 * their own; plain <video>/<source> tags referencing /public files don't,
 * so use this for those. No-op when basePath is empty (default dev/Vercel).
 */
export function withBasePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
}
