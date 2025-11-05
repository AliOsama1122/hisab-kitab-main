"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Calculator } from "lucide-react";
import { useEffect } from "react";

export default function MouseFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="flex hidden sm:block fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: springX, y: springY }}
    >
      <Calculator className="text-blue-500 opacity-80 h-5 w-5" />
    </motion.div>
  );
}
