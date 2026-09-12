import React from "react";
import { Link } from "react-router-dom";
import { Lock, ArrowRight, LayoutDashboard, FolderKanban, FileText, Receipt, MessageSquare, BarChart3 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";

const modules = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FolderKanban, label: "Projects" },
  { icon: FileText, label: "Files" },
  { icon: Receipt, label: "Invoices" },
  { icon: MessageSquare, label: "Messages" },
  { icon: BarChart3, label: "Analytics" },
];

export default function ClientPortal() {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />Coming Soon
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient">Client Portal</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Your personal command center — track projects, timelines, files, invoices, messages, and analytics in one real-time dashboard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 border-t border-foreground/8">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <Reveal>
            <div className="glass-strong rounded-2xl p-6 md:p-8 border border-foreground/10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {modules.map((m) => (
                  <div key={m.label} className="relative rounded-2xl glass p-5 text-center opacity-60 hover:opacity-100 transition-opacity border border-foreground/8">
                    <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <m.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-foreground">{m.label}</div>
                    <div className="absolute top-3 right-3">
                      <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/start" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background hover:scale-105 transition-transform glow-amber">
                  <Lock className="h-4 w-4" /> Start a project to unlock your dashboard <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}