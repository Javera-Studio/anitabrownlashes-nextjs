"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function InstagramPhone() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-settled");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="phone-mockup relative mx-auto w-[260px] sm:w-[300px] lg:w-[340px]">
      <div className="relative aspect-[1080/1920] w-full">
        <Image
          src="/images/insta.mockup.png"
          alt="Instagram-Profil von Anita Brows & Lashes auf dem Smartphone"
          fill
          sizes="(min-width: 1024px) 340px, 60vw"
          className="object-contain"
        />
      </div>

      <style>{`
        .phone-mockup {
          transform: rotate(-6deg) translateY(24px);
          opacity: 0;
          transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease-out;
        }
        .phone-mockup.is-settled {
          transform: rotate(-3deg) translateY(0);
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .phone-mockup {
            transform: rotate(-3deg) translateY(0) !important;
            opacity: 1 !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
