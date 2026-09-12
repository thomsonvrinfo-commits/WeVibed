import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, technologies } from "@/lib/data";
import Reveal from "@/components/Reveal";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-20 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-gradient-violet"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">Powered by a modern technology stack</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((t) => (
              <span key={t} className="rounded-full glass px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white hover:border-primary/30 transition-colors">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}