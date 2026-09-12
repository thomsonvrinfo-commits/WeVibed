import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ShoppingBag, Check } from "lucide-react";
import { SectionShell, SectionLabel, Eyebrow } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { getProject, WHATSAPP_LINK } from "@/lib/projects";

export default function FlagshipCaseStudy() {
  const project = getProject("harare-drip-store");

  const phases = [
    { label: "Business", value: project.business },
    { label: "Context", value: project.context },
    { label: "Friction", value: project.friction },
    { label: "Intervention", value: project.intervention },
  ];

  return (
    <SectionShell className="py-20 md:py-28" id="real-business">
      <SectionLabel index={4} label="Real Business" />
      <Reveal>
        <Eyebrow className="mb-4">Flagship Case Study</Eyebrow>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-2">
          {project.name}
        </h2>
        <p className="text-lg md:text-xl text-primary font-light mb-12 md:mb-16">{project.tagline}</p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* Phases */}
        <div className="space-y-6 md:space-y-8">
          {phases.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="shrink-0">
                  <span className="text-xs font-mono text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">{p.label}</div>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{p.value}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.4}>
            <div className="flex gap-4 pt-4 border-t border-foreground/8">
              <div className="shrink-0">
                <span className="text-xs font-mono text-muted-foreground/50">05</span>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">System</div>
                <ul className="space-y-2">
                  {project.system.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm md:text-base text-foreground/90">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex gap-4 pt-4 border-t border-foreground/8">
              <div className="shrink-0">
                <span className="text-xs font-mono text-muted-foreground/50">06</span>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Result</div>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{project.result}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual — storefront mock */}
        <Reveal delay={0.2}>
          <div className="sticky top-24">
            <div className="relative rounded-2xl glass-strong p-5 border border-foreground/10 overflow-hidden">
              {project.mock && (
                <div className="absolute top-3 right-3 z-10 text-[10px] font-mono text-muted-foreground/60 bg-background/60 px-2 py-1 rounded-full border border-foreground/8">
                  Concept mock
                </div>
              )}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{project.name}</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{project.category}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[4/5] rounded-lg bg-foreground/5 border border-foreground/8 flex items-end p-2">
                    <div className="space-y-1 w-full">
                      <div className="h-2 w-3/4 rounded bg-foreground/10" />
                      <div className="h-2 w-1/2 rounded bg-primary/20" />
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-background"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </div>
            <Link
              to="/work"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              See more work
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}