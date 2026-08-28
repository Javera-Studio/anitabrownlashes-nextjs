export function AIImageBadge() {
  return (
    <button
      type="button"
      aria-label="KI-generierte Bilddarstellung"
      className="group absolute bottom-2 left-2 z-10 flex items-center gap-1.5 bg-ink/40 px-1.5 py-1 text-white/90 backdrop-blur-sm transition-colors hover:bg-ink/60 focus:bg-ink/60 focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-white/80"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2.4" />
      </svg>
      <span
        className="max-w-0 overflow-hidden whitespace-nowrap text-[0.65rem] font-medium tracking-wide opacity-0 transition-all duration-300 ease-out group-hover:max-w-[220px] group-hover:opacity-90 group-focus:max-w-[220px] group-focus:opacity-90"
      >
        KI-generierte Bilddarstellung
      </span>
    </button>
  );
}
