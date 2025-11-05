"use client";
import { Sparkles } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ScrollTextStrip() {
  const items = [
    "Transform Your Business",
    "Streamline Operations",
    "Boost Growth",
    "Leading 360° Business Platform",
    "CRM & E-Invoicing Solution",
    "Trusted by 100+ Businesses",
    "Built in Help Guides",
    "Affordable for Every Business",
  ];

  const containerRef = useRef(null);
  const [x, setX] = useState(0);
  const speed = 0.6; // 🧭 pixels per frame (60fps → ~36px/sec). Increase for faster scroll

  useAnimationFrame(() => {
    setX((prev) => {
      const width = containerRef.current?.scrollWidth / 2 || 0;
      // loop reset when half of content has scrolled
      return prev <= -width ? 0 : prev - speed;
    });
  });

  const block = (
    <>
      {items.map((text, idx) => (
        <span
          key={idx}
          className="mx-2 inline-flex items-center whitespace-nowrap font-bold uppercase tracking-wider text-white text-sm sm:text-base md:text-lg lg:text-2xl"
        >
          <Sparkles className="w-5 h-5 mr-2 text-yellow-300 animate-pulse" />
          {text}
        </span>
      ))}
    </>
  );

  return (
    <section className="relative py-3 overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
      {/* background glow elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse delay-1000" />

      {/* scrolling text */}
      <div className="relative z-10 overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex whitespace-nowrap will-change-transform"
        >
          <div className="flex">{block}</div>
          <div className="flex" aria-hidden="true">
            {block}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
