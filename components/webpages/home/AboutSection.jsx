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

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Section */}
          <motion.div
            className="space-y-10"
            style={{ y }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
                Hisab Kitab
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are Pakistan’s premier business management platform, empowering
              local enterprises through innovation, automation, and smart
              analytics.
            </p>

            {/* Values */}
            <div className="space-y-8">
              {[
                {
                  icon: <Target className="w-6 h-6 text-blue-600" />,
                  title: "Our Mission",
                  desc: "Digitally transform businesses with intuitive, scalable solutions that enhance growth and efficiency.",
                  bg: "from-blue-100 to-blue-200",
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
                  title: "Our Vision",
                  desc: "To be Pakistan’s leading business management ecosystem, bridging technology and entrepreneurship.",
                  bg: "from-orange-100 to-orange-200",
                },
                {
                  icon: <Award className="w-6 h-6 text-gray-600" />,
                  title: "Our Values",
                  desc: "Innovation, integrity, and client success define everything we do — we build partnerships, not just software.",
                  bg: "from-gray-100 to-gray-200",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
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

          {/* RIGHT: Parallax Stats */}
          <motion.div
            className="relative"
            style={{ scale }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-10 shadow-2xl backdrop-blur-md"
            >
              <div className="grid grid-cols-2 gap-8">
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
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
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
