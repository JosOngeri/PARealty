'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { login } from '@/app/actions/auth';

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex bg-[#F5F5F0]">
      {/* Left panel – branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1A5C2A] flex-col justify-between p-12">
        <div>
          <Link href="/" className="text-white font-bold text-2xl tracking-tight">
            Plotnest<span className="text-[#E8920A]"> Africa</span>
          </Link>
        </div>
        <div>
          <blockquote className="text-white/90 text-3xl font-semibold leading-tight mb-6">
            "In PAR with your<br />Investment Dreams"
          </blockquote>
          <p className="text-white/60 text-sm">
            Your trusted partner in real estate across Kenya and Africa.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-white/70 text-sm">
          <div>
            <p className="text-white font-bold text-2xl">500+</p>
            <p>Properties</p>
          </div>
          <div>
            <p className="text-white font-bold text-2xl">3</p>
            <p>Expert Agents</p>
          </div>
          <div>
            <p className="text-white font-bold text-2xl">5+</p>
            <p>Cities</p>
          </div>
        </div>
      </div>

      {/* Right panel – form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="text-[#1A5C2A] font-bold text-2xl tracking-tight">
              Plotnest<span className="text-[#E8920A]"> Africa</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#1A5C2A] font-semibold hover:underline">
              Sign up
            </Link>
          </p>

          {/* General error */}
          {state?.errors?.general && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {state.errors.general[0]}
            </div>
          )}

          <form action={action} className="space-y-5">
            {/* Email */}
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
                className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent transition ${
                  state?.errors?.email ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {state?.errors?.email && (
                <p className="mt-1 text-xs text-red-600">{state.errors.email[0]}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-[#1A5C2A] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent transition ${
                  state?.errors?.password ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {state?.errors?.password && (
                <p className="mt-1 text-xs text-red-600">{state.errors.password[0]}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={pending}
              className="w-full bg-[#1A5C2A] hover:bg-[#154d23] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-8 p-4 rounded-lg bg-amber-50 border border-amber-200">
            <p className="text-xs font-semibold text-amber-800 mb-2">Demo credentials</p>
            <div className="space-y-1 text-xs text-amber-700">
              <p><span className="font-medium">Admin:</span> admin@plotnest.co.ke</p>
              <p><span className="font-medium">Agent:</span> john.kamau@plotnest.co.ke</p>
              <p><span className="font-medium">User:</span> alice.njeri@email.com</p>
              <p className="mt-1 font-medium">Password: Secure@1234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
