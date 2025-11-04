"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, FileText, UploadCloud } from "lucide-react";

export default function FBRProcessSection() {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const step1InView = useInView(step1Ref, { amount: 0.5 });
  const step2InView = useInView(step2Ref, { amount: 0.5 });
  const step3InView = useInView(step3Ref, { amount: 0.5 });

  const steps = [
    {
      ref: step1Ref,
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Step 1️⃣ Add Product",
      desc: "Add products with name, price, and tax details. Build your catalog easily and get ready to create compliant invoices.",
      color: "blue",
    },
    {
      ref: step2Ref,
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: "Step 2️⃣ Make Sale & Generate Invoice",
      desc: "Select products, enter sale information, and generate a tax-compliant invoice instantly.",
      color: "orange",
    },
    {
      ref: step3Ref,
      icon: <UploadCloud className="w-8 h-8 text-green-600" />,
      title: "Step 3️⃣ Publish to FBR",
      desc: "Send the invoice directly to FBR and receive a QR code & FBR number for official verification.",
      color: "green",
    },
  ];

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            💼{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              FBR-Integrated Sale Process
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            A seamless three-step journey for FBR-compliant business operations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-16">
          {/* Sticky Sidebar */}
          <div className="hidden lg:flex flex-col w-1/3 sticky top-40 self-start">
            <div className="relative border-l border-gray-200 pl-6 space-y-10">
              {steps.map((step, index) => {
                const active =
                  (index === 0 && step1InView && !step2InView) ||
                  (index === 1 && step2InView && !step3InView) ||
                  (index === 2 && step3InView);

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      active ? "opacity-100 translate-x-2" : "opacity-50"
                    }`}
                  >
                    <div
                      className={`absolute left-[-8px] w-3 h-3 rounded-full transition-colors duration-500 ${
                        active
                          ? "bg-gradient-to-r from-blue-500 to-orange-500"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    <h4
                      className={`text-lg font-semibold ${
                        active ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scrollable Step Content */}
          <div className="flex-1 space-y-[65vh]">
            {steps.map((step, i) => {
              const inView =
                (i === 0 && step1InView && !step2InView) ||
                (i === 1 && step2InView && !step3InView) ||
                (i === 2 && step3InView);

              return (
                <motion.div
                  key={i}
                  ref={step.ref}
                  initial={{ opacity: 0, y: 80 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 50 }
                  }
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div
                    className={`w-20 h-20 mb-6 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-${step.color}-50 to-white`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base max-w-xl leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
