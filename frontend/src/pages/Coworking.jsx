import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Wifi, Coffee, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import SolutionCard from '../components/SolutionCard';
import { solutions } from '../data/mockData';

const Coworking = () => {
  const coworkingSolution = solutions.find(s => s.id === 'coworking');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Coworking Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Coworking Spaces</h1>
          <p className="text-xl text-white/90 mb-8">{coworkingSolution.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/locations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8">
                Find a Space
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6">
              <Wifi className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">High-Speed WiFi</h3>
              <p className="text-gray-600">Reliable, fast internet connection</p>
            </div>
            <div className="text-center p-6">
              <Coffee className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Free Refreshments</h3>
              <p className="text-gray-600">Complimentary coffee and tea</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Energizing Environment</h3>
              <p className="text-gray-600">Inspiring collaborative spaces</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Events</h3>
              <p className="text-gray-600">Networking opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Coworking Options</h2>
            <p className="text-gray-600 text-lg">Work your way with our flexible coworking solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coworkingSolution.subSolutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} showBookButton={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Cowork with i-network?</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg">Join a vibrant community of professionals, entrepreneurs, and innovators. Our coworking spaces are designed to inspire creativity and foster collaboration.</p>
                <ul className="space-y-3">
                  {[
                    'Flexible membership plans',
                    'Prime city center locations',
                    'Modern, inspiring design',
                    'Professional meeting rooms',
                    'Business networking events',
                    'On-site support team',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact">
                <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                  Book a Tour
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Coworking benefits"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Coworking Today</h2>
          <p className="text-xl text-white/90 mb-8">Book a day pass or join as a member</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/locations">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
                Book Now
              </Button>
            </Link>
            <Link to="/membership">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-12">
                View Membership
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coworking;
