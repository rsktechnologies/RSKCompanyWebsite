import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { ChevronRight, FileText, Lock, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal | RSK Technologies Group",
  description: `Legal information for ${siteConfig.name}.`,
};

const legalDocuments = [
  {
    icon: FileText,
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    href: "#",
  },
  {
    icon: Scale,
    title: "Terms of Service",
    description: "The legal agreements that govern your use of our services.",
    href: "#",
  },
  {
    icon: Lock,
    title: "Data Processing Agreement",
    description: "GDPR-compliant data processing terms for enterprise clients.",
    href: "#",
  },
];

export default function LegalPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/20 blur-3xl" />
          <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-[rgb(51,51,153)]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Scale size={14} />
              <span>Legal</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Transparency you can{" "}
              <span className="text-[rgb(51,51,153)]">trust</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              {siteConfig.name} is committed to operating with integrity, security,
              and full compliance with applicable laws and regulations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {legalDocuments.map((doc, i) => (
            <Reveal key={doc.title} delay={0.08 * i}>
              <Link
                href={doc.href}
                className="group flex items-center justify-between rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10">
                    <doc.icon className="h-6 w-6 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-neutral-900">{doc.title}</h2>
                    <p className="text-sm text-neutral-600">{doc.description}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[rgb(51,51,153)]" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24} className="mt-12">
          <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 text-center shadow-lg backdrop-blur-sm">
            <p className="text-sm text-neutral-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}