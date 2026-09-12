import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, center = true, className }) {
  return (
    <Reveal className={cn(center && "text-center", "max-w-3xl", center && "mx-auto", className)}>
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-5", center && "mx-auto")}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}