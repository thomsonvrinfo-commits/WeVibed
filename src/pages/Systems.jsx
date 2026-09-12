import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { SectionShell, Eyebrow } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import GrowthLoop from "@/components/brand/GrowthLoop";
import { systems, growthLoop, getProject } from "@/lib/projects";

export default function Systems() {
  const [active, setActive] = useState(0);
  const activeSystem = systems[active];
  const taggedProject = getProject(activeSystem.projectTag);

  return (
    <PageLayout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <SectionShell>
          <Reveal>
            <Eyebrow className="mb-5">Systems</Eyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-foreground mb-6 max-w-3xl">
              One business. <span className="text-serif-accent text-primary">Six connected systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              Not six services. One connected operating layer around your business — from being discovered to growing continuously.
            </p>
          </Reveal>
        </SectionShell>
      </section>

      <SectionShell className="pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-1">
            {systems.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-4 py-5 px-4 rounded-xl transition-colors ${
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

          <Reveal delay={0.2}>
            <div className="lg:sticky lg:top-24 rounded-2xl glass-strong p-6 md:p-8 border border-foreground/10">
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
      </SectionShell>

      <SectionShell className="py-20 md:py-28 border-t border-foreground/8">
        <Reveal>
          <Eyebrow className="mb-5">Growth Loop</Eyebrow>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-4 max-w-3xl">
            A system isn't finished when it launches. <span className="text-serif-accent text-primary">It improves.</span>
          </h2>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 md:mt-16">
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
    </PageLayout>
  );
}