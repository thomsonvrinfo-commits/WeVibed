import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <PageLayout>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <SectionHeading eyebrow="Services" title={<>A complete digital <span className="text-gradient-violet">growth engine</span></>} subtitle="From your first website to full AI automation — one partner, every capability you need." />
        </div>
      </section>

      <section className="relative py-12 md:py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="group glass rounded-2xl p-7 h-full hover:border-primary/30 transition-all hover:-translate-y-1 hover:glow-sm-violet">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-accent transition-all">
                    <s.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-fade opacity-50" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Not sure which service you need?</h3>
                <p className="text-muted-foreground max-w-lg mx-auto mb-6">Book a free discovery call and we'll map the perfect plan for your business goals.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white glow-violet hover:scale-105 transition-transform">
                    Request a Proposal <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/pricing" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors">View Pricing</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}