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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 sm:py-20 md:py-24"
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-orange-400/10 rounded-full blur-3xl animate-float hidden sm:block"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 to-blue-400/10 rounded-full blur-3xl animate-float delay-1000 hidden sm:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 opacity-0 animate-fade-in-up delay-100">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-blue-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  1,000+ Active Users
                </span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-orange-100">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 mr-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  99.9% Uptime
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-up delay-200">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Leading 360°
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
                  Business Management Platform
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl opacity-0 animate-fade-in-up delay-300">
                Transform your business with our unified CRM and E-Invoicing
                platform.
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Streamline operations, manage customers, and boost growth
                </span>
                from one powerful dashboard.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 opacity-0 animate-fade-in-up delay-400">
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-200">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
                <span className="text-xs sm:text-sm font-medium text-blue-800">
                  CRM Management
                </span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-orange-200">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 mr-2" />
                <span className="text-xs sm:text-sm font-medium text-orange-800">
                  E-Invoicing
                </span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-200">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 mr-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-800">
                  Analytics
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-500">
              <Button
                onClick={handleScheduleDemo}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 h-auto group"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                onClick={() => handleContactUs("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 h-auto backdrop-blur-sm bg-white/80"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Schedule Free Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="opacity-0 animate-fade-in-up delay-600">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 text-center lg:text-left">
                Trusted by leading businesses
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 opacity-70">
                <div className="text-xs sm:text-sm font-semibold text-gray-600 bg-white/30 dark:bg-gray-800/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full whitespace-nowrap">
                  TEXTILES
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600 bg-white/30 dark:bg-gray-800/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full whitespace-nowrap">
                  ELECTRONICS
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600 bg-white/30 dark:bg-gray-800/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full whitespace-nowrap">
                  COLD STORAGE
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600 bg-white/30 dark:bg-gray-800/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full whitespace-nowrap">
                  Many More
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup (Hidden on mobile) */}
          <div className="relative opacity-0 animate-fade-in-left delay-700 flex justify-center lg:block hidden">
            <div className="relative w-full max-w-lg">
              <img
                src="./slider-image.png"
                alt="Dashboard Mockup"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Hidden on mobile) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-2000 hidden sm:block">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xs sm:text-sm text-gray-500">Scroll to explore</p>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-gray-400 rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
