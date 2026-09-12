import React from "react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { projects, projectCategories } from "@/lib/projects";

export default function WhyWeVibed() {
  return (
    <SectionShell className="py-20 md:py-28" id="why">
      <SectionLabel index={8} label="Why WeVibed" />
      <Reveal>
        <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[1.0] text-foreground max-w-4xl">
          We don't build websites.
          <br />
          We build <span className="text-serif-accent text-primary">connected business systems</span> that continuously create trust, opportunities, automation, and growth.
        </h2>
      </Reveal>

      <Reveal delay={0.2} className="mt-16 md:mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-foreground/8">
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{projects.length}</div>
            <div className="text-sm text-muted-foreground mt-1">Businesses built</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{projectCategories.length}</div>
            <div className="text-sm text-muted-foreground mt-1">Categories covered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">6</div>
            <div className="text-sm text-muted-foreground mt-1">Connected systems</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">$5</div>
            <div className="text-sm text-muted-foreground mt-1">Entry point / month</div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}