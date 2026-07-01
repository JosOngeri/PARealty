import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, make a property inquiry, or contact us. This may include your name, email address, phone number, and other information you choose to provide.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to process transactions and send you related information, to send you technical notices and support messages, and to respond to your comments and questions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with our agents and service providers who perform services on our behalf, such as property agents who respond to your inquiries.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also opt out of certain communications from us.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at PArealtyMD@gmail.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
