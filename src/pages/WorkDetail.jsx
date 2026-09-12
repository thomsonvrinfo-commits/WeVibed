import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, MessageCircle, ShoppingBag } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { SectionShell, Eyebrow } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { getProject, projects, WHATSAPP_LINK } from "@/lib/projects";

export default function WorkDetail() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) return <Navigate to="/work" replace />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const phases = [
    { label: "Business", value: project.business },
    { label: "Context", value: project.context },
    { label: "Friction", value: project.friction },
    { label: "Intervention", value: project.intervention },
  ];

  return (
    <PageLayout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <SectionShell>
          <Reveal>
            <Link to="/work" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
            <Eyebrow className="mb-5">{project.category}</Eyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-foreground mb-3">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-primary font-light">{project.tagline}</p>
          </Reveal>
        </SectionShell>
      </section>

      <SectionShell className="pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            {phases.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.1}>
                <div className="flex gap-4">
                  <span className="text-xs font-mono text-muted-foreground/50 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">{p.label}</div>
                    <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{p.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <div className="flex gap-4 pt-6 border-t border-foreground/8">
                <span className="text-xs font-mono text-muted-foreground/50 shrink-0">05</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">System</div>
                  <ul className="space-y-2">
                    {project.system.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm md:text-base text-foreground/90">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex gap-4 pt-6 border-t border-foreground/8">
                <span className="text-xs font-mono text-muted-foreground/50 shrink-0">06</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Result</div>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{project.result}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-2xl glass-strong p-5 border border-foreground/10 overflow-hidden">
                {project.mock && (
                  <div className="absolute top-3 right-3 z-10 text-[10px] font-mono text-muted-foreground/60 bg-background/60 px-2 py-1 rounded-full border border-foreground/8">
                    Concept mock — not a live product
                  </div>
                )}
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{project.name}</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{project.category}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-[4/5] rounded-lg bg-foreground/5 border border-foreground/8 flex items-end p-2">
                      <div className="space-y-1 w-full">
                        <div className="h-2 w-3/4 rounded bg-foreground/10" />
                        <div className="h-2 w-1/2 rounded bg-primary/20" />
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={project.liveUrl || WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-background"
                >
                  <MessageCircle className="h-4 w-4" />
                  {project.liveUrl ? "Visit live site" : "Enquire on WhatsApp"}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Next project */}
        <Reveal delay={0.2} className="mt-20 md:mt-28 pt-12 border-t border-foreground/8">
          <Link to={`/work/${nextProject.id}`} className="group flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Next project</div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {nextProject.name}
              </h3>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        </Reveal>
      </SectionShell>
    </PageLayout>
  );
}