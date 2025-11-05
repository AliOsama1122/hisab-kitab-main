import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export default function CTASection() {
  const handleContactUs = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScheduleDemo = () => {
    window.open("tel:+923001234567", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-50 mb-8">
          Join hundreds of Pakistani businesses that trust Hisab Kitab for their
          CRM and E-Invoicing needs. Schedule your free demo today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => handleContactUs("contact")}
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Schedule Free Demo
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          <Button
            onClick={handleScheduleDemo}
            variant="outline"
            size="lg"
            className="border-white text-inherit hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
  );
}
