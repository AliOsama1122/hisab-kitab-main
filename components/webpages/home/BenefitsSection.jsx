"use client";

import { Building2, Store, Briefcase, TrendingUp } from "lucide-react"; // Changed Phone to Briefcase for Accountant icon
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const handleScheduleDemo = () => {
  console.log("Schedule demo clicked");
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // Faster stagger for snappier feel
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }, // Spring animation for more life
  },
};

// Simplified icon list for better mapping
const cardData = [
  {
    title: "For Enterprises",
    icon: Building2,
    color: "blue",
    features: [
      "Scalable architecture for growing businesses",
      "Advanced reporting and analytics",
      "Multi-location management",
      "Enterprise-grade security",
    ],
  },
  {
    title: "For Accountants",
    icon: Briefcase, // Switched to Briefcase (or a similar financial icon) for better representation
    color: "orange",
    features: [
      "Automated tax compliance",
      "Accurate financial tracking",
      "Client management tools",
      "Professional invoice generation",
    ],
  },
  {
    title: "For Small Businesses",
    icon: Store,
    color: "green",
    features: [
      "Affordable pricing plans",
      "Easy-to-use interface & quick setup", // Combined for brevity
      "Real-time local customer support",
      "Manage 'Hisab Kitab' on the go", // More culturally relevant language
    ],
  },
  {
    title: "For Large Businesses",
    icon: Briefcase,
    color: "orange",
    features: [
      "Affordable pricing plans",
      "Easy-to-use interface & quick setup", // Combined for brevity
      "Real-time local customer support",
      "Manage 'Hisab Kitab' on the go", // More culturally relevant language
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Gradient & Blob - Adds Depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/50 via-white to-white z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 mb-2">
            Tailored Solutions
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Built for Every{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent relative">
              Pakistani Business
              <span className="absolute left-0 -bottom-1 w-full h-1.5 bg-orange-300/50 rounded-full"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 font-light">
            Whether you're an established enterprise, a financial expert, or a
            growing small business owner,
            <span className="font-medium text-gray-800"> Hisab Kitab </span>
            provides customized tools to manage your specific financial needs.
          </p>
        </motion.div>

        {/* Content Grid (Cards & Illustration) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 mt-16">
          {/* Card Section - Takes up more space */}
          <div className="w-full lg:w-[60%] order-2 lg:order-1">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {cardData.map((card, index) => {
                const accentColor =
                  card.color === "blue"
                    ? "blue"
                    : card.color === "orange"
                    ? "orange"
                    : card.color === "yellow"
                    ? "yellow"
                    : card.color === "green"
                    ? "green"
                    : card.color === "orange"
                    ? "orange"
                    : "red";
                const IconComponent = card.icon;

                return (
                  <motion.div
                    key={index}
                    className={`relative bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full overflow-hidden`}
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {/* Floating Accent Color Block - Adds a splash of color */}
                    <div
                      className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-${accentColor}-400 to-${accentColor}-600 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${accentColor}-50 group-hover:bg-${accentColor}-100 transition-colors duration-300`}
                    >
                      <IconComponent
                        className={`h-6 w-6 text-${accentColor}-600`}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {card.title}
                    </h3>

                    <ul className="space-y-3 flex-grow">
                      {card.features.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <TrendingUp
                            className={`h-4 w-4 text-${accentColor}-500 fill-${accentColor}-500 mr-2 flex-shrink-0 mt-0.5`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Illustration/CTA Block - More Integrated */}
          <motion.div
            className="w-full lg:w-[40%] flex flex-col justify-center items-center lg:items-start order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* The illustration is now the focal point of the side column */}
            <div className="w-full relative p-4 bg-gray-100 rounded-3xl shadow-xl border border-gray-200">
              <Image
                src="./illustration.png" // Replace with your illustration
                alt="Business Illustration"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              {/* Subtle overlay for visual interest */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent"></div>
            </div>

            {/* CTA Button - Placed below the image to lead the eye */}
            <div className="text-center lg:text-left mt-8 w-full">
              <Button
                onClick={handleScheduleDemo}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 px-10 py-7 text-lg font-semibold rounded-xl flex items-center justify-center"
              >
                <Briefcase className="w-5 h-5 mr-3" />
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
