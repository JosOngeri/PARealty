import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/session';
import { logout } from '@/app/actions/auth';

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session) redirect('/login');
  if (session.role !== 'admin') redirect('/dashboard');

  // Fetch stats from admin service
  let stats = { properties: 0, users: 0, agents: 0, inquiries: 0 };
  try {
    const res = await fetch('http://localhost:3004/api/dashboard/stats', { cache: 'no-store' });
    if (res.ok) stats = await res.json();
  } catch {}

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Top nav */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-[#1A5C2A] font-bold text-xl tracking-tight">
          Plotnest<span className="text-[#E8920A]"> Africa</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-medium">ADMIN</span>
          <span className="text-gray-700 text-sm font-medium">{session.firstName} {session.lastName}</span>
          <form action={logout}>
            <button type="submit" className="text-sm text-gray-500 hover:text-gray-800 transition">
              Sign out
            </button>
          </form>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage properties, agents, and inquiries</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm mb-1">Total Properties</p>
            <p className="text-3xl font-bold text-gray-900">{stats.properties}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm mb-1">Total Users</p>
            <p className="text-3xl font-bold text-gray-900">{stats.users}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm mb-1">Active Agents</p>
            <p className="text-3xl font-bold text-gray-900">{stats.agents}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm mb-1">Inquiries</p>
            <p className="text-3xl font-bold text-gray-900">{stats.inquiries}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admin/properties" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition">
              <svg className="w-6 h-6 text-[#1A5C2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Manage Properties</h3>
            <p className="text-gray-500 text-sm mt-1">View, edit, and delete property listings</p>
          </Link>

          <Link href="/admin/agents" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Manage Agents</h3>
            <p className="text-gray-500 text-sm mt-1">View and manage agent accounts</p>
          </Link>

          <Link href="/admin/inquiries" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition">
              <svg className="w-6 h-6 text-[#E8920A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Inquiries</h3>
            <p className="text-gray-500 text-sm mt-1">Review and respond to property inquiries</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
