"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import {
  galleryImages,
  galleryCategories,
  galleryNotice,
} from "@/data/gallery";
import type { GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/cn";

export default function GalleryGrid() {
  const [active, setActive] = useState<"all" | GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = useMemo(() => galleryImages, []);

  const filtered = useMemo(
    () =>
      active === "all"
        ? allImages
        : allImages.filter((img) => img.category === active),
    [active, allImages]
  );

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + filtered.length) % filtered.length
    );
  const next = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  return (
    <div>
      <p className="bg-mist text-muted ring-line mb-6 max-w-3xl rounded-2xl px-4 py-3 text-sm ring-1 ring-inset">
        {galleryNotice}
      </p>

      <div
        role="tablist"
        aria-label="Gallery categories"
        className="-mx-4 flex scrollbar-none gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {(["all", ...galleryCategories.map((c) => c.key)] as const).map(
          (tab) => {
            const label =
              tab === "all"
                ? "All"
                : (galleryCategories.find((c) => c.key === tab)?.label ?? tab);
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={active === tab}
                onClick={() => {
                  setActive(tab);
                  setLightboxIndex(null);
                }}
                className={cn(
                  "focus-visible:outline-leaf-500 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  active === tab
                    ? "bg-brand-700 text-white shadow-sm"
                    : "text-muted ring-line hover:text-brand-800 hover:ring-brand-200 bg-white ring-1 ring-inset"
                )}
              >
                {label}
              </button>
            );
          }
        )}
      </div>

      {filtered.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, idx) => (
            <li key={img.id}>
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group border-line shadow-card focus-visible:outline-leaf-500 block w-full overflow-hidden rounded-3xl border bg-white text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={`Open image: ${img.caption}`}
              >
                <div className="bg-mist relative aspect-[4/3] overflow-hidden">
                  {!img.isIllustration && (
                    <span className="bg-brand-700/90 absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white">
                      Photograph
                    </span>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-ink text-sm leading-snug font-medium">
                    {img.caption}
                  </p>
                  <p className="text-muted mt-1 text-xs font-semibold tracking-wider uppercase">
                    {
                      galleryCategories.find((c) => c.key === img.category)
                        ?.label
                    }
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="border-brand-200 bg-mist mt-8 flex flex-col items-center rounded-3xl border border-dashed px-6 py-16 text-center">
          <ImageOff aria-hidden className="text-brand-300 h-10 w-10" />
          <h3 className="text-ink mt-4 text-lg font-semibold">
            No images in this category yet
          </h3>
          <p className="text-muted mt-1 text-sm">
            Images will be added as they become available.
          </p>
        </div>
      )}

      <AnimatePresence>
        {currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-brand-950/90 fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={currentImage.caption}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X aria-hidden className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft aria-hidden className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute top-1/2 right-3 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight aria-hidden className="h-6 w-6" />
            </button>
            <figure
              className="max-h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.src}
                alt={currentImage.caption}
                className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 flex flex-col gap-1 text-center">
                <span className="text-sm font-medium text-white">
                  {currentImage.caption}
                </span>
                <span className="text-xs text-white/60">
                  {lightboxIndex! + 1} of {filtered.length}
                </span>
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
