import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { SectionShell, Eyebrow, PrimaryCTA } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { LogoInfinity } from "@/components/brand/Logo";
import { industries, getProject, projects } from "@/lib/projects";

export default function About() {
  return (
    <PageLayout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <SectionShell>
          <Reveal>
            <Eyebrow className="mb-5">About</Eyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-foreground mb-6 max-w-3xl">
              Good businesses shouldn't depend on <span className="text-serif-accent text-primary">one person holding everything together.</span>
            </h1>
          </Reveal>
        </SectionShell>
      </section>

      {/* Founder philosophy */}
      <SectionShell className="py-16 md:py-20 border-t border-foreground/8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl glass p-6 md:p-8 border border-foreground/8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <LogoInfinity size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">WeVibed</div>
                    <div className="text-xs text-muted-foreground">Harare, Zimbabwe</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WeVibed exists because good businesses stall — not because their owners lack effort, but because everything depends on them. The Instagram, the WhatsApp, the product photos, the replies, the follow-ups. All of it, manual. All of it, on one person.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="space-y-8">
            <Reveal>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                I started WeVibed because I watched good businesses stall — not because their owners lacked effort, but because everything depended on them.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A customer sees a product on Instagram. They lose the post. They search for the business. They find incomplete information. They ask for prices on WhatsApp. They wait. They never purchase.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The problem isn't effort. It's fragmentation. The business exists in five places at once, and none of them talk to each other.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                WeVibed connects the pieces. We build digital systems around real businesses — so the business keeps working even when the owner puts the phone down.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* How we operate */}
      <SectionShell className="py-16 md:py-20 border-t border-foreground/8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10 md:mb-12">How we operate</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { n: "01", label: "We start with the business", desc: "Not a template. We understand what you do and where customers are getting lost." },
            { n: "02", label: "We build systems, not projects", desc: "Everything connects — presence, trust, communication, growth." },
            { n: "03", label: "We don't disappear after launch", desc: "We measure, improve, and expand the system over time." },
            { n: "04", label: "We use plain business language", desc: "No jargon. You understand what you're getting and why." },
            { n: "05", label: "We show the work", desc: "Real projects, real systems. The work is the argument." },
            { n: "06", label: "We build for independence", desc: "You can update and manage your system without depending on us." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.08}>
              <div className="rounded-2xl glass p-5 border border-foreground/8 h-full">
                <span className="text-xs font-mono text-primary">{s.n}</span>
                <h3 className="text-base font-semibold text-foreground mt-2 mb-1">{s.label}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Breadth */}
      <SectionShell className="py-16 md:py-20 border-t border-foreground/8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">Businesses we understand</h2>
          <p className="text-lg text-muted-foreground font-light mb-10 md:mb-12 max-w-2xl">
            {projects.length} businesses across {new Set(projects.map((p) => p.category)).size} categories — each with its own friction, each with its own system.
          </p>
        </Reveal>
        <div className="space-y-1">
          {industries.map((ind, i) => {
            const project = getProject(ind.projectId);
            if (!project) return null;
            return (
              <Reveal key={ind.name} delay={i * 0.05}>
                <Link
                  to={`/work/${project.id}`}
                  className="group flex items-center justify-between gap-4 py-4 border-b border-foreground/8 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-xs font-mono text-muted-foreground/50 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <div className="text-base md:text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">{ind.name}</div>
                      <div className="text-sm text-muted-foreground truncate">{project.name}</div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell className="py-20 md:py-28 border-t border-foreground/8 text-center">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-6 max-w-2xl mx-auto">
            Let's build a system around <span className="text-serif-accent text-primary">your business.</span>
          </h2>
          <PrimaryCTA to="/start">Start now</PrimaryCTA>
        </Reveal>
      </SectionShell>
    </PageLayout>
  );
}