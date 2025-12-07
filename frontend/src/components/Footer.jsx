import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
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
      title: 'Popular Locations',
      links: [
        { name: 'London', path: '/locations/london' },
        { name: 'Manchester', path: '/locations/manchester' },
        { name: 'Birmingham', path: '/locations/birmingham' },
        { name: 'New York', path: '/locations/new-york' },
        { name: 'Singapore', path: '/locations/singapore' },
      ],
    },
    {
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">i-network</span>
            </Link>
            <p className="text-sm mb-4">
              Your global workspace solutions provider. Over 4000 locations worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} i-network. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-4 md:mt-0">
              * All prices shown are valid at the time of enquiry, based on 24 month contracts. Prices are subject to change and will vary depending on the specifically selected products and services. Ts and Cs apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
