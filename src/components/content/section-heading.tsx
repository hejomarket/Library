import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import "./section-heading.css";

export type SectionHeadingProps = { eyebrow?: string; title: string; description?: string; action?: ReactNode; align?: "left" | "center"; className?: string };

export function SectionHeading({ eyebrow, title, description, action, align = "left", className }: SectionHeadingProps) {
  return <div className={cn("section-heading", `section-heading--${align}`, className)}>
    <div className="section-heading__copy">
      {eyebrow ? <p className="typography-label section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="typography-section-heading section-heading__title">{title}</h2>
      {description ? <p className="typography-body-large section-heading__description">{description}</p> : null}
    </div>
    {action ? <div className="section-heading__action">{action}</div> : null}
  </div>;
}
