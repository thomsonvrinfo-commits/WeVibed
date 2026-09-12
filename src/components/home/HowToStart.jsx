import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { startSteps } from "@/lib/projects";

export default function HowToStart() {
  return (
    <SectionShell className="py-20 md:py-28" id="how-to-start">
      <SectionLabel index={11} label="How to Start" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-4">
          Starting is <span className="text-serif-accent text-primary">simple.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-muted-foreground font-light mb-12 md:mb-16 max-w-2xl">
          Six steps from conversation to a system that works.
        </p>
      </Reveal>

      <div className="space-y-1">
        {startSteps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06}>
            <div className="flex items-start gap-4 md:gap-6 py-5 md:py-6 border-b border-foreground/8">
              <span className="text-sm font-mono text-primary shrink-0 pt-1">{s.n}</span>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">{s.label}</h3>
                <p className="text-sm md:text-base text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-12 text-center">
        <Link
          to="/start"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-background hover:scale-[1.03] transition-transform glow-amber"
        >
          Start now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </SectionShell>
  );
}