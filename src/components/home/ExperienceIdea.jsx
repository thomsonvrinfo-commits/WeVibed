import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Globe, ShoppingBag, Package, MessageCircle } from "lucide-react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { WHATSAPP_LINK } from "@/lib/projects";

const STEPS = [
  { icon: Eye, label: "Sees a product", desc: "A customer spots something on social." },
  { icon: Globe, label: "Opens the business", desc: "They find a storefront — not a scattered feed." },
  { icon: ShoppingBag, label: "Browses the storefront", desc: "Every product, organized and persistent." },
  { icon: Package, label: "Finds the product", desc: "Photos, details, price — all in one place." },
  { icon: MessageCircle, label: "Contacts the business", desc: "One tap to WhatsApp, already informed." },
];

function Step({ step, index, scrollYProgress }) {
  const start = index / STEPS.length - 0.15;
  const end = index / STEPS.length;
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const x = useTransform(scrollYProgress, [start, end], [-20, 0]);
  return (
    <motion.div style={{ opacity, x }} className="flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-foreground/6">
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        <span className="text-xs font-mono text-muted-foreground/50">{String(index + 1).padStart(2, "0")}</span>
        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full glass flex items-center justify-center border border-foreground/8">
          <step.icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="text-lg md:text-2xl font-semibold tracking-tight text-foreground">{step.label}</h3>
        <p className="text-sm md:text-base text-muted-foreground mt-0.5">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ExperienceIdea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  return (
    <SectionShell className="py-20 md:py-28" id="experience">
      <SectionLabel index={2} label="Experience the Idea" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-4">
          Watch a customer <span className="text-serif-accent text-primary">become a customer.</span>
        </h2>
      </Reveal>

      <div ref={ref} className="mt-12 md:mt-16 space-y-2">
        {STEPS.map((s, i) => (
          <Step key={s.label} step={s} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
        <div className="h-px flex-1 bg-foreground/8" />
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          The final step is always WhatsApp
        </a>
        <div className="h-px flex-1 bg-foreground/8" />
      </Reveal>
    </SectionShell>
  );
}