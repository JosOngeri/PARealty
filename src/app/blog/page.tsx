import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author_name: string;
  category_name: string;
  published_at: string;
  image: string;
}

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Investment Opportunities in Nairobi Real Estate 2024',
    slug: 'top-5-investment-opportunities-nairobi-2024',
    excerpt: 'Discover the most promising real estate investment opportunities in Nairobi for 2024. From emerging neighborhoods to established high-yield areas.',
    author_name: 'James Kamau',
    category_name: 'Investment Tips',
    published_at: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Understanding Land Title Deeds in Kenya: A Complete Guide',
    slug: 'understanding-land-title-deeds-kenya',
    excerpt: 'Everything you need to know about land title deeds in Kenya. Learn about different types of titles, the registration process, and how to verify authenticity.',
    author_name: 'Sarah Wanjiku',
    category_name: 'Legal Guide',
    published_at: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'The Rise of Mixed-Use Developments in Kenyan Urban Centers',
    slug: 'rise-mixed-use-developments-kenya',
    excerpt: 'Explore the growing trend of mixed-use developments in Kenya\'s major cities and how they\'re transforming urban living and investment opportunities.',
    author_name: 'David Ochieng',
    category_name: 'Market Trends',
    published_at: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Mortgage Options for First-Time Home Buyers in Kenya',
    slug: 'mortgage-options-first-time-buyers-kenya',
    excerpt: 'A comprehensive guide to mortgage options available for first-time home buyers in Kenya. Learn about interest rates, requirements, and application processes.',
    author_name: 'Grace Muthoni',
    category_name: 'Financing',
    published_at: '2023-12-28',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Coastal Real Estate: Why Mombasa and Diani Are Hotspots',
    slug: 'coastal-real-estate-mombasa-diani-hotspots',
    excerpt: 'Discover why Kenya\'s coastal region is becoming a prime destination for real estate investment. From holiday homes to commercial properties.',
    author_name: 'James Kamau',
    category_name: 'Regional Focus',
    published_at: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop'
  }
];

export default function BlogPage() {
  const posts = samplePosts;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and trends in Kenyan real estate investment
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-gray-600 text-center">No blog posts available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                  <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">{post.category_name}</span>
                      <span>•</span>
                      <span>{new Date(post.published_at).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author_name}</span>
                      <Link href={`/blog/${post.slug}`} className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
