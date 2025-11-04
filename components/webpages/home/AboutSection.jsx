import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Lightbulb,
  Award,
  Users,
  Clock,
  MapPin,
  Headphones,
} from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-slate-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/10 rounded-full blur-[120px]" />
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-12"
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Header Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4"
              >
                About Our Company
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                Revolutionizing Business{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Management in Pakistan
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We are Pakistan's premier business management platform,
                transforming how local enterprises manage, analyze, and scale
                their operations through cutting-edge technology and intuitive
                design.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-8">
              {[
                {
                  icon: <Target className="w-5 h-5 text-white" />,
                  title: "Our Mission",
                  desc: "Empower businesses with intelligent tools that enhance decision-making and accelerate digital transformation.",
                  bg: "bg-gradient-to-br from-blue-500 to-blue-600",
                  border: "border-blue-100",
                },
                {
                  icon: <Lightbulb className="w-5 h-5 text-white" />,
                  title: "Our Vision",
                  desc: "Build Pakistan's most trusted technology ecosystem where innovation drives nationwide business success.",
                  bg: "bg-gradient-to-br from-orange-500 to-orange-600",
                  border: "border-orange-100",
                },
                {
                  icon: <Award className="w-5 h-5 text-white" />,
                  title: "Our Values",
                  desc: "Innovation, integrity, and impact — we build lasting partnerships through reliable, transparent solutions.",
                  bg: "bg-gradient-to-br from-slate-600 to-slate-700",
                  border: "border-slate-100",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <div
                    className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT STATS SECTION */}
          <motion.div
            className="relative"
            style={{ scale }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Stats Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] border border-gray-100/80"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Trusted by Businesses Across Pakistan
                </h3>
                <p className="text-gray-500">
                  Delivering excellence and reliability at scale
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    number: "10K+",
                    label: "Active Businesses",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Clock,
                    number: "99.9%",
                    label: "System Uptime",
                    color: "from-emerald-500 to-emerald-600",
                  },
                  {
                    icon: MapPin,
                    number: "50+",
                    label: "Cities Served",
                    color: "from-orange-500 to-orange-600",
                  },
                  {
                    icon: Headphones,
                    number: "24/7",
                    label: "Support",
                    color: "from-indigo-500 to-indigo-600",
                  },
                ].map(({ icon: Icon, number, label, color }, i) => (
                  <motion.div
                    key={i}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
                    >
                      {number}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-8" />
            </motion.div>

            {/* Floating elements for depth */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg border border-blue-50"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg border border-orange-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
