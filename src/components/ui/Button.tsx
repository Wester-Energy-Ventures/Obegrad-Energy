import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 shadow-sm focus-visible:outline-leaf-500",
  secondary:
    "bg-leaf-500 text-white hover:bg-leaf-600 shadow-sm focus-visible:outline-leaf-600",
  outline:
    "border border-brand-700 text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-700",
  ghost: "text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-700",
  white:
    "bg-white text-brand-800 hover:bg-brand-50 shadow-sm focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function buttonClasses(variant: Variant, size: Size): string {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    sizes[size],
  ].join(" ");
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
  target,
  rel,
}: ButtonProps) {
  const classes = [buttonClasses(variant, size), className].join(" ").trim();

  if (href) {
    const isExternal = href.startsWith("http");
    const linkProps = isExternal ? { target, rel } : { target, rel };
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
