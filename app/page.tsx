"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  TrendingUp,
  Shield,
  Clock,
  Truck,
  Warehouse,
  Zap,
  CircleCheck as CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Calendar,
  Building2,
  Store,
  Play,
  Sparkles,
  Globe,
  Database,
  ChartBar as BarChart,
  Shield as ShieldIcon
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScheduleDemo = () => {
    // In a real implementation, this would open a scheduling modal or redirect to a booking page
    window.open("tel:+923001234567", "_self");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo_new.png"
                alt="Hisab Kitab 360 Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">
                Hisab Kitab 360
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Benefits
              </button>
              <Button
                onClick={handleScheduleDemo}
                className="bg-orange-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up delay-100">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">10,000+ Active Users</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                  <Shield className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">99.9% Uptime</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-up delay-200">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                    Pakistan's Leading
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    360° Business Platform
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl opacity-0 animate-fade-in-up delay-300">
                  Transform your Pakistani business with our unified CRM and E-Invoicing platform. 
                  <span className="font-semibold text-blue-700"> Streamline operations, manage customers, and boost growth</span> 
                  from one powerful dashboard.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 opacity-0 animate-fade-in-up delay-400">
                <div className="flex items-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-800">CRM Management</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200/50">
                  <FileText className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-800">E-Invoicing</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200/50">
                  {/* <BarChart3 className="w-4 h-4 text-purple-600 mr-2" /> */}
                  <span className="text-sm font-medium text-purple-800">Analytics</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-500">
                <Button
                  onClick={handleScheduleDemo}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto group"
                >
                  <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto backdrop-blur-sm bg-white/80"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="opacity-0 animate-fade-in-up delay-600">
                <p className="text-sm text-gray-500 mb-3">Trusted by leading Pakistani businesses</p>
                <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                  <div className="text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded">TEXTILES</div>
                  <div className="text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded">ELECTRONICS</div>
                  <div className="text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded">COLD STORAGE</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Dashboard Mockup */}
            <div className="relative opacity-0 animate-fade-in-left delay-700">
              <div className="relative">
                {/* Main Dashboard */}
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <BarChart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Dashboard</h3>
                        <p className="text-xs text-gray-500">Real-time insights</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-blue-600 font-medium">Revenue</p>
                          <p className="text-lg font-bold text-blue-900">₨2.4M</p>
                        </div>
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="mt-2 bg-blue-200 rounded-full h-1">
                        <div className="bg-blue-600 h-1 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-green-600 font-medium">Customers</p>
                          <p className="text-lg font-bold text-green-900">1,247</p>
                        </div>
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="mt-2 bg-green-200 rounded-full h-1">
                        <div className="bg-green-600 h-1 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-gray-700">Monthly Growth</p>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-xs font-medium">+23.5%</span>
                      </div>
                    </div>
                    <div className="flex items-end space-x-2 h-16">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-blue-400 to-blue-600 rounded-sm flex-1 animate-pulse"
                          style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 p-4 animate-float delay-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Invoice Sent</p>
                      <p className="text-xs text-gray-500">₨45,000 • Ahmed Textiles</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 p-4 animate-float delay-1000">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">New Customer</p>
                      <p className="text-xs text-gray-500">Karachi Electronics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-2000">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-gray-500">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Business Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your Pakistani business efficiently,
              from customer management to financial reporting, all in one
              integrated platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Customer Relationship Management</CardTitle>
                <CardDescription>
                  Manage customer data, track interactions, and build stronger
                  relationships with your Pakistani clients through our
                  intuitive CRM tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>E-Invoicing & Billing</CardTitle>
                <CardDescription>
                  Generate professional invoices, track payments, and maintain
                  compliance with Pakistani tax regulations through automated
                  e-invoicing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Truck className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Shipment & Supplier Tracking</CardTitle>
                <CardDescription>
                  Monitor your supply chain, track shipments, and manage
                  supplier relationships for seamless business operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                {/* <BarChart3 className="h-12 w-12 text-blue-600 mb-4" /> */}
                <CardTitle>Financial Reports & Analytics</CardTitle>
                <CardDescription>
                  Get real-time insights into your business performance with
                  detailed financial reports and analytics dashboards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Role-Based Access Control</CardTitle>
                <CardDescription>
                  Secure your business data with role-based permissions,
                  ensuring staff access only what they need for their
                  responsibilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
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
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Industry-Specific Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              360° Solutions for Pakistani Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hisab Kitab 360 adapts to your industry's unique workflows and
              requirements, providing specialized features for different
              business sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300">
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

            <Card className="bg-white border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <CardTitle className="text-center text-xl">
                  Fertilizers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Seasonal demand forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Agricultural supplier network</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Regulatory compliance tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Bulk order management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Zap className="h-16 w-16 text-purple-600 mb-4 mx-auto" />
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
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Pakistani Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're an enterprise, accountant, or small business owner,
              Hisab Kitab 360 provides tailored solutions for your specific
              needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
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

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src="/logo_new.png"
                  alt="Hisab Kitab 360"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Accountants
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Automated tax compliance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Accurate financial tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Client management tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Professional invoice generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <Store className="h-16 w-16 text-purple-600 mb-6" />
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
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              See It in Action
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Pakistani Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Hisab Kitab 360 has helped businesses across Pakistan
              streamline their operations and improve their bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300">
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
                  "Hisab Kitab 360 transformed our inventory management. We
                  reduced manual work by 60% and improved our invoice accuracy
                  significantly. The CRM features help us maintain better
                  relationships with our buyers."
                </p>
                <p className="text-sm text-gray-500">- Muhammad Ahmed, Owner</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
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

            <Card className="bg-white hover:shadow-lg transition-all duration-300">
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
                  Hisab Kitab 360. Our customer service improved dramatically,
                  and we can track products across all our store locations."
                </p>
                <p className="text-sm text-gray-500">
                  - Ali Hassan, Store Manager
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Join hundreds of Pakistani businesses that trust Hisab Kitab 360 for
            their CRM and E-Invoicing needs. Schedule your free demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleScheduleDemo}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4 h-auto"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Free Demo
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-300 text-orange-100 hover:bg-blue-600/10 text-lg px-8 py-4 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +92 300 123 4567
            </Button>
          </div>
          <p className="text-blue-200 mt-6">
            Free setup • No long-term contracts • Local support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo_new.png"
                  alt="Hisab Kitab 360 Logo"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <span className="text-2xl font-bold">Hisab Kitab 360</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Pakistan's leading 360° CRM and E-Invoicing platform, empowering
                businesses with digital tools for modern management.
              </p>
              <Button
                onClick={handleScheduleDemo}
                className="bg-orange-600 hover:bg-orange-700"
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
                    onClick={() => scrollToSection("features")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("industries")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    Industries
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="hover:text-orange-400 transition-colors"
                  >
                    Benefits
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📧 info@hisabkitab.pk</li>
                <li>📞 +92 300 123 4567</li>
                <li>📍 Karachi, Pakistan</li>
                <li>🕒 Mon-Fri: 9AM-6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Hisab Kitab 360. All rights reserved. | Made for
              Pakistani Businesses
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
