"use client";

import AboutSection from "@/components/webpages/home/AboutSection";
import FBRProcessSection from "@/components/webpages/home/FBRProcessSection";
import ScrollTextStrip from "@/components/webpages/home/ScrollTextStrip";
import FeaturesSection from "@/components/webpages/home/FeaturesSection";
import NicheSection from "@/components/webpages/home/NicheSection";
import ServicesSection from "@/components/webpages/home/ServicesSection";
import CTASection from "@/components/webpages/home/CTASection";
import TestimonialsSection from "@/components/webpages/home/TestimonialsSection";
import ContactUsSection from "@/components/webpages/home/ContactUsSection";
import HeroSection from "@/components/webpages/home/HeroSection";
import Footer from "@/components/webpages/general/Footer";
import Header from "@/components/webpages/general/Header";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120; // offset for navbar height
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header activeSection={activeSection} />

      {/* Hero Section */}
      <HeroSection />

      {/* Enhanced Infinite Scrolling Text Strip */}
      <ScrollTextStrip />

      {/* FBR Process Section */}
      {<FBRProcessSection />}

      {/* About Section */}
      {<AboutSection />}

      {/* Features Overview Section */}
      {<FeaturesSection />}

      {/* Industry-Specific Section */}
      <NicheSection />

      {/* Benefits Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactUsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
