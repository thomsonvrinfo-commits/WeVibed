import React from "react";
import { RevealWords, Reveal } from "@/components/Reveal";
import LivingMaterial from "@/components/LivingMaterial";
import { SectionShell, Eyebrow } from "@/components/primitives";

export default function FounderPhilosophy() {
  return (
    <section className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[60%] ambient-warm blur-[80px] opacity-30" />
      <SectionShell>
        <Eyebrow className="mb-10">Founder Philosophy</Eyebrow>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="glass-strong rounded-3xl p-8 flex flex-col items-center text-center h-full justify-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 glow-soft">
                  <span className="text-2xl font-bold text-white">W</span>
                </div>
                <div className="text-sm font-semibold text-white">WeVibed Founder</div>
                <div className="text-xs text-muted-foreground mt-1">Harare, Zimbabwe</div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white mb-8">
              <span className="text-serif-accent text-gradient-violet">"</span>
              <RevealWords text="I started WeVibed because I watched good businesses stall — not because their owners lacked effort, but because everything depended on them." delay={0.1} />
              <span className="text-serif-accent text-gradient-violet">"</span>
            </h2>
            <div className="space-y-6">
              <Reveal delay={0.2}><p className="text-lg text-muted-foreground font-light leading-relaxed">Technology alone has never been the answer. Systems are. A business with the right systems keeps attracting customers, building trust, and generating opportunities — even when the owner steps away.</p></Reveal>
              <Reveal delay={0.3}><p className="text-lg text-muted-foreground font-light leading-relaxed">That's why WeVibed exists: to build the systems behind businesses that grow on their own. Not websites. Not projects. <span className="text-white">Businesses that keep working.</span></p></Reveal>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}