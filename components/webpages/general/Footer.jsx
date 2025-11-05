import { Button } from "@/components/ui/button";
import {
  contactEmail,
  contactNumber,
  handleScheduleDemo,
  scrollToSection,
} from "@/lib/utils";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/footer-logo.png"
                alt="Hisab Kitab Logo"
                width={150}
                height={150}
                className="mr-3 bg-gray-900"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading 360° CRM and E-Invoicing platform, empowering businesses
              with digital tools for modern management.
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
                <Mail className="text-blue-900 mr-2" /> {contactEmail}
              </li>
              <li className="flex flex-row gap-1">
                <Phone className="text-blue-900 mr-2" /> {contactNumber}
              </li>
              <li className="flex flex-row gap-1">
                <MapPin className="text-blue-900 mr-2" /> Sahiwal, Pakistan
              </li>
              <li className="flex flex-row gap-1">
                <Clock className="text-blue-900 mr-2" /> Mon-Fri: 9AM-6PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Left Side Text */}
            <p className="text-center md:text-left">
              &copy; 2025 Hisab Kitab 360. All rights reserved. | Made for
              Businesses
            </p>

            {/* Right Side Links */}
            <div className="flex items-center gap-4 text-center md:text-right">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/term-conditions"
                className="hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
