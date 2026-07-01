// API Client for microservices communication
const API_BASE_URLS = {
  property: process.env.NEXT_PUBLIC_PROPERTY_SERVICE_URL || 'http://localhost:3001',
  user: process.env.NEXT_PUBLIC_USER_SERVICE_URL || 'http://localhost:3002',
  blog: process.env.NEXT_PUBLIC_BLOG_SERVICE_URL || 'http://localhost:3003',
  admin: process.env.NEXT_PUBLIC_ADMIN_SERVICE_URL || 'http://localhost:3004',
};

class ApiClient {
  private async request<T>(
    service: keyof typeof API_BASE_URLS,
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URLS[service]}${endpoint}`;
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'An error occurred' }));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error [${service}]:`, error);
      throw error;
    }
  }

  // Property Service
  async getProperties(params?: {
    page?: number;
    limit?: number;
    status?: string;
    type?: string;
    category?: string;
    featured?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      });
    }

    return this.request('property', `/api/properties?${queryParams.toString()}`);
  }

  async getProperty(id: string) {
    return this.request('property', `/api/properties/${id}`);
  }

  async createProperty(data: any) {
    return this.request('property', '/api/properties', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProperty(id: string, data: any) {
    return this.request('property', `/api/properties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProperty(id: string) {
    return this.request('property', `/api/properties/${id}`, {
      method: 'DELETE',
    });
  }

  async incrementPropertyViews(id: string) {
    return this.request('property', `/api/properties/${id}/views`, {
      method: 'POST',
    });
  }

  async getPropertyImages(id: string) {
    return this.request('property', `/api/properties/${id}/images`);
  }

  async uploadPropertyImage(id: string, data: any) {
    return this.request('property', `/api/properties/${id}/images`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deletePropertyImage(id: string, imageId: string) {
    return this.request('property', `/api/properties/${id}/images/${imageId}`, {
      method: 'DELETE',
    });
  }

  // Search Service
  async searchProperties(filters: any) {
    return this.request('property', '/api/search', {
      method: 'POST',
      body: JSON.stringify(filters),
    });
  }

  async getSearchSuggestions(query: string) {
    return this.request('property', `/api/search/suggestions?q=${encodeURIComponent(query)}`);
  }

  // User Service - Auth
  async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }) {
    return this.request('user', '/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(email: string, password: string) {
    return this.request('user', '/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async forgotPassword(email: string) {
    return this.request('user', '/api/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(token: string, newPassword: string) {
    return this.request('user', '/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
    });
  }

  // User Service - Profile
  async getUserProfile(id: string) {
    return this.request('user', `/api/users/${id}`);
  }

  async updateUserProfile(id: string, data: any) {
    return this.request('user', `/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async uploadUserAvatar(id: string, url: string) {
    return this.request('user', `/api/users/${id}/avatar`, {
      method: 'POST',
      body: JSON.stringify({ url }),
    });
  }

  async changeUserPassword(id: string, currentPassword: string, newPassword: string) {
    return this.request('user', `/api/users/${id}/password`, {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  // User Service - Inquiries
  async createInquiry(data: any) {
    return this.request('user', '/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getPropertyInquiries(propertyId: string) {
    return this.request('user', `/api/inquiries/property/${propertyId}`);
  }

  async getUserInquiries(userId: string) {
    return this.request('user', `/api/inquiries/user/${userId}`);
  }

  async getAgentInquiries(agentId: string) {
    return this.request('user', `/api/inquiries/agent/${agentId}`);
  }

  async updateInquiryStatus(id: string, status: string) {
    return this.request('user', `/api/inquiries/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async deleteInquiry(id: string) {
    return this.request('user', `/api/inquiries/${id}`, {
      method: 'DELETE',
    });
  }

  // User Service - Favorites
  async addFavorite(userId: string, propertyId: string) {
    return this.request('user', '/api/favorites', {
      method: 'POST',
      body: JSON.stringify({ userId, propertyId }),
    });
  }

  async removeFavorite(userId: string, propertyId: string) {
    return this.request('user', '/api/favorites', {
      method: 'DELETE',
      body: JSON.stringify({ userId, propertyId }),
    });
  }

  async getUserFavorites(userId: string) {
    return this.request('user', `/api/favorites/user/${userId}`);
  }

  async checkFavorite(userId: string, propertyId: string) {
    return this.request('user', `/api/favorites/check?userId=${userId}&propertyId=${propertyId}`);
  }

  // Blog Service
  async getBlogPosts(params?: {
    page?: number;
    limit?: number;
    status?: string;
    category?: string;
    tag?: string;
    author?: string;
  }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      });
    }

    return this.request('blog', `/api/blogs?${queryParams.toString()}`);
  }

  async getBlogPostBySlug(slug: string) {
    return this.request('blog', `/api/blogs/${slug}`);
  }

  async createBlogPost(data: any) {
    return this.request('blog', '/api/blogs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateBlogPost(id: string, data: any) {
    return this.request('blog', `/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteBlogPost(id: string) {
    return this.request('blog', `/api/blogs/${id}`, {
      method: 'DELETE',
    });
  }

  async publishBlogPost(id: string) {
    return this.request('blog', `/api/blogs/${id}/publish`, {
      method: 'POST',
    });
  }

  async getRelatedBlogPosts(id: string) {
    return this.request('blog', `/api/blogs/${id}/related`);
  }

  async getBlogCategories() {
    return this.request('blog', '/api/categories');
  }

  async getBlogCategoryBySlug(slug: string) {
    return this.request('blog', `/api/categories/${slug}`);
  }

  async createBlogCategory(data: any) {
    return this.request('blog', '/api/categories', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getBlogTags() {
    return this.request('blog', '/api/tags');
  }

  async getBlogTagBySlug(slug: string) {
    return this.request('blog', `/api/tags/${slug}`);
  }

  async createBlogTag(data: any) {
    return this.request('blog', '/api/tags', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Admin Service
  async getAgents(params?: { page?: number; limit?: number }) {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      });
    }

    return this.request('admin', `/api/agents?${queryParams.toString()}`);
  }

  async getAgent(id: string) {
    return this.request('admin', `/api/agents/${id}`);
  }

  async createAgent(data: any) {
    return this.request('admin', '/api/agents', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateAgent(id: string, data: any) {
    return this.request('admin', `/api/agents/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteAgent(id: string) {
    return this.request('admin', `/api/agents/${id}`, {
      method: 'DELETE',
    });
  }

  async getAgentProperties(id: string) {
    return this.request('admin', `/api/agents/${id}/properties`);
  }

  async updateAgentListingsCount(id: string, count: number) {
    return this.request('admin', `/api/agents/${id}/listings-count`, {
      method: 'POST',
      body: JSON.stringify({ count }),
    });
  }

  async getDashboardStats() {
    return this.request('admin', '/api/dashboard/stats');
  }

  async getDashboardActivities(limit?: number) {
    return this.request('admin', `/api/dashboard/activities?limit=${limit || 20}`);
  }

  async getPropertyAnalytics(period: string) {
    return this.request('admin', `/api/dashboard/analytics/properties?period=${period}`);
  }

  async getInquiryAnalytics(period: string) {
    return this.request('admin', `/api/dashboard/analytics/inquiries?period=${period}`);
  }

  async getAgentPerformance(limit?: number) {
    return this.request('admin', `/api/dashboard/analytics/agents?limit=${limit || 10}`);
  }
}

export const apiClient = new ApiClient();
