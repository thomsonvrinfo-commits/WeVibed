import React from "react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";

const sections = [
  { title: "Information We Collect", body: "We collect information you provide directly — such as your name, email, company, and project details when you request a quote or contact us. We also collect limited analytics data about how you use our website." },
  { title: "How We Use Your Information", body: "We use your information to respond to inquiries, provide quotes and services, communicate about projects, improve our website, and send relevant updates if you've subscribed to our newsletter. We never sell your data to third parties." },
  { title: "Data Storage & Security", body: "Your data is stored securely using industry-standard encryption. We use trusted platforms for hosting and email. Access is restricted to authorized team members only." },
  { title: "Cookies", body: "Our website uses essential cookies to function properly and analytics cookies to understand usage. You can control cookies through your browser settings." },
  { title: "Your Rights", body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. We will respond to all legitimate requests within 30 days." },
  { title: "Contact Us", body: "If you have questions about this Privacy Policy, contact us at hello@wevibed.co.zw." },
];

export default function Privacy() {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: August 2026</p>
          </Reveal>
          <div className="mt-12 space-y-4">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="glass rounded-2xl p-6 border border-foreground/8">
                  <h2 className="text-lg font-semibold text-foreground mb-2">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}