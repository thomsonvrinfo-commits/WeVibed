import React, { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Send, Calendar, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AiQuoteEngine from "@/components/AiQuoteEngine";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const contactMethods = [
    { icon: Mail, label: "Email", value: "hello@wevibed.co.zw", href: "mailto:hello@wevibed.co.zw" },
    { icon: MessageCircle, label: "WhatsApp", value: "0718 268 729", href: "https://wa.me/263718268729" },
    { icon: Phone, label: "Phone", value: "+263 71 826 8729", href: "tel:+263718268729" },
    { icon: MapPin, label: "Location", value: "Harare, Zimbabwe", href: "#" },
  ];

  return (
    <PageLayout>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading eyebrow="Contact" title={<>Let's build something <span className="text-gradient-violet">remarkable</span></>} subtitle="Tell us about your vision and we'll get back to you within 24 hours with a tailored proposal." />
        </div>
      </section>

      <section className="relative py-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-4">
            {contactMethods.map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/30 transition-colors group">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all">
                  <c.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div><div className="text-xs text-muted-foreground uppercase tracking-widest">{c.label}</div><div className="text-sm font-medium text-white">{c.value}</div></div>
              </a>
            ))}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3"><Calendar className="h-4 w-4 text-accent" /><span className="text-sm font-medium text-white">Book a Discovery Call</span></div>
              <p className="text-sm text-muted-foreground mb-3">Prefer to talk? Schedule a free 30-minute consultation.</p>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-semibold text-white glow-sm-violet hover:scale-105 transition-transform">Schedule a call</a>
            </div>
            <AiQuoteEngine />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="glass-strong rounded-3xl p-8">
              {submitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 glow-violet"><Check className="h-8 w-8 text-white" /></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message received!</h3>
                  <p className="text-muted-foreground max-w-sm">Thanks for reaching out. We'll review your vision and reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-white mb-1.5">Name</label><input required value={form.name} onChange={update("name")} className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/50 outline-none focus:border-primary/40" placeholder="Jane Doe" /></div>
                    <div><label className="block text-sm font-medium text-white mb-1.5">Email</label><input required type="email" value={form.email} onChange={update("email")} className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/50 outline-none focus:border-primary/40" placeholder="jane@business.com" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-white mb-1.5">Company / Business</label><input value={form.company} onChange={update("company")} className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/50 outline-none focus:border-primary/40" placeholder="Acme Inc." /></div>
                  <div><label className="block text-sm font-medium text-white mb-1.5">Budget range</label>
                    <select value={form.budget} onChange={update("budget")} className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary/40">
                      <option value="">Select a range</option>
                      <option value="starter">Starter ($499)</option>
                      <option value="business">Business ($1,499)</option>
                      <option value="premium">Premium ($3,999+)</option>
                      <option value="custom">Custom / Not sure</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium text-white mb-1.5">Tell us about your project</label><textarea required value={form.message} onChange={update("message")} rows={5} className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/50 outline-none focus:border-primary/40 resize-none" placeholder="Describe your vision, goals, and timeline..." /></div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white glow-violet hover:scale-[1.02] transition-transform">Send Message <Send className="h-4 w-4" /></button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}