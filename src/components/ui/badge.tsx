import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import "./badge.css";

export type BadgeVariant = "neutral" | "accent" | "outline" | "success" | "warning" | "destructive";
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant };

export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return <span className={cn("badge", `badge--${variant}`, className)} {...props} />;
}
