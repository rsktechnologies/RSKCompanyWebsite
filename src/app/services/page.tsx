/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  Layers,
  ArrowRight,
  Zap,
  MessageSquare,
  Database,
  Code2,
  Globe,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { ServiceCard } from "@/components/services/serviceCard";
import { PageHeroVisual } from "@/components/layout/PageHeroVisual";

export const metadata: Metadata = {
  title: "Services | RSK Technologies Group",
  description: `Technology services offered by ${siteConfig.name}.`,
};

// âœ… iconName is a plain string â€” safe to pass from Server â†’ Client Component
const services = [
  {
    iconName: "Code2" as const,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies. From marketing sites to complex SaaS platforms.",
    features: [
      "React/Next.js",
      "TypeScript",
      "Responsive Design",
      "SEO Optimization",
    ],
    tag: "#Software",
    image: "/services/web-development.png",
  },
  {
    iconName: "Smartphone" as const,
    title: "App Development",
    description:
      "Native and cross-platform mobile experiences that users love â€” built for iOS, Android, and everything in between.",
    features: ["React Native", "Flutter", "iOS Swift", "Android Kotlin"],
    tag: "#Mobile",
    image: "/services/app-development.png",
  },
  {
    iconName: "Rocket" as const,
    title: "MVP & Startup Acceleration",
    description:
      "From idea to launch in weeks, not months. Perfect for founders ready to test the market and attract early investment.",
    features: [
      "Lean Methodology",
      "Rapid Prototyping",
      "Investor-Ready",
      "Iterative Launch",
    ],
    tag: "#MVP",
    image: "/services/mvp-startup.png",
  },
  {
    iconName: "Cloud" as const,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices that keep your product reliable and fast.",
    features: [
      "AWS / GCP / Azure",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Monitoring",
    ],
    tag: "#Cloud",
    image: "/services/cloud-devops.png",
  },
  {
    iconName: "ShieldCheck" as const,
    title: "Cyber Security",
    description:
      "Protect your business and your users. Security audits, penetration testing, and hardening for modern digital products.",
    features: [
      "Penetration Testing",
      "Security Audits",
      "Compliance",
      "Threat Modelling",
    ],
    tag: "#CyberSecurity",
    image: "/services/cyber-security.png",
  },
  {
    iconName: "Palette" as const,
    title: "UI / UX Design",
    description:
      "Interfaces people love using. Research-backed design systems and pixel-perfect execution from wireframe to production.",
    features: [
      "User Research",
      "Design Systems",
      "Figma Prototypes",
      "Usability Testing",
    ],
    tag: "#Design",
    image: "/services/ui-ux-design.png",
  },
];

// Process section still renders on the server â€” icons used directly here (no Client boundary crossed)
const process = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We align on goals, constraints, and success metrics before anything else.",
  },
  {
    step: "02",
    icon: Database,
    title: "Architecture",
    description: "We design scalable systems that won't break under growth.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Development",
    description:
      "Focused sprints with weekly demos and real-time feedback loops.",
  },
  {
    step: "04",
    icon: Globe,
    title: "Launch",
    description:
      "We deploy, monitor, and ensure everything runs perfectly at go-live.",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Evolve",
    description: "We stay onboard to iterate, optimize, and scale as you grow.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/20 blur-3xl" />
          <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-[rgb(51,51,153)]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>
        <div className="relative mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:px-10">
          <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Star size={14} /> <span>What we offer</span>
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
              From web development to mobile apps, cloud infrastructure, and
              security â€” we build digital solutions that help businesses scale,
              innovate, and compete.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "#Design",
                "#Software",
                "#Cloud",
                "#CyberSecurity",
                "#Mobile",
                "#MVP",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-3 py-1 text-xs font-semibold text-[rgb(51,51,153)] backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          </div>
          <PageHeroVisual variant="services" />
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * i}>
              {/* âœ… Only plain serializable props: iconName (string), title, description, features, tag, image */}
              <ServiceCard
                iconName={service.iconName}
                title={service.title}
                description={service.description}
                features={service.features}
                tag={service.tag}
                image={service.image}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process â€” server-rendered, icons used directly (no Client boundary) */}
      <section className="border-t border-[rgb(51,51,153)]/10 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Layers size={14} /> <span>How we work</span>
            </div>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
              A process designed for results.
            </h2>
            <p className="mt-3 max-w-xl text-base text-neutral-600">
              Every engagement follows the same proven playbook â€” so you always
              know what happens next.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={0.06 * i}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(51,51,153)]/10 ring-1 ring-[rgb(51,51,153)]/20 shadow-[0_8px_24px_-10px_rgba(51,51,153,0.4)]">
                    <item.icon
                      className="h-5 w-5 text-[rgb(51,51,153)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="mb-0.5 text-xs font-bold tabular-nums text-[rgb(51,51,153)]/40">
                    {item.step}
                  </p>
                  <h3 className="mb-1 font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(51,51,153)]/10">
        <div className="relative isolate mx-auto max-w-[1600px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 px-8 py-14 text-center shadow-xl backdrop-blur-md sm:px-16">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/6 via-transparent to-transparent" />
              <div className="relative">
                <Zap
                  className="mx-auto h-10 w-10 text-[rgb(51,51,153)]"
                  strokeWidth={1.5}
                />
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  Ready to accelerate your technology?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-pretty text-base text-neutral-600">
                  Let's discuss your project and see how we can help you build,
                  ship, and scale.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-xl"
                  >
                    Start a conversation <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[rgb(51,51,153)]/35 px-7 text-sm font-semibold text-[rgb(51,51,153)] transition-colors hover:bg-[rgb(51,51,153)]/10"
                  >
                    About us <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          </div>
          <PageHeroVisual variant="services" />
        </div>
      </section>
    </div>
  );
}





