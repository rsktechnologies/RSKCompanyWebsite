import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Technology services offered by ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Services
        </h1>
        <p className="mt-4 text-lg text-neutral-700">
          This page will list your technical services in detail. We will shape the sections and
          content in a dedicated pass.
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
