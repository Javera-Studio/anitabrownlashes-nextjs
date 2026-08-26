"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, bookingUrl } from "@/lib/data/business";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]" : "bg-transparent"
      }`}
    >
      <div className="container-studio flex h-20 items-center justify-between md:h-24">
        <Link href="#top" className="font-serif text-xl tracking-tight text-ink md:text-2xl">
          Anita<span className="text-orchid"> Brows</span> &amp; Lashes
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-wide text-ink-soft transition-colors hover:text-orchid after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-orchid after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-orchid px-6 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-white transition-colors hover:bg-orchid-hover"
          >
            Termin buchen
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-studio flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-11 border-b border-border/70 py-4 text-base text-ink last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-orchid px-6 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-white"
            >
              Termin buchen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
