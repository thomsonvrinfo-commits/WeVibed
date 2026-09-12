import React from "react";
import { Instagram, MessageCircle, Search, MapPin, ShoppingBag } from "lucide-react";
import { SectionShell, SectionLabel, Eyebrow } from "@/components/primitives";
import Reveal from "@/components/Reveal";

const FRAGMENTS = [
  { icon: Instagram, label: "Instagram", note: "Lost the post" },
  { icon: MessageCircle, label: "WhatsApp", note: "Waiting for a reply" },
  { icon: Search, label: "Google", note: "Incomplete info" },
  { icon: ShoppingBag, label: "Product photos", note: "Scattered" },
  { icon: MapPin, label: "Location", note: "Hard to find" },
];

export default function Problem() {
  return (
    <SectionShell className="py-20 md:py-28" id="problem">
      <SectionLabel index={3} label="The Problem" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-6 max-w-3xl">
          Right now, your business is in <span className="text-serif-accent text-primary">five places at once.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mb-12 md:mb-16">
          Instagram. WhatsApp. Facebook. Google. A folder of product photos. None of them talk to each other. So customers get lost.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        {FRAGMENTS.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.08}>
            <div className="relative rounded-2xl glass p-5 border border-foreground/8 h-full">
              <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-sm font-semibold text-foreground">{f.label}</div>
              <div className="text-xs text-muted-foreground/70 mt-1">{f.note}</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/40">0{i + 1}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-12 md:mt-16 text-center">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-12 md:w-20 bg-primary/40" />
          <p className="text-lg md:text-xl font-medium text-foreground">
            WeVibed connects the pieces.
          </p>
          <div className="h-px w-12 md:w-20 bg-primary/40" />
        </div>
      </Reveal>
    </SectionShell>
  );
}