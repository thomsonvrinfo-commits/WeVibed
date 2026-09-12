import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealWords, Reveal } from "@/components/Reveal";
import { SectionShell, Eyebrow } from "@/components/primitives";
import { howWeWork } from "@/lib/data";

export default function HowWeWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/3 h-60 w-60 ambient-warm blur-[80px] opacity-30" />
      <SectionShell>
        <Eyebrow className="mb-10">How We Work</Eyebrow>
        <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-white max-w-3xl mb-20">
          <RevealWords text="A method," /> <span className="text-serif-accent text-gradient-violet"><RevealWords text="not a guess." delay={0.2} /></span>
        </h2>

        <div ref={ref} className="relative pl-8 md:pl-0">
          {/* Vertical line (mobile + desktop left rail) */}
          <div className="absolute left-3 md:left-[3.5rem] top-2 bottom-2 w-px bg-white/10" />
          <motion.div style={{ height: lineHeight }} className="absolute left-3 md:left-[3.5rem] top-2 w-px bg-gradient-to-b from-primary to-accent glow-soft" />

          <div className="space-y-8">
            {howWeWork.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <div className="relative flex items-start gap-6 md:gap-8">
                  <div className="absolute left-3 md:left-[3.5rem] -translate-x-1/2 top-0" />
                  <div className="hidden md:flex h-14 w-14 rounded-2xl glass-strong items-center justify-center shrink-0 relative z-10 -ml-[3.5rem]" style={{ marginLeft: "-3.5rem" }}>
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="md:ml-4 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="md:hidden h-8 w-8 rounded-lg glass flex items-center justify-center shrink-0 -ml-8">
                        <s.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-lg md:text-2xl font-bold text-white tracking-[-0.02em]">{s.step}</h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-lg">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}