"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLink } from "@/components/brand/LogoLink";
import { navLinks } from "@/config/site";

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(51,51,153)]/10 bg-[#f4f1e8]/88 backdrop-blur-xl supports-[backdrop-filter]:bg-[#f4f1e8]/72">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <LogoLink priority={pathname === "/"} />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "text-[rgb(51,51,153)]"
                    : "text-neutral-700 hover:text-[rgb(51,51,153)]"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-0 rounded-lg bg-[rgb(51,51,153)]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="pointer-events-none absolute inset-0 -z-0 rounded-lg bg-transparent transition-colors duration-200 hover:bg-[rgb(51,51,153)]/5" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[rgb(51,51,153)] transition-colors hover:bg-[rgb(51,51,153)]/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block h-4 w-6">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-full rounded-full bg-[rgb(51,51,153)]"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-[rgb(51,51,153)]"
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            />
            <motion.span
              className="absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-[rgb(51,51,153)]"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[rgb(51,51,153)]/10 bg-[#f4f1e8]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3 sm:px-8">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-3 py-3 text-base font-medium ${
                        active
                          ? "bg-[rgb(51,51,153)]/10 text-[rgb(51,51,153)]"
                          : "text-neutral-800 hover:bg-[rgb(51,51,153)]/5 hover:text-[rgb(51,51,153)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
