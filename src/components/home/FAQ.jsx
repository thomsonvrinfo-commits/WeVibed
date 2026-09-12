import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title={<>Questions, <span className="text-gradient-violet">answered</span></>} subtitle="Everything you need to know before starting your project with us." />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`glass rounded-2xl overflow-hidden transition-colors ${open === i ? "border-primary/30" : ""}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-white">{f.q}</span>
                  <span className="shrink-0 h-7 w-7 rounded-full glass-strong flex items-center justify-center text-primary">
                    {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}