"use client";

import { useCallback, useEffect, useRef, type TouchEvent } from "react";
import Image from "next/image";
import type { StudioGalleryImage } from "@/lib/data/studioGallery";

interface LightboxProps {
  images: StudioGalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const count = images.length;
  const goPrev = useCallback(() => onNavigate((index - 1 + count) % count), [index, count, onNavigate]);
  const goNext = useCallback(() => onNavigate((index + 1) % count), [index, count, onNavigate]);

  useEffect(() => {
    closeRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goPrev, goNext]);

  function onTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  }

  const image = images[index];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Bildergalerie"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 px-4 py-16"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Galerie schließen"
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 sm:right-8 sm:top-8"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Vorheriges Bild"
        className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 sm:flex sm:left-6"
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M10 2L4 8l6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Nächstes Bild"
        className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10 sm:flex sm:right-6"
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 2l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="relative h-full max-h-[80vh] w-full max-w-4xl">
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60">
        {index + 1} / {count}
      </p>
    </div>
  );
}
