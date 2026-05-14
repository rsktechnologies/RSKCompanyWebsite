import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Mission, story, and team behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          About us
        </h1>
        <p className="mt-4 text-lg text-neutral-700">
          This page will share your mission, founding story, team photos, and values. We will
          build it in the next step together.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="mt-10">
        <Link
          href="/"
          className="font-medium text-[rgb(51,51,153)] underline decoration-[rgb(51,51,153)]/25 underline-offset-4 transition-colors hover:decoration-[rgb(51,51,153)]"
        >
          Back to home
        </Link>
      </Reveal>
    </div>
  );
}
