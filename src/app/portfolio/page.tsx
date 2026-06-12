/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { PageHeroVisual } from "@/components/layout/PageHeroVisual";

export const metadata: Metadata = {
  title: "Portfolio | RSK Technologies Group",
  description: `Projects and case studies from ${siteConfig.name}.`,
};

const projects = [
  {
    title: "Money Lender Pro",
    description:
      "A lending operations dashboard for tracking capital, clients, active loans, cash flow, portfolio performance, and repayment activity.",
    image: "/portfolio/lending-dashboard.jpeg",
    videoUrl: "https://player.vimeo.com/video/1198456933",
    technologies: ["Next.js", "React", "Finance Dashboard", "Reporting"],
    liveLink: "https://rsk-technologies.netlify.app",
    category: "Fintech App",
  },
  {
    title: "RSK-Tech Production Line",
    description:
      "A production and inventory control system for batches, product recipes, raw materials, stock adjustments, reports, and low-stock alerts.",
    image: "/portfolio/production-inventory.jpeg",
    gallery: [
      "/portfolio/production-batch.jpeg",
      "/portfolio/production-recipe.jpeg",
      "/portfolio/production-reports.jpeg",
    ],
    technologies: ["React", "Inventory Control", "Analytics", "Operations"],
    liveLink: "https://rsktech.net/",
    category: "Business System",
  },
];

export default function PortfolioPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/16 blur-3xl" />
          <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <ExternalLink size={14} />
              <span>Our work</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Real systems built for businesses that need to move.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              Screenshots, live links, and product demos from platforms we have built across finance, operations, inventory, and custom business workflows.
            </p>
          </Reveal>
          </div>
          <PageHeroVisual variant="portfolio" />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * i}>
              <article className="group h-full overflow-hidden rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/75 shadow-[0_28px_80px_-48px_rgba(51,51,153,0.85)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_-44px_rgba(51,51,153,0.95)]">
                <div className="relative aspect-video overflow-hidden bg-neutral-100">
                  {project.videoUrl ? (
                    <iframe
                      src={`${project.videoUrl}?badge=0&autopause=0&player_id=0&app_id=58479`}
                      title={`${project.title} video`}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      className="h-full w-full"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={563}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  {project.videoUrl ? (
                    <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      <Play size={13} fill="currentColor" />
                      Video case study
                    </div>
                  ) : null}
                </div>

                <div className="p-6 sm:p-7">
                  <span className="rounded-full bg-[rgb(51,51,153)]/10 px-2.5 py-0.5 text-xs font-medium text-[rgb(51,51,153)]">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.gallery ? (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {project.gallery.map((src) => (
                        <div
                          key={src}
                          className="relative aspect-video overflow-hidden rounded-lg border border-[rgb(51,51,153)]/10 bg-neutral-100"
                        >
                          <Image
                            src={src}
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(min-width: 1024px) 12vw, 28vw"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(51,51,153)] transition-colors hover:text-[rgb(41,41,128)]"
                  >
                    View live work
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[rgb(51,51,153)]/10">
        <div className="relative isolate mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/70 px-8 py-12 text-center shadow-xl backdrop-blur-md sm:px-16 sm:py-16">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(51,51,153)]/8 via-transparent to-emerald-400/10" />
              <div className="relative">
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  Ready to start your project?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-pretty text-base text-neutral-600">
                  Let's discuss your idea, polish the workflow, and build something your team can use with confidence.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[rgb(51,51,153)] px-7 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)] hover:shadow-xl"
                  >
                    Get in touch
                    <ArrowRight size={16} />
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







