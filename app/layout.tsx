import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hisab Kitab 360 - Pakistan\'s Leading CRM & E-Invoicing Platform',
  description: 'Transform your Pakistani business with Hisab Kitab 360\'s unified CRM and E-Invoicing. Streamline operations, manage customers, generate compliant invoices, and track finances from one powerful dashboard.',
  keywords: 'Pakistan business management, CRM Pakistan, E-invoicing Pakistan, business software Pakistan, invoice generator Pakistan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}