"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Warehouse,
  Zap,
  CheckCircle,
  Factory,
  Pill,
  FireExtinguisher,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const INDUSTRIES = [
  {
    id: "cold",
    title: "Cold Storage",
    icon: <Warehouse className="h-8 w-8 md:h-12 md:w-12 text-blue-900" />,
    description:
      "Manage warehouse operations with real-time tracking, automated record management, and room-wise performance insights.",
    features: [
      "Real-time warehouse reports",
      "Room and section management",
      "Automated record tracking",
      "Live operational analytics",
    ],
    ad: {
      tag: "Case Study",
      title: "How a cold storage chain reduced spoilage by 28%",
      cta: "Read case study",
    },
  },
  {
    id: "fert",
    title: "Fertilizers",
    icon: (
      <FireExtinguisher className="h-8 w-8 md:h-12 md:w-12 text-orange-800" />
    ),
    description:
      "Streamline your fertilizer operations with connected supplier and customer networks, real-time product tracking, and smart sales and shipment management.",
    features: [
      "Supplier and customer network management",
      "Product and inventory tracking",
      "Sales and shipment management",
      "Bulk order and distribution control",
    ],
    ad: {
      tag: "Insight",
      title: "Seasonal demand planning — practical tips",
      cta: "Learn more",
    },
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: <Zap className="h-8 w-8 md:h-12 md:w-12 text-blue-500" />,
    description:
      "Track serial numbers, manage warranties, and coordinate multi-location inventory effortlessly.",
    features: [
      "Product warranty management",
      "Serial number tracking",
      "Multi-location inventory",
      "Service center coordination",
    ],
    ad: {
      tag: "Playbook",
      title: "Warranty workflows that reduce returns",
      cta: "View playbook",
    },
  },
  {
    id: "retail",
    title: "Retail",
    icon: <Factory className="h-8 w-8 md:h-12 md:w-12 text-orange-700" />,
    description:
      "Unified POS, loyalty, and inventory — run counter and online operations from one system.",
    features: [
      "POS integration",
      "Inventory synchronization",
      "Customer loyalty tracking",
      "Discount campaign management",
    ],
    ad: {
      tag: "Demo",
      title: "See retail features in action",
      cta: "Request demo",
    },
  },
  {
    id: "pharma",
    title: "Pharmaceutical",
    icon: <Pill className="h-8 w-8 md:h-12 md:w-12 text-blue-600" />,
    description:
      "Batching, expiry tracking, and regulatory logs — built to support strict compliance.",
    features: [
      "Batch & expiry tracking",
      "Medical supplier integration",
      "Regulatory compliance logs",
      "Warehouse stock alerts",
    ],
    ad: {
      tag: "Guide",
      title: "Pharma compliance checklist",
      cta: "Download guide",
    },
  },
];

export default function NicheTabsSection() {
  const [selected, setSelected] = useState(0);
  const active = INDUSTRIES[selected];

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            360° Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Tailored workflows, compliance, and monitoring — choose an industry
            to explore specialized features.
          </p>
        </div>

        <Tab.Group selectedIndex={selected} onChange={setSelected}>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
            {/* Tabs list */}
            <Tab.List className="flex flex-row lg:flex-col gap-2 md:gap-3 bg-white/50 p-2 md:p-3 rounded-2xl shadow-sm border border-gray-200 backdrop-blur overflow-x-auto lg:overflow-visible overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {INDUSTRIES.map((item, i) => (
                <Tab
                  key={item.id}
                  className={({ selected }) =>
                    `flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3 rounded-lg transition-all min-w-max ${
                      selected
                        ? "bg-white shadow-md ring-2 ring-orange-400/30"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md bg-white/60">
                    {item.icon}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-gray-800 hidden sm:inline">
                    {item.title}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-gray-800 sm:hidden">
                    {item.title.split(" ")[0]}
                  </span>
                </Tab>
              ))}
            </Tab.List>

            {/* Content area */}
            <Tab.Panels className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 gap-6 h-full"
                >
                  {/* Main content */}
                  <div className="w-full">
                    <div className="p-5 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 h-full">
                      <div className="flex flex-col sm:flex-row items-start gap-4 mb-5 md:mb-6">
                        <div className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100">
                          {active.icon}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                            {active.title}
                          </h3>
                          <p className="mt-2 text-gray-600 text-sm md:text-base">
                            {active.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {active.features.map((f, idx) => (
                          <motion.div
                            key={f}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: idx * 0.05,
                              duration: 0.2,
                            }}
                            className="flex items-start gap-2.5 md:gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200"
                          >
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs md:text-sm text-gray-700">
                              {f}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-5 md:mt-6 flex justify-center sm:justify-start">
                        <button
                          className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 text-white font-medium text-sm md:text-base shadow hover:opacity-90 transition-opacity"
                          onClick={() => scrollToSection("contact")}
                        >
                          Request Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}
