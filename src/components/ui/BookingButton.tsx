import { bookingUrl } from "@/lib/data/business";

interface BookingButtonProps {
  label?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}

const base =
  "group inline-flex h-12 items-center justify-center gap-2.5 px-8 text-[0.72rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-300";

const variants: Record<NonNullable<BookingButtonProps["variant"]>, string> = {
  solid: "bg-orchid text-white hover:bg-orchid-hover",
  outline: "border border-orchid text-orchid hover:bg-orchid hover:text-white",
  ghost: "bg-white text-ink hover:bg-lilac",
};

export function BookingButton({
  label = "Termin online buchen",
  variant = "solid",
  className = "",
}: BookingButtonProps) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
      <svg
        viewBox="0 0 16 16"
        className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
