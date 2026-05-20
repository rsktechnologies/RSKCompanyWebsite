"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[rgb(51,51,153)]/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="space-y-7">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(51,51,153)] shadow-sm backdrop-blur"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            For tech, product & engineering teams
          </motion.p>

          <motion.h1
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            className="max-w-xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {siteConfig.description}{" "}
            <span className="font-medium text-[rgb(51,51,153)]">
              Tell us what you want to build &mdash; we&apos;ll help you bring it live.
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
              className="inline-flex h-12 items-center justify-center rounded-full border-0 bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(51,51,153,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-[0_22px_55px_-24px_rgba(51,51,153,1)]"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(51,51,153)]/35 bg-transparent px-7 text-sm font-semibold text-[rgb(51,51,153)] transition-colors hover:bg-[rgb(51,51,153)]/10"
            >
              {siteConfig.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.ul
            className="grid gap-3 pt-2 text-sm text-neutral-700 sm:grid-cols-3"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            {[
              "What we do: product engineering & cloud infrastructure",
              "Who it is for: tech teams that need velocity without chaos",
              "How to buy: book a call, align on scope, start the sprint",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 p-3 shadow-[0_12px_40px_-34px_rgba(51,51,153,0.9)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-lg perspective-[1200px] lg:mx-0 lg:max-w-none"
          initial={reduce ? false : { opacity: 0, rotateY: -10, x: 24 }}
          animate={reduce ? undefined : { opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-white/60 shadow-[0_30px_80px_-40px_rgba(51,51,153,0.85)] ring-1 ring-[rgb(51,51,153)]/20 backdrop-blur-md"
            whileHover={
              reduce
                ? undefined
                : {
                    rotateX: 4,
                    rotateY: -6,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 260, damping: 22 },
                  }
            }
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(51,51,153)]/20 via-transparent to-transparent" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[rgb(51,51,153)] shadow-inner backdrop-blur">
              <span>Hero spotlight</span>
              <span className="rounded-full bg-[rgb(51,51,153)]/10 px-2 py-0.5 text-[10px] text-neutral-700">
                Replace with video when ready
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-10 pt-20">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52">
                <div className="absolute inset-0 rounded-3xl bg-[rgb(51,51,153)]/15 blur-2xl" />
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-3xl ring-2 ring-white/70 shadow-[0_24px_60px_-30px_rgba(51,51,153,0.95)]"
                  animate={
                    reduce
                      ? undefined
                      : { y: [0, -6, 0], rotateZ: [0, 0.6, 0] }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/brand/logo.jpeg"
                    alt={`${siteConfig.name} logo`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 60vw"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-2xl border border-white/50 bg-gradient-to-t from-white/80 to-transparent p-4 text-sm text-neutral-800 shadow-[0_-20px_60px_-40px_rgba(51,51,153,0.65)] backdrop-blur">
              <p className="font-medium text-[rgb(51,51,153)]">Build with confidence</p>
              <p className="mt-1 text-neutral-700">
                A calm, senior-led team that pairs strategy with execution—so your roadmap
                becomes reality.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
