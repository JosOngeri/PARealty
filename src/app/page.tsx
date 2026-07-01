import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Property {
  id: string;
  title: string;
  type: string;
  category: string;
  price: number;
  currency: string;
  city: string;
  county: string;
  bedrooms?: number;
  bathrooms?: number;
  size_value?: number;
  size_unit?: string;
  image: string;
}

const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 3-Bedroom Apartment in Kilimani',
    type: 'apartment',
    category: 'sale',
    price: 15000000,
    currency: 'KES',
    city: 'Nairobi',
    county: 'Nairobi',
    bedrooms: 3,
    bathrooms: 2,
    size_value: 180,
    size_unit: 'sqm',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'Prime Land in Muthaiga',
    type: 'land',
    category: 'sale',
    price: 45000000,
    currency: 'KES',
    city: 'Nairobi',
    county: 'Nairobi',
    size_value: 0.5,
    size_unit: 'acres',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Luxury Villa in Karen',
    type: 'villa',
    category: 'sale',
    price: 85000000,
    currency: 'KES',
    city: 'Nairobi',
    county: 'Nairobi',
    bedrooms: 5,
    bathrooms: 4,
    size_value: 450,
    size_unit: 'sqm',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Commercial Space in Westlands',
    type: 'commercial',
    category: 'lease',
    price: 850000,
    currency: 'KES',
    city: 'Nairobi',
    county: 'Nairobi',
    size_value: 200,
    size_unit: 'sqm',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: '2-Bedroom House in Mombasa',
    type: 'house',
    category: 'sale',
    price: 8500000,
    currency: 'KES',
    city: 'Mombasa',
    county: 'Mombasa',
    bedrooms: 2,
    bathrooms: 1,
    size_value: 120,
    size_unit: 'sqm',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    title: 'Residential Plot in Nakuru',
    type: 'land',
    category: 'sale',
    price: 2500000,
    currency: 'KES',
    city: 'Nakuru',
    county: 'Nakuru',
    size_value: 0.25,
    size_unit: 'acres',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
  }
];

export default function Home() {
  const properties = sampleProperties;

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: currency || 'KES',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-emerald-700 to-emerald-900">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Find Your Dream Property in Kenya
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                In PAR with your Investment Dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/properties" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors text-center">
                  Browse Properties
                </Link>
                <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm text-center">
                  List Your Property
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Search */}
        <section className="bg-white py-8 -mt-6 relative z-10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search by location..."
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                <option value="">All Types</option>
                <option value="land">Land</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="commercial">Commercial</option>
                <option value="villa">Villa</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                <option value="">Any Price</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
                <option value="lease">For Lease</option>
              </select>
              <Link href="/properties" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center flex items-center justify-center">
                Search
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium properties across Kenya
              </p>
            </div>

            {properties.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600">No properties available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property) => (
                  <Link key={property.id} href={`/properties/${property.id}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow block">
                    <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                      {property.image ? (
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-emerald-600 text-4xl">🏠</span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded uppercase">
                          {property.category}
                        </span>
                        <span className="text-emerald-600 font-bold text-lg">
                          {formatPrice(property.price, property.currency)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{property.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {property.city}, {property.county}
                      </p>
                      <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                        {property.bedrooms && <span>🛏️ {property.bedrooms} Beds</span>}
                        {property.bathrooms && <span>🚿 {property.bathrooms} Baths</span>}
                        {property.size_value && (
                          <span>
                            📐 {property.size_value} {property.size_unit}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Link href="/properties" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Plotnest Africa Realty</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Verified Properties</h3>
                <p className="text-gray-600">All properties are verified for authenticity and legal compliance</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Expert Agents</h3>
                <p className="text-gray-600">Experienced agents provide personalized service and guidance</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Best Prices</h3>
                <p className="text-gray-600">Competitive prices with transparent pricing, no hidden fees</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their perfect property with Plotnest Africa Realty
            </p>
            <Link href="/register" className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block">
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
