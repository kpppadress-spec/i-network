import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import SolutionCard from '../components/SolutionCard';
import { solutions } from '../data/mockData';

const OfficeSpace = () => {
  const officeSpaceSolution = solutions.find(s => s.id === 'office-space');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Office Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Building2 className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Office Space</h1>
          <p className="text-xl text-white/90 mb-8">{officeSpaceSolution.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                Get a Quote
              </Button>
            </Link>
            <Link to="/locations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8">
                Find a Location
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Teams</h3>
              <p className="text-gray-600">From solo entrepreneurs to teams of 100+</p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Terms</h3>
              <p className="text-gray-600">By the hour, day, month, or year</p>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fully Equipped</h3>
              <p className="text-gray-600">Everything you need to get started</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Office Solution</h2>
            <p className="text-gray-600 text-lg">We have the perfect space for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeSpaceSolution.subSolutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose i-network Office Space?</h2>
          <div className="space-y-6">
            {[
              { title: 'Prime Locations', description: 'Our offices are strategically located in major business districts and city centers worldwide.' },
              { title: 'All-Inclusive Pricing', description: 'No hidden costs. Everything from utilities to high-speed WiFi is included.' },
              { title: 'Professional Environment', description: 'Impress clients with modern, well-maintained office spaces.' },
              { title: 'Scale as You Grow', description: 'Start small and expand as your business grows - all within our network.' },
              { title: '24/7 Access', description: 'Work on your schedule with round-the-clock access to your office.' },
              { title: 'Global Network', description: 'Access to meeting rooms and offices in 4000+ locations worldwide.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Office?</h2>
          <p className="text-xl text-white/90 mb-8">Get in touch with our team for a personalised quote</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OfficeSpace;
