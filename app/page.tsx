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
  ChartBar as BarChart3,
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
                className="bg-primary-600 hover:bg-green-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

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
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
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
