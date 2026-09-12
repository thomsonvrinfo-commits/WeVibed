import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { systems, getProject } from "@/lib/projects";

export default function SystemsOS() {
  const [active, setActive] = useState(0);
  const activeSystem = systems[active];
  const taggedProject = getProject(activeSystem.projectTag);

  return (
    <SectionShell className="py-20 md:py-28" id="systems">
      <SectionLabel index={6} label="What We Build" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-4 max-w-3xl">
          One business. <span className="text-serif-accent text-primary">Six connected systems.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-muted-foreground font-light mb-12 md:mb-16 max-w-2xl">
          Presence → Trust → Leads → Communication → Automation → Growth. Not six services. One operating layer around your business.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* System list */}
        <div className="space-y-1">
          {systems.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <button
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-4 py-4 px-4 rounded-xl transition-colors ${
                  active === i ? "bg-foreground/5" : "hover:bg-foreground/3"
                }`}
              >
                <span className={`text-xs font-mono ${active === i ? "text-primary" : "text-muted-foreground/50"}`}>{s.n}</span>
                <div className="flex-1">
                  <div className={`text-base md:text-lg font-semibold tracking-tight transition-colors ${active === i ? "text-foreground" : "text-foreground/70"}`}>
                    {s.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.desc}</div>
                </div>
                <ArrowRight className={`h-4 w-4 transition-all ${active === i ? "text-primary translate-x-0" : "text-muted-foreground/30 -translate-x-1"}`} />
              </button>
            </Reveal>
          ))}
        </div>

        {/* Active system detail */}
        <Reveal delay={0.2}>
          <div className="sticky top-24 rounded-2xl glass-strong p-6 md:p-8 border border-foreground/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-mono text-primary">{activeSystem.n}</span>
              <div className="h-px flex-1 bg-foreground/8" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{activeSystem.flow}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">{activeSystem.name}</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">{activeSystem.detail}</p>

            {taggedProject && (
              <div className="pt-6 border-t border-foreground/8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Seen in</div>
                <Link
                  to={`/work/${taggedProject.id}`}
                  className="group flex items-center justify-between gap-3 rounded-xl bg-foreground/3 p-4 hover:bg-foreground/5 transition-colors"
                >
                  <div>
                    <div className="text-sm font-semibold text-foreground">{taggedProject.name}</div>
                    <div className="text-xs text-muted-foreground">{taggedProject.category}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-12 text-center">
        <Link
          to="/systems"
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          See the full system
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </SectionShell>
  );
}