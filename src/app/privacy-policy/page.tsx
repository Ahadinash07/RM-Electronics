import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export default function PrivacyPolicy() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-8 border-b pb-4">Privacy Policy</h1>

          <div className="space-y-8 text-gray-600 leading-relaxed">

            <div className="prose prose-gray max-w-none">
              <p className="font-medium mb-4">Last Updated: 7 October 2026</p>
              <p className="mb-4">
                At RM Electronics, we respect your privacy and are committed to protecting the personal information you provide when using our website, contacting us, or requesting TV repair and installation services.
              </p>
              <p className="mb-4">
                This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you.
              </p>
              <p className="mb-8">
                By using our website www.rmelectronics.hyd, submitting an enquiry form, contacting us by phone or WhatsApp, or requesting our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you fill out a form, request a quote, or communicate with us. This may include your name, email address, phone number, physical address, and details about your TV repair requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our repair services</li>
                <li>Process your service requests and send related information</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about services, offers, and promotions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Information Sharing</h2>
              <p>
                We do not share your personal information with third parties except as necessary to provide our services (e.g., sharing your address with our field technicians for doorstep repair) or to comply with the law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:<br />
                <strong>Phone:</strong> +91 7893457190<br />
                <strong>Email:</strong> rmelectronicshyd@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
