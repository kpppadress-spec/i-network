import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Users, Globe, Presentation, CreditCard, Info, HelpCircle } from 'lucide-react';

const Sitemap = () => {
  const sitemapSections = [
    {
      icon: Building2,
      title: 'Solutions',
      links: [
        { name: 'Office Space', path: '/office-space' },
        { name: 'Coworking', path: '/coworking' },
        { name: 'Virtual Offices', path: '/virtual-offices' },
        { name: 'Meeting Rooms', path: '/meeting-rooms' },
        { name: 'Membership', path: '/membership' },
      ],
    },
    {
      icon: MapPin,
      title: 'Popular Locations',
      links: [
        { name: 'London', path: '/locations/london' },
        { name: 'Manchester', path: '/locations/manchester' },
        { name: 'Birmingham', path: '/locations/birmingham' },
        { name: 'New York', path: '/locations/new-york' },
        { name: 'Singapore', path: '/locations/singapore' },
        { name: 'All Locations', path: '/locations' },
      ],
    },
    {
      icon: Info,
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Hybrid Working', path: '/hybrid-working' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      icon: HelpCircle,
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Sitemap', path: '/sitemap' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Sitemap</h1>
          <p className="text-xl text-white/90">Quick access to all pages on i-network</p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <Icon className="h-8 w-8 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-gray-700 hover:text-red-600 transition-colors flex items-center group"
                        >
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Additional Links */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/" className="p-6 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600">Home</h3>
                <p className="text-gray-600 text-sm">Return to homepage</p>
              </Link>
              <Link to="/contact" className="p-6 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get in touch with our team</p>
              </Link>
              <Link to="/help" className="p-6 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors group">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600">Help Center</h3>
                <p className="text-gray-600 text-sm">Find answers to your questions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
