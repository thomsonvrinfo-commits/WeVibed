import React, { useState } from "react";
import { MessageCircle, Send, Check, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { SectionShell, Eyebrow } from "@/components/primitives";
import Reveal from "@/components/Reveal";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, storefrontOffer } from "@/lib/projects";

export default function Start() {
  const [form, setForm] = useState({ name: "", business: "", need: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi WeVibed, I'd like to build a digital business system.\n\nName: ${form.name || "—"}\nBusiness: ${form.business || "—"}\nWhat I need: ${form.need || "—"}\nBudget: ${form.budget || "—"}`
  );

  return (
    <PageLayout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <SectionShell>
          <Reveal>
            <Eyebrow className="mb-5">Start</Eyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.05em] leading-[0.98] text-foreground mb-6 max-w-3xl">
              Tell us about your <span className="text-serif-accent text-primary">business.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              We'll identify the opportunity and map what a system would look like. No pressure, no jargon.
            </p>
          </Reveal>
        </SectionShell>
      </section>

      <SectionShell className="pb-20 md:pb-28">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          {/* WhatsApp + offer */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl glass-strong p-6 border border-foreground/10 hover:border-primary/20 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">WhatsApp us directly</h3>
                <p className="text-sm text-muted-foreground mb-4">The fastest way to start. We reply during business hours.</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  {WHATSAPP_NUMBER}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl glass p-6 border border-foreground/8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Or start small</div>
                <h3 className="text-base font-semibold text-foreground mb-1">{storefrontOffer.name}</h3>
                <div className="text-sm text-muted-foreground mb-3">{storefrontOffer.price}/{storefrontOffer.period} · {storefrontOffer.setup}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A real digital storefront with product pages and a WhatsApp enquiry path. The accessible entry point.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl glass-strong p-6 md:p-8 border border-foreground/10">
              {submitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Got it.</h3>
                  <p className="text-muted-foreground max-w-sm mb-6">
                    Send this through WhatsApp and we'll reply with next steps.
                  </p>
                  <a
                    href={`${WHATSAPP_LINK}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background hover:scale-[1.02] transition-transform"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your name</label>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="w-full rounded-xl bg-background/60 border border-foreground/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/40 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Business name</label>
                    <input
                      required
                      value={form.business}
                      onChange={update("business")}
                      className="w-full rounded-xl bg-background/60 border border-foreground/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/40 transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">What do you need?</label>
                    <textarea
                      required
                      value={form.need}
                      onChange={update("need")}
                      rows={4}
                      className="w-full rounded-xl bg-background/60 border border-foreground/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/40 transition-colors resize-none"
                      placeholder="A storefront, a full system, or just exploring..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Budget range (optional)</label>
                    <select
                      value={form.budget}
                      onChange={update("budget")}
                      className="w-full rounded-xl bg-background/60 border border-foreground/10 px-4 py-3 text-sm text-foreground outline-none focus:border-primary/40 transition-colors"
                    >
                      <option value="">Select a range</option>
                      <option value="$3/month storefront">$3/month storefront</option>
                      <option value="Custom system">Custom system</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-background hover:scale-[1.01] transition-transform glow-amber"
                  >
                    Send <Send className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground/60 text-center">
                    We'll review and reply on WhatsApp within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </PageLayout>
  );
}
