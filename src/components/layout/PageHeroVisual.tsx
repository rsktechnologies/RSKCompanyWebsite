"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  FileCheck2,
  MailCheck,
  MonitorCog,
  Scale,
  ShieldCheck,
  Sparkles,
  Cpu,
} from "lucide-react";

type HeroVariant = "about" | "services" | "portfolio" | "contact" | "legal";

type PageHeroVisualProps = {
  variant: HeroVariant;
};

const content = {
  about: {
    label: "Tech studio",
    title: "Strategy, systems, and clean delivery",
    mainImage: "/services/web-development.png",
    secondaryImages: ["/services/cloud-devops.png", "/services/cyber-security.png", "/services/ui-ux-design.png"],
    stat: "Built to scale",
    icon: Cpu,
  },
  services: {
    label: "Delivery stack",
    title: "Web, mobile, cloud, security",
    mainImage: "/services/cloud-devops.png",
    secondaryImages: ["/services/web-development.png", "/services/app-development.png", "/services/cyber-security.png"],
    stat: "6 services",
    icon: MonitorCog,
  },
  portfolio: {
    label: "Product systems",
    title: "Product APIs, dashboards, and live systems",
    mainImage: "/portfolio/mock-api-tech.svg",
    secondaryImages: ["/portfolio/lending-dashboard.jpeg", "/portfolio/production-inventory.jpeg", "/portfolio/production-reports.jpeg"],
    stat: "Tech preview",
    icon: Sparkles,
  },
  contact: {
    label: "Fast response",
    title: "Message routed to RSK",
    mainImage: "/brand/logo.jpeg",
    secondaryImages: ["/services/ui-ux-design.png", "/services/web-development.png", "/services/app-development.png"],
    stat: "24h reply",
    icon: MailCheck,
  },
  legal: {
    label: "Trust layer",
    title: "Privacy, terms, and clarity",
    mainImage: "/brand/logo.jpeg",
    secondaryImages: ["/services/cyber-security.png", "/services/cloud-devops.png", "/services/ui-ux-design.png"],
    stat: "Protected",
    icon: Scale,
  },
} satisfies Record<HeroVariant, {
  label: string;
  title: string;
  mainImage: string;
  secondaryImages: string[];
  stat: string;
  icon: typeof Cpu;
}>;

export function PageHeroVisual({ variant }: PageHeroVisualProps) {
  const reduce = useReducedMotion();
  const item = content[variant];
  const Icon = item.icon;

  return (
    <motion.div
      className="relative mx-auto mt-10 w-full max-w-xl lg:mt-0"
      initial={reduce ? false : { opacity: 0, x: 28, rotateY: -8 }}
      animate={reduce ? undefined : { opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="tech-glass tech-scan relative min-h-[27rem] overflow-hidden rounded-[1.75rem] sm:aspect-[5/4] sm:min-h-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(51,51,153,0.16),transparent_44%,rgba(22,160,133,0.12))]" />
        <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between rounded-2xl bg-white/84 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgb(51,51,153)] shadow-inner backdrop-blur">
          <span>{item.label}</span>
          <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] text-emerald-700">
            {item.stat}
          </span>
        </div>

        <div className="absolute left-6 top-24 z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(51,51,153)] text-white shadow-[0_18px_44px_-22px_rgba(51,51,153,1)]">
          <Icon className="h-6 w-6" strokeWidth={1.6} />
        </div>

        <motion.div
          className="tech-float absolute inset-x-8 top-[6.8rem] z-0 mx-auto aspect-[4/3] max-w-[23rem] overflow-hidden rounded-[1.6rem] bg-white shadow-[0_28px_70px_-34px_rgba(51,51,153,0.95)] ring-2 ring-white/85"
          animate={reduce ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={item.mainImage}
            alt={item.title}
            fill
            className={variant === "about" || variant === "portfolio" || variant === "contact" || variant === "legal" ? "object-contain p-4" : "object-cover"}
            sizes="(min-width: 1024px) 380px, 80vw"
            priority={variant === "about"}
          />
        </motion.div>

        <div className="absolute bottom-24 left-5 right-5 z-10 grid grid-cols-3 gap-2 sm:bottom-24">
          {item.secondaryImages.map((src, index) => (
            <motion.div
              key={src}
              className="relative aspect-video overflow-hidden rounded-xl border border-white/75 bg-white/85 shadow-[0_18px_42px_-30px_rgba(51,51,153,0.95)]"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
            >
              <Image
                src={src}
                alt={`${item.title} preview`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 120px, 26vw"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-white/70 bg-white/88 p-4 shadow-[0_-20px_60px_-44px_rgba(51,51,153,0.8)] backdrop-blur">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(51,51,153)]" strokeWidth={1.6} />
            <div>
              <p className="font-semibold text-[rgb(51,51,153)]">{item.title}</p>
              <p className="mt-1 text-sm text-neutral-700">
                Designed to make this page feel connected to real work, not empty space.
              </p>
            </div>
          </div>
        </div>

        <FileCheck2 className="absolute right-7 top-24 h-7 w-7 text-[rgb(51,51,153)]/25" strokeWidth={1.4} />
      </div>
    </motion.div>
  );
}
