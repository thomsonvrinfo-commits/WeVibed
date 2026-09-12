import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, MessageCircle, Search, MapPin, ShoppingBag, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/projects";

const EASE = [0.22, 1, 0.36, 1];

const FRAGMENTS = [
  { id: "instagram", icon: Instagram, label: "Instagram post", scatter: { x: -180, y: -120, rot: -8 }, target: { x: -120, y: -70, rot: -3 } },
  { id: "whatsapp", icon: MessageCircle, label: "WhatsApp message", scatter: { x: 160, y: -90, rot: 6 }, target: { x: 120, y: -50, rot: 2 } },
  { id: "google", icon: Search, label: "Google search", scatter: { x: -140, y: 110, rot: 5 }, target: { x: -120, y: 70, rot: -2 } },
  { id: "product", icon: ShoppingBag, label: "Product photo", scatter: { x: 170, y: 100, rot: -7 }, target: { x: 120, y: 60, rot: 3 } },
  { id: "location", icon: MapPin, label: "Business location", scatter: { x: 0, y: -160, rot: 3 }, target: { x: 0, y: -110, rot: 0 } },
];

function FragmentItem({ fragment, converge, fragmentOpacity, delay }) {
  const x = useTransform(converge, [0, 1], [fragment.scatter.x, fragment.target.x]);
  const y = useTransform(converge, [0, 1], [fragment.scatter.y, fragment.target.y]);
  const rot = useTransform(converge, [0, 1], [fragment.scatter.rot, fragment.target.rot]);
  return (
    <motion.div
      style={{ x, y, rotate: rot, opacity: fragmentOpacity }}
      className="absolute left-1/2 top-1/2 z-20"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      <div className="flex items-center gap-2 rounded-xl glass px-3 py-2 border border-foreground/8 whitespace-nowrap">
        <fragment.icon className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground/80">{fragment.label}</span>
      </div>
    </motion.div>
  );
}

export default function FragmentToSystem({ variant = "hero" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const converge = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const storefrontOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const storefrontScale = useTransform(scrollYProgress, [0.35, 0.55], [0.9, 1]);
  const fragmentOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0.15]);
  const headlineY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div ref={ref} className="relative" style={{ height: variant === "hero" ? "180vh" : "140vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {variant === "hero" && (
          <motion.div style={{ y: headlineY, opacity: headlineOpacity }} className="absolute top-[12vh] left-0 right-0 px-5 text-center z-30">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-[clamp(2.25rem,7vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-foreground"
            >
              Your business already has <br className="hidden sm:block" />
              <span className="text-serif-accent text-primary">digital pieces.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto"
            >
              We connect them.
            </motion.p>
          </motion.div>
        )}

        <div className="relative w-full max-w-[600px] mx-auto px-5" style={{ height: "380px" }}>
          <motion.div
            style={{ opacity: storefrontOpacity, scale: storefrontScale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-[320px] rounded-2xl glass-strong p-5 border border-foreground/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Your Business</span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Storefront</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-foreground/5 border border-foreground/8" />
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-background hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>

          {FRAGMENTS.map((f, i) => (
            <FragmentItem key={f.id} fragment={f} converge={converge} fragmentOpacity={fragmentOpacity} delay={i * 0.08} />
          ))}
        </div>

        {variant === "hero" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to connect</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowRight className="h-4 w-4 rotate-90" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}