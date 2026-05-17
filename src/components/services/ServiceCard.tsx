"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  tag: string;
  image: string;
}

export function ServiceCard({ icon: Icon, title, description, features, tag, image }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-[rgb(51,51,153)]/12 bg-white/55 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[rgb(51,51,153)]/30 hover:shadow-xl overflow-hidden">

      {/* IMAGE AREA — full width, fixed height, with icon + tag overlaid */}
      <div className="relative w-full h-48 flex-shrink-0 bg-[rgb(51,51,153)]/8">
        {!imgError ? (
          <Image
            src={image}
            alt={`${title} service`}
            fill
            className="object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback gradient if image is missing */
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[rgb(51,51,153)]/15 to-[rgb(51,51,153)]/5">
            <Icon className="h-16 w-16 text-[rgb(51,51,153)]/30" strokeWidth={1} />
          </div>
        )}

        {/* Icon badge — bottom-left of image */}
        <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-md ring-1 ring-[rgb(51,51,153)]/15 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-[rgb(51,51,153)]" strokeWidth={1.5} />
        </div>

        {/* Tag badge — top-right of image */}
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-[rgb(51,51,153)] shadow-sm backdrop-blur-sm ring-1 ring-[rgb(51,51,153)]/15">
          {tag}
        </span>
      </div>

      {/* Card text content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-2 text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-neutral-600">{description}</p>

        {/* Feature pills */}
        <div className="mt-auto flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1 rounded-full bg-[rgb(51,51,153)]/5 px-2.5 py-0.5 text-xs font-medium text-[rgb(51,51,153)] ring-1 ring-[rgb(51,51,153)]/10"
            >
              <CheckCircle2 className="h-3 w-3" strokeWidth={2} />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
