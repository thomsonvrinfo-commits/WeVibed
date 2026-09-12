import React from "react";
import { Shield, Clock, Zap, Heart, Search, PenTool, Code, Rocket } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const reasons = [
  { icon: Zap, title: "Sub-second performance", desc: "Edge-cached, optimized sites that load before your visitor blinks." },
  { icon: Shield, title: "Built to last", desc: "Secure, scalable architecture that grows with your business." },
  { icon: Heart, title: "Obsessive craft", desc: "Every pixel intentional. We sweat the details others skip." },
  { icon: Clock, title: "On-time delivery", desc: "Clear timelines and transparent communication, always." },
];

const steps = [
  { icon: Search, title: "Discovery", desc: "We learn your business, goals, and audience to define the right strategy." },
  { icon: PenTool, title: "Design", desc: "We craft a premium, conversion-focused design system tailored to your brand." },
  { icon: Code, title: "Develop", desc: "We build with modern, fast, scalable tech — tested across every device." },
  { icon: Rocket, title: "Launch", desc: "We deploy, optimize, and support your site for long-term growth." },
];

export default function WhyHow() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why WeVibed" title={<>An agency that feels like <span className="text-gradient-violet">a competitive advantage</span></>} subtitle="We're not freelancers. We're your dedicated digital partner, built for results." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-colors">
                <r.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold text-white mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Our Process" title={<>From idea to launch in <span className="text-gradient-violet">four precise steps</span></>} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/40 via-accent/40 to-transparent" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto h-14 w-14 rounded-2xl glass-strong flex items-center justify-center mb-5 glow-sm-violet">
                    <s.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}