import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { portfolio, caseStudies } from "@/lib/data";
import { Image } from "@/components/ui/image";

const imgs = [
  "https://media.base44.com/images/public/6a6e6ced62a443b13b9f1272/d5ef126a5_generated_5f8f88e3.png",
  "https://media.base44.com/images/public/6a6e6ced62a443b13b9f1272/b05ef7754_generated_e5777f89.png",
];

export default function Portfolio() {
  return (
    <PageLayout>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <SectionHeading eyebrow="Portfolio" title={<>Work that <span className="text-gradient-violet">speaks for itself</span></>} subtitle="A selection of projects where design met strategy to deliver measurable business results." />
        </div>
      </section>

      <section className="relative py-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.1}>
                <div className="group glass rounded-3xl overflow-hidden hover:border-primary/30 transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={imgs[p.image]} alt={p.name} fittingType="fill" className="transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 rounded-full glass-strong px-3 py-1 text-xs font-medium text-white">{p.industry}</div>
                    <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white glow-sm-violet">{p.result}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.services.map((s) => <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">{s}</span>)}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">{t}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Case Studies" title={<>The story behind <span className="text-gradient-violet">the numbers</span></>} subtitle="Every project is a journey from challenge to measurable result. Here are a few." />
          <div className="mt-14 space-y-6">
            {caseStudies.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <div className="glass rounded-3xl p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center hover:border-primary/30 transition-colors">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">Case Study</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{c.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3"><span className="text-white/80">Challenge:</span> {c.challenge}</p>
                    <p className="text-sm text-accent flex items-center gap-1.5"><ArrowUpRight className="h-4 w-4" /> {c.result}</p>
                  </div>
                  <div className="text-center md:border-l md:border-white/5 md:pl-10">
                    <div className="text-5xl font-bold text-gradient-violet">{c.metric}</div>
                    <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">{c.metricLabel}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white glow-violet hover:scale-105 transition-transform">Start Your Project <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}