'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, Globe, User } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutions = [
    { name: 'Office Space', path: '/office-space' },
    { name: 'Coworking', path: '/coworking' },
    { name: 'Virtual Offices', path: '/virtual-offices' },
    { name: 'Meeting Rooms', path: '/meeting-rooms' },
    { name: 'Membership', path: '/membership' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">i-network</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                Solutions
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      href={solution.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/locations" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
              Locations
            </Link>
            <Link href="/hybrid-working" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
              Hybrid Working
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full border-red-600 text-red-600 hover:bg-red-50">
              <Phone className="h-4 w-4 mr-2" />
              +1 845-466-1040
            </Button>
            <Link href="/contact">
              <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white">
                Contact us
              </Button>
            </Link>
            <button className="p-2 text-gray-600 hover:text-red-600">
              <Globe className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-red-600">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-red-600"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            {solutions.map((solution) => (
              <Link
                key={solution.path}
                href={solution.path}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {solution.name}
              </Link>
            ))}
            <Link
              href="/locations"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/hybrid-working"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hybrid Working
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/contact">
                <Button className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white">
                  Contact us
                </Button>
              </Link>
              <Button variant="outline" className="w-full rounded-full border-red-600 text-red-600">
                <Phone className="h-4 w-4 mr-2" />
                +1 845-466-1040
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

