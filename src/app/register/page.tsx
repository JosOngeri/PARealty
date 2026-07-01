'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { register } from '@/app/actions/auth';

export default function RegisterPage() {
  const [state, action, pending] = useActionState(register, undefined);

  return (
    <div className="min-h-screen flex bg-[#F5F5F0]">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1A5C2A] flex-col justify-between p-12">
        <div>
          <Link href="/" className="text-white font-bold text-2xl tracking-tight">
            Plotnest<span className="text-[#E8920A]"> Africa</span>
          </Link>
        </div>
        <div>
          <blockquote className="text-white/90 text-3xl font-semibold leading-tight mb-6">
            "Start your property<br />journey today"
          </blockquote>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-[#E8920A]">✓</span> Browse 500+ verified properties
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E8920A]">✓</span> Save favourites and get alerts
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E8920A]">✓</span> Contact agents directly
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E8920A]">✓</span> Free to join
            </li>
          </ul>
        </div>
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} Plotnest Africa Realty</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="text-[#1A5C2A] font-bold text-2xl tracking-tight">
              Plotnest<span className="text-[#E8920A]"> Africa</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
          <p className="text-gray-500 mb-8">
            Already have an account?{' '}
            <Link href="/login" className="text-[#1A5C2A] font-semibold hover:underline">
              Sign in
            </Link>
          </p>

          {state?.errors?.general && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {state.errors.general[0]}
            </div>
          )}

          <form action={action} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  placeholder="John"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent transition ${
                    state?.errors?.firstName ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                {state?.errors?.firstName && (
                  <p className="mt-1 text-xs text-red-600">{state.errors.firstName[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  placeholder="Kamau"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent transition ${
                    state?.errors?.lastName ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                {state?.errors?.lastName && (
                  <p className="mt-1 text-xs text-red-600">{state.errors.lastName[0]}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent transition ${
                  state?.errors?.email ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {state?.errors?.email && (
                <p className="mt-1 text-xs text-red-600">{state.errors.email[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+254 7XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Min. 8 characters"
                className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent transition ${
                  state?.errors?.password ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {state?.errors?.password && (
                <p className="mt-1 text-xs text-red-600">{state.errors.password[0]}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-[#1A5C2A] hover:bg-[#154d23] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Creating account…
                </>
              ) : (
                'Create account'
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By signing up you agree to our{' '}
              <Link href="/terms" className="text-[#1A5C2A] hover:underline">Terms</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-[#1A5C2A] hover:underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
