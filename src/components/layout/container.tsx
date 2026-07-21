import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "default" | "wide" | "article" | "compact" | "full";

const sizeStyles: Record<ContainerSize, string> = {
  default: "var(--page-width)",
  wide: "var(--page-width-wide)",
  article: "var(--page-width-article)",
  compact: "var(--page-width-compact)",
  full: "none",
};

export type ContainerProps<T extends ElementType = "div"> = HTMLAttributes<HTMLElement> & {
  as?: T;
  children: ReactNode;
  size?: ContainerSize;
};

export function Container<T extends ElementType = "div">({ as, children, className, size = "default", style, ...props }: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn("container", className)}
      style={{ maxWidth: sizeStyles[size], paddingInline: "var(--page-padding)", marginInline: "auto", width: "100%", ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
