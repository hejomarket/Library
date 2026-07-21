import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import "./button.css";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "text";
export type ButtonSize = "small" | "medium" | "large" | "icon";

type Shared = { variant?: ButtonVariant; size?: ButtonSize; isLoading?: boolean; loadingLabel?: string; leadingIcon?: ReactNode; trailingIcon?: ReactNode; children?: ReactNode; className?: string };
type NativeButton = Shared & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkButton = Shared & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean };
export type ButtonProps = NativeButton | LinkButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "medium", isLoading = false, loadingLabel = "Loading", leadingIcon, trailingIcon, children, className, ...rest } = props;
  const classes = cn("button", `button--${variant}`, `button--${size}`, isLoading && "button--loading", className);
  const content = <><span className="button__content" aria-hidden={isLoading}>{leadingIcon}{children}{trailingIcon}</span>{isLoading ? <span className="button__loader" role="status" aria-live="polite">{loadingLabel}</span> : null}</>;

  if ("href" in rest && rest.href) {
    const { disabled, ...linkProps } = rest;
    return <a className={classes} aria-disabled={disabled || isLoading} tabIndex={disabled ? -1 : linkProps.tabIndex} {...linkProps}>{content}</a>;
  }
  return <button className={classes} disabled={rest.disabled || isLoading} {...rest}>{content}</button>;
}
