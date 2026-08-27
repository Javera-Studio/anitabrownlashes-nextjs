"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  image?: boolean;
  duration?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  image = false,
  duration,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [image ? "reveal-image" : "", className].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      data-reveal
      className={classes}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          ...(duration ? { "--reveal-duration": `${duration}ms` } : {}),
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
