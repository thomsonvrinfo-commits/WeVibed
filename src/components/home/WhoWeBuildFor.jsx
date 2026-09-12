import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { industries, getProject } from "@/lib/projects";

export default function WhoWeBuildFor() {
  return (
    <SectionShell className="py-20 md:py-28" id="who-we-build-for">
      <SectionLabel index={9} label="Who We Build For" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-12 md:mb-16 max-w-3xl">
          We build for businesses that run on <span className="text-serif-accent text-primary">WhatsApp, Instagram, and hard work.</span>
        </h2>
      </Reveal>

      <div className="space-y-1">
        {industries.map((ind, i) => {
          const project = getProject(ind.projectId);
          if (!project) return null;
          return (
            <Reveal key={ind.name} delay={i * 0.06}>
              <Link
                to={`/work/${project.id}`}
                className="group flex items-center justify-between gap-4 py-5 md:py-6 border-b border-foreground/8 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <span className="text-xs font-mono text-muted-foreground/50 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <div className="text-lg md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {ind.name}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">{project.name} — {project.tagline}</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}