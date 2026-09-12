import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1];

export function Eyebrow({ children, className }) {
  return (
    <div className={cn("inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

export function Display({ children, className }) {
  return (
    <h2 className={cn("font-bold tracking-[-0.04em] leading-[1.02] text-foreground", className)}>
      {children}
    </h2>
  );
}

export function Lead({ children, className }) {
  return <p className={cn("text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl", className)}>{children}</p>;
}

export function PrimaryCTA({ to = "/start", children = "Start", className, external }) {
  const cls = cn("group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.03] glow-amber", className);
  if (external) return <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>;
  return <a href={to} className={cls}>{children}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>;
}

export function SecondaryCTA({ to, children, className, external }) {
  const cls = cn("group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/5 transition-colors", className);
  if (external) return <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}<ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" /></a>;
  return <a href={to} className={cls}>{children}<ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" /></a>;
}

export function TextLink({ to, children, className, external }) {
  const cls = cn("group inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors", className);
  if (external) return <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></a>;
  return <a href={to} className={cls}>{children}<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></a>;
}

export function SectionShell({ children, className, id }) {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      <div className="mx-auto max-w-manifesto px-5 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionLabel({ index, total = 12, label }) {
  return (
    <Reveal className="flex items-center justify-between mb-10 md:mb-16">
      <Eyebrow>{label}</Eyebrow>
      <span className="text-xs font-mono text-muted-foreground/50">{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
    </Reveal>
  );
}

export function Hairline({ className }) {
  return <div className={cn("h-px w-full bg-foreground/8", className)} />;
}

export { motion, EASE };