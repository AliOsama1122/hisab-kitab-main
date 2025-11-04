import { Sparkles } from "lucide-react";

export default function ScrollTextStrip() {
  return (
    <section className="relative py-3 overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Animated border effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse delay-1000"></div>

      <div className="relative z-10 flex animate-infinite-scroll whitespace-nowrap">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="mx-6 text-white text-lg font-bold uppercase tracking-wider flex items-center"
          >
            <Sparkles className="w-5 h-5 mr-2 text-yellow-300 animate-pulse" />
            Transform Your Business
            <Sparkles className="w-5 h-5 mx-2 text-yellow-300 animate-pulse delay-500" />
            Streamline Operations
            <Sparkles className="w-5 h-5 mx-2 text-yellow-300 animate-pulse delay-700" />
            Boost Growth
            <Sparkles className="w-5 h-5 mx-2 text-yellow-300 animate-pulse delay-1000" />
            Pakistan's Leading 360° Business Platform
            <Sparkles className="w-5 h-5 mx-2 text-yellow-300 animate-pulse delay-300" />
            CRM & E-Invoicing Solution
            <Sparkles className="w-5 h-5 mx-2 text-yellow-300 animate-pulse delay-600" />
            Trusted by 10,000+ Businesses
            <Sparkles className="w-5 h-5 mx-2 text-yellow-300 animate-pulse delay-900" />
            Built in Help Guides
            <Sparkles className="w-5 h-5 mx-2 text-yellow-300 animate-pulse delay-200" />
            Affordable for Every Business
          </span>
        ))}
      </div>
    </section>
  );
}
