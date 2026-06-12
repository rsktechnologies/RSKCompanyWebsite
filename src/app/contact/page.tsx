/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | RSK Technologies Group",
  description: `Get in touch with ${siteConfig.name}.`,
};

// â”€â”€â”€ Social icons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.505c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.566H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.368-1.848 3.601 0 4.267 2.37 4.267 5.455v6.28zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.139.92-2.064 2.063-2.064 1.14 0 2.064.925 2.064 2.064 0 1.14-.925 2.065-2.064 2.065zm1.777 13.019H3.555V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.326.975.975 1.264 2.242 1.326 3.608.058 1.266.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.35 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.266.058-1.645.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.35-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.326-3.608.975-.975 2.242-1.264 3.608-1.326C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.772.13 4.69.337 3.78.707c-.91.37-1.715.89-2.418 1.593C.664 3.39.144 4.195.707 5.105.337 6.015.13 7.097.072 8.377.014 9.657 0 10.066 0 13.325s.014 3.668.072 4.948c.058 1.28.265 2.362.635 3.272.37.91.89 1.715 1.593 2.418.702.702 1.508 1.223 2.418 1.593.91.37 1.992.577 3.272.635 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.362-.265 3.272-.635.91-.37 1.715-.89 2.418-1.593.702-.702 1.223-1.508 1.593-2.418.37-.91.577-1.992.635-3.272.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.265-2.362-.635-3.272-.37-.91-.89-1.715-1.593-2.418-.702-.702-1.508-1.223-2.418-1.593-.91-.37-1.992-.577-3.272-.635C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
      </svg>
    ),
    whatsapp: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  };
  return <>{icons[type] || null}</>;
};

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "rsktechgroup@gmail.com",
    href: "mailto:rsktechgroup@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+256 762 536 576",
    href: "tel:+256762536576",
    sub: "Mon â€“ Fri, 8 am â€“ 6 pm EAT",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Kampala, Uganda",
    href: "#",
    sub: "East Africa Time (UTC+3)",
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "24 / 7",
    href: "#",
    sub: "For active project clients",
  },
];

const social = [
  {
    label: "GitHub",
    href: "https://github.com/rsktechnologies",
    iconKey: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rsk-technologies-group",
    iconKey: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rsktech_group1",
    iconKey: "instagram",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/256762536576",
    iconKey: "whatsapp",
  },
];

const quickLinks = [
  { label: "Explore our services", href: "/services" },
  { label: "About the team", href: "/about" },
  { label: "Legal & privacy", href: "/legal" },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <form name="rsk-contact" data-netlify="true" netlify-honeypot="botField" hidden>
        <input type="hidden" name="form-name" value="rsk-contact" />
        <input name="name" />
        <input name="email" />
        <input name="company" />
        <input name="service" />
        <textarea name="message" />
        <input name="botField" />
      </form>
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
              <MessageSquare size={14} />
              <span>Get in touch</span>
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
              Tell us what you're building. We'll tell you honestly whether
              we're the right fit â€” and if we are, we'll get started fast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="border-y border-[rgb(51,51,153)]/10 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[rgb(51,51,153)]/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
          {contactCards.map((card, i) => (
            <Reveal key={card.title} delay={0.06 * i}>
              <Link
                href={card.href}
                className="group flex flex-col gap-1.5 px-6 py-10"
              >
                <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/10 ring-1 ring-[rgb(51,51,153)]/20">
                  <card.icon
                    className="h-5 w-5 text-[rgb(51,51,153)]"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {card.title}
                </p>
                <p className="font-semibold text-neutral-900 transition-colors group-hover:text-[rgb(51,51,153)]">
                  {card.value}
                </p>
                <p className="text-xs text-neutral-400">{card.sub}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Form â€” 2/3 width â€” uses ContactForm client component */}
          <Reveal className="lg:col-span-2">
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 p-8 shadow-[0_30px_80px_-40px_rgba(51,51,153,0.35)] backdrop-blur-md sm:p-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/4 via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  Send us a message
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  We typically respond within one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sidebar â€” 1/3 */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              {/* Follow us */}
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Follow us
                </p>
                <div className="flex flex-wrap gap-3">
                  {social.map(({ label, href, iconKey }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(51,51,153)]/15 bg-white text-neutral-500 transition-all duration-200 hover:border-[rgb(51,51,153)]/35 hover:bg-[rgb(51,51,153)]/8 hover:text-[rgb(51,51,153)]"
                    >
                      <SocialIcon type={iconKey} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Our location
                </p>
                <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-[rgb(51,51,153)]/8 ring-1 ring-[rgb(51,51,153)]/15">
                  <div className="text-center">
                    <MapPin
                      className="mx-auto mb-1 h-8 w-8 text-[rgb(51,51,153)]/40"
                      strokeWidth={1.5}
                    />
                    <p className="text-xs text-neutral-400">Kampala, Uganda</p>
                  </div>
                </div>
                <p className="font-semibold text-neutral-900">
                  Kampala, Uganda
                </p>
                <p className="text-xs text-neutral-500">
                  East Africa â€” serving clients worldwide
                </p>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-6 shadow-lg backdrop-blur-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Quick links
                </p>
                <div className="space-y-2">
                  {quickLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-[rgb(51,51,153)]/6 hover:text-[rgb(51,51,153)]"
                    >
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



