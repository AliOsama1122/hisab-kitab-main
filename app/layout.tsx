import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MouseFollower from "@/components/ui/MouseFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hisab Kitab 360 - Leading CRM & E-Invoicing Platform",
  description:
    "Transform your business with Hisab Kitab 360's unified CRM and E-Invoicing. Streamline operations, manage customers, generate compliant invoices, and track finances from one powerful dashboard.",
  keywords:
    "Business management, CRM, E-invoicing, business software, invoice generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <ScrollToTopButton /> <WhatsAppButton /> <MouseFollower />
      </body>
    </html>
  );
}
