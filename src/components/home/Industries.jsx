import React from "react";
import { BookOpen } from "lucide-react";
import { RevealWords, Reveal } from "@/components/Reveal";
import LivingMaterial from "@/components/LivingMaterial";
import { SectionShell, Eyebrow } from "@/components/primitives";
import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/4 right-0 h-72 w-72 ambient-violet blur-[100px] opacity-30" />
      <SectionShell>
        <Eyebrow className="mb-10">Industries We Understand</Eyebrow>
        <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-white max-w-4xl mb-6">
          <RevealWords text="We don't guess." /> <span className="text-serif-accent text-gradient-violet"><RevealWords text="We understand." delay={0.2} /></span>
        </h2>
        <Reveal delay={0.15}><p className="text-lg text-muted-foreground font-light max-w-2xl mb-20">Every industry we work in deepens our Industry Playbook OS — a growing library of proven systems, adapted for each sector.</p></Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 4) * 0.06}>
              <LivingMaterial className="group glass rounded-2xl p-6 h-full min-h-[10rem] flex flex-col justify-between hover:border-primary/20 transition-colors duration-500">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-white/5 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                  <ind.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug tracking-[-0.01em]">{ind.name}</h3>
              </LivingMaterial>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-start gap-4 glass-panel rounded-2xl p-6 md:p-8 max-w-2xl">
            <div className="h-10 w-10 rounded-xl bg-primary/10 border border-white/5 flex items-center justify-center shrink-0">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              <span className="text-white font-medium">Every completed project strengthens the WeVibed Industry Playbook OS</span> — expanding proven systems, refining what works, and improving what we deliver to the next business in that sector.
            </p>
          </div>
        </Reveal>
      </SectionShell>
    </section>
  );
}