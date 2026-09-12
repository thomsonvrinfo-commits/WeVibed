import React from "react";
import { Link } from "react-router-dom";
import { Check, Clock, LifeBuoy, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { pricing } from "@/lib/data";

const addOns = [
  { name: "AI Automation", desc: "Chatbots, lead qualification, and workflow automation." },
  { name: "Advanced SEO", desc: "Technical SEO, content strategy, and ongoing optimization." },
  { name: "Brand Identity", desc: "Logo, color system, and complete design language." },
];

const faqs = [
  { q: "What's included in the free quote?", a: "A detailed scope, timeline, and transparent price — no obligation, no pressure." },
  { q: "Can I customize a package?", a: "Absolutely. Every business is unique. We tailor scope, features, and add-ons to your goals." },
  { q: "Do you offer monthly retainers?", a: "Yes — maintenance, SEO, and growth retainers are available after launch." },
];

export default function Pricing() {
  return (
    <PageLayout>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <SectionHeading eyebrow="Pricing" title={<>Investment that <span className="text-gradient-violet">returns</span></>} subtitle="Clear, honest pricing for every stage of your business. No hidden fees, no surprises." />
        </div>
      </section>

      <section className="relative py-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {pricing.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className={`relative rounded-3xl p-8 h-full flex flex-col ${p.popular ? "gradient-border glow-violet md:-mt-4 md:mb-4" : "glass"}`}>
                  {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-white">Most Popular</div>}
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-5">{p.desc}</p>
                  <div className="flex items-baseline gap-1 mb-6"><span className="text-5xl font-bold text-white">{p.price}</span><span className="text-sm text-muted-foreground">/{p.period}</span></div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6 pb-6 border-b border-white/5">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" />{p.timeline}</span>
                    <span className="flex items-center gap-1.5"><LifeBuoy className="h-3.5 w-3.5 text-accent" />{p.support}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`block rounded-xl px-5 py-3.5 text-center text-sm font-semibold transition-all ${p.popular ? "bg-gradient-to-r from-primary to-accent text-white glow-sm-violet hover:scale-105" : "glass text-white hover:bg-white/5"}`}>Start Your Project</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Add-ons" title={<>Modular <span className="text-gradient-violet">enhancements</span></>} subtitle="Layer in extra firepower whenever your business is ready." />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full hover:border-accent/30 transition-colors">
                  <Sparkles className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-semibold text-white mb-1.5">{a.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Pricing FAQ</h3>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="glass rounded-2xl p-5">
                    <h4 className="font-semibold text-white mb-1.5">{f.q}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}