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
      className={`group flex items-center gap-3 rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[rgb(51,51,153)] ${className}`}
    >
      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-[rgb(51,51,153)]/10 shadow-[0_12px_40px_-18px_rgba(51,51,153,0.85)] ring-1 ring-[rgb(51,51,153)]/25 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_50px_-20px_rgba(51,51,153,0.95)]">
        <Image
          src="/brand/logo.jpeg"
          alt={`${siteConfig.name} logo`}
          fill
          sizes="40px"
          className={`object-cover ${imageClassName}`}
          priority={priority}
        />
      </span>
      <span className="font-semibold tracking-tight text-[rgb(51,51,153)] transition-colors group-hover:text-[rgb(41,41,128)]">
        {siteConfig.name}
      </span>
    </Link>
  );
}
