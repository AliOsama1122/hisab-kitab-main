"use client";

import Header from "@/components/webpages/general/Header";
import Footer from "@/components/webpages/general/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* HEADER */}
      <Header />

      {/* BANNER */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 py-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm mb-3">
            <a href="/home" className="opacity-90 hover:opacity-100 underline">
              Home
            </a>{" "}
            / Privacy Policy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm mt-3 opacity-90">
            Last updated: November 5, 2025
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p className="text-gray-700 leading-relaxed text-justify">
            Welcome to <strong>Hisab Kitab 360</strong>, accessible at{" "}
            <a
              href="https://www.hiskitab360.metadevzone.com"
              className="text-blue-600 hover:underline"
            >
              www.hiskitab360.metadevzone.com
            </a>
            . Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your information when you visit or
            interact with our website.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Information We Collect
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            When you visit our website, we may collect the following types of
            information:
            <br />
            <br />• <strong>Personal Information:</strong> Information you
            voluntarily provide through our contact form, such as your name,
            email address, and message.
            <br />• <strong>Automatically Collected Data:</strong> Information
            such as your IP address, browser type, operating system, and
            browsing behavior on our website.
            <br />• <strong>Cookies:</strong> We may use cookies to enhance your
            browsing experience and analyze site traffic.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            We use the collected information for the following purposes:
            <br />
            <br />• To respond to inquiries and provide customer support.
            <br />• To improve website functionality, performance, and user
            experience.
            <br />• To communicate with you through email (
            <a
              href="mailto:info@metadevzone.com"
              className="text-blue-600 hover:underline"
            >
              info@metadevzone.com
            </a>
            ) if you contact us through our contact form.
            <br />• To maintain the security and integrity of our systems.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. Sharing Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            We do not sell, trade, or rent users’ personal identification
            information to others. We may share limited information with trusted
            partners who assist us in operating our website, conducting our
            business, or servicing you, provided those parties agree to keep
            this information confidential.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. Data Security
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            We take appropriate measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
            However, please be aware that no method of online transmission or
            storage is 100% secure.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Your Rights
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            You have the right to request access, correction, or deletion of
            your personal data we hold. If you wish to exercise these rights,
            please contact us at{" "}
            <a
              href="mailto:info@metadevzone.com"
              className="text-blue-600 hover:underline"
            >
              info@metadevzone.com
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Third-Party Links
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our website may contain links to other websites. We are not
            responsible for the content or privacy practices of such third-party
            sites. We encourage users to read the privacy policies of any
            third-party websites they visit.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Updates to This Policy
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated date. Your continued
            use of the website after any modifications indicates your acceptance
            of the updated policy.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            8. Contact Us
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            If you have any questions or concerns about this Privacy Policy or
            the practices of this website, please contact us at:
            <br />
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@metadevzone.com"
              className="text-blue-600 hover:underline"
            >
              info@metadevzone.com
            </a>
            <br />
            <strong>Website:</strong>{" "}
            <a
              href="https://www.hiskitab360.metadevzone.com"
              className="text-blue-600 hover:underline"
            >
              www.hiskitab360.metadevzone.com
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
