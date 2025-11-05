import { Button } from "@/components/ui/button";
import { handleContactUs, handleScheduleDemo } from "@/lib/utils";
import {
  BarChart3,
  Calendar,
  FileText,
  Play,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
        }}
      ></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-orange-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 to-blue-400/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up delay-100">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-blue-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  1,000+ Active Users
                </span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-orange-100">
                <Shield className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  99.9% Uptime
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-up delay-200">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Leading 360°
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
                  Business Management Platform
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl opacity-0 animate-fade-in-up delay-300">
                Transform your business with our unified CRM and E-Invoicing
                platform.
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent me-2">
                  {" "}
                  Streamline operations, manage customers, and boost growth
                </span>
                from one powerful dashboard.
              </p>
            </div>

            {/* Feature Pills */}
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

            {/* CTA Buttons */}
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
                onClick={() => handleContactUs("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto backdrop-blur-sm bg-white/80"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="opacity-0 animate-fade-in-up delay-600">
              <p className="text-sm text-gray-500 mb-3">
                Trusted by leading businesses
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
                <div className="text-xs font-semibold text-gray-400 bg-white/50 px-3 py-1 rounded">
                  Many More
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div className="relative opacity-0 animate-fade-in-left delay-700">
            <div className="relative">
              <img
                src="./slider-image.png"
                alt="Dashboard Mockup"
                className="w-full rounded-2xl"
              />
              {/* <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-6 transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <LayoutDashboard className="w-4 h-4 text-white" />
                    </div>
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
                        <p className="text-lg font-bold text-blue-900">₨2.4M</p>
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
              </div> */}

              {/* Floating Cards */}
              {/* <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 p-4 animate-float delay-500">
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
              </div> */}

              {/* <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 p-4 animate-float delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      New Customer
                    </p>
                    <p className="text-xs text-gray-500">Karachi Electronics</p>
                  </div>
                </div>
              </div> */}
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
  );
}
