import { HomeHero } from "@/components/home/HomeHero";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-t border-[rgb(51,51,153)]/10 bg-white/40 py-16 backdrop-blur-sm sm:py-20">
        <div className="mx-auto max-w-[1600px] space-y-10 px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Why teams choose {siteConfig.name}
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Clarity first",
                body: "We translate fuzzy goals into a plan you can defend - milestones, risks, and tradeoffs included.",
              },
              {
                title: "Modern stack",
                body: "Cloud-native architecture, strong observability, and automation so releases feel boring (in a good way).",
              },
              {
                title: "Partnership",
                body: "We embed with your team, document decisions, and leave you with systems you can operate confidently.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={0.08 * i}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/70 p-6 shadow-[0_22px_60px_-44px_rgba(51,51,153,0.85)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(51,51,153,0.9)]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgb(51,51,153)]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold text-[rgb(51,51,153)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[rgb(51,51,153)]/15 bg-[rgb(51,51,153)]/5 px-6 py-6 sm:flex-row sm:items-center">
              <p className="text-base text-neutral-800">
                Ready to move from pitch deck to production? Start with a short discovery call.
              </p>
              <Link
                href={siteConfig.primaryCta.href}
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border-0 bg-[rgb(51,51,153)] px-6 text-sm font-semibold text-white shadow-[0_16px_40px_-22px_rgba(51,51,153,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[rgb(41,41,128)]"
              >
                {siteConfig.primaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}


