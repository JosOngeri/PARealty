import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
              <p>By accessing and using Plotnest Africa Realty, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on Plotnest Africa Realty for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Disclaimer</h2>
              <p>The materials on Plotnest Africa Realty are provided on an 'as is' basis. Plotnest Africa Realty makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Limitations</h2>
              <p>In no event shall Plotnest Africa Realty be liable for any damages arising out of the use or inability to use the materials on Plotnest Africa Realty.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Privacy Policy</h2>
              <p>Your privacy is important to us. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
