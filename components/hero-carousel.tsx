import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Play, TrendingUp, Users, Zap } from "lucide-react";
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
      badge: "🚀 Pakistan's #1 Business Management Platform",
      title: "Transform Your Business with",
      highlight: "360° CRM & E-Invoicing",
      subtitle: "The Future of Business Management",
      description: "Streamline your Pakistani business operations with Hisab Kitab 360's comprehensive platform. Manage customers, generate compliant invoices, track sales, and oversee finances from a single, powerful dashboard designed for local businesses.",
      dashboardTitle: "Sales Dashboard",
      revenue: "Rs. 1,250,000",
      growth: "+24% this month",
      stats: [
        { icon: TrendingUp, label: "Revenue Growth", value: "24%" },
        { icon: Users, label: "Active Customers", value: "2,847" },
        { icon: Zap, label: "Invoices Generated", value: "15,432" }
      ]
    },
    {
      badge: "🎯 Complete Business Solution",
      title: "Manage Everything from",
      highlight: "One Powerful Dashboard",
      subtitle: "Unified Business Operations",
      description: "From customer relationships to financial reporting, Hisab Kitab 360 provides all the tools you need to run your Pakistani business efficiently. Built specifically for local market requirements and compliance.",
      dashboardTitle: "Customer Management",
      revenue: "2,847 Customers",
      growth: "+18% new clients",
      stats: [
        { icon: Users, label: "Total Customers", value: "2,847" },
        { icon: TrendingUp, label: "Customer Growth", value: "18%" },
        { icon: Zap, label: "Active Projects", value: "1,234" }
      ]
    },
    {
      badge: "📊 Industry Leading Features",
      title: "Boost Your Revenue with",
      highlight: "Smart Analytics & Reports",
      subtitle: "Data-Driven Business Decisions",
      description: "Make data-driven decisions with our advanced analytics and reporting tools. Track performance, identify trends, and optimize your business operations for maximum profitability in the Pakistani market.",
      dashboardTitle: "Analytics Overview",
      revenue: "Rs. 3,450,000",
      growth: "+32% growth rate",
      stats: [
        { icon: TrendingUp, label: "Monthly Revenue", value: "Rs. 3.45M" },
        { icon: Zap, label: "Growth Rate", value: "32%" },
        { icon: Users, label: "Conversion Rate", value: "8.5%" }
      ]
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
    }, 6000);

    return () => clearInterval(autoplay);
  }, [emblaMainApi]);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-green-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="overflow-hidden w-full" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-2xl space-y-8">
                  {/* Badge with enhanced styling */}
                  <div className="animate-fade-in-up delay-100">
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-100 border-orange-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                      {slide.badge}
                    </Badge>
                  </div>

                  {/* Main heading with enhanced typography */}
                  <div className="animate-fade-in-up delay-200">
                    <p className="text-orange-200 text-lg font-medium mb-2 tracking-wide">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                      <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                      <span className="block bg-gradient-to-r from-orange-300 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                        {slide.highlight}
                      </span>
                    </h1>
                  </div>

                  {/* Description with better spacing */}
                  <div className="animate-fade-in-up delay-300">
                    <p className="text-xl text-blue-50/90 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>
                  </div>

                  {/* Enhanced CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
                    <Button 
                      onClick={handleScheduleDemo}
                      size="lg" 
                      className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg px-8 py-4 h-auto rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Schedule Free Demo
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                      onClick={() => scrollToSection('features')}
                      variant="outline" 
                      size="lg" 
                      className="group border-2 border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-4 h-auto rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      Watch Demo
                    </Button>
                  </div>

                  {/* Enhanced social proof */}
                  <div className="flex items-center space-x-6 animate-fade-in-up delay-500">
                    <div className="flex -space-x-3">
                      {[
                        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
                        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
                        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
                        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                      ].map((src, i) => (
                        <div key={i} className="relative">
                          <Image
                            src={src}
                            alt={`Business Owner ${i + 1}`}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full border-3 border-white/20 object-cover hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                    <div className="text-green-100">
                      <p className="font-semibold">500+ Pakistani businesses</p>
                      <p className="text-sm text-green-200">trust our platform</p>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 animate-fade-in-up delay-600">
                    {slide.stats.map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-blue-200">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Dashboard Preview */}
                <div className="hidden lg:block animate-fade-in-left delay-300">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-3xl blur-2xl transform rotate-1"></div>
                    
                    {/* Main dashboard container */}
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform transition-all duration-700 ease-in-out hover:scale-105">
                      <div className="bg-white rounded-2xl p-6 shadow-2xl">
                        {/* Dashboard header */}
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-gray-900 font-bold text-xl">{slide.dashboardTitle}</h3>
                            <p className="text-gray-500 text-sm">Real-time analytics</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-green-100 text-green-800 animate-pulse">Live</Badge>
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                          </div>
                        </div>

                        {/* Main metric */}
                        <div className="mb-6">
                          <div className="flex justify-between items-end mb-2">
                            <span className="text-gray-600 text-sm">
                              {slide.dashboardTitle === "Customer Management" ? "Total Customers" : "Monthly Revenue"}
                            </span>
                            <span className="font-bold text-3xl text-gray-900">{slide.revenue}</span>
                          </div>
                          
                          {/* Animated progress bar */}
                          <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                            <div className={`bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-2000 ease-out ${
                              index === 0 ? 'w-3/4' : 
                              index === 1 ? 'w-4/5' : 'w-5/6'
                            }`}>
                              <div className="h-full bg-white/30 animate-pulse"></div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Growth Rate</span>
                            <span className="text-orange-600 font-semibold flex items-center">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              {slide.growth}
                            </span>
                          </div>
                        </div>

                        {/* Mini chart visualization */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Performance Metrics</span>
                            <span className="text-green-600 font-medium">↗ Trending Up</span>
                          </div>
                          
                          {/* Animated bars */}
                          <div className="flex items-end space-x-2 h-20">
                            {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                              <div key={i} className="flex-1 bg-gradient-to-t from-blue-400 to-purple-500 rounded-t-sm transition-all duration-1000 ease-out" 
                                   style={{ 
                                     height: `${height}%`,
                                     animationDelay: `${i * 200}ms`
                                   }}>
                              </div>
                            ))}
                          </div>
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

      {/* Enhanced Carousel Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8">
        <Button
          onClick={scrollPrev}
          variant="outline"
          size="icon"
          className="w-12 h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8">
        <Button
          onClick={scrollNext}
          variant="outline"
          size="icon"
          className="w-12 h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onThumbClick(index)}
            className={`relative transition-all duration-300 ${
              index === selectedIndex 
                ? 'w-8 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full' 
                : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full hover:scale-125'
            }`}
          >
            {index === selectedIndex && (
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;