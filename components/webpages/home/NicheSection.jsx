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
    icon: <Warehouse className="h-12 w-12  text-blue-900" />,
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
    icon: <FireExtinguisher className="h-12 w-12 text-orange-800" />,
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
    icon: <Zap className="h-12 w-12 text-blue-500" />,
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
    icon: <Factory className="h-12 w-12 text-orange-700" />,
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
    icon: <Pill className="h-12 w-12 text-blue-600" />,
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
      className="py-20 bg-gradient-to-br from-gray-50 to-orange-50"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            360° Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tailored workflows, compliance, and monitoring — choose an industry
            to explore specialized features.
          </p>
        </div>

        <Tab.Group selectedIndex={selected} onChange={setSelected}>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Tabs list */}
            <Tab.List className="flex flex-row lg:flex-col gap-3 bg-white/50 p-3 rounded-2xl shadow-sm border border-gray-200 backdrop-blur">
              {INDUSTRIES.map((item, i) => (
                <Tab
                  key={item.id}
                  className={({ selected }) =>
                    `flex items-center gap-3 px-5 py-3 rounded-lg transition-all ${
                      selected
                        ? "bg-white shadow-md ring-2 ring-orange-400/30"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-md bg-white/60">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {item.title}
                  </span>
                </Tab>
              ))}
            </Tab.List>

            {/* Content area */}
            <Tab.Panels className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[100%]"
                >
                  {/* Left content */}
                  <div className="lg:col-span-12">
                    <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 h-[100%]">
                      <div className="flex items-start gap-5 mb-6">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100">
                          {active.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">
                            {active.title}
                          </h3>
                          <p className="mt-2 text-gray-600 text-sm max-w-xl">
                            {active.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {active.features.map((f, idx) => (
                          <motion.div
                            key={f}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: idx * 0.05,
                              duration: 0.3,
                            }}
                            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200"
                          >
                            <CheckCircle className="h-5 w-5 text-orange-500" />
                            <span className="text-sm text-gray-700">{f}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-4">
                        <button
                          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 text-white font-medium shadow hover:opacity-90"
                          onClick={() => scrollToSection("contact")}
                        >
                          Request Demo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right ad content */}
                  {/* <div className="lg:col-span-5">
                    <motion.div
                      key={active.ad.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl overflow-hidden border bg-gradient-to-br from-white/80 to-white/60 shadow-md"
                    >
                      <div className="h-32 flex items-center justify-start px-6 bg-gradient-to-r from-blue-100 to-orange-100">
                        <div>
                          <div className="text-xs uppercase text-gray-500 font-medium">
                            {active.ad.tag}
                          </div>
                          <div className="mt-2 text-lg font-semibold text-gray-900">
                            {active.ad.title}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-600 mb-4">
                          Quick insight or success highlight tailored to this
                          sector — learn how others optimized operations.
                        </p>
                        <div className="flex items-center gap-3">
                          <button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-orange-600 text-white text-sm font-medium hover:opacity-90">
                            {active.ad.cta}
                          </button>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="text-sm text-gray-500 hover:text-gray-700"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div> */}
                </motion.div>
              </AnimatePresence>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}
