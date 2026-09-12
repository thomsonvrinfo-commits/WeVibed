import React from "react";
import { PrimaryCTA, SecondaryCTA, SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { LogoInfinity } from "@/components/brand/Logo";

export default function FinalCTA() {
  return (
    <SectionShell className="py-24 md:py-36" id="final-cta">
      <SectionLabel index={12} label="Start" />
      <Reveal>
        <div className="flex flex-col items-center text-center">
          <LogoInfinity size={72} className="mb-10" />
          <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[1.0] text-foreground max-w-3xl mb-6">
            What could your business do if its digital pieces actually <span className="text-serif-accent text-primary">worked together?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mb-12">
            WeVibed — connected digital systems around real businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA to="/start">Build My Business System</PrimaryCTA>
            <SecondaryCTA to="/work">Explore Our Work</SecondaryCTA>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}