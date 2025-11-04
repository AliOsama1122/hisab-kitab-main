"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Pricing data
const pricingPlans = [
  {
    name: "Basic",
    price: "2999",
    period: "per year",
    features: [
      "Manage up to 100 products",
      "Basic CRM integration",
      "Inventory tracking",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "5999",
    period: "per year",
    features: [
      "Manage unlimited products",
      "Advanced CRM & invoicing",
      "Real-time inventory & sales reports",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "9999",
    period: "per year",
    features: [
      "Custom solutions",
      "Dedicated account manager",
      "Multi-location management",
      "24/7 premium support",
    ],
    popular: false,
  },
];

// Framer Motion variants
const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Pricing Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Choose the Plan That Fits Your Business
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Flexible plans designed to help businesses of all sizes manage their
            operations efficiently.
          </p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 25px rgba(0,0,0,0.1)" }}
              className={`group`}
            >
              <Card
                className={`relative p-8 rounded-2xl shadow-xl border-t-4 transition-all duration-500 h-full flex flex-col justify-between ${
                  plan.popular
                    ? "border-gradient-to-tr from-blue-500 to-orange-500 bg-gradient-to-tr from-white via-blue-50 to-white scale-105"
                    : "border-blue-500/0 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                <CardHeader className="p-0 mb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-extrabold text-gray-900 mb-1">
                    ₹{plan.price}
                  </p>
                  <span className="text-gray-500">{plan.period}</span>
                </CardHeader>

                <CardContent className="p-0 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="text-center">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white border border-blue-500 text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
