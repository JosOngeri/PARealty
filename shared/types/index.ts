// Shared TypeScript types for all microservices

export interface User {
  id: string;
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'agent' | 'admin';
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'land' | 'apartment' | 'house' | 'commercial' | 'villa';
  category: 'sale' | 'rent' | 'lease';
  price: number;
  currency: 'KES' | 'USD' | 'EUR';
  location: {
    address: string;
    city: string;
    county: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  size: {
    value: number;
    unit: 'acres' | 'sqft' | 'sqm' | 'hectares';
  };
  specifications: {
    bedrooms?: number;
    bathrooms?: number;
    parkingSpaces?: number;
    yearBuilt?: number;
    condition?: 'new' | 'good' | 'fair' | 'needs_renovation';
  };
  ownershipType?: 'freehold' | 'leasehold';
  titleType?: 'title_deed' | 'lease_agreement' | 'allotment_letter';
  features: string[];
  amenities: string[];
  images: PropertyImage[];
  status: 'draft' | 'active' | 'pending' | 'sold' | 'rented' | 'expired';
  featured: boolean;
  agentId: string;
  expiresAt?: Date;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyImage {
  id: string;
  url: string;
  caption?: string;
  order: number;
  type: 'photo' | 'floor_plan' | 'video' | 'virtual_tour' | '360_photo';
  isPrimary: boolean;
}

export interface Inquiry {
  id: string;
  propertyId: string;
  userId?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'inquiry' | 'viewing_request' | 'contact_agent';
  status: 'pending' | 'responded' | 'closed';
  agentId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  authorId: string;
  authorName: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Agent {
  id: string;
  userId: string;
  bio: string;
  specializations: string[];
  territories: string[];
  languages: string[];
  certifications: string[];
  experience: number;
  education: string[];
  awards: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  listings: number;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchFilters {
  keyword?: string;
  location?: string;
  propertyType?: string[];
  category?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  sizeRange?: {
    min: number;
    max: number;
  };
  bedrooms?: number;
  bathrooms?: number;
  amenities?: string[];
  features?: string[];
  status?: string[];
  sortBy?: 'price_asc' | 'price_desc' | 'date_desc' | 'popularity' | 'relevance';
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    timestamp: Date;
    requestId: string;
  };
}
