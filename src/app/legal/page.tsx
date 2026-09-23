import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale, ShieldCheck, Eye, FileText, Cookie, Mail, ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { PageHeroVisual } from "@/components/layout/PageHeroVisual";

export const metadata: Metadata = {
  title: "Legal | RSK Technologies Group",
  description: `Privacy policy, terms of service, and legal information for ${siteConfig.name}.`,
};

const sections = [
  {
    icon: Eye,
    id: "privacy",
    title: "Privacy Policy",
    lastUpdated: "1 January 2025",
    content: [
      {
        heading: "Information we collect",
        body: "We collect information you provide directly to us - such as your name, email address, and message content when you fill in our contact form. We may also collect certain technical information automatically, including your IP address, browser type, and pages visited, to help us improve our service.",
      },
      {
        heading: "How we use your information",
        body: "We use the information we collect to respond to your enquiries, send you relevant project updates if you are a client, improve and personalise our website experience, and comply with our legal obligations. We do not sell your personal data to third parties.",
      },
      {
        heading: "Data retention",
        body: "We retain your personal data only as long as necessary to fulfil the purposes described in this policy, or as required by law. Contact form submissions are retained for up to 24 months.",
      },
      {
        heading: "Your rights",
        body: "Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data; to restrict or object to processing; and to data portability. To exercise these rights, please contact us at the email address below.",
      },
      {
        heading: "Cookies",
        body: "Our website uses essential cookies required for basic functionality, and optional analytics cookies to understand how visitors use our site. You may disable cookies in your browser settings; note that some features may not work as expected.",
      },
    ],
  },
  {
    icon: FileText,
    id: "terms",
    title: "Terms of Service",
    lastUpdated: "1 January 2025",
    content: [
      {
        heading: "Acceptance of terms",
        body: "By accessing or using the RSK Technologies Group website and services, you agree to be bound by these Terms of Service. If you do not agree to all terms, please do not use our website or services.",
      },
      {
        heading: "Services",
        body: "RSK Technologies Group provides technology consulting, software development, and related digital services as described on our website. Specific service terms, deliverables, timelines, and fees are agreed in writing before any engagement begins.",
      },
      {
        heading: "Intellectual property",
        body: "Upon full payment of agreed fees, clients receive ownership of bespoke code and assets created specifically for their project. RSK Technologies Group retains rights to general methodologies, frameworks, and know-how developed independently of any specific client engagement.",
      },
      {
        heading: "Limitation of liability",
        body: "To the maximum extent permitted by applicable law, RSK Technologies Group shall not be liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the fees paid for the relevant service in the three months preceding the claim.",
      },
      {
        heading: "Governing law",
        body: "These terms are governed by the laws of Uganda. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Kampala, Uganda.",
      },
    ],
  },
];

export default function LegalPage() {
  return (
    <div className="overflow-hidden">

      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.08),transparent_55%)]" />
        </div>
        <div className="relative mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:px-10">
          <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Scale size={14} /> <span>Legal information</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl">
              Legal &amp; privacy.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700">
              We believe in being transparent about how we operate and how we handle your data.
              This page covers our privacy policy, terms of service, and cookie policy.
            </p>
          </Reveal>

          {/* Quick-nav pills */}
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur transition-colors hover:bg-[rgb(51,51,153)]/8"
                >
                  <s.icon size={13} />
                  {s.title}
                </a>
              ))}
            </div>
          </Reveal>
          </div>
          <PageHeroVisual variant="legal" />
        </div>
      </section>

      {/* Key points strip */}
      <section className="border-y border-[rgb(51,51,153)]/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-[rgb(51,51,153)]/10 px-4 sm:px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {[
            { icon: ShieldCheck, title: "We never sell your data", body: "Your information is used only to serve you, never sold or shared with third-party advertisers." },
            { icon: Eye, title: "Transparent by default", body: "We tell you exactly what we collect, why we collect it, and how long we keep it." },
            { icon: Cookie, title: "Minimal cookies", body: "We use only essential and analytics cookies. No advertising trackers, ever." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="flex items-start gap-4 px-6 py-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10 ring-1 ring-[rgb(51,51,153)]/20">
                  <item.icon className="h-5 w-5 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{item.title}</p>
                  <p className="mt-1 text-sm text-neutral-600">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Policy sections */}
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">

          {/* Sticky TOC on desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">On this page</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-[rgb(51,51,153)]/6 hover:text-[rgb(51,51,153)]"
                  >
                    <span className="flex items-center gap-2">
                      <s.icon className="h-4 w-4" strokeWidth={1.5} />
                      {s.title}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-[rgb(51,51,153)]/10 pt-5">
                <p className="mb-2 text-xs text-neutral-400">Questions about legal?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(51,51,153)] transition-colors hover:text-[rgb(41,41,128)]"
                >
                  <Mail size={13} /> Contact us
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-12 lg:col-span-2">
            {sections.map((section, si) => (
              <Reveal key={section.id} delay={0.05 * si}>
                <div
                  id={section.id}
                  className="scroll-mt-24 rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-8 shadow-lg backdrop-blur-sm"
                >
                  {/* Section header */}
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10 ring-1 ring-[rgb(51,51,153)]/20">
                        <section.icon className="h-5 w-5 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-xl font-semibold text-neutral-900">{section.title}</h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-[rgb(51,51,153)]/8 px-2.5 py-0.5 text-xs font-medium text-[rgb(51,51,153)]">
                      Updated {section.lastUpdated}
                    </span>
                  </div>

                  {/* Sub-sections */}
                  <div className="space-y-6">
                    {section.content.map((item) => (
                      <div key={item.heading}>
                        <h3 className="mb-1.5 text-sm font-semibold text-neutral-900">{item.heading}</h3>
                        <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Contact nudge */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 p-8 text-center shadow-lg backdrop-blur-md">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/4 via-transparent to-transparent" />
                <div className="relative">
                  <Mail className="mx-auto mb-3 h-8 w-8 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-neutral-900">Have questions about these policies?</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Reach out to us directly and we will be happy to clarify anything.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)]"
                  >
                    <Mail size={14} /> Get in touch
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}







