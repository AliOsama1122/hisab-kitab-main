"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, FileText, UploadCloud } from "lucide-react";
import AddProductImage from "@/public/add-invoice.jpeg";
import AddInvoiceImage from "@/public/add-invoice.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function FBRProcessTimeline() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  const addStepRef = (el) =>
    el && !stepsRef.current.includes(el) && stepsRef.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate central line fill
      gsap.fromTo(
        ".timeline-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          transformOrigin: "top center",
        }
      );

      // Animate each step in sequence
      stepsRef.current.forEach((step, i) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 80 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Step 1️⃣ Add Product",
      desc: "Add products with name, price & tax details to prepare your catalog for FBR-compliant invoicing.",
      color: "from-blue-100 to-blue-50",
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: "Step 2️⃣ Make Sale & Generate Invoice",
      desc: "Select products, fill in sale details, and generate a professional invoice instantly.",
      color: "from-orange-100 to-orange-50",
    },
    {
      icon: <UploadCloud className="w-8 h-8 text-green-600" />,
      title: "Step 3️⃣ Publish to FBR",
      desc: "Send invoices to FBR in one click and receive a verified QR code + FBR number.",
      color: "from-green-100 to-green-50",
    },
  ];

  const images = [
    "./add-product.png",
    "./add-invoice.jpeg",
    "./add-product.png",
  ];
  useEffect(() => {
    const showImage = (index) => {
      gsap.to(".image-slide", {
        opacity: 0,
        y: 10,
        duration: 0.4,
      });
      gsap.to(`.image-slide:nth-child(${index + 1})`, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          transformOrigin: "top center",
        }
      );

      stepsRef.current.forEach((step, i) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 80 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 60%",
              toggleActions: "play none none reverse",
              onEnter: () => showImage(i),
              onEnterBack: () => showImage(i),
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            💼{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              FBR-Integrated Sale Process
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow a clear, animated journey — from product creation to official
            FBR verification.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Static line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-200 transform -translate-x-1/2"></div>

          {/* Animated line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 to-green-500 transform -translate-x-1/2 scale-y-0 timeline-line-fill"></div>

          <div className="space-y-48">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={addStepRef}
                className={`relative flex flex-col items-center text-center`}
              >
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${step.color}`}
                >
                  {step.icon}
                </div>

                <div
                  className={`mt-24 max-w-md ${
                    i % 2 === 0 ? "lg:ml-auto lg:pr-16" : "lg:mr-auto lg:pl-16"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
