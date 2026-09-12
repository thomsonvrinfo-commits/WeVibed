import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShoppingBag, Layers } from "lucide-react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { storefrontOffer } from "@/lib/projects";

export default function CommercialEntry() {
  const [view, setView] = useState("storefront");

  return (
    <SectionShell className="py-20 md:py-28" id="offer">
      <SectionLabel index={10} label="Commercial Entry" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-4 max-w-3xl">
          Start small. <span className="text-serif-accent text-primary">Build further.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-muted-foreground font-light mb-12 md:mb-16 max-w-2xl">
          An accessible entry point — or a complete digital business system. Your choice.
        </p>
      </Reveal>

      {/* Toggle */}
      <Reveal delay={0.15}>
        <div className="inline-flex rounded-full glass p-1 border border-foreground/8 mb-10">
          <button
            onClick={() => setView("storefront")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${view === "storefront" ? "bg-foreground text-background" : "text-foreground/70"}`}
          >
            Digital Storefront
          </button>
          <button
            onClick={() => setView("system")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${view === "system" ? "bg-foreground text-background" : "text-foreground/70"}`}
          >
            Full System
          </button>
        </div>
      </Reveal>

      {view === "storefront" ? (
        <Reveal delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="rounded-2xl glass-strong p-6 md:p-8 border border-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{storefrontOffer.name}</h3>
                  <div className="text-sm text-muted-foreground">{storefrontOffer.setup}</div>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-foreground/8">
                <span className="text-5xl font-bold tracking-tight text-foreground">{storefrontOffer.price}</span>
                <span className="text-lg text-muted-foreground">/ {storefrontOffer.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {storefrontOffer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/start"
                className="group flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background hover:scale-[1.02] transition-transform"
              >
                Get the storefront
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="flex items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Need more than a storefront?</div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                  Let's build the larger system.
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  A storefront is the entry point. A full digital business system adds trust, lead generation, communication, automation, and continuous growth — all connected around your business.
                </p>
                <button
                  onClick={() => setView("system")}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  See the full system
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={0.2}>
          <div className="rounded-2xl glass-strong p-6 md:p-10 border border-foreground/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">Digital Business System</h3>
                <div className="text-sm text-muted-foreground">The complete connected operating layer</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {["Digital Presence", "Customer Trust", "Lead Generation", "Communication", "Automation", "Continuous Growth"].map((s, i) => (
                <div key={s} className="rounded-xl bg-foreground/3 p-4 border border-foreground/6">
                  <span className="text-xs font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div className="text-sm font-semibold text-foreground mt-1">{s}</div>
                </div>
              ))}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Six connected systems, designed around your business, built to compound. Pricing depends on scope — we'll map it after understanding your business.
            </p>
            <Link
              to="/start"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:scale-[1.02] transition-transform"
            >
              Let's build the system
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      )}
    </SectionShell>
  );
}