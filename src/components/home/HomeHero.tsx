// src/components/home/HomeHero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowUpRight, Cpu, Layers3, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const signals = [
  { label: "Launch", value: "MVPs", icon: Layers3 },
  { label: "Secure", value: "Cloud", icon: ShieldCheck },
  { label: "Automate", value: "AI", icon: Cpu },
];

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(51,51,153,0.16),transparent_34%,rgba(22,160,133,0.10)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(51,51,153)]/30 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1600px] gap-10 px-5 py-12 sm:px-8 sm:py-18 lg:grid-cols-[1fr_0.98fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="space-y-6 sm:space-y-8">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(51,51,153)] shadow-sm backdrop-blur"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Activity size={14} />
            For tech, product & engineering teams
          </motion.p>

          <motion.h1
            className="max-w-5xl text-balance text-4xl font-semibold leading-[1.03] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl xl:text-8xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            Technology solutions tailored to your business needs.
          </motion.h1>

          <motion.p
            className="max-w-2xl text-pretty text-base leading-relaxed text-neutral-700 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {siteConfig.description} {" "}
            <span className="font-semibold text-[rgb(51,51,153)]">
              Tell us what you want to build and we&apos;ll help you bring it live.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <Link
              href={siteConfig.primaryCta.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-0 bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-[0_22px_55px_-24px_rgba(51,51,153,1)]"
            >
              {siteConfig.primaryCta.label}
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(51,51,153)]/35 bg-white/60 px-7 text-sm font-semibold text-[rgb(51,51,153)] transition-colors hover:bg-[rgb(51,51,153)]/10"
            >
              {siteConfig.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.div
            className="grid gap-3 pt-1 sm:grid-cols-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            {signals.map((item, index) => (
              <div
                key={item.label}
                className="tech-glass rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <item.icon className="mb-3 h-5 w-5 text-[rgb(51,51,153)]" strokeWidth={1.7} />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{item.label}</p>
                <p className="mt-1 text-xl font-semibold text-neutral-950">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-xl perspective-[1200px] lg:mx-0 lg:max-w-none"
          initial={reduce ? false : { opacity: 0, rotateY: -10, x: 24 }}
          animate={reduce ? undefined : { opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="tech-glass tech-scan relative min-h-[31rem] overflow-hidden rounded-[1.75rem] sm:aspect-[5/4] sm:min-h-0"
            whileHover={reduce ? undefined : { rotateX: 3, rotateY: -5, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(51,51,153,0.16),transparent_42%,rgba(22,160,133,0.12))]" />
            <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between rounded-2xl bg-white/82 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgb(51,51,153)] shadow-inner backdrop-blur sm:inset-x-6 sm:top-6">
              <span>RSK command center</span>
              <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] text-emerald-700">
                Live systems
              </span>
            </div>

            <div className="absolute inset-x-0 top-[5.9rem] z-0 flex justify-center px-8 sm:top-[6.4rem]">
              <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <div className="tech-ring absolute inset-0 rounded-full border border-[rgb(51,51,153)]/18" />
                <div className="tech-ring absolute inset-8 rounded-full border border-emerald-500/18 [animation-delay:0.8s]" />
                <motion.div
                  className="tech-float relative mx-auto flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_70px_-32px_rgba(51,51,153,0.95)] ring-2 ring-white/90"
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/brand/logo.jpeg"
                    alt={`${siteConfig.name} logo`}
                    fill
                    className="object-contain p-5"
                    sizes="(min-width: 1024px) 360px, 78vw"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-28 left-5 z-10 rounded-2xl border border-white/70 bg-white/86 p-4 shadow-[0_20px_55px_-35px_rgba(51,51,153,0.9)] backdrop-blur sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Delivery signal</p>
              <p className="mt-1 text-2xl font-semibold text-[rgb(51,51,153)]">99%</p>
            </div>

            <div className="absolute bottom-5 right-5 z-10 max-w-[18rem] rounded-2xl border border-white/65 bg-white/86 p-4 text-sm text-neutral-800 shadow-[0_-20px_60px_-40px_rgba(51,51,153,0.65)] backdrop-blur sm:bottom-8 sm:right-8">
              <p className="font-semibold text-[rgb(51,51,153)]">Build with confidence</p>
              <p className="mt-1 text-neutral-700">
                Senior-led engineering for websites, apps, AI systems, and automation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

