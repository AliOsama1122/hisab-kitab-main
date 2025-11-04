import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

const HeroCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const handleScheduleDemo = () => {
    window.open('tel:+923001234567', '_self');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const slides = [
    {
      badge: "Pakistan's #1 Business Management Platform",
      title: "Transform Your Business with",
      highlight: "360° CRM & E-Invoicing",
      description: "Streamline your Pakistani business operations with Hisab Kitab 360's comprehensive platform. Manage customers, generate compliant invoices, track sales, and oversee finances from a single, powerful dashboard designed for local businesses.",
      dashboardTitle: "Sales Dashboard",
      revenue: "Rs. 1,250,000",
      growth: "+24% this month"
    },
    {
      badge: "Complete Business Solution",
      title: "Manage Everything from",
      highlight: "One Powerful Dashboard",
      description: "From customer relationships to financial reporting, Hisab Kitab 360 provides all the tools you need to run your Pakistani business efficiently. Built specifically for local market requirements and compliance.",
      dashboardTitle: "Customer Management",
      revenue: "2,847 Customers",
      growth: "+18% new clients"
    },
    {
      badge: "Industry Leading Features",
      title: "Boost Your Revenue with",
      highlight: "Smart Analytics & Reports",
      description: "Make data-driven decisions with our advanced analytics and reporting tools. Track performance, identify trends, and optimize your business operations for maximum profitability in the Pakistani market.",
      dashboardTitle: "Analytics Overview",
      revenue: "Rs. 3,450,000",
      growth: "+32% growth rate"
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaMainApi) return;
    
    const autoplay = setInterval(() => {
      emblaMainApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaMainApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl">
                  <Badge className="bg-orange-500/20 text-orange-100 border-orange-400 mb-6">
                    {slide.badge}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    {slide.title}
                    <span className="text-orange-300 block">{slide.highlight}</span>
                  </h1>
                  <p className="text-xl text-green-50 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={handleScheduleDemo}
                      size="lg" 
                      className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4 h-auto transition-all duration-300"
                    >
                      <Calendar className="w-5 h-5 mr-3" />
                      Schedule Free Demo
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </Button>
                    <Button 
                      onClick={() => scrollToSection('features')}
                      variant="outline" 
                      size="lg" 
                      className="border-white text-gray-900 bg-white hover:bg-gray-100 hover:text-gray-900 text-lg px-8 py-4 h-auto transition-all duration-300"
                    >
                      See Features
                    </Button>
                  </div>
                  <div className="flex items-center mt-8 text-green-100">
                    <div className="flex -space-x-2 mr-4">
                      <Image
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                        alt="Business Owner"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                        alt="Entrepreneur"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                        alt="Business Manager"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                        alt="CEO"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                    <span className="text-sm">Trusted by 500+ Pakistani businesses</span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all duration-700 ease-in-out">
                    <div className="bg-white rounded-lg p-6 shadow-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-900 font-semibold">{slide.dashboardTitle}</h3>
                        <Badge className="bg-orange-100 text-orange-800">Live</Badge>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">
                            {slide.dashboardTitle === "Customer Management" ? "Total Customers" : "Monthly Revenue"}
                          </span>
                          <span className="font-bold text-gray-900">{slide.revenue}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out ${
                            index === 0 ? 'w-3/4' : 
                            index === 1 ? 'w-4/5' : 'w-5/6'
                          }`}></div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">
                            {slide.dashboardTitle === "Customer Management" ? "New Clients" : 
                             slide.dashboardTitle === "Analytics Overview" ? "Growth Rate" : "Invoices Generated"}
                          </span>
                          <span className="text-orange-600">{slide.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8">
        <Button
          onClick={scrollPrev}
          variant="outline"
          size="icon"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8">
        <Button
          onClick={scrollNext}
          variant="outline"
          size="icon"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onThumbClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-orange-300 scale-110' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;