"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, FileText, UploadCloud, Briefcase } from "lucide-react";
import Image from "next/image";
import AddProductImage from "@/public/add-product.png";
import AddInvoiceImage from "@/public/add-invoice.jpeg";
import PublishFBRImage from "@/public/publish-fbr.png";

gsap.registerPlugin(ScrollTrigger);

export default function FBRProcessTimeline() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const imagesRef = useRef([]);

  const addStepRef = (el) =>
    el && !stepsRef.current.includes(el) && stepsRef.current.push(el);
  const addImageRef = (el) =>
    el && !imagesRef.current.includes(el) && imagesRef.current.push(el);

  const steps = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      stepNumber: 1,
      title: "Add Product",
      desc: "Add products with name, price & tax details to prepare your catalog for FBR-compliant invoicing.",
      color: "from-blue-100 to-blue-50",
      image: AddProductImage,
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,

      stepNumber: 2,
      title: "Make Sale & Generate Invoice",
      desc: "Select products, fill in sale details, and generate a professional invoice instantly.",
      color: "from-orange-100 to-orange-50",
      image: AddInvoiceImage,
    },
    {
      icon: <UploadCloud className="w-8 h-8 text-green-600" />,
      stepNumber: 3,
      title: "Publish to FBR",
      desc: "Send invoices to FBR in one click and receive a verified QR code + FBR number.",
      color: "from-green-100 to-green-50",
      image: PublishFBRImage,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line fill
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

      // Animate each step and image
      const showImage = (index) => {
        imagesRef.current.forEach((img, i) => {
          gsap.to(img, { autoAlpha: 0, y: 20, duration: 0.3 });
        });
        gsap.to(imagesRef.current[index], {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      };

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
              start: "top 90%",
              end: "top 30%",
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
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <Briefcase className="inline-block mr-2 font-medium w-15 w-12 h-12 text-5xl text-blue-600 mb-3" />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              FBR-Integrated Sale Process
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Clear, animated journey — with images on one side and text on the
            other.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-200 transform -translate-x-1/2"></div>
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 to-green-500 transform -translate-x-1/2 scale-y-0 timeline-line-fill"></div>

          {/* Steps */}
          <div className="space-y-48">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={addStepRef}
                className={`relative flex flex-col lg:flex-row items-start justify-between ${
                  i === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT: Image */}
                <div
                  className={`hidden lg:flex w-1/2 pr-8 mr-8 justify-end ${
                    i === 1 && "ml-8 pl-12"
                  }`}
                >
                  <div className="relative w-full h-80">
                    <Image
                      src={step.image}
                      alt={step.title}
                      ref={addImageRef}
                      className="absolute w-full h-full object-cover rounded-2xl shadow-xl opacity-0"
                    />
                  </div>
                </div>

                {/* CENTER: Icon */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${step.color}`}
                >
                  {step.icon}
                </div>

                {/* RIGHT: Text */}
                <div className="w-full lg:w-1/2 pl-0 lg:pl-12 flex flex-col justify-center mt-8 lg:mt-0">
                  {/* Numbered Circle */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-3">
                    {step.stepNumber}
                  </div>

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
