import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionShell, SectionLabel } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { projects, projectCategories } from "@/lib/projects";

export default function PortfolioExplorer() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.categorySlug === filter);

  return (
    <SectionShell className="py-20 md:py-28" id="portfolio">
      <SectionLabel index={5} label="Portfolio as Experience" />
      <Reveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-4 max-w-3xl">
          Different businesses. <span className="text-serif-accent text-primary">Different systems.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-muted-foreground font-light mb-10 md:mb-12">Filter by what's close to yours.</p>
      </Reveal>

      {/* Category filter */}
      <Reveal delay={0.15}>
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

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filtered.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.08}>
            <Link
              to={`/work/${p.id}`}
              className="group block rounded-2xl glass p-5 border border-foreground/8 hover:border-primary/20 transition-colors h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">{p.category}</div>
                {p.mock && (
                  <span className="text-[9px] font-mono text-muted-foreground/40">Mock</span>
                )}
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

      <Reveal delay={0.2} className="mt-12 text-center">
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/5 transition-colors"
        >
          Explore all work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </SectionShell>
  );
}