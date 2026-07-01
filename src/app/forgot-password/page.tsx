'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0] px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="text-[#1A5C2A] font-bold text-2xl tracking-tight">
          Plotnest<span className="text-[#E8920A]"> Africa</span>
        </Link>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password</h1>
          <p className="text-gray-500 mb-6">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
              If an account exists for {email}, you will receive a password reset link shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1A5C2A] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1A5C2A] hover:bg-[#154d23] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Send Reset Link
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">
            Remember your password?{' '}
            <Link href="/login" className="text-[#1A5C2A] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
