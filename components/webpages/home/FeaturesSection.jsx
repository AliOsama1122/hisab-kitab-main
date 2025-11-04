"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import {
  Users,
  FileText,
  Truck,
  BarChart3,
  Shield,
  TrendingUp,
  Calendar,
  Blocks,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
      title: "Customer Relationship Management",
      desc: "Manage customer data, track interactions, and strengthen relationships with your clients.",
      border: "border-blue-200",
    },
    {
      icon: <FileText className="h-12 w-12 text-orange-600 mb-4" />,
      title: "E-Invoicing & Billing",
      desc: "Generate invoices, track payments, and stay compliant with Pakistani tax regulations.",
      border: "border-orange-200",
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600 mb-4" />,
      title: "Shipment & Supplier Tracking",
      desc: "Monitor shipments and manage suppliers to ensure smooth business operations.",
      border: "border-blue-200",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-600 mb-4" />,
      title: "Financial Reports & Analytics",
      desc: "Gain real-time insights into your performance through smart analytics and dashboards.",
      border: "border-orange-200",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
      title: "Role-Based Access Control",
      desc: "Protect data with strict access permissions, ensuring security across all operations.",
      border: "border-blue-200",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />,
      title: "Expense Management",
      desc: "Track and categorize expenses, maintaining clear financial transparency at every step.",
      border: "border-orange-200",
    },
  ];

  const handleScheduleDemo = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-28 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 relative overflow-hidden"
    >
      {/* Floating background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 feature-heading">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <Blocks className="inline-block mr-2 font-medium w-15 w-12 h-12 text-5xl text-blue-600 mb-3" />
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything your business needs — from customer engagement to
            real-time insights — unified in one intelligent platform.
          </p>
        </div>

        {/* Slider Section */}
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          className="mySwiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              className="max-w-sm rounded-3xl bg-white/80 backdrop-blur-md shadow-md border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Card className={`p-8 border-none`}>
                <CardHeader className="flex flex-col items-center text-center">
                  {feature.icon}
                  <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            onClick={handleScheduleDemo}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
