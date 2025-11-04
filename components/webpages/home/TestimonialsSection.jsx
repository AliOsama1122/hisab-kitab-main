"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Testimonials data
const testimonials = [
  {
    name: "Muhammad Ahmed",
    title: "Owner, Ahmed Textiles, Faisalabad",
    quote:
      "Hisab Kitab transformed our inventory management. We reduced manual work by 60% and improved our invoice accuracy significantly. The CRM features help us maintain better relationships with our buyers.",
    rating: 5,
    avatar: "./testimonial-image-1.jpg",
  },
  {
    name: "Fatima Khan",
    title: "Operations Manager, Karachi Cold Storage",
    quote:
      "The temperature monitoring integration and automated reporting saved us countless hours. Our clients now receive detailed storage reports automatically, improving our service quality and trust.",
    rating: 5,
    avatar: "./testimonial-image-3.jpg",
  },
  {
    name: "Ali Hassan",
    title: "Store Manager, Pak Electronics, Lahore",
    quote:
      "Managing warranties and serial numbers became effortless with Hisab Kitab. Our customer service improved dramatically, and we can track products across all our store locations in real-time.",
    rating: 5,
    avatar: "./testimonial-image-3.jpg",
  },
];

// Framer Motion variants
const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Pakistani Businesses 🇵🇰
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See how <strong>Hisab Kitab</strong> has helped businesses across
            Pakistan streamline their operations and improve their bottom line.
          </p>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
              }}
              className="group"
            >
              <Card className="relative bg-gradient-to-tr from-white to-blue-50 p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 transition-all duration-500 h-full flex flex-col justify-between">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100/50 transition-transform duration-500 group-hover:rotate-6" />
                <CardHeader className="p-0 mb-4">
                  {/* Rating */}
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <CardContent className="p-0">
                    <p className="text-lg font-medium text-gray-800 italic leading-relaxed">
                      {testimonial.quote.split(" ").map((word, idx) =>
                        ["inventory", "automated"].includes(
                          word.toLowerCase()
                        ) ? (
                          <span
                            key={idx}
                            className="text-blue-600 font-semibold"
                          >
                            {word}{" "}
                          </span>
                        ) : (
                          word + " "
                        )
                      )}
                    </p>
                  </CardContent>
                </CardHeader>
                {/* Customer */}
                <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden mr-4 border-2 border-gradient-to-tr from-blue-500 to-orange-500 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={testimonial.avatar}
                      alt={`Photo of ${testimonial.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base tracking-wide">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.05}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="relative bg-gradient-to-tr from-white to-blue-50 p-6 rounded-2xl shadow-xl border-t-4 border-blue-500 h-full flex flex-col justify-between">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100/50" />
                  <CardHeader className="p-0 mb-4">
                    <div className="flex text-yellow-500 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <CardContent className="p-0">
                      <p className="text-base font-medium text-gray-800 italic leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </CardContent>
                  </CardHeader>
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4 border-2 border-gradient-to-tr from-blue-500 to-orange-500">
                      <Image
                        src={testimonial.avatar}
                        alt={`Photo of ${testimonial.name}`}
                        layout="fill"
                        objectFit="cover"
                        className="grayscale transition-all duration-500"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-blue-600 font-medium">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
