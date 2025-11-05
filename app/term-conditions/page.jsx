"use client";

import Header from "@/components/webpages/general/Header";
import Footer from "@/components/webpages/general/Footer";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* HEADER */}
      <Header />

      {/* BANNER */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 py-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm mb-3">
            <a href="/" className="opacity-90 hover:opacity-100 underline">
              Home
            </a>{" "}
            / Terms & Conditions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>Hisab Kitab 360</strong>, accessible at{" "}
            <a
              href="https://www.hiskitab360.metadevzone.com"
              className="text-blue-600 hover:underline"
            >
              www.hiskitab360.metadevzone.com
            </a>
            . These Terms and Conditions (“Terms”) govern your use of our
            website and services. By accessing or using our website, you agree
            to comply with these Terms. If you do not agree, please discontinue
            using our website immediately.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Acceptance of Terms
          </h3>
          <p className="text-gray-700 leading-relaxed">
            By using <strong>Hisab Kitab 360</strong>, you acknowledge that you
            have read, understood, and agree to be bound by these Terms and any
            applicable laws and regulations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. Use of Website
          </h3>
          <p className="text-gray-700 leading-relaxed">
            You agree to use the website only for lawful purposes and in a
            manner that does not infringe the rights of, restrict, or inhibit
            anyone else’s use of the website. You must not misuse the website by
            introducing malicious software, attempting unauthorized access, or
            engaging in activities that may disrupt its operation.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. Intellectual Property Rights
          </h3>
          <p className="text-gray-700 leading-relaxed">
            All content, logos, designs, graphics, and other materials on this
            website are the property of <strong>Meta Dev Zone</strong> and
            protected by copyright and trademark laws. You may not copy,
            reproduce, or distribute any materials without prior written consent
            from Meta Dev Zone.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. User Content
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If you submit content through our website, including feedback or
            messages via our contact form, you grant Meta Dev Zone a
            non-exclusive, royalty-free, perpetual, and worldwide license to
            use, reproduce, and display that content for website-related
            purposes.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Disclaimer of Warranties
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Hisab Kitab 360</strong> is provided on an “as is” and “as
            available” basis. We make no warranties or representations of any
            kind, express or implied, regarding the operation, accuracy, or
            availability of the website or its content.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Limitation of Liability
          </h3>
          <p className="text-gray-700 leading-relaxed">
            In no event shall Meta Dev Zone or its affiliates be liable for any
            damages arising from your use or inability to use the website,
            including but not limited to loss of data, profits, or business
            interruption.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Links to Other Websites
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites. We do not
            control or endorse the content or practices of these sites.
            Accessing any third-party website is at your own risk.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            8. Termination
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate access to the website
            at our discretion without prior notice for users who violate these
            Terms or engage in harmful activity.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            9. Governing Law
          </h3>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with
            the laws of Pakistan. Any disputes arising under these Terms shall
            be subject to the exclusive jurisdiction of the courts of Pakistan.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            10. Contact Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            For any questions or concerns regarding these Terms and Conditions,
            please contact us at:
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
