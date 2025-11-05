"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import * as anime from "animejs";

const testimonials = [
  {
    name: "Muhammad Ahmed",
    title: "Owner, Ahmed Textiles, Faisalabad",
    quote:
      "Hisab Kitab 360 transformed our inventory management. We reduced manual work by 60% and improved our invoice accuracy significantly. The CRM features help us maintain better relationships with our buyers.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    title: "Operations Manager, Karachi Cold Storage",
    quote:
      "The real-time reporting and automated record tracking have saved us countless hours. Our clients now receive instant warehouse insights and detailed reports, boosting transparency and trust.",
    rating: 5,
  },
  {
    name: "Ali Hassan",
    title: "Store Manager, Pak Electronics, Lahore",
    quote:
      "Hisab Kitab made warranty and serial tracking effortless. Now we can monitor every product across multiple store locations in real time — and our customer service has never been stronger.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    // Dynamically create scope for Anime.js
    const scope = anime.createScope({ root: rootRef });

    scope.add(() => {
      const cards = rootRef.current.querySelectorAll(".testimonial-card");

      cards.forEach((card, index) => {
        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Start completely offscreen
                card.style.transform = "translateX(100vw)";
                card.style.opacity = "0";

                // Animate slide in from right
                anime.animate(card, {
                  translateX: [100, 0], // or [100vw, 0] for full offscreen
                  opacity: [0, 1],
                  duration: 800,
                  easing: "easeOutExpo",
                  delay: index * 150,
                });

                // Animate stars inside card
                const stars = card.querySelectorAll(".star");
                anime.animate(stars, {
                  scale: [0, 1],
                  opacity: [0, 1],
                  duration: 400,
                  delay: anime.stagger(100),
                  easing: "easeOutExpo",
                });

                // Animate quote icon
                const quoteIcon = card.querySelector(".quote-icon");
                if (quoteIcon) {
                  anime.animate(quoteIcon, {
                    opacity: [0, 1],
                    rotate: [-15, 0],
                    duration: 500,
                    easing: "easeOutExpo",
                  });
                }

                obs.unobserve(card);
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(card);
      });
    });

    // Cleanup
    return () => scope.revert();
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      ref={rootRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            See how <strong>Hisab Kitab 360</strong> has helped businesses
            streamline their operations and improve their bottom line.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="testimonial-card relative bg-white p-6 md:p-8 rounded-xl shadow-md border-t-2 border-blue-500 flex flex-col justify-between min-h-[220px] hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 opacity-0"
            >
              {/* Quote Icon */}
              <Quote className="quote-icon absolute top-4 right-4 h-7 w-7 text-blue-100/50 opacity-0" />

              {/* Star Rating */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="star h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current opacity-0 mr-1"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-800 italic text-sm md:text-base leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              {/* Customer Info */}
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base tracking-wide">
                  {testimonial.name}
                </p>
                <p className="text-xs md:text-sm text-blue-600 font-medium">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
