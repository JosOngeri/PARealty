import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/session';
import { logout } from '@/app/actions/auth';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect('/login');

  const initial = session.firstName[0].toUpperCase();

  // Fetch user's inquiries
  let inquiries: any[] = [];
  try {
    const res = await fetch(`http://localhost:3002/api/inquiries/user/${session.id}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      inquiries = data.data || [];
    }
  } catch {}

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Top nav */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-[#1A5C2A] font-bold text-xl tracking-tight">
          Plotnest<span className="text-[#E8920A]"> Africa</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-[#1A5C2A] flex items-center justify-center text-white font-semibold text-sm">
            {initial}
          </div>
          <span className="text-gray-700 text-sm font-medium">
            {session.firstName} {session.lastName}
          </span>
          <form action={logout}>
            <button type="submit" className="text-sm text-gray-500 hover:text-gray-800 transition">
              Sign out
            </button>
          </form>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Good to see you, {session.firstName}!
          </h1>
          <p className="text-gray-500 mt-1 capitalize">
            Role: <span className="font-medium text-[#1A5C2A]">{session.role}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/properties"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group"
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition">
              <svg className="w-6 h-6 text-[#1A5C2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Browse Properties</h3>
            <p className="text-gray-500 text-sm mt-1">View all listings</p>
          </Link>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#E8920A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Saved Properties</h3>
            <p className="text-gray-500 text-sm mt-1">Coming soon</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">My Inquiries</h3>
            <p className="text-gray-500 text-sm mt-1">{inquiries.length} inquiries</p>
          </div>
        </div>

        {/* Recent Inquiries */}
        {inquiries.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
            <h2 className="font-semibold text-gray-900 p-6 pb-4">Recent Inquiries</h2>
            <div className="divide-y divide-gray-100">
              {inquiries.slice(0, 5).map((inquiry) => (
                <div key={inquiry.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{inquiry.message?.substring(0, 100) || 'No message'}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Property ID: {inquiry.property_id?.substring(0, 8)}...
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      inquiry.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      inquiry.status === 'responded' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {inquiry.status || 'pending'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Session info card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-3">Account Details</h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="text-gray-500">Name</dt>
              <dd className="text-gray-900 font-medium">{session.firstName} {session.lastName}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Email</dt>
              <dd className="text-gray-900 font-medium">{session.email}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Role</dt>
              <dd className="text-gray-900 font-medium capitalize">{session.role}</dd>
            </div>
            <div>
              <dt className="text-gray-500">User ID</dt>
              <dd className="text-gray-900 font-mono text-xs">{session.id}</dd>
            </div>
          </dl>
        </div>
      </main>
    </div>
  );
}
