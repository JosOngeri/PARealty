import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Plotnest Africa Realty</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in real estate investment across Kenya and Africa
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Plotnest Africa Realty, we are dedicated to connecting people with their dream properties across Kenya and the broader African continent. Our mission is to make real estate investment accessible, transparent, and rewarding for everyone.
            </p>
            <p className="text-gray-600">
              "In PAR with your Investment Dreams" — this is more than just our tagline. It represents our commitment to walking alongside you on your property investment journey, providing expert guidance, verified listings, and exceptional service every step of the way.
            </p>
          </div>

          {/* Vision and Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To become Africa's most trusted real estate platform, known for integrity, innovation, and customer satisfaction. We aim to revolutionize how people buy, sell, and invest in property across the continent.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Our Values</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Integrity and transparency in all dealings</li>
                <li>• Customer-first approach to service</li>
                <li>• Innovation in real estate technology</li>
                <li>• Commitment to excellence and quality</li>
                <li>• Sustainable and ethical business practices</li>
              </ul>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for real estate and a deep understanding of the African property market, Plotnest Africa Realty has grown from a small local agency to a comprehensive platform serving investors across the region.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with a simple observation: finding reliable property information in Africa was challenging. Many investors faced issues with unverified listings, unclear ownership, and lack of transparency. We set out to change that.
            </p>
            <p className="text-gray-600">
              Today, we leverage technology, local expertise, and a network of trusted partners to provide a seamless property investment experience. From residential homes to commercial spaces and agricultural land, we help our clients make informed decisions.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-medium text-gray-900">Verified Properties</h3>
                  <p className="text-gray-600 text-sm">Every property on our platform is verified for authenticity and legal compliance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-medium text-gray-900">Expert Agents</h3>
                  <p className="text-gray-600 text-sm">Our experienced agents provide personalized service and deep local knowledge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-medium text-gray-900">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">No hidden fees. Clear, competitive pricing on all our listings.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-medium text-gray-900">Legal Support</h3>
                  <p className="text-gray-600 text-sm">Access to legal experts to ensure smooth and secure transactions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-medium text-gray-900">Wide Coverage</h3>
                  <p className="text-gray-600 text-sm">Properties available across major cities and emerging markets in Kenya.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-medium text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600 text-sm">Our team is always available to answer your questions and provide guidance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Properties Listed</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Counties Covered</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
