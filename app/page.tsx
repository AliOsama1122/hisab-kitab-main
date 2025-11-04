"use client";

import { Button } from "@/components/ui/button";
import { Phone, Calendar, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import AboutSection from "@/components/webpages/home/AboutSection";
import ServicesSection from "@/components/webpages/home/ServicesSection";
import FBRProcessSection from "@/components/webpages/home/FBRProcessSection";
import ScrollTextStrip from "@/components/webpages/home/ScrollTextStrip";
import FeaturesSection from "@/components/webpages/home/FeaturesSection";
import NicheSection from "@/components/webpages/home/NicheSection";
import BenefitsSection from "@/components/webpages/home/BenefitsSection";
import CTASection from "@/components/webpages/home/CTASection";
import TestimonialsSection from "@/components/webpages/home/TestimonialsSection";
import ContactUsSection from "@/components/webpages/home/ContactUsSection";
import HeroSection from "@/components/webpages/home/HeroSection";
import PricingSection from "@/components/webpages/home/PricingSection";
import WhatsAppButton from "@/components/webpages/general/WhatsAppButton";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScheduleDemo = () => {
    window.open("tel:+923001234567", "_self");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo_new.png"
                alt="Hisab Kitab Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Hisab Kitab
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={handleScheduleDemo}
                className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
          }}
        ></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-orange-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 to-blue-400/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up delay-100">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-blue-100">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    10,000+ Active Users
                  </span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-orange-100">
                  <Shield className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">
                    99.9% Uptime
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-up delay-200">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Pakistan's Leading
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
                    360° Business Platform
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl opacity-0 animate-fade-in-up delay-300">
                  Transform your Pakistani business with our unified CRM and
                  E-Invoicing platform.
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                    {" "}
                    Streamline operations, manage customers, and boost growth
                  </span>
                  from one powerful dashboard.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-0 animate-fade-in-up delay-400">
                <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-4 py-2 border border-blue-200">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-800">
                    CRM Management
                  </span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-full px-4 py-2 border border-orange-200">
                  <FileText className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-orange-800">
                    E-Invoicing
                  </span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-full px-4 py-2 border border-gray-200">
                  <BarChart3 className="w-4 h-4 text-gray-600 mr-2" />
                  <span className="text-sm font-medium text-gray-800">
                    Analytics
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-500">
                <Button
                  onClick={handleScheduleDemo}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto group"
                >
                  <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto backdrop-blur-sm bg-white/80"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Demo
                </Button>
              </div>

              <div className="opacity-0 animate-fade-in-up delay-600">
                <p className="text-sm text-gray-500 mb-3">
                  Trusted by leading Pakistani businesses
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                  <div className="text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded">
                    TEXTILES
                  </div>
                  <div className="text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded">
                    ELECTRONICS
                  </div>
                  <div className="text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded">
                    COLD STORAGE
                  </div>
                </div>
              </div>
            </div>

            <div className="relative opacity-0 animate-fade-in-left delay-700">
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-6 transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-600 rounded-lg flex items-center justify-center"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Business Dashboard
                        </h3>
                        <p className="text-xs text-gray-500">
                          Real-time insights
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-blue-600 font-medium">
                            Revenue
                          </p>
                          <p className="text-lg font-bold text-blue-900">
                            ₨2.4M
                          </p>
                        </div>
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="mt-2 bg-blue-200 rounded-full h-1">
                        <div className="bg-blue-600 h-1 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-orange-600 font-medium">
                            Customers
                          </p>
                          <p className="text-lg font-bold text-orange-900">
                            1,247
                          </p>
                        </div>
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="mt-2 bg-orange-200 rounded-full h-1">
                        <div className="bg-orange-600 h-1 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-gray-700">
                        Monthly Growth
                      </p>
                      <div className="flex items-center text-blue-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-xs font-medium">+23.5%</span>
                      </div>
                    </div>
                    <div className="flex items-end space-x-2 h-16">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-blue-400 to-orange-400 rounded-sm flex-1 animate-pulse"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 p-4 animate-float delay-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Invoice Sent
                      </p>
                      <p className="text-xs text-gray-500">
                        ₨45,000 • Ahmed Textiles
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 p-4 animate-float delay-1000">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        New Customer
                      </p>
                      <p className="text-xs text-gray-500">
                        Karachi Electronics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-2000">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-gray-500">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section> */}

      <HeroSection />

      {/* Enhanced Infinite Scrolling Text Strip */}
      <ScrollTextStrip />

      {/* FBR Process Section */}
      {<FBRProcessSection />}

      {/* About Section
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  About{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                    Hisab Kitab
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are Pakistan's premier business management platform,
                  dedicated to empowering local businesses with cutting-edge
                  technology solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-600">
                      To digitally transform Pakistani businesses by providing
                      comprehensive, user-friendly management solutions that
                      drive growth and efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-600">
                      To become the leading business management platform in
                      Pakistan, enabling every business to reach its full
                      potential through technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Our Values
                    </h3>
                    <p className="text-gray-600">
                      Innovation, reliability, and customer success drive
                      everything we do. We believe in building lasting
                      partnerships with our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Active Users
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {<AboutSection />}

      {/* Services Section */}
      {/* <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions tailored for Pakistani
              enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">CRM Solutions</CardTitle>
                <CardDescription className="text-gray-600">
                  Complete customer relationship management with Pakistani
                  business workflows in mind
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Customer Database Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Lead Tracking & Conversion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Communication History
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">E-Invoicing</CardTitle>
                <CardDescription className="text-gray-600">
                  Automated invoicing system compliant with Pakistani tax
                  regulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Tax Compliant Invoices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Automated Calculations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Payment Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-xl">Business Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Real-time insights and reporting for data-driven decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                    Sales Performance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                    Financial Reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                    Custom Dashboards
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Supply Chain</CardTitle>
                <CardDescription className="text-gray-600">
                  End-to-end supply chain management and tracking solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Inventory Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Supplier Relations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Shipment Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Financial Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Complete financial oversight with expense tracking and
                  budgeting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Expense Tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Budget Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Cash Flow Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Round-the-clock customer support in Urdu and English
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                    Live Chat Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                    Phone Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                    Training Sessions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      {<ServicesSection />}

      {/* Features Overview Section */}
      {/* <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your Pakistani business efficiently,
              from customer management to financial reporting, all in one
              integrated platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Customer Relationship Management</CardTitle>
                <CardDescription>
                  Manage customer data, track interactions, and build stronger
                  relationships with your Pakistani clients through our
                  intuitive CRM tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>E-Invoicing & Billing</CardTitle>
                <CardDescription>
                  Generate professional invoices, track payments, and maintain
                  compliance with Pakistani tax regulations through automated
                  e-invoicing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <Truck className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Shipment & Supplier Tracking</CardTitle>
                <CardDescription>
                  Monitor your supply chain, track shipments, and manage
                  supplier relationships for seamless business operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Financial Reports & Analytics</CardTitle>
                <CardDescription>
                  Get real-time insights into your business performance with
                  detailed financial reports and analytics dashboards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Role-Based Access Control</CardTitle>
                <CardDescription>
                  Secure your business data with role-based permissions,
                  ensuring staff access only what they need for their
                  responsibilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Expense Management</CardTitle>
                <CardDescription>
                  Track business expenses, categorize spending, and maintain
                  financial transparency with comprehensive expense management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
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
      </section> */}
      {<FeaturesSection />}

      {/* Industry-Specific Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              360° Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Pakistani Industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hisab Kitab adapts to your industry's unique workflows and
              requirements, providing specialized features for different
              business sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <Warehouse className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
                <CardTitle className="text-center text-xl">
                  Cold Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Temperature monitoring integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Perishable inventory tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Quality control documentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Client storage agreements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <CardTitle className="text-center text-xl">
                  Fertilizers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Seasonal demand forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Agricultural supplier network</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Regulatory compliance tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Bulk order management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-gray-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <Zap className="h-16 w-16 text-gray-600 mb-4 mx-auto" />
                <CardTitle className="text-center text-xl">
                  Electronics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Product warranty management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Serial number tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Multi-location inventory</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Service center coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      <NicheSection />

      {/* Benefits Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Every{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Pakistani Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're an enterprise, accountant, or small business owner,
              Hisab Kitab provides tailored solutions for your specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <Building2 className="h-16 w-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Enterprises
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Scalable architecture for growing businesses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Advanced reporting and analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Multi-location management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Enterprise-grade security</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src="/logo_new.png"
                  alt="Hisab Kitab"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Accountants
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Automated tax compliance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Accurate financial tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Client management tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Professional invoice generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Store className="h-16 w-16 text-gray-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Small Businesses
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Affordable pricing plans</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Easy-to-use interface</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Quick setup and onboarding</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Local customer support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleScheduleDemo}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              See It in Action
            </Button>
          </div>
        </div>
      </section> */}

      <BenefitsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Testimonials Section */}
      {/* <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Pakistani Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Hisab Kitab has helped businesses across Pakistan
              streamline their operations and improve their bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">
                  Ahmed Textiles, Faisalabad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Hisab Kitab transformed our inventory management. We reduced
                  manual work by 60% and improved our invoice accuracy
                  significantly. The CRM features help us maintain better
                  relationships with our buyers."
                </p>
                <p className="text-sm text-gray-500">- Muhammad Ahmed, Owner</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">Karachi Cold Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "The temperature monitoring integration and automated
                  reporting saved us countless hours. Our clients now receive
                  detailed storage reports automatically, improving our service
                  quality."
                </p>
                <p className="text-sm text-gray-500">
                  - Fatima Khan, Operations Manager
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">
                  Pak Electronics, Lahore
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Managing warranties and serial numbers became effortless with
                  Hisab Kitab. Our customer service improved dramatically, and
                  we can track products across all our store locations."
                </p>
                <p className="text-sm text-gray-500">
                  - Ali Hassan, Store Manager
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      <TestimonialsSection />
      <PricingSection />

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today for a free
              consultation and demo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+92 300 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@hisabkitab.pk</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">Karachi, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Business Hours
                      </p>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Why Choose Us?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Local Pakistani business expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Free setup and training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    No long-term contracts
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Schedule Your Free Demo
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select your industry</option>
                    <option>Textiles</option>
                    <option>Electronics</option>
                    <option>Cold Storage</option>
                    <option>Fertilizers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <ContactUsSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/transparent-logo.png"
                  alt="Hisab Kitab Logo"
                  width={60}
                  height={60}
                  className="mr-3 bg-gray-900"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  Hisab Kitab
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Pakistan's leading 360° CRM and E-Invoicing platform, empowering
                businesses with digital tools for modern management.
              </p>
              <Button
                onClick={handleScheduleDemo}
                className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Demo
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    Features
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex flex-row gap-1">
                  <Mail className="text-blue-900 mr-2" /> info@hisabkitab.pk
                </li>
                <li className="flex flex-row gap-1">
                  <Phone className="text-blue-900 mr-2" /> +92 300 123 4567
                </li>
                <li className="flex flex-row gap-1">
                  <MapPin className="text-blue-900 mr-2" /> Karachi, Pakistan
                </li>
                <li className="flex flex-row gap-1">
                  <Clock className="text-blue-900 mr-2" /> Mon-Fri: 9AM-6PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Hisab Kitab. All rights reserved. | Made for Pakistani
              Businesses
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
