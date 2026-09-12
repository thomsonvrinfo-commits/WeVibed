import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords, Reveal } from "@/components/Reveal";
import { SectionShell, Eyebrow } from "@/components/primitives";
import { growthSystem } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1];

export default function GrowthSystem() {
  return (
    <section className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-60 w-[60%] ambient-warm blur-[60px] opacity-40" />
      <SectionShell>
        <Eyebrow className="mb-10">The WeVibed Growth System</Eyebrow>
        <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-white max-w-3xl mb-16">
          <RevealWords text="One system." /> <span className="text-serif-accent text-gradient-violet"><RevealWords text="Seven steps." delay={0.2} /></span> <RevealWords text="Compounding growth." delay={0.4} />
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-2">
            {growthSystem.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center lg:px-2">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                    className="relative z-10 h-14 w-14 rounded-2xl glass-strong flex items-center justify-center mb-5"
                  >
                    <s.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="text-[10px] font-mono text-muted-foreground/50 mb-1">STEP {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{s.step}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed hidden lg:block">{s.desc}</p>
                  {i < growthSystem.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-6 -right-2 h-4 w-4 text-muted-foreground/30 z-20" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Each step builds on the last. The system never stops — it measures, learns, and improves, <span className="text-white">even while you sleep.</span>
          </p>
        </Reveal>
      </SectionShell>
    </section>
  );
}