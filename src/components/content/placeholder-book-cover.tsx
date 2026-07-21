import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import "./placeholder-book-cover.css";

export type PlaceholderBookCoverProps = { title: string; author?: string; category?: string; seed?: string; size?: "small" | "medium" | "large"; className?: string };
const palettes = [["#7f1d2d", "#d8a167"], ["#23473a", "#c5a46d"], ["#1e3a5f", "#c67b5c"], ["#6b4b1f", "#e2c78f"], ["#3b2d4f", "#d8947c"]] as const;
export function getPlaceholderCoverIndex(value: string): number { return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0) % palettes.length; }

export function PlaceholderBookCover({ title, author, category, seed, size = "medium", className }: PlaceholderBookCoverProps) {
  const palette = palettes[getPlaceholderCoverIndex(seed ?? title)];
  const label = `${title}${author ? ` by ${author}` : ""}${category ? `, ${category}` : ""} placeholder book cover`;
  return <div className={cn("book-cover", `book-cover--${size}`, className)} role="img" aria-label={label} style={{ "--cover-start": palette[0], "--cover-end": palette[1] } as CSSProperties}>
    <div className="book-cover__rule" aria-hidden="true" />
    {category ? <p className="book-cover__category">{category}</p> : null}
    <p className="book-cover__title">{title}</p>
    {author ? <p className="book-cover__author">{author}</p> : null}
  </div>;
}
