import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { SectionShell, Eyebrow, PrimaryCTA } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { startSteps, storefrontOffer, objections, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/projects";

export default function HowItWorks() {
  return (
    <PageLayout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <SectionShell>
          <Reveal>
            <Eyebrow className="mb-5">How It Works</Eyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-foreground mb-6 max-w-3xl">
              From conversation to a system that <span className="text-serif-accent text-primary">works.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              What I get → How it works → What it costs → What happens next.
            </p>
          </Reveal>
        </SectionShell>
      </section>

      {/* Process */}
      <SectionShell className="py-16 md:py-20 border-t border-foreground/8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10 md:mb-12">The process</h2>
        </Reveal>
        <div className="space-y-1">
          {startSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="flex items-start gap-4 md:gap-6 py-5 border-b border-foreground/8">
                <span className="text-sm font-mono text-primary shrink-0 pt-1">{s.n}</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">{s.label}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Offer */}
      <SectionShell className="py-16 md:py-20 border-t border-foreground/8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10 md:mb-12">What it costs</h2>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <Reveal>
            <div className="rounded-2xl glass-strong p-6 md:p-8 border border-foreground/10 h-full">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Start small</div>
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">{storefrontOffer.name}</h3>
              <div className="text-sm text-muted-foreground mb-6">{storefrontOffer.setup}</div>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-foreground/8">
                <span className="text-4xl font-bold tracking-tight text-foreground">{storefrontOffer.price}</span>
                <span className="text-base text-muted-foreground">/ {storefrontOffer.period}</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {storefrontOffer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/start" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Get the storefront
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-6 md:p-8 border border-foreground/8 h-full">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Build further</div>
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">Digital Business System</h3>
              <div className="text-sm text-muted-foreground mb-6">The complete connected operating layer</div>
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-foreground/8">
                <span className="text-2xl font-bold tracking-tight text-foreground">Custom</span>
                <span className="text-base text-muted-foreground">/ scoped to your business</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {["Digital Presence", "Customer Trust", "Lead Generation", "Communication", "Automation", "Continuous Growth"].map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link to="/start" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Let's build the system
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* After launch */}
      <SectionShell className="py-16 md:py-20 border-t border-foreground/8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">What happens after launch</h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mb-10 md:mb-12">
            The system doesn't end at launch. We measure how it's used, improve it, and expand it as your business grows.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { n: "01", label: "Measured", desc: "We track what's working and what isn't." },
              { n: "02", label: "Improved", desc: "We refine based on real customer behaviour." },
              { n: "03", label: "Expanded", desc: "We add capabilities as the business grows." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl glass p-5 border border-foreground/8">
                <span className="text-xs font-mono text-primary">{s.n}</span>
                <h3 className="text-base font-semibold text-foreground mt-2 mb-1">{s.label}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      {/* Objections */}
      <SectionShell className="py-16 md:py-20 border-t border-foreground/8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10 md:mb-12">Questions you might have</h2>
        </Reveal>
        <div className="space-y-2">
          {objections.map((o, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <details className="group rounded-2xl glass border border-foreground/8 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                  <span className="text-base font-semibold text-foreground">{o.q}</span>
                  <span className="text-primary text-xl transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">{o.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell className="py-20 md:py-28 border-t border-foreground/8 text-center">
        <Reveal>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-background hover:scale-[1.03] transition-transform glow-amber"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp us · {WHATSAPP_NUMBER}
          </a>
          <div className="mt-6">
            <PrimaryCTA to="/start" className="text-sm">Or start with a form</PrimaryCTA>
          </div>
        </Reveal>
      </SectionShell>
    </PageLayout>
  );
}