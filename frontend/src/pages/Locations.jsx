import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { locations } from '../data/mockData';
import { Link } from 'react-router-dom';

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const countries = ['all', ...new Set(locations.map(loc => loc.country))];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || location.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Global Locations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Locations</h1>
          <p className="text-xl text-white/90">Over 4000 locations in major cities worldwide</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by city or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country === 'all' ? 'All Countries' : country}
                </option>
              ))}
            </select>
          </div>

          <p className="text-gray-600 mb-8">
            Showing {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''}
          </p>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <Card key={location.id} className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <MapPin className="h-10 w-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.city}</h3>
                  <p className="text-gray-600 mb-4">{location.country}</p>
                  <p className="text-sm text-gray-500 mb-6">{location.count} workspace{location.count !== 1 ? 's' : ''} available</p>
                  <div className="flex gap-3">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full text-sm">
                        View Details
                      </Button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <Button variant="outline" className="w-full rounded-full border-gray-300 hover:border-red-600 hover:text-red-600 text-sm">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Us Worldwide</h2>
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <MapPin className="h-20 w-20 text-red-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">4000+ Locations Globally</h3>
            <p className="text-gray-600 mb-8">We're in every major city and business district worldwide</p>
            <Link to="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                Contact Us to Find Your Perfect Location
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
