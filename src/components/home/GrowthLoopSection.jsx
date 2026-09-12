import React from "react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import GrowthLoop from "@/components/brand/GrowthLoop";
import { growthLoop } from "@/lib/projects";

export default function GrowthLoopSection() {
  return (
    <SectionShell className="py-20 md:py-28" id="growth">
      <SectionLabel index={7} label="How the System Grows" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-4 max-w-3xl">
          A system isn't finished when it launches. <span className="text-serif-accent text-primary">It improves.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-muted-foreground font-light mb-16 md:mb-20 max-w-2xl">
          Built → Used → Measured → Improved → Expanded. The loop never stops.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <GrowthLoop />
        </Reveal>
        <div className="space-y-6">
          {growthLoop.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="flex gap-4">
                <span className="text-sm font-mono text-primary shrink-0">{s.n}</span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold tracking-tight text-foreground">{s.label}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}