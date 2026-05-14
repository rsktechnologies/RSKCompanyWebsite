import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-neutral-700">
          This page will include your message, email form, and social links. We will implement it
          after the core marketing pages are in place.
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
