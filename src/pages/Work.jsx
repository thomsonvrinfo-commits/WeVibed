import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { SectionShell, Eyebrow, PrimaryCTA } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { projects, projectCategories } from "@/lib/projects";

export default function Work() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.categorySlug === filter);

  return (
    <PageLayout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <SectionShell>
          <Reveal>
            <Eyebrow className="mb-5">Work</Eyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-foreground mb-6 max-w-3xl">
              Different businesses. <span className="text-serif-accent text-primary">Different systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              Every project answers one question: what did WeVibed understand about this business — and what did we build?
            </p>
          </Reveal>
        </SectionShell>
      </section>

      <SectionShell className="pb-20 md:pb-28">
        <Reveal delay={0.1}>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-8 md:mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === "all" ? "bg-foreground text-background" : "glass text-foreground/70 hover:text-foreground"
              }`}
            >
              All
            </button>
            {projectCategories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setFilter(c.slug)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c.slug ? "bg-foreground text-background" : "glass text-foreground/70 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <Link
                to={`/work/${p.id}`}
                className="group block rounded-2xl glass p-5 border border-foreground/8 hover:border-primary/20 transition-colors h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">{p.category}</div>
                  {p.mock && <span className="text-[9px] font-mono text-muted-foreground/40">Mock</span>}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{p.tagline}</p>
                <div className="flex items-center gap-1 text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">
                  View case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 md:mt-20 text-center">
          <div className="inline-block rounded-2xl glass p-6 md:p-8 border border-foreground/8 max-w-md">
            <h3 className="text-lg font-semibold text-foreground mb-2">Don't see your industry?</h3>
            <p className="text-sm text-muted-foreground mb-5">
              The framework adapts to your business — not the other way around.
            </p>
            <PrimaryCTA to="/start" className="text-sm">Tell us about yours</PrimaryCTA>
          </div>
        </Reveal>
      </SectionShell>
    </PageLayout>
  );
}