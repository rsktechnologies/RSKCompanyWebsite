/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | RSK Technologies Group",
  description: `Projects and case studies from ${siteConfig.name}.`,
};

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with React, Next.js, and Stripe integration.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    link: "#",
    category: "Web Development",
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication.",
    image: "/api/placeholder/400/300",
    technologies: ["React Native", "Firebase", "Node.js"],
    link: "#",
    category: "App Development",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS companies with real-time data visualization.",
    image: "/api/placeholder/400/300",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    link: "#",
    category: "Web Development",
  },
  {
    title: "Startup MVP",
    description: "Minimum viable product for a fintech startup, launched in 3 weeks.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Express.js", "MongoDB"],
    link: "#",
    category: "MVP Development",
  },
];

export default function PortfolioPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(51,51,153)]/20 blur-3xl" />
          <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-[rgb(51,51,153)]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,51,153,0.10),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(51,51,153)]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[rgb(51,51,153)] shadow-sm backdrop-blur">
              <ExternalLink size={14} />
              <span>Our work</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Projects that{" "}
              <span className="text-[rgb(51,51,153)]">drive results</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
              Explore our portfolio of successful projects across web development, mobile apps,
              and MVPs that have helped businesses grow and innovate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * i}>
              <div className="group overflow-hidden rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-video overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="rounded-full bg-[rgb(51,51,153)]/10 px-2.5 py-0.5 text-xs font-medium text-[rgb(51,51,153)]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-600">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(51,51,153)] transition-colors hover:text-[rgb(41,41,128)]"
                  >
                    View project
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[rgb(51,51,153)]/10">
        <div className="relative isolate mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="relative rounded-2xl border border-[rgb(51,51,153)]/15 bg-white/60 px-8 py-12 text-center shadow-xl backdrop-blur-md sm:px-16 sm:py-16">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(51,51,153)]/8 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  Ready to start your project?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-pretty text-base text-neutral-600">
                  Let's discuss your ideas and bring them to life.
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