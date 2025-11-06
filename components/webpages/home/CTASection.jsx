import { Button } from "@/components/ui/button";
import { handleContactUs } from "@/lib/utils";

export default function CTASection() {
  const ProductScreens = () => (
    <div className="relative h-56 md:h-56 w-full lg:w-[unset]">
      <img
        src="./cta-image.png"
        alt=""
        className="max-w-full h-auto object-cover"
      />
    </div>
  );

  return (
    <section className="py-0 pb-6 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-white p-8 md:p-12 lg:p-12 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
          {/* Radial Glow Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.12),transparent_70%)]"></div>

          {/* Content Layer */}
          <div className="relative z-10 lg:flex flex-wrap lg:items-center lg:justify-between">
            <div className="lg:w-7/12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-semibold mb-6 leading-tight">
                Run your business anytime, anywhere!
              </h2>

              <p className="text-sm text-gray-300 mb-10 max-w-lg">
                Reporting → Yearly Report, Invoicing, Batch Reports,Payment Over
                All Reports, Stock summary report, Customer Summary report, and
                Supplier Summary report
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Button
                  onClick={() => handleContactUs("contact")}
                  size="lg"
                  className="bg-orange-600 text-white hover:bg-orange-700 text-lg px-8 py-4 h-auto shadow-lg transition-all duration-300 rounded-lg"
                >
                  Book Demo
                </Button>
              </div>
            </div>

            <div className="lg:w-5/12">
              <ProductScreens />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
