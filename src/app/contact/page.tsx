/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  Mail, Phone, MapPin, MessageSquare, Clock, Send, ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
    linkedin: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.505c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.566H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.368-1.848 3.601 0 4.267 2.37 4.267 5.455v6.28zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.139.92-2.064 2.063-2.064 1.14 0 2.064.925 2.064 2.064 0 1.14-.925 2.065-2.064 2.065zm1.777 13.019H3.555V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    instagram: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.326.975.975 1.264 2.242 1.326 3.608.058 1.266.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.35 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.266.058-1.645.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.35-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.326-3.608.975-.975 2.242-1.264 3.608-1.326C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.772.13 4.69.337 3.78.707c-.91.37-1.715.89-2.418 1.593C.664 3.39.144 4.195.707 5.105.337 6.015.13 7.097.072 8.377.014 9.657 0 10.066 0 13.325s.014 3.668.072 4.948c.058 1.28.265 2.362.635 3.272.37.91.89 1.715 1.593 2.418.702.702 1.508 1.223 2.418 1.593.91.37 1.992.577 3.272.635 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.362-.265 3.272-.635.91-.37 1.715-.89 2.418-1.593.702-.702 1.223-1.508 1.593-2.418.37-.91.577-1.992.635-3.272.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.265-2.362-.635-3.272-.37-.91-.89-1.715-1.593-2.418-.702-.702-1.508-1.223-2.418-1.593-.91-.37-1.992-.577-3.272-.635C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
    ),
  };
  return icons[type] || null;
};

const renderSocialIcon = (icon: string | React.ElementType) => {
  if (typeof icon === 'string') {
    return <SocialIcon type={icon} />;
  }
  return React.createElement(icon, { className: "h-4 w-4", strokeWidth: 1.75 });
};

export const metadata: Metadata = {
  title: "Contact | RSK Technologies Group",
  description: `Get in touch with ${siteConfig.name}.`,
};

const contactCards = [
  {
    icon: Mail,
    title: "Email us",
    value: "hello@rsktechnologies.com",
    href: "mailto:hello@rsktechnologies.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "+256 762 536576",
    href: "tel:+256762536576",
    sub: "Mon – Fri, 8 am – 6 pm EAT",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: "Kampala, Uganda",
    href: "#",
    sub: "East Africa Time (UTC+3)",
  },
  {
    icon: Clock,
    title: "Support hours",
    value: "24 / 7",
    href: "#",
    sub: "For active project clients",
  },
];

const social = [
  { label: "GitHub", href: "https://github.com/rsktechnologies", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/rsk-technologies-group", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/rsktech_group1", icon: "instagram" },
  { label: "WhatsApp", href: "https://wa.me/256762536576", icon: MessageSquare },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">

      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[rgb(51,51,153)]/20 blur-3xl" />
          <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-[rgb(51,51,153)]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <MessageSquare size={14} /> <span>Get in touch</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Let's talk about{" "}
              <span className="text-[rgb(51,51,153)]">your next project</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              Tell us what you're building. We'll tell you honestly whether we're the right fit
              — and if we are, we'll get started fast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="border-y border-[rgb(51,51,153)]/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-[rgb(51,51,153)]/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
            <Reveal key={card.title} delay={0.06 * i}>
              <Link
                  <card.icon className="h-5 w-5 text-[rgb(51,51,153)]" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{card.title}</p>
                <p className="font-semibold text-neutral-900 group-hover:text-[rgb(51,51,153)] transition-colors">{card.value}</p>
                <p className="text-xs text-neutral-400">{card.sub}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">

          {/* Form — 2/3 width */}
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 p-8 shadow-[0_30px_80px_-40px_rgba(51,51,153,0.35)] backdrop-blur-md sm:p-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/4 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Send us a message</h2>
                <p className="mt-1 text-sm text-neutral-500">We typically respond within one business day.</p>

                {/* NOTE: Replace this form with your preferred form handler (Formspree, Resend, etc.) */}
                <div className="mt-8 space-y-5">
                  {/* Name row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="Ronald"
                        className="w-full rounded-xl border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none ring-0 transition-all focus:border-[rgb(51,51,153)]/50 focus:ring-2 focus:ring-[rgb(51,51,153)]/15"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Kato"
                        className="w-full rounded-xl border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[rgb(51,51,153)]/50 focus:ring-2 focus:ring-[rgb(51,51,153)]/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[rgb(51,51,153)]/50 focus:ring-2 focus:ring-[rgb(51,51,153)]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp (optional)"
                      className="w-full rounded-xl border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[rgb(51,51,153)]/50 focus:ring-2 focus:ring-[rgb(51,51,153)]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                      What are you looking for?
                    </label>
                    <select className="w-full rounded-xl border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-3 text-sm text-neutral-700 outline-none transition-all focus:border-[rgb(51,51,153)]/50 focus:ring-2 focus:ring-[rgb(51,51,153)]/15">
                      <option value="">Select a service…</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>MVP / Startup Acceleration</option>
                      <option>Cloud & DevOps</option>
                      <option>Cyber Security</option>
                      <option>UI / UX Design</option>
                      <option>Other / General enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project, timeline, and budget if you have one in mind…"
                      className="w-full resize-none rounded-xl border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all focus:border-[rgb(51,51,153)]/50 focus:ring-2 focus:ring-[rgb(51,51,153)]/15"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-[0_22px_55px_-24px_rgba(51,51,153,1)] sm:w-auto sm:px-8"
                  >
                    <Send size={15} />
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sidebar — 1/3 */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">

              {/* Follow us */}
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Follow us</p>
<div className="flex flex-wrap gap-3">
                   {social.map(({ label, href, icon }) => (
                     <Link
                       key={label}
                       href={href}
                       aria-label={label}
                       className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(51,51,153)]/15 bg-white text-neutral-500 transition-all duration-200 hover:border-[rgb(51,51,153)]/35 hover:bg-[rgb(51,51,153)]/8 hover:text-[rgb(51,51,153)]"
                     >
                       {renderSocialIcon(icon)}
                     </Link>
                   ))}
                 </div>
              </div>

              {/* Location card */}
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Our location</p>
                {/* Map placeholder — swap for a real embedded map */}
                <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/8 ring-1 ring-[rgb(51,51,153)]/15">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-1 h-8 w-8 text-[rgb(51,51,153)]/40" strokeWidth={1.5} />
                    <p className="text-xs text-neutral-400">Embed map here</p>
                  </div>
                </div>
                <p className="font-semibold text-neutral-900">Kampala, Uganda</p>
                <p className="text-xs text-neutral-500">East Africa — serving clients worldwide</p>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Quick links</p>
                <div className="space-y-2">
                  {[{ label: "Explore our services", href: "/services" }, { label: "About the team", href: "/about" }, { label: "Legal & privacy", href: "/legal" }].map(({ label, href }) => (
                    <Link key={label} href={href} className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-[rgb(51,51,153)]/6 hover:text-[rgb(51,51,153)]">
                      {label}
                      <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
