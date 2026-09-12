import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { RevealWords, Reveal } from "@/components/Reveal";
import LivingMaterial from "@/components/LivingMaterial";
import { SectionShell, Eyebrow } from "@/components/primitives";
import { businessSystems } from "@/lib/data";

export default function BusinessSystems() {
  return (
    <section className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/3 -left-40 h-80 w-80 ambient-cyan blur-[120px] opacity-20" />
      <SectionShell>
        <Eyebrow className="mb-10">Business Systems</Eyebrow>
        <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-white max-w-4xl mb-6">
          <RevealWords text="Six systems." /> <span className="text-serif-accent text-gradient-violet"><RevealWords text="One business that keeps working." delay={0.2} /></span>
        </h2>
        <Reveal delay={0.2}><p className="text-lg text-muted-foreground font-light max-w-2xl mb-20">Every system is designed around a business outcome — not a technology. Together, they form your digital operating system.</p></Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {businessSystems.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.08}>
              <LivingMaterial className="group glass-panel rounded-3xl p-8 h-full flex flex-col hover:border-primary/20 transition-colors duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-white/5 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-500">
                    <s.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-[-0.02em]">{s.name}</h3>
                <p className="text-sm text-primary/80 mb-5 font-medium">{s.outcomes}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
                  {s.items.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-primary/60" />
                      {item}
                    </span>
                  ))}
                </div>
              </LivingMaterial>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}