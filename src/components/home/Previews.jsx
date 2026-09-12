import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Clock, LifeBuoy, ArrowUpRight } from "lucide-react";
import { pricing, freeTools, blogPosts } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

function PricingPreview() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Pricing" title={<>Transparent pricing, <span className="text-gradient-violet">serious results</span></>} subtitle="Choose the package that fits your ambition. Every plan is built to convert." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className={`relative rounded-3xl p-7 h-full flex flex-col ${p.popular ? "gradient-border glow-violet" : "glass"}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-white">Most Popular</div>}
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">{p.desc}</p>
                <div className="flex items-baseline gap-1 mb-5"><span className="text-4xl font-bold text-white">{p.price}</span><span className="text-sm text-muted-foreground">/{p.period}</span></div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.slice(0, 5).map((f) => <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />{f}</li>)}
                </ul>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5"><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.timeline}</span><span className="flex items-center gap-1"><LifeBuoy className="h-3.5 w-3.5" />{p.support}</span></div>
                <Link to="/contact" className={`block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-all ${p.popular ? "bg-gradient-to-r from-primary to-accent text-white glow-sm-violet hover:scale-105" : "glass text-white hover:bg-white/5"}`}>Start Your Project</Link>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/pricing" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">See full pricing details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
      </div>
    </section>
  );
}

function ToolsPreview() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Free Tools" title={<>Free tools to <span className="text-gradient-violet">audit your business</span></>} subtitle="Instant insights, zero commitment. Try our free tools before you talk to us." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {freeTools.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="group glass rounded-2xl p-6 h-full hover:border-accent/30 transition-all hover:-translate-y-1">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/5 flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-primary transition-all">
                  <t.icon className="h-5 w-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-white mb-1.5">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">Try it free <ArrowUpRight className="h-3.5 w-3.5" /></div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/tools" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors">Explore all tools <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Insights" title={<>Ideas that <span className="text-gradient-violet">move the needle</span></>} subtitle="Practical insights on web, AI, SEO, and growth from the WeVibed team." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {blogPosts.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <Link to="/blog" className="group block glass rounded-2xl overflow-hidden h-full hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent flex items-center justify-center">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{b.category}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2"><span>{b.date}</span><span>·</span><span>{b.readTime}</span></div>
                  <h3 className="font-semibold text-white leading-snug group-hover:text-primary transition-colors">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{b.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">Read the blog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
      </div>
    </section>
  );
}

export default function Previews() {
  return (<><PricingPreview /><ToolsPreview /><BlogPreview /></>);
}