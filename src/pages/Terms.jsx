import React from "react";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";

const general = [
  { title: "Acceptance of Terms", body: "By accessing and using wevibed.co.zw and our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services." },
  { title: "Client Responsibilities", body: "Clients agree to provide necessary content, access, and feedback in a timely manner. Delays in client input may affect delivery timelines. Clients are responsible for the accuracy of all content provided (product names, prices, photos, and business information)." },
];

const storefrontTerms = [
  { title: "What's Included", body: "The Digital Storefront is a hosted, maintained digital storefront for your business — product pages, a mobile-friendly browsing experience, and a WhatsApp enquiry path on every product. WeVibed builds, hosts, and maintains the storefront on your behalf." },
  { title: "Billing", body: "The Digital Storefront is $5/month with no setup fee. Billing is recurring and monthly from the date your storefront goes live. There is no minimum contract term." },
  { title: "Cancellation & Refunds", body: "You may cancel at any time; cancellation takes effect at the end of your current billing period, and your storefront is taken offline after that date. Payments already made for the current period are non-refundable, but no further charges apply once cancelled." },
  { title: "Ownership", body: "You own your business name, brand, product information, photos, and content. WeVibed owns and operates the underlying storefront platform and infrastructure. If you cancel, your business content is not \"delivered\" to you as a standalone file — the storefront is a hosted service, not a one-time asset — but we're happy to provide an export of your product/content data on request." },
];

const projectTerms = [
  { title: "What's Included", body: "Custom project work (a \"Full System\" build or any bespoke system beyond the storefront) covers specific deliverables, timelines, and pricing as defined in an individual project agreement with you." },
  { title: "Payment Terms", body: "Unless otherwise agreed, custom projects require a 50% deposit before work begins and the remaining 50% upon completion. Custom payment plans may be arranged for larger projects. All invoices are due within 14 days." },
  { title: "Ownership", body: "Upon full payment, ownership of the final delivered work transfers to the client. WeVibed retains the right to display completed work in our portfolio unless otherwise agreed in writing." },
  { title: "Termination", body: "Either party may terminate a project with written notice. Fees for work completed up to termination are non-refundable. Deposits cover initial discovery and planning work already carried out." },
];

const closing = [
  { title: "Limitation of Liability", body: "WeVibed is not liable for indirect, incidental, or consequential damages. For the Digital Storefront, our total liability is limited to the fees paid in the 3 months prior to a claim. For custom projects, our total liability is limited to the amount paid for the specific project giving rise to the claim." },
  { title: "Contact", body: "Questions about these terms? Contact us at wevibeapp@gmail.com." },
];

function TermsGroup({ title, description, items, startDelay = 0 }) {
  return (
    <div className="mt-12">
      {title && (
        <Reveal delay={startDelay}>
          <div className="mb-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">{title}</h2>
            {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
          </div>
        </Reveal>
      )}
      <div className="space-y-4">
        {items.map((s, i) => (
          <Reveal key={s.title} delay={startDelay + (i + 1) * 0.05}>
            <div className="glass rounded-2xl p-6 border border-foreground/8">
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

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
            <p className="mt-4 text-muted-foreground">Last updated: September 2026</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              WeVibed offers two kinds of engagement — the Digital Storefront (a recurring, hosted service) and
              custom project work (a one-off build with its own agreement). The terms below are split so it's
              clear which applies to you.
            </p>
          </Reveal>

          <TermsGroup items={general} startDelay={0.1} />

          <TermsGroup
            title="Digital Storefront ($5/month)"
            description="Applies if you're subscribed to the standard Digital Storefront."
            items={storefrontTerms}
            startDelay={0.15}
          />

          <TermsGroup
            title="Custom Project Work"
            description="Applies if you've commissioned a Full System or other bespoke project, in addition to any signed project agreement."
            items={projectTerms}
            startDelay={0.2}
          />

          <TermsGroup items={closing} startDelay={0.25} />
        </div>
      </section>
    </PageLayout>
  );
}
