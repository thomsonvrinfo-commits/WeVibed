import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealWords, Reveal } from "@/components/Reveal";
import LivingMaterial from "@/components/LivingMaterial";
import { SectionShell, Eyebrow } from "@/components/primitives";
import { transformationProjects } from "@/lib/data";

export default function TransformationProjects() {
  return (
    <section className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/4 -right-40 h-96 w-96 ambient-violet blur-[120px] opacity-25" />
      <SectionShell>
        <Eyebrow className="mb-10">Current Transformation Projects</Eyebrow>
        <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-white max-w-4xl mb-6">
          <RevealWords text="Not portfolios." /> <span className="text-serif-accent text-gradient-violet"><RevealWords text="Active transformations." delay={0.2} /></span>
        </h2>
        <Reveal delay={0.15}><p className="text-lg text-muted-foreground font-light max-w-2xl mb-20">These are businesses we're actively building digital systems for right now — not past work we rest on.</p></Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {transformationProjects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <LivingMaterial className="group glass rounded-2xl p-7 h-full flex flex-col hover:border-primary/20 transition-colors duration-500">
                <div className="flex items-center justify-between mb-5">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{p.tag}</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400/80 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                    In Progress
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-[-0.02em]">{p.name}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">{p.desc}</p>
              </LivingMaterial>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 glass-strong rounded-2xl p-6 md:p-8 max-w-3xl">
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              <span className="text-white font-medium">Every completed project strengthens the WeVibed framework</span> — expands our Industry Playbooks and improves the systems we deliver to future clients.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-10">
          <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
            View all projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </SectionShell>
    </section>
  );
}