/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Globe,
  Lightbulb,
  MessageSquare,
  Shield,
  Smile,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | RSK Technologies Group",
  description: `Mission, story, and team behind ${siteConfig.name}.`,
};

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Briefcase },
  { value: "98%", label: "Client Satisfaction", icon: Smile },
  { value: "8+", label: "Years of Expertise", icon: Award },
  { value: "24/7", label: "Support Coverage", icon: Globe },
];

const values = [
  {
    icon: Target,
    title: "Clarity over complexity",
    body: "We strip away noise so your users experience only what matters. No over-engineering, no hidden agendas.",
  },
  {
    icon: Zap,
    title: "Velocity with intention",
    body: "Speed without direction is chaos. We move fast because we plan well — not instead of planning well.",
  },
  {
    icon: Shield,
    title: "Radical ownership",
    body: "We treat your product like it's ours. Speaking up early, iterating relentlessly, never hiding behind a ticket.",
  },
  {
    icon: TrendingUp,
    title: "Long-term thinking",
    body: "Every line of code is written with the team that inherits it in mind — including yours.",
  },
];

const team = [
  {
    name: "Dr. Ronald",
    role: "Founder & CEO",
    bio: "15+ years shipping enterprise products. Former engineering leader at multiple successful exits.",
    initials: "RK",
  },
  {
    name: "Fortunate",
    role: "",
    bio: "Former principal engineer at two unicorns. Builds teams as carefully as she builds systems.",
    initials: "SN",
  },
  {
    name: "Arthur",
    role: "",
    bio: "",
    initials: "KO",
  },
  {
    name: "Asingura Rose Desire ",
    role: "",
    bio: "Translates fuzzy business goals into crisp roadmaps. Never met a backlog she couldn't tame.",
    initials: "AD",
  },
];

export default function AboutPage() {
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
              <Users size={14} />
              <span>Our story</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Built by engineers, run like a{" "}
              <span className="text-[rgb(51,51,153)]">product company</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              {siteConfig.name} was founded on a simple conviction: most
              technology partners choose between moving fast and building right.
              We refuse that trade-off.{" "}
              <span className="font-medium text-[rgb(51,51,153)]">
                We ship with the urgency of a startup and the discipline of an
                enterprise.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-[rgb(51,51,153)]/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-[rgb(51,51,153)]/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
                <s.icon
                  className="h-8 w-8 text-[rgb(51,51,153)]"
                  strokeWidth={1.5}
                />
                <span className="text-4xl font-semibold tracking-tight text-[rgb(51,51,153)] sm:text-5xl">
                  {s.value}
                </span>
                <span className="text-sm font-medium text-neutral-600">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Target size={14} />
              <span>Our mission</span>
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
              Ensuring you succeed — not just on launch day.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
              We partner with product and engineering leaders who need a trusted
              extension of their team. Whether you're scaling a platform that
              has outgrown its foundations or launching a net-new product —
              we've been there, and we know how to help.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Senior-led — no junior handoffs after the sales call",
                "Weekly demos — no black-box development",
                "Clean, documented, production-ready code",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-[rgb(51,51,153)]"
                    strokeWidth={1.5}
                  />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 p-8 shadow-xl backdrop-blur-md sm:p-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/8 via-transparent to-transparent" />
              <div className="relative space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10">
                    <MessageSquare
                      className="h-5 w-5 text-[rgb(51,51,153)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      Discovery & Alignment
                    </p>
                    <p className="text-sm text-neutral-600">
                      We understand your goals before writing a single line.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10">
                    <Zap
                      className="h-5 w-5 text-[rgb(51,51,153)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      Rapid Iteration
                    </p>
                    <p className="text-sm text-neutral-600">
                      Focused sprints with weekly demos — no surprises.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10">
                    <Shield
                      className="h-5 w-5 text-[rgb(51,51,153)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      Production-Ready Handoff
                    </p>
                    <p className="text-sm text-neutral-600">
                      Code your team can own, deploy, and scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-[rgb(51,51,153)]/10 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Lightbulb size={14} />
              <span>What we believe</span>
            </div>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
              Principles we actually work by.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.07 * i}>
                <div className="group flex h-full flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10">
                    <v.icon
                      className="h-6 w-6 text-[rgb(51,51,153)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-neutral-900">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
            <Users size={14} />
            <span>The team</span>
          </div>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
            People you'll actually work with.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.07 * i}>
              <div className="group flex flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10 text-lg font-semibold text-[rgb(51,51,153)] ring-1 ring-[rgb(51,51,153)]/20">
                  {member.initials}
                </div>
                <p className="text-base font-semibold text-neutral-900">
                  {member.name}
                </p>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[rgb(51,51,153)]">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[rgb(51,51,153)]/10">
        <div className="relative isolate mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(51,51,153,0.10),transparent_60%)]" />
          </div>
          <Reveal>
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 px-8 py-12 text-center shadow-xl backdrop-blur-md sm:px-16 sm:py-16">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/8 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  Ready to build something that lasts?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
                  Tell us what you're working on. We'll tell you honestly
                  whether we're the right fit — and if we are, we'll hit the
                  ground running.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-xl"
                  >
                    <MessageSquare size={16} />
                    Book a discovery call
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[rgb(51,51,153)]/35 bg-transparent px-7 text-sm font-semibold text-[rgb(51,51,153)] transition-all duration-200 hover:bg-[rgb(51,51,153)]/10"
                  >
                    <ChevronRight size={16} />
                    Explore services
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
