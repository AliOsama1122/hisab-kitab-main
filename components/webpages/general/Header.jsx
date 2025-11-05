import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linkClass = (id) =>
    `relative font-medium transition-colors duration-300 ${
      activeSection === id
        ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        : "text-gray-600 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
    }`;

  const mobileLinkClass = (id) =>
    `block py-2 px-4 rounded-lg transition-colors duration-300 ${
      activeSection === id
        ? "text-blue-600 bg-blue-50"
        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "home",
    "about",
    "features",
    "services",
    "testimonials",
    "contact",
  ];

  const handleMobileNavClick = (item) => {
    scrollToSection(item);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 shadow-sm"
      } backdrop-blur-sm border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/transparent-logo.png"
              alt="Hisab Kitab Logo"
              width={120}
              height={120}
              className="mr-3"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleMobileNavClick(item)}
              className={mobileLinkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="pt-2">
            <Button
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg"
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
