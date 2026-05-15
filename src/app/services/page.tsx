/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  Layers,
  Rocket,
  Shield,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | RSK Technologies Group",
  description: `Technology services offered by ${siteConfig.name}.`,
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Full-cycle development from concept to deployment. Scalable, maintainable, and built to last.",
    features: ["React/Next.js", "Node.js/Python", "TypeScript", "API Development"],
    color: "rgb(51,51,153)",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description: "AWS, Azure, and GCP expertise. Infrastructure as code, CI/CD pipelines, and zero-downtime deployments.",
    features: ["Kubernetes", "Terraform", "GitHub Actions", "Cloud Monitoring"],
    color: "rgb(51,51,153)",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that users love. iOS, Android, and React Native.",
    features: ["React Native", "Flutter", "iOS Swift", "Android Kotlin"],
    color: "rgb(51,51,153)",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Turn your data into actionable insights. Data pipelines, warehousing, and BI dashboards.",
    features: ["ETL Pipelines", "Snowflake/BigQuery", "Tableau/PowerBI", "ML Integration"],
    color: "rgb(51,51,153)",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Protect your business with enterprise-grade security. SOC2, GDPR, and ISO compliance ready.",
    features: ["Penetration Testing", "Security Audits", "Compliance Automation", "Zero Trust"],
    color: "rgb(51,51,153)",
  },
  {
    icon: Rocket,
    title: "MVP & Startup Acceleration",
    description: "From idea to launch in weeks, not months. Perfect for founders ready to test the market.",
    features: ["Lean Methodology", "Rapid Prototyping", "Investor-Ready", "Iterative Launch"],
    color: "rgb(51,51,153)",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We align on goals, constraints, and success metrics." },
  { step: "02", title: "Architecture", description: "We design scalable systems that won't break tomorrow." },
  { step: "03", title: "Development", description: "We build in sprints with weekly demos and feedback." },
  { step: "04", title: "Launch", description: "We deploy, monitor, and ensure everything runs perfectly." },
  { step: "05", title: "Evolve", description: "We stay onboard to iterate and scale as you grow." },
];

export default function ServicesPage() {
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
              <Star size={14} />
              <span>What we offer</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Technology services that{" "}
              <span className="text-[rgb(51,51,153)]">deliver results</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              From custom development to cloud architecture, we provide end-to-end
              technology solutions that help businesses scale, innovate, and compete.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10">
                  <service.icon className="h-6 w-6 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">{service.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-[rgb(51,51,153)]/5 px-2.5 py-0.5 text-xs font-medium text-[rgb(51,51,153)]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t border-[rgb(51,51,153)]/10 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Layers size={14} />
              <span>How we work</span>
            </div>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
              A process designed for results.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={0.06 * i}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(51,51,153)]/10 text-lg font-bold text-[rgb(51,51,153)]">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-neutral-500">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[rgb(51,51,153)]/10">
        <div className="relative isolate mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 px-8 py-12 text-center shadow-xl backdrop-blur-md sm:px-16 sm:py-16">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/8 via-transparent to-transparent" />
              <div className="relative">
                <Zap className="mx-auto h-10 w-10 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  Ready to accelerate your technology?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-pretty text-base text-neutral-600">
                  Let's discuss your project and see how we can help.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-xl"
                  >
                    Start a conversation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}