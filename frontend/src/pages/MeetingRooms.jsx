import React from 'react';
import { Link } from 'react-router-dom';
import { Presentation, Users, Projector, Wifi, Coffee, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import SolutionCard from '../components/SolutionCard';
import { solutions } from '../data/mockData';

const MeetingRooms = () => {
  const meetingRoomSolution = solutions.find(s => s.id === 'meeting-rooms');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Meeting Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Presentation className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meeting Rooms</h1>
          <p className="text-xl text-white/90 mb-8">{meetingRoomSolution.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/locations">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Fully Equipped Meeting Spaces</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <Projector className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-700">HD Projectors</p>
            </div>
            <div className="text-center">
              <Wifi className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-700">High-Speed WiFi</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-700">Video Conferencing</p>
            </div>
            <div className="text-center">
              <Coffee className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-700">Refreshments</p>
            </div>
            <div className="text-center">
              <Presentation className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-700">Whiteboards</p>
            </div>
            <div className="text-center">
              <Clock className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-700">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meeting Rooms for Every Purpose</h2>
            <p className="text-gray-600 text-lg">From intimate discussions to large presentations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {meetingRoomSolution.subSolutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} showBookButton={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Easy Booking Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Search', description: 'Find a meeting room near you' },
              { step: '2', title: 'Select', description: 'Choose your date and time' },
              { step: '3', title: 'Book', description: 'Confirm your reservation' },
              { step: '4', title: 'Meet', description: 'Arrive and start your meeting' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
          <p className="text-gray-700 text-lg mb-8">
            Pay only for the time you need. Our meeting rooms are available by the hour with no hidden fees.
            All rooms include standard amenities and on-site support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Small Rooms</h3>
              <p className="text-gray-600 mb-2">2-4 people</p>
              <p className="text-3xl font-bold text-red-600">from £25/hr</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Medium Rooms</h3>
              <p className="text-gray-600 mb-2">5-10 people</p>
              <p className="text-3xl font-bold text-red-600">from £45/hr</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Large Rooms</h3>
              <p className="text-gray-600 mb-2">10+ people</p>
              <p className="text-3xl font-bold text-red-600">from £75/hr</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Book Your Meeting Room Today</h2>
          <p className="text-xl text-white/90 mb-8">Over 10,000 meeting rooms available worldwide</p>
          <Link to="/locations">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
              Find & Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MeetingRooms;
