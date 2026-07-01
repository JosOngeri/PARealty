'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">PA</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-xl tracking-wider">PLOTNEST</span>
              <span className="block text-xs text-accent italic">In PAR with your Investment Dreams</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="hover:text-orange-400 transition-colors">
              Properties
            </Link>
            <Link href="/blog" className="hover:text-orange-400 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              List Property
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-800/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/properties" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Properties
            </Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/contact" className="block w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center">
                List Property
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
