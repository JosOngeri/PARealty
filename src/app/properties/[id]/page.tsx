import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Property {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  price: number;
  currency: string;
  address: string;
  city: string;
  county: string;
  size_value?: number;
  size_unit?: string;
  bedrooms?: number;
  bathrooms?: number;
  parking_spaces?: number;
  features: string[];
  amenities: string[];
  images: string[];
  agent: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    bio: string;
  };
}

const sampleProperty: Property = {
  id: '1',
  title: 'Modern 3-Bedroom Apartment in Kilimani',
  description: `This stunning 3-bedroom apartment offers the perfect blend of luxury and convenience in the heart of Kilimani. 

Key highlights:
- Spacious open-plan living and dining area
- Modern kitchen with high-end appliances
- Master bedroom with en-suite bathroom
- Two additional bedrooms sharing a well-appointed bathroom
- Private balcony with city views
- Dedicated parking space
- 24-hour security
- Backup generator

The apartment features premium finishes throughout, including hardwood flooring, granite countertops, and modern lighting fixtures. Large windows provide abundant natural light and offer views of the surrounding neighborhood.

Located in a prime area with easy access to shopping malls, restaurants, international schools, and major highways. This property is perfect for families or professionals seeking a sophisticated urban lifestyle.`,
  type: 'apartment',
  category: 'sale',
  price: 15000000,
  currency: 'KES',
  address: 'Ring Road Kilimani, Near Yaya Centre',
  city: 'Nairobi',
  county: 'Nairobi',
  size_value: 180,
  size_unit: 'sqm',
  bedrooms: 3,
  bathrooms: 2,
  parking_spaces: 1,
  features: [
    'Open floor plan',
    'Modern kitchen',
    'Hardwood floors',
    'Large windows',
    'Private balcony',
    'Built-in wardrobes',
    'Air conditioning',
    'Solar water heating'
  ],
  amenities: [
    '24-hour security',
    'Backup generator',
    'Elevator access',
    'Gym facilities',
    'Swimming pool',
    'Children play area',
    'Visitor parking',
    'Intercom system'
  ],
  images: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&h=800&fit=crop'
  ],
  agent: {
    first_name: 'James',
    last_name: 'Kamau',
    email: 'james.kamau@plotnest.com',
    phone: '+254 720 346973',
    bio: 'James is a seasoned real estate professional with over 10 years of experience in the Nairobi property market. He specializes in residential properties and has helped hundreds of families find their dream homes.'
  }
};

export default function PropertyDetailPage() {
  const property = sampleProperty;

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
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/properties" className="hover:text-emerald-600">Properties</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{property.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {property.images && property.images.length > 0 ? (
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-96 object-cover"
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                    <span className="text-emerald-600 text-6xl">🏠</span>
                  </div>
                )}
                {property.images && property.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 p-2">
                    {property.images.slice(1, 5).map((img, idx) => (
                      <img key={idx} src={img} alt="" className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80" />
                    ))}
                  </div>
                )}
              </div>

              {/* Property Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                    <p className="text-gray-600">{property.address}, {property.city}, {property.county}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-600">{formatPrice(property.price, property.currency)}</p>
                    <p className="text-sm text-gray-500 capitalize">{property.category}</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-4 gap-4 py-4 border-y border-gray-200">
                  {property.bedrooms && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                      <p className="text-sm text-gray-500">Bedrooms</p>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                      <p className="text-sm text-gray-500">Bathrooms</p>
                    </div>
                  )}
                  {property.parking_spaces && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{property.parking_spaces}</p>
                      <p className="text-sm text-gray-500">Parking</p>
                    </div>
                  )}
                  {property.size_value && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{property.size_value}</p>
                      <p className="text-sm text-gray-500">{property.size_unit}</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                  <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
                </div>

                {/* Features */}
                {property.features && property.features.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Features</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {property.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <span className="text-emerald-600">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Amenities */}
                {property.amenities && property.amenities.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {property.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <span className="text-emerald-600">✓</span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specifications */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Specifications</h2>
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-gray-500">Type</dt>
                      <dd className="text-gray-900 capitalize">{property.type}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Category</dt>
                      <dd className="text-gray-900 capitalize">{property.category}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              {property.agent && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Agent</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                      {property.agent.first_name[0]}{property.agent.last_name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {property.agent.first_name} {property.agent.last_name}
                      </p>
                      <p className="text-sm text-gray-500">{property.agent.email}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{property.agent.bio}</p>
                  <div className="space-y-2">
                    <a href={`tel:${property.agent.phone}`} className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-center transition-colors">
                      Call Agent
                    </a>
                    <a href={`mailto:${property.agent.email}`} className="block w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg text-center transition-colors">
                      Email Agent
                    </a>
                  </div>
                </div>
              )}

              {/* Inquiry Form */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Send Inquiry</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Interested in this property? Contact us for more information or to schedule a viewing.
                </p>
                <a
                  href={`mailto:${property.agent?.email || 'info@plotnest.com'}?subject=Inquiry about ${property.title}`}
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-center transition-colors"
                >
                  Send Email Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
