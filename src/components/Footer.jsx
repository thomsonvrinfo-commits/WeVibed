import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import Reveal from "@/components/Reveal";
import { Eyebrow, Hairline } from "@/components/primitives";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/projects";

const cols = {
  Explore: [
    { label: "Work", to: "/work" },
    { label: "Systems", to: "/systems" },
    { label: "How It Works", to: "/how-it-works" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Start", to: "/start" },
  ],
  Legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground/8 bg-background overflow-hidden">
      <div className="relative mx-auto max-w-manifesto px-5 sm:px-6 pt-20 md:pt-28 pb-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <Eyebrow>WeVibed · Digital Business Systems</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.98] text-foreground">
                Let's build a business that <span className="text-serif-accent text-primary">keeps working</span>.
              </h2>
            </div>
            <Link
              to="/start"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.03] glow-amber"
            >
              Build My Business System
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <Hairline />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="compact" />
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
              We don't build websites. We build connected business systems that continuously create trust, opportunities, automation, and growth.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp · {WHATSAPP_NUMBER}
            </a>
          </div>
          {Object.entries(cols).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">{heading}</h4>
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it.label}>
                    <Link to={it.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Hairline />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2026 WeVibed. Systems that never sleep.</p>
          <p className="text-xs text-muted-foreground/60 font-mono">Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}