import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function FeaturedServices() {
  const featured = services.slice(0, 6);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Everything your business needs <br className="hidden md:block" /><span className="text-gradient-violet">to win online</span></>}
          subtitle="From premium websites to AI automation, we deliver the complete digital engine your business needs to grow."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all hover:-translate-y-1 hover:glow-sm-violet">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-accent transition-all">
                  <s.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
            View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}