// src/components/brand/LogoLink.tsx
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoLinkProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function LogoLink({
  className = "",
  imageClassName = "",
  priority = false,
}: LogoLinkProps) {
  return (
    <Link
      href="/"
      className={`group flex min-w-0 items-center gap-3 rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgb(51,51,153)] ${className}`}
    >
      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_14px_44px_-20px_rgba(51,51,153,0.9)] ring-1 ring-[rgb(51,51,153)]/25 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_54px_-22px_rgba(51,51,153,0.95)] sm:h-16 sm:w-16">
        <Image
          src="/brand/logo.jpeg"
          alt={`${siteConfig.name} logo`}
          fill
          sizes="64px"
          className={`object-contain p-1 ${imageClassName}`}
          priority={priority}
        />
      </span>
      <span className="max-w-[13rem] text-sm font-bold leading-tight tracking-tight text-[rgb(51,51,153)] transition-colors group-hover:text-[rgb(41,41,128)] sm:max-w-none sm:text-base">
        {siteConfig.name}
      </span>
    </Link>
  );
}
