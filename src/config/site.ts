export const siteConfig = {
  name: "RSK TECHNOLOGIES GROUP",
  tagline: "Ensuring You Succeed.",
  description:
    "To design and deliver intelligent digital solutions — websites, apps, AI systems, and automation tools — that empower businesses to operate smarter, scale faster, and achieve measurable growth.",
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
