export const siteConfig = {
  name: "RSK TECHNOLOGIES GROUP",
  tagline: "Ensuring You Succeed.",
  description:
    "We design, build, and operate modern digital products for teams that need reliability, speed, and clarity.",
  primaryCta: {
    label: "Book a discovery call",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore services",
    href: "/services",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
] as const;
