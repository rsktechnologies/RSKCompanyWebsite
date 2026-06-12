/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award, Briefcase, Globe, Smile, Target, Zap, Shield, TrendingUp,
  Users, Lightbulb, Handshake, Heart, MessageSquare, ChevronRight, CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { TeamCard } from "@/components/team/TeamCard"; // â† adjust path to wherever you place TeamCard.tsx

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
  { icon: Target, title: "Clarity over complexity", body: "We strip away noise so your users experience only what matters. No over-engineering, no hidden agendas." },
  { icon: Zap, title: "Velocity with intention", body: "Speed without direction is chaos. We move fast because we plan well â€” not instead of planning well." },
  { icon: Shield, title: "Radical ownership", body: "We treat your product like it's ours. Speaking up early, iterating relentlessly, never hiding behind a ticket." },
  { icon: TrendingUp, title: "Long-term thinking", body: "Every line of code is written with the team that inherits it in mind â€” including yours." },
];

const culturalPrinciples = [
  { icon: Lightbulb, title: "Constant Innovation", body: "We're dedicated to fostering talent, creativity, and meaningful connections that push boundaries." },
  { icon: Handshake, title: "Collaboration", body: "Success is built on teamwork and diverse perspectives. We win together." },
  { icon: Heart, title: "Servant Leadership", body: "We lead through service, putting our community's needs first to empower those around us." },
];

const team = [
  {
    name: "Dr. Ronald",
    role: "Founder & CEO",
    bio: "With 15+ years spanning technology, biology, dental surgery, and business systems, Ronald bridges disciplines to build digital products that scale. His leadership combines deep technical expertise with strategic vision â€” and he's as passionate about rugby as he is about great software.",
    initials: "DR",
    image: "/team/Dr.png",
  },
  {
    name: "Fortunate",
    role: "Lead Fullstack Developer",
    bio: "Experienced fullstack developer specializing in modern web technologies including React, Node.js, and database optimization. Passionate about building scalable applications that solve real-world problems for businesses across Africa.",
    initials: "FO",
    image: "/team/Fortune.png",
  },
  {
    name: "Arthur",
    role: "DevOps & Cloud Engineer",
    bio: "Cloud infrastructure expert with deep knowledge of AWS, CI/CD pipelines, and system architecture. Ensures our deployments are reliable, secure, and optimized for performance across all client projects.",
    initials: "AR",
    image: "/team/Arthur.png",
  },
  {
    name: "Asingura Rose Desire",
    role: "Mobile App & Fullstack Developer",
    bio: "Skilled mobile and fullstack developer with expertise in React Native, Flutter, and modern web technologies. Passionate about creating intuitive user experiences and robust backend systems that drive business growth.",
    initials: "RD",
    image: "/team/Desire.png",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">

      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[rgb(51,51,153)]/20 blur-3xl" />
          <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-[rgb(51,51,153)]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Users size={14} />
              <span>Our story</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Built by engineers, run like a <span className="text-[rgb(51,51,153)]">product company</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              Founded in Uganda, RSK Technologies Group-SMC LTD was born out of a simple but powerful idea: businesses deserve smarter, faster, and more reliable digital solutions. We saw how organizations struggled to harness modern technology, and we set out to change that.
              <br /><br />
              From our early days building websites and apps, we've expanded into AI systems, automation tools, and digital campaigns â€” helping companies streamline operations, amplify their online presence, and unlock new opportunities. What started as a local initiative has grown into a bold vision: to become a trusted technology partner across Africa and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)]">
                <MessageSquare size={15} /> Work with us
              </Link>
              <Link href="/services" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[rgb(51,51,153)]/30 px-6 text-sm font-semibold text-[rgb(51,51,153)] transition-colors hover:bg-[rgb(51,51,153)]/8">
                Our services <ChevronRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[rgb(51,51,153)]/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[rgb(51,51,153)]/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
                <s.icon className="h-7 w-7 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                <span className="text-4xl font-semibold tracking-tight text-[rgb(51,51,153)] sm:text-5xl">{s.value}</span>
                <span className="text-sm font-medium text-neutral-500">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Target size={14} /> <span>Our mission</span>
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
              To design and deliver intelligent digital solutions â€” websites, apps, AI systems, and automation tools â€” that empower businesses to operate smarter, scale faster, and achieve measurable growth.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
              {siteConfig.name} is a technology consultancy focused on bridging the gap between industry needs and cutting-edge solutions. We integrate seasoned professionals into real-world projects â€” a thriving community of innovators driving meaningful impact through technology.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-700">
              At the core of everything we do are the values that guide our mission and shape our approach. Our model is deliberately senior-heavy: the people who scope your work are the people who build it.
            </p>
            <div className="mt-6 space-y-3">
              {["Senior-led â€” no junior handoffs after the sales call", "Weekly demos â€” no black-box development", "Clean, documented, production-ready code"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 p-8 shadow-[0_30px_80px_-40px_rgba(51,51,153,0.45)] backdrop-blur-md sm:p-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/6 via-transparent to-transparent" />
              <p className="relative mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(51,51,153)]">How we work</p>
              <div className="relative space-y-7">
                {[
                  { icon: MessageSquare, num: "01", title: "Discovery & Alignment", body: "We understand your goals before writing a single line." },
                  { icon: Zap, num: "02", title: "Rapid Iteration", body: "Focused sprints with weekly demos â€” no surprises." },
                  { icon: Shield, num: "03", title: "Production-Ready Handoff", body: "Code your team can own, deploy, and scale." },
                ].map(({ icon: Icon, num, title, body }) => (
                  <div key={num} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10 ring-1 ring-[rgb(51,51,153)]/20">
                      <Icon className="h-5 w-5 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{title}</p>
                      <p className="mt-0.5 text-sm text-neutral-600">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission quote banner */}
      <section className="relative overflow-hidden bg-[rgb(51,51,153)]">
        <div className="pointer-events-none absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.15) 39px,rgba(255,255,255,0.15) 40px)" }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <p className="text-xl font-medium italic leading-relaxed text-white/90 sm:text-2xl lg:text-3xl">
              "Our mission is to empower the next generation of tech innovators â€” and ensure every team we partner with succeeds."
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/50">â€” Dr. Ronald, Founder & CEO</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[rgb(51,51,153)]/10 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Lightbulb size={14} /> <span>Our values</span>
            </div>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">Principles we actually work by.</h2>
            <p className="mt-3 max-w-xl text-base text-neutral-600">Fun is in our DNA â€” and our values make it meaningful.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.07 * i}>
                <div className="group flex h-full flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[rgb(51,51,153)]/30 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10 ring-1 ring-[rgb(51,51,153)]/20 transition-colors group-hover:bg-[rgb(51,51,153)]/15">
                    <v.icon className="h-6 w-6 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-neutral-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Principles */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">Our cultural principles.</h2>
          <p className="mt-3 max-w-xl text-base text-neutral-600">The way we show up for each other shapes how we show up for you.</p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {culturalPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={0.07 * i}>
              <div className="group flex flex-col items-center rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[rgb(51,51,153)]/10 ring-2 ring-[rgb(51,51,153)]/20 shadow-[0_8px_30px_-12px_rgba(51,51,153,0.5)] transition-all duration-200 group-hover:bg-[rgb(51,51,153)]/15 group-hover:shadow-[0_12px_40px_-14px_rgba(51,51,153,0.65)]">
                  <p.icon className="h-9 w-9 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[rgb(51,51,153)]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-[rgb(51,51,153)]/10 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <Users size={14} /> <span>The team</span>
            </div>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">Meet the people behind the work.</h2>
            <p className="mt-3 max-w-xl text-base text-neutral-600">No account managers, no handoffs â€” just the senior engineers who build your product, in the room when it matters.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={0.07 * i}>
                {/* TeamCard is a Client Component â€” safe to use onError / useState here */}
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(51,51,153)]/10">
        <div className="relative isolate mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(51,51,153,0.10),transparent_60%)]" />
          </div>
          <Reveal>
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 px-8 py-14 text-center shadow-xl backdrop-blur-md sm:px-16">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/6 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Ready to build something that lasts?</h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg">
                  Tell us what you're working on. We'll tell you honestly whether we're the right fit â€” and if we are, we'll hit the ground running.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)]">
                    <MessageSquare size={15} /> Book a discovery call
                  </Link>
                  <Link href="/services" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[rgb(51,51,153)]/35 px-7 text-sm font-semibold text-[rgb(51,51,153)] transition-colors hover:bg-[rgb(51,51,153)]/10">
                    Explore services <ChevronRight size={15} />
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

