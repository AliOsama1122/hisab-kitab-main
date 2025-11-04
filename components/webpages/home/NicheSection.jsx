"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Warehouse, Zap, CheckCircle } from "lucide-react";

export default function NicheSection() {
  // ✅ Correct autoplay ref pattern (prevents plugin re-init issues)
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplay.current]
  );

  const industries = [
    {
      title: "Cold Storage",
      color: "from-blue-100 via-blue-50 to-white",
      border: "border-blue-300/50",
      icon: <Warehouse key="cold" className="h-14 w-14 text-blue-600 mb-4" />,
      features: [
        "Temperature monitoring integration",
        "Perishable inventory tracking",
        "Quality control documentation",
        "Client storage agreements",
      ],
    },
    {
      title: "Fertilizers",
      color: "from-orange-100 via-orange-50 to-white",
      border: "border-orange-300/50",
      icon: (
        <span key="fert" className="text-5xl mb-4">
          🌾
        </span>
      ),
      features: [
        "Seasonal demand forecasting",
        "Agricultural supplier network",
        "Regulatory compliance tracking",
        "Bulk order management",
      ],
    },
    {
      title: "Electronics",
      color: "from-gray-100 via-gray-50 to-white",
      border: "border-gray-300/50",
      icon: <Zap key="elec" className="h-14 w-14 text-gray-600 mb-4" />,
      features: [
        "Product warranty management",
        "Serial number tracking",
        "Multi-location inventory",
        "Service center coordination",
      ],
    },
    {
      title: "Retail",
      color: "from-green-100 via-green-50 to-white",
      border: "border-green-300/50",
      icon: (
        <span key="ret" className="text-4xl mb-4">
          🛍️
        </span>
      ),
      features: [
        "POS integration",
        "Inventory synchronization",
        "Customer loyalty tracking",
        "Discount campaign management",
      ],
    },
    {
      title: "Pharmaceutical",
      color: "from-purple-100 via-purple-50 to-white",
      border: "border-purple-300/50",
      icon: (
        <span key="pharma" className="text-4xl mb-4">
          💊
        </span>
      ),
      features: [
        "Batch & expiry tracking",
        "Medical supplier integration",
        "Regulatory compliance logs",
        "Warehouse stock alerts",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            360° Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Pakistani Industries
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hisab Kitab adapts to your industry's unique workflows and
            requirements — explore how we transform operations across sectors.
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className={`flex-shrink-0 w-[310px] sm:w-[340px] lg:w-[370px] p-8 rounded-3xl bg-gradient-to-br ${item.color} border ${item.border} shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                </div>
                <ul className="space-y-3 mt-6 text-gray-700 text-sm">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-200/40 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/40 blur-[150px] rounded-full -z-10 animate-pulse"></div>
    </section>
  );
}
