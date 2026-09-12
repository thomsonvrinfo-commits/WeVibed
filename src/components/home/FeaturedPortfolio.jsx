import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { portfolio } from "@/lib/data";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const imgs = [
  "https://media.base44.com/images/public/6a6e6ced62a443b13b9f1272/d5ef126a5_generated_5f8f88e3.png",
  "https://media.base44.com/images/public/6a6e6ced62a443b13b9f1272/b05ef7754_generated_e5777f89.png",
];

export default function FeaturedPortfolio() {
  const featured = portfolio.slice(0, 4);
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title={<>Proof, not promises</>}
          subtitle="Real projects delivering real results for businesses across industries."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group relative rounded-3xl overflow-hidden glass hover:border-primary/30 transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={imgs[p.image]} alt={p.name} fittingType="fill" className="transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full glass-strong px-3 py-1 text-xs font-medium text-white">{p.industry}</div>
                  <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white glow-sm-violet">{p.result}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
            Explore full portfolio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}