import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import SolutionCard from '../components/SolutionCard';
import { solutions } from '../data/mockData';

const VirtualOffices = () => {
  const virtualOfficeSolution = solutions.find(s => s.id === 'virtual-offices');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594732832278-abd644401426?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Virtual Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Virtual Offices</h1>
          <p className="text-xl text-white/90 mb-8">{virtualOfficeSolution.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/locations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8">
                Choose a Location
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Prestigious Address</h3>
              <p className="text-gray-600">Prime business address</p>
            </div>
            <div className="text-center p-6">
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone Answering</h3>
              <p className="text-gray-600">Professional receptionist</p>
            </div>
            <div className="text-center p-6">
              <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mail Handling</h3>
              <p className="text-gray-600">Secure mail management</p>
            </div>
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-600">Access worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <p className="text-gray-600 text-lg">From basic business address to full virtual office with workspace access</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {virtualOfficeSolution.subSolutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Benefits of a Virtual Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Professional Image', description: 'Establish credibility with a prestigious business address in major cities worldwide.' },
              { title: 'Cost Effective', description: 'All the benefits of a physical office without the overhead costs.' },
              { title: 'Work from Anywhere', description: 'Maintain a professional presence while working remotely from any location.' },
              { title: 'Business Registration', description: 'Use your virtual office address for company registration and official documents.' },
              { title: 'Mail & Package Handling', description: 'Secure handling and forwarding of all your business correspondence.' },
              { title: 'Meeting Room Access', description: 'Book professional meeting rooms when you need to meet clients face-to-face.' },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Establish Your Business Presence Today</h2>
          <p className="text-xl text-white/90 mb-8">Choose from 4000+ locations worldwide</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
                Get Started
              </Button>
            </Link>
            <Link to="/locations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-12">
                Browse Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualOffices;
