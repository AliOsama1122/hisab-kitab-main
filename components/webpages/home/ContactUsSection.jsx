"use client";

import { Button } from "@/components/ui/button";
import {
  CalendarCheck, // Changed Calendar to CalendarCheck for a better visual cue
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  MessageSquare, // Added for the message button
} from "lucide-react";
import { motion } from "framer-motion"; // For subtle animations

// Define the contact points data
const contactPoints = [
  {
    icon: Phone,
    title: "Call Us Directly",
    detail: "+92 300 123 4567",
    color: "blue",
    href: "tel:+923001234567",
  },
  {
    icon: Mail,
    title: "Send Us an Email",
    detail: "info@metadevzone.com",
    color: "orange",
    href: "mailto:info@metadevzone.com",
  },
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Sahiwal, Pakistan (Headquarters)",
    color: "gray",
    href: "#map-location", // Scroll to the map
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "Mon-Fri: 9AM - 6PM PKT",
    color: "blue-orange", // Custom color mix
    href: null,
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactUsSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-br from-white to-blue-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 mb-2">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Contact us today for a free consultation and personalized demo.
            We're here to help you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column: Contact Info & Value Props (Col 2/5) */}
          <motion.div
            className="lg:col-span-2 space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Contact Points - Structured as Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {contactPoints.map((point, index) => (
                  <motion.a
                    key={index}
                    href={point.href || "#"}
                    target={
                      (point.href && point.href.startsWith("http")) ||
                      (point.href && point.href.startsWith("mailto")) ||
                      (point.href && point.href.startsWith("tel"))
                        ? "_blank"
                        : "_self"
                    }
                    className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                    variants={featureVariants}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        point.color === "blue"
                          ? "from-blue-500 to-blue-600"
                          : point.color === "orange"
                          ? "from-orange-500 to-orange-600"
                          : point.color === "gray"
                          ? "from-gray-500 to-gray-600"
                          : "from-blue-500 to-orange-500"
                      } rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {point.title}
                      </p>
                      <p className="text-gray-600 text-sm font-medium">
                        {point.detail}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Why Choose Us - Enhanced callout */}
            <motion.div
              className="bg-gradient-to-br from-blue-100/50 to-orange-100/50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl"
              variants={featureVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                Commitment to Your Success
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center text-base">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mr-3" />
                  Local Expertise: Software tailored for businesses & tax laws.
                </li>
                <li className="flex items-center text-base">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mr-3" />
                  Dedicated Support: 24/7 technical and business customer
                  support.
                </li>
                <li className="flex items-center text-base">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mr-3" />
                  Zero Risk: Free setup, training, and no long-term contracts
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: Form (Col 3/5) */}
          <motion.div
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 transform hover:shadow-3xl transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
              Schedule Your Free Demo
            </h3>
            <p className="text-gray-600 mb-8">
              Tell us about your needs and we'll be in touch within one business
              hour.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                    placeholder="e.g., Muhammad"
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                    placeholder="e.g., Ali"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                  placeholder="name@company.pk"
                />
              </div>

              {/* Phone & Business Type in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                    placeholder="+92 3XX XXX XXXX"
                  />
                </div>
                {/* Business Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors appearance-none bg-white">
                    <option disabled>Select your industry</option>
                    <option>Textiles & Apparel</option>
                    <option>Electronics & Retail</option>
                    <option>Cold Chain / Logistics</option>
                    <option>FMCG & Wholesale</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                  placeholder="e.g., We need inventory tracking and CRM for 10 users across 3 locations."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-[1.005] transition-all duration-300 text-lg py-3 h-auto rounded-xl font-bold"
                size="lg"
              >
                <CalendarCheck className="w-5 h-5 mr-3" />
                Confirm Free Demo & Consultation
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Section (Added for local credibility) */}
        <div id="map-location" className="mt-20">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Find Us on the Map
          </h3>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/80 aspect-[16/6]">
            {/* Placeholder for the Google Map iframe or embedded map component */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.9600723783888!2d73.0916187646421!3d30.6632528145134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b7dc531a47af%3A0xa5ce65b93701481!2sSaeed%20Centre%2C%20Farid%20Town%20Rd%2C%20Sahiwal%2C%2057000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1762274529961!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
