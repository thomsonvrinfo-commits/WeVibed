import React from "react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";

const sections = [
  { title: "Acceptance of Terms", body: "By accessing and using wevibed.co.zw and our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services." },
  { title: "Services", body: "WeVibed provides digital business systems — storefronts, websites, branding, automation, and connected digital solutions. Specific deliverables, timelines, and pricing are defined in individual project agreements." },
  { title: "Client Responsibilities", body: "Clients agree to provide necessary content, access, and feedback in a timely manner. Delays in client input may affect project timelines. Clients are responsible for the accuracy of all content provided." },
  { title: "Payment Terms", body: "Unless otherwise agreed, projects require a 50% deposit before work begins and 50% upon completion. Custom payment plans may be arranged for larger projects. All invoices are due within 14 days." },
  { title: "Intellectual Property", body: "Upon full payment, ownership of the final delivered work transfers to the client. WeVibed retains the right to display completed work in our portfolio unless otherwise agreed in writing." },
  { title: "Limitation of Liability", body: "WeVibed is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount paid for the specific project giving rise to the claim." },
  { title: "Termination", body: "Either party may terminate a project with written notice. Fees for work completed up to termination are non-refundable. Deposits cover initial discovery and planning work." },
  { title: "Contact", body: "Questions about these terms? Contact us at hello@wevibed.co.zw." },
];

export default function Terms() {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Terms of Service</h1>
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