import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Mission, story, and team behind ${siteConfig.name}.`,
};

// ─── Data (replace with your real content) ───────────────────────────────────

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "8+", label: "Years of expertise" },
  { value: "15+", label: "Team members" },
];

const values = [
  {
    icon: "◎",
    title: "Clarity over complexity",
    body: "We believe the best engineering is invisible. We strip away noise so your users experience only what matters.",
  },
  {
    icon: "⬡",
    title: "Velocity with intention",
    body: "Speed without direction is just chaos. We move fast because we plan well, not instead of planning well.",
  },
  {
    icon: "◈",
    title: "Radical ownership",
    body: "We treat your product like it is ours. That means speaking up early, iterating relentlessly, and never hiding behind a ticket.",
  },
  {
    icon: "◇",
    title: "Long-term thinking",
    body: "Every architecture decision, every line of code, is written with the team that inherits it in mind — including yours.",
  },
];

const team = [
  {
    name: "DR RONALD",
    role: "Founder & CEO",
    bio: "",
    initials: "",
  },
  {
    name: "FORTUNATE",
    role: "",
    bio: "",
    initials: "",
  },
  {
    name: "ARTHUR",
    role: "",
    bio: "",
    initials: "",
  },
  {
    name: "ASINGURA ROSE DESIRE",
    role: "",
    bio: "",
    initials: "",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/20 blur-3xl" />
          <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-[rgb(51,51,153)]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              Our story
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Built by engineers, run like a&nbsp;product company.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              {siteConfig.name} was founded on a simple conviction: most technology
              partners choose between moving fast and building right. We refuse that
              trade-off.{" "}
              <span className="font-medium text-[rgb(51,51,153)]">
                We are a senior-led team that ships with the urgency of a startup and
                the discipline of an enterprise.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────────────── */}
      <section className="border-y border-[rgb(51,51,153)]/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-[rgb(51,51,153)]/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="flex flex-col items-center gap-1 px-6 py-10 text-center">
                <span className="text-4xl font-semibold tracking-tight text-[rgb(51,51,153)] sm:text-5xl">
                  {s.value}
                </span>
                <span className="text-sm text-neutral-600">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              Our mission
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
              Ensuring you succeed — not just on launch day.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
              We partner with product and engineering leaders who need a trusted
              extension of their team. Whether you are scaling a platform that has
              outgrown its foundations, launching a net-new product, or trying to
              reclaim velocity after a difficult period — we have been there, and we
              know how to help.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-700">
              Our model is deliberately senior-heavy. You will never be handed off to a
              junior team after the sales call. The people who scope your work are the
              people who build it.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-[1.75rem] border border-[rgb(51,51,153)]/15 bg-white/60 p-8 shadow-[0_30px_80px_-40px_rgba(51,51,153,0.55)] backdrop-blur-md sm:p-10">
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-[rgb(51,51,153)]/8 via-transparent to-transparent" />
              <div className="relative space-y-6">
                {[
                  { num: "01", text: "We align on your goals and constraints before writing a single line." },
                  { num: "02", text: "We build in focused sprints with weekly demos — no black-box development." },
                  { num: "03", text: "We hand over clean, documented, production-ready code your team can own." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 text-2xl font-semibold tabular-nums text-[rgb(51,51,153)]/30">
                      {item.num}
                    </span>
                    <p className="text-base leading-relaxed text-neutral-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-[rgb(51,51,153)]/10 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              What we believe
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
              Principles we actually work by.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.07 * i}>
                <div className="group flex h-full flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-[0_12px_40px_-34px_rgba(51,51,153,0.9)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1">
                  <span className="mb-4 inline-block text-2xl text-[rgb(51,51,153)]">{v.icon}</span>
                  <h3 className="mb-2 text-base font-semibold text-neutral-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(51,51,153)] shadow-sm backdrop-blur">
            The team
          </p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
            People you will actually work with.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-700">
            Replace these cards with your real team photos and bios. Every person listed
            below is someone who touches client projects.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.07 * i}>
              <div className="group flex flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-[0_12px_40px_-34px_rgba(51,51,153,0.75)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1">
                {/* Swap this div for <Image> once you have real photos */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgb(51,51,153)]/10 text-xl font-semibold text-[rgb(51,51,153)] ring-1 ring-[rgb(51,51,153)]/20 shadow-[0_8px_30px_-12px_rgba(51,51,153,0.6)]">
                  {member.initials}
                </div>
                <p className="text-base font-semibold text-neutral-900">{member.name}</p>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[rgb(51,51,153)]">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[rgb(51,51,153)]/10">
        <div className="relative isolate mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(51,51,153,0.10),transparent_60%)]" />
          </div>
          <Reveal>
            <div className="relative rounded-[1.75rem] border border-[rgb(51,51,153)]/15 bg-white/60 px-8 py-12 text-center shadow-[0_30px_80px_-40px_rgba(51,51,153,0.45)] backdrop-blur-md sm:px-16 sm:py-16">
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-[rgb(51,51,153)]/8 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  Ready to build something that lasts?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
                  Tell us what you are working on. We will tell you honestly whether we
                  are the right fit — and if we are, we will hit the ground running.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border-0 bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-[0_22px_55px_-24px_rgba(51,51,153,1)]"
                  >
                    Book a discovery call
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(51,51,153)]/35 bg-transparent px-7 text-sm font-semibold text-[rgb(51,51,153)] transition-colors hover:bg-[rgb(51,51,153)]/10"
                  >
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