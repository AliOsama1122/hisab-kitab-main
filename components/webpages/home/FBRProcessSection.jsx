"use client";
import { Package, FileText, UploadCloud, Briefcase } from "lucide-react";
import Image from "next/image";
import AddProductImage from "@/public/add-product.png";
import AddInvoiceImage from "@/public/add-invoice.jpeg";

export default function FBRProcessTimeline() {
  const steps = [
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      title: "Add Product",
      desc: "Add products with name, price, and tax details to prepare your catalog for FBR-compliant invoicing.",
      image: AddProductImage,
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      title: "Make Sale & Generate Invoice",
      desc: "Select products, fill in sale details, and generate a professional invoice instantly.",
      image: AddInvoiceImage,
    },
    {
      icon: <UploadCloud className="w-6 h-6 text-green-600" />,
      title: "Publish to FBR",
      desc: "Send invoices to FBR in one click and receive a verified QR code and FBR number.",
      image: AddInvoiceImage,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">
            FBR-Integrated Sale Process
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            A simple overview of how your sales connect with FBR.
          </p>
        </div>

        {/* Horizontal Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col justify-between items-center text-center bg-gray-50 p-4 rounded-xl border border-gray-100 h-full"
            >
              <Image
                src={step.image}
                alt={step.title}
                className="rounded-lg w-full max-w-[250px] h-auto mb-4"
              />

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
