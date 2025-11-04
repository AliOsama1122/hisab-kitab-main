import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Lightbulb, Award } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-orange-50/20"
    >
      {/* Subtle blurred circles for background depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/40 blur-[120px] rounded-full" />
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-20 items-center">
          {/* LEFT TEXT */}
          <motion.div
            className="space-y-12"
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
                  Hisab Kitab
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                We are Pakistan’s leading business management platform,
                revolutionizing how local enterprises manage, analyze, and scale
                their operations — all through seamless technology.
              </p>
            </div>

            {/* VALUE CARDS */}
            <div className="space-y-10">
              {[
                {
                  icon: <Target className="w-6 h-6 text-blue-600" />,
                  title: "Our Mission",
                  desc: "Empower every business with smart, intuitive tools that enhance decision-making and drive digital growth.",
                  bg: "from-blue-50 to-blue-100",
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
                  title: "Our Vision",
                  desc: "To create Pakistan’s most trusted ecosystem where technology fuels success stories nationwide.",
                  bg: "from-orange-50 to-orange-100",
                },
                {
                  icon: <Award className="w-6 h-6 text-gray-600" />,
                  title: "Our Values",
                  desc: "Innovation, transparency, and reliability — we don’t just serve clients, we build partnerships.",
                  bg: "from-gray-50 to-gray-100",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-5 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${item.bg} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT STATS CARD */}
          <motion.div
            className="relative"
            style={{ scale }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative z-10 bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50"
            >
              <div className="grid grid-cols-2 gap-10">
                {[
                  ["10K+", "Active Users"],
                  ["99.9%", "Uptime"],
                  ["50+", "Cities"],
                  ["24/7", "Support"],
                ].map(([num, label], i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                      {num}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
