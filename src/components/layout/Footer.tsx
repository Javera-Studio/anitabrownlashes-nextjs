import Link from "next/link";
import { business } from "@/lib/data/business";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-studio">
        <div className="hairline bg-white/10" />
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5h1.3V5.1c-.6-.1-1.4-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H7.8v3h2.4v7h3.3z" />
              </svg>
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            <Link href="/preise" className="hover:text-white transition-colors">Preise</Link>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-2 pb-10 text-center text-xs text-white/50">
          <div>
            Webdesigned by{" "}
            <a
              href="https://javera-studio.at"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              JAVERA Studio
            </a>
          </div>
          <div>{business.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
