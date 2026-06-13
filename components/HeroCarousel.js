"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slides = Array.from({ length: 30 }, (_, index) => ({
  image: `/images/dashboard/${index + 1}.jpg`,
  title: `Dashboard preview ${index + 1}`,
  eyebrow: "Mobile dashboard"
}));

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  const goTo = (index) => setActive((index + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <div className="mx-auto w-full max-w-[290px] rounded-[1.25rem] border border-slate-200 bg-white/90 p-2.5 shadow-glow backdrop-blur dark:border-slate-800 dark:bg-slate-900/90" id="dashboard">
      {/* <div className="mb-4 flex items-center justify-between px-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-blue-600 dark:text-cyan-300">{slide.eyebrow}</p>
          <h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">{slide.title}</h3>
        </div>
        <div className="hidden rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 sm:block">Live preview</div>
      </div> */}

      <div className="relative mx-auto aspect-[390/844] w-full max-w-[265px] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          width={390}
          height={844}
          className="h-full w-full object-cover"
          priority
        />

        <button
          type="button"
          onClick={() => goTo(active - 1)}
          className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-soft transition hover:bg-white hover:text-blue-600 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:text-cyan-300"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-soft transition hover:bg-white hover:text-blue-600 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:text-cyan-300"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-blue-600 dark:bg-cyan-300" : "w-2.5 bg-slate-300 dark:bg-slate-700"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
