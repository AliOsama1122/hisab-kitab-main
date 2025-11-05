import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Lightbulb,
  Award,
  Users,
  Clock,
  MapPin,
  Headphones,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef(null);
  const floatingShapesRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Framer Motion transforms for parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D tilt effect for main container
      gsap.to(containerRef.current, {
        rotationY: 0,
        rotationX: 0,
        transformPerspective: 1000,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Floating shapes animation
      floatingShapesRef.current.forEach((shape, index) => {
        gsap.to(shape, {
          y: index % 2 === 0 ? -30 : 30,
          rotation: index % 2 === 0 ? 10 : -10,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Cards stagger animation with 3D effect
      gsap.fromTo(
        cardsRef.current,
        {
          rotationY: -15,
          rotationX: 10,
          opacity: 0,
          y: 50,
        },
        {
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter animation
      const counters = statsRef.current?.querySelectorAll(".counter");
      counters?.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          stagger: 1,
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });
      });

      // Magnetic button effect
      const buttons = sectionRef.current?.querySelectorAll(".magnetic");
      buttons?.forEach((button) => {
        button.addEventListener("mousemove", (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(button, {
            x: (x - rect.width / 2) * 0.2,
            y: (y - rect.height / 2) * 0.2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const valueCards = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Our Mission",
      desc: "Empower businesses with intelligent tools that enhance decision-making and accelerate digital transformation.",
      bg: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
      border: "border-blue-100/20",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Our Vision",
      desc: "Build most trusted technology ecosystem where innovation drives nationwide business success.",
      bg: "bg-gradient-to-br from-orange-500 via-orange-600 to-red-600",
      border: "border-orange-100/20",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Our Values",
      desc: "Innovation, integrity, and impact — we build lasting partnerships through reliable, transparent solutions.",
      bg: "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800",
      border: "border-slate-100/20",
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Active Businesses",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      number: "99.9%",
      label: "System Uptime",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Cities Served",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Headphones,
      number: "24/7",
      label: "Support",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating 3D Shapes */}
        <div
          ref={(el) => (floatingShapesRef.current[0] = el)}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-[80px]"
        />
        <div
          ref={(el) => (floatingShapesRef.current[1] = el)}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-300/10 rounded-full blur-[100px]"
        />
        <div
          ref={(el) => (floatingShapesRef.current[2] = el)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/15 to-teal-300/10 rounded-full blur-[60px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* LEFT CONTENT - Enhanced with 3D effects */}
          <motion.div className="space-y-12" style={{ y, opacity, scale }}>
            {/* Header with Sticky Effect */}
            <motion.div
              className="space-y-6 sticky top-25"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4 magnetic"
              >
                <span className="flex items-center space-x-2">
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Transforming{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Your Business
                </motion.span>
              </h2>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We are a premier business management platform, empowering local
                enterprises to manage, analyze, and scale their operations with
                cutting-edge technology and intuitive design.
              </motion.p>
            </motion.div>

            {/* Value Cards with 3D Hover Effects */}
            <div className="space-y-6">
              {valueCards.map((item, i) => (
                <motion.div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="group relative cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* 3D Card Effect */}
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 transform-style-preserve-3d">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shadow-2xl transform-style-preserve-3d`}
                        whileHover={{
                          rotateY: 180,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT STATS SECTION - Enhanced with Counters */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Stats Card with 3D Transform */}
            <motion.div
              ref={statsRef}
              whileHover={{
                rotateY: 5,
                rotateX: -2,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10 bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50 transform-style-preserve-3d"
            >
              <div className="text-center mb-12">
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Trusted Nationwide
                </motion.h3>
                <motion.p
                  className="text-gray-500 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Powering businesses with reliability and innovation
                </motion.p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {stats.map(({ icon: Icon, number, label, color }, i) => (
                  <motion.div
                    key={i}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div
                      className={`text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3`}
                    >
                      <span className="counter">{number}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animated Progress Bar */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full mt-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Floating 3D Elements */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl shadow-2xl border border-blue-50/50 transform-style-preserve-3d"
              animate={{
                rotateY: [0, 180, 360],
                rotateX: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-200 rounded-2xl shadow-2xl border border-orange-50/50 transform-style-preserve-3d"
              animate={{
                rotateX: [0, 180, 360],
                rotateY: [0, 30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
