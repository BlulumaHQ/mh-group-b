import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { IconArrow } from "./Icons";
import { cn } from "@/lib/utils";

const baseClasses =
  "group inline-flex items-center justify-center gap-3 rounded-none px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300";

const variants = {
  primary: "bg-brass text-teal hover:bg-brass-soft",
  outlineLight: "border border-brass/70 text-ivory hover:bg-brass hover:text-teal",
  outlineDark: "border border-teal/30 text-teal hover:bg-teal hover:text-ivory",
} as const;

type Variant = keyof typeof variants;

export function CtaLink({
  to,
  hash,
  variant = "primary",
  children,
  className,
}: {
  to: string;
  hash?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(baseClasses, variants[variant], className)}
    >
      <span>{children}</span>
      <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function CtaAnchor({
  href,
  variant = "primary",
  children,
  className,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={cn(baseClasses, variants[variant], className)}>
      <span>{children}</span>
      <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
