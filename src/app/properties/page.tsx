import { useState } from 'react';
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

const allProperties: Property[] = [
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
  },
  {
    id: '7',
    title: 'Studio Apartment in CBD',
    type: 'apartment',
    category: 'rent',
    price: 45000,
    currency: 'KES',
    city: 'Nairobi',
    county: 'Nairobi',
    bedrooms: 1,
    bathrooms: 1,
    size_value: 45,
    size_unit: 'sqm',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
  },
  {
    id: '8',
    title: '4-Bedroom Maisonette in Lavington',
    type: 'house',
    category: 'sale',
    price: 32000000,
    currency: 'KES',
    city: 'Nairobi',
    county: 'Nairobi',
    bedrooms: 4,
    bathrooms: 3,
    size_value: 280,
    size_unit: 'sqm',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'
  },
  {
    id: '9',
    title: 'Beach Plot in Diani',
    type: 'land',
    category: 'sale',
    price: 18000000,
    currency: 'KES',
    city: 'Diani',
    county: 'Kwale',
    size_value: 1,
    size_unit: 'acres',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
  }
];

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    city: '',
  });

  const filteredProperties = allProperties.filter(property => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.category && property.category !== filters.category) return false;
    if (filters.city && property.city.toLowerCase() !== filters.city.toLowerCase()) return false;
    return true;
  });

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
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">All Properties</h1>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="land">Land</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="commercial">Commercial</option>
                <option value="villa">Villa</option>
              </select>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">Any Category</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
                <option value="lease">For Lease</option>
              </select>
              <input
                type="text"
                placeholder="Search by city..."
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                onClick={() => setFilters({ type: '', category: '', city: '' })}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-600">No properties found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
