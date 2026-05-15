import Link from "next/link";
import { siteConfig } from "@/config/site";
import { X, LinkIcon, Mail } from "lucide-react";

const socialLinks = [
  { icon: LinkIcon, label: "LinkedIn", href: "#" },
  { icon: X, label: "X (Twitter)", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@rsktechnologies.com" },
];

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Legal", href: "/legal" },
  ],
  services: [
    { label: "Web Development", href: "/services" },
    { label: "App Development", href: "/services" },
    { label: "MVP Development", href: "/services" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgb(51,51,153)]/10 bg-white/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-[rgb(51,51,153)]">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-neutral-600">
              {siteConfig.description}
            </p>
                <div className="mt-6 flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgb(51,51,153)]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(51,51,153)] hover:text-white"
                    >
                      <social.icon className="h-4 w-4 text-[rgb(51,51,153)] transition-colors hover:text-white" />
                    </Link>
                  ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-neutral-900">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-[rgb(51,51,153)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-neutral-900">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-[rgb(51,51,153)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgb(51,51,153)]/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/legal"
                className="text-sm text-neutral-500 transition-colors hover:text-[rgb(51,51,153)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="text-sm text-neutral-500 transition-colors hover:text-[rgb(51,51,153)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}