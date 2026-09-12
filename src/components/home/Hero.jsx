import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LogoInfinity } from "@/components/brand/Logo";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const lockupY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-20">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[55vh] w-[70vw] ambient-warm blur-[40px]" />
      <motion.div style={{ opacity }} className="absolute -right-40 top-1/4 h-[40vh] w-[40vh] rounded-full bg-primary/12 blur-[130px] animate-drift" />
      <motion.div style={{ opacity }} className="absolute -left-40 bottom-1/4 h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[130px] animate-drift" />

      <motion.div style={{ y: lockupY }} className="relative flex flex-col items-center text-center">
        {/* Large infinity logo — the primary visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="wv-logo drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]"
        >
          <LogoInfinity size={150} animated />
        </motion.div>

        {/* Brand wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: EASE }}
          className="mt-10 text-6xl sm:text-7xl md:text-8xl font-bold tracking-[-0.05em] leading-none text-white"
        >
          WeVibed
        </motion.h1>

        {/* Gradient subline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
          className="mt-4 text-sm sm:text-base font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em]"
          style={{
            background: "linear-gradient(90deg,#22D3EE,#8B5CF6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Digital Business Systems
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-10 max-w-xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
        >
          We build digital business systems that help businesses attract customers, build trust, automate communication and generate opportunities every day.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-transform duration-300 hover:scale-[1.03] glow-soft">
            Build My Business System
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="/services" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white border border-white/25 hover:bg-white/5 transition-colors">
            See How It Works
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}