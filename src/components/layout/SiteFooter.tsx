"use client";

import Link from "next/link";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Code2,
  Cpu,
  Shield,
  Palette,
  ArrowUpRight,
} from "lucide-react";
import { LogoLink } from "@/components/brand/LogoLink";
import { siteConfig } from "@/config/site";

const explore = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

const services = [
  { label: "Web Development", icon: Code2 },
  { label: "App Development", icon: Code2 },
  { label: "MVP Development", icon: Code2 },
  { label: "Cloud & DevOps", icon: Cpu },
  { label: "Cyber Security", icon: Shield },
  { label: "UI / UX Design", icon: Palette },
];

const social = [
  { label: "GitHub", href: "https://github.com/rsktechnologies", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/rsk-technologies-group", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/rsktech_group1", icon: "instagram" },
  { label: "WhatsApp", href: "https://wa.me/256762536576", icon: MessageCircle },
];

const contact = [
  { icon: Mail, text: "rsktechgroup@gmail.com", href: "mailto:rsktechgroup@gmail.com" },
  { icon: Phone, text: "+256 762 536 576", href: "tel:+256762536576" },
  { icon: MapPin, text: "Kampala, Uganda", href: "#" },
];

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
    linkedin: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.505c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.566H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.368-1.848 3.601 0 4.267 2.37 4.267 5.455v6.28zM5.337 7.433c-1.144 0-2.063-.925-2.063-2.065 0-1.139.92-2.064 2.063-2.064 1.14 0 2.064.925 2.064 2.064 0 1.14-.925 2.065-2.064 2.065zm1.777 13.019H3.555V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    instagram: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.326.975.975 1.264 2.242 1.326 3.608.058 1.266.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.35 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.266.058-1.645.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.35-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.326-3.608.975-.975 2.242-1.264 3.608-1.326C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.772.13 4.69.337 3.78.707c-.91.37-1.715.89-2.418 1.593C.664 3.39.144 4.195.707 5.105.337 6.015.13 7.097.072 8.377.014 9.657 0 10.066 0 13.325s.014 3.668.072 4.948c.058 1.28.265 2.362.635 3.272.37.91.89 1.715 1.593 2.418.702.702 1.508 1.223 2.418 1.593.91.37 1.992.577 3.272.635 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.362-.265 3.272-.635.91-.37 1.715-.89 2.418-1.593.702-.702 1.223-1.508 1.593-2.418.37-.91.577-1.992.635-3.272.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.265-2.362-.635-3.272-.37-.91-.89-1.715-1.593-2.418-.702-.702-1.508-1.223-2.418-1.593-.91-.37-1.992-.577-3.272-.635C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
    ),
  };
  return icons[type] || null;
};

const renderSocialIcon = (icon: string | React.ElementType) => {
  if (typeof icon === "string") {
    return <SocialIcon type={icon} />;
  }
  return React.createElement(icon, { className: "h-4 w-4", strokeWidth: 1.75 });
};

export function SiteFooter() {
  return (
    /*
      Footer background: rgb(18, 18, 60) — a very dark indigo that is the natural
      "shadow" of the brand blue rgb(51,51,153). It blends seamlessly with the brand
      palette rather than clashing. Text contrast is excellent against this deep indigo.
      Icons use a mid-indigo rgb(130,130,210) so they're visible but still on-brand.
    */
    <footer className="relative mt-auto text-white" style={{ backgroundColor: "rgb(14, 14, 50)" }}>

      {/* Top accent — brand blue glow line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgb(51,51,153)] to-transparent opacity-80" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-20">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <LogoLink imageClassName="brightness-125" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-indigo-200/60">
              {siteConfig.description} We are a senior-led team based in East Africa,
              building digital products for teams worldwide.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {social.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-indigo-300/60 ring-1 ring-indigo-400/20 transition-all duration-200 hover:bg-[rgb(51,51,153)]/40 hover:text-white hover:ring-[rgb(51,51,153)]/60"
                  style={{ backgroundColor: "rgba(51,51,153,0.15)" }}
                >
                  {renderSocialIcon(icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Explore
            </p>
            <ul className="space-y-2.5">
              {explore.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-indigo-200/60 transition-colors hover:text-white"
                  >
                    <span>{label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 text-sm text-indigo-200/60 transition-colors hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 opacity-70 group-hover:opacity-100" style={{ color: "rgb(130,130,210)" }} strokeWidth={1.75} />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Get in touch
            </p>
            <ul className="space-y-3">
              {contact.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="group flex items-start gap-2.5 text-sm text-indigo-200/60 transition-colors hover:text-white"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100" style={{ color: "rgb(130,130,210)" }} strokeWidth={1.75} />
                    <span>{text}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Location tag */}
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ring-1 ring-[rgb(51,51,153)]/35" style={{ backgroundColor: "rgba(51,51,153,0.2)", color: "rgb(160,160,220)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "rgb(100,100,200)" }} />
              {siteConfig.name} · Kampala, Uganda
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t py-6 sm:flex-row" style={{ borderColor: "rgba(51,51,153,0.25)" }}>
          <p className="text-xs" style={{ color: "rgb(100,100,150)" }}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="text-xs transition-colors hover:text-indigo-200" style={{ color: "rgb(100,100,150)" }}>
              Privacy Policy
            </Link>
            <Link href="/legal" className="text-xs transition-colors hover:text-indigo-200" style={{ color: "rgb(100,100,150)" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
