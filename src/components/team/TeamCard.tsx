"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  image?: string;
}

export function TeamCard({ name, role, bio, initials, image }: TeamCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[rgb(51,51,153)]/25 hover:shadow-xl overflow-hidden">
      
      {/* IMAGE AREA — full-width top of card, fixed height */}
      <div className="relative w-full h-56 bg-[rgb(51,51,153)]/8 flex-shrink-0">
        {image && !imgError ? (
          <Image
            src={image}
            alt={`${name}'s photo`}
            fill
            className="object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-[rgb(51,51,153)]">
            {initials}
          </div>
        )}
      </div>

      {/* Card text content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-base font-semibold text-neutral-900">{name}</p>
        <p className="mb-3 mt-0.5 text-xs font-medium uppercase tracking-wider text-[rgb(51,51,153)]">{role}</p>
        {bio && <p className="text-sm leading-relaxed text-neutral-600">{bio}</p>}
      </div>
    </div>
  );
}
