import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function Header({ activeSection }) {
  const linkClass = (id) =>
    `relative font-medium transition-colors duration-300 ${
      activeSection === id
        ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        : "text-gray-600 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/transparent-logo.png"
              alt="Hisab Kitab Logo"
              width={150}
              height={150}
              className="mr-3"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              "home",
              "about",
              "features",
              "services",
              "testimonials",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={linkClass(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
