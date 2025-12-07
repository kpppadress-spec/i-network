import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Building2, Users, Clock, Search, Phone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const LocationCity = () => {
  const { city } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for city locations
  const cityData = {
    london: {
      name: 'London',
      country: 'United Kingdom',
      description: 'The financial and cultural capital of the UK, London offers unparalleled business opportunities. Our 145+ locations span from the City to Canary Wharf, Mayfair to Tech City.',
      totalLocations: 145,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=srgb&fm=jpg&q=85',
      popularAreas: [
        { name: 'Canary Wharf', locations: 28, description: 'Heart of London\'s financial district' },
        { name: 'The City', locations: 35, description: 'Traditional business center' },
        { name: 'Mayfair', locations: 18, description: 'Prestigious West End location' },
        { name: 'Shoreditch', locations: 22, description: 'Tech and creative hub' },
        { name: 'Victoria', locations: 15, description: 'Transport connections' },
        { name: 'King\'s Cross', locations: 12, description: 'Regenerated district' },
      ],
    },
    manchester: {
      name: 'Manchester',
      country: 'United Kingdom',
      description: 'A thriving business hub in the North of England, Manchester combines rich industrial heritage with modern innovation. Our locations serve the city center and surrounding business districts.',
      totalLocations: 28,
      image: 'https://images.unsplash.com/photo-1528114039593-4366f5c227d7?crop=entropy&cs=srgb&fm=jpg&q=85',
      popularAreas: [
        { name: 'City Centre', locations: 12, description: 'Heart of Manchester business' },
        { name: 'Spinningfields', locations: 6, description: 'Premium business district' },
        { name: 'MediaCityUK', locations: 5, description: 'Digital and creative quarter' },
        { name: 'Airport District', locations: 5, description: 'International connections' },
      ],
    },
    birmingham: {
      name: 'Birmingham',
      country: 'United Kingdom',
      description: 'The UK\'s second city is a powerhouse of commerce and industry. Our Birmingham locations provide excellent connectivity to London and the rest of the country.',
      totalLocations: 19,
      image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?crop=entropy&cs=srgb&fm=jpg&q=85',
      popularAreas: [
        { name: 'City Centre', locations: 8, description: 'Central business district' },
        { name: 'Colmore Row', locations: 5, description: 'Professional services hub' },
        { name: 'Mailbox', locations: 3, description: 'Premium riverside location' },
        { name: 'Solihull', locations: 3, description: 'Affluent suburb' },
      ],
    },
    'new-york': {
      name: 'New York',
      country: 'United States',
      description: 'The city that never sleeps offers endless business opportunities. Our 89+ locations span Manhattan, Brooklyn, and surrounding areas, putting you at the center of global commerce.',
      totalLocations: 89,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=srgb&fm=jpg&q=85',
      popularAreas: [
        { name: 'Midtown Manhattan', locations: 25, description: 'Corporate headquarters hub' },
        { name: 'Financial District', locations: 18, description: 'Wall Street area' },
        { name: 'Times Square', locations: 12, description: 'Iconic central location' },
        { name: 'Brooklyn', locations: 15, description: 'Creative and tech scene' },
        { name: 'Grand Central', locations: 10, description: 'Premium transport links' },
        { name: 'Hudson Yards', locations: 9, description: 'Modern development' },
      ],
    },
    singapore: {
      name: 'Singapore',
      country: 'Singapore',
      description: 'Asia\'s financial hub and gateway to Southeast Asia. Our Singapore locations provide world-class business infrastructure in one of the world\'s most business-friendly cities.',
      totalLocations: 45,
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?crop=entropy&cs=srgb&fm=jpg&q=85',
      popularAreas: [
        { name: 'Raffles Place', locations: 15, description: 'Financial district' },
        { name: 'Marina Bay', locations: 12, description: 'Premium waterfront' },
        { name: 'Orchard Road', locations: 8, description: 'Shopping and business' },
        { name: 'One-North', locations: 6, description: 'Tech and biomedical hub' },
        { name: 'Changi Business Park', locations: 4, description: 'Airport vicinity' },
      ],
    },
  };

  const cityKey = city?.toLowerCase().replace(/\s+/g, '-') || 'london';
  const data = cityData[cityKey] || cityData.london;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{data.name}</h1>
          <p className="text-xl text-white/90 mb-4">{data.totalLocations}+ Flexible Workspace Locations</p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">{data.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                Get a Quote
              </Button>
            </Link>
            <a href="#locations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-8">
                View Locations
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Building2 className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{data.totalLocations}+</div>
              <p className="text-gray-600">Locations</p>
            </div>
            <div>
              <Users className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <p className="text-gray-600">Access</p>
            </div>
            <div>
              <Clock className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">Flexible</div>
              <p className="text-gray-600">Terms</p>
            </div>
            <div>
              <Phone className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">Local</div>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section id="locations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Areas in {data.name}</h2>
            <p className="text-gray-600 text-lg">Find the perfect location for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.popularAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{area.locations} location{area.locations !== 1 ? 's' : ''} available</p>
                  <Link to="/contact">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                      View Spaces
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Available */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Workspace Solutions in {data.name}</h2>
            <p className="text-gray-600 text-lg">Everything you need to do your best work</p>
          </div>
          <Tabs defaultValue="office" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="office">Office Space</TabsTrigger>
              <TabsTrigger value="coworking">Coworking</TabsTrigger>
              <TabsTrigger value="virtual">Virtual Office</TabsTrigger>
              <TabsTrigger value="meeting">Meeting Rooms</TabsTrigger>
            </TabsList>
            <TabsContent value="office">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Office Space" className="w-full h-64 object-cover rounded-xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Office Space</h3>
                  <p className="text-gray-700 mb-6">From single-person offices to entire floors, find the perfect space for your team in {data.name}.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Fully furnished offices</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />High-speed internet</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Flexible contracts</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Professional support</li>
                  </ul>
                  <Link to="/office-space">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="coworking">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Coworking" className="w-full h-64 object-cover rounded-xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Coworking Spaces</h3>
                  <p className="text-gray-700 mb-6">Join a vibrant community of professionals in flexible coworking spaces across {data.name}.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Hot desks & dedicated desks</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Networking events</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Free refreshments</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Community atmosphere</li>
                  </ul>
                  <Link to="/coworking">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="virtual">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img src="https://images.unsplash.com/photo-1594732832278-abd644401426?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Virtual Office" className="w-full h-64 object-cover rounded-xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Office</h3>
                  <p className="text-gray-700 mb-6">Establish a professional presence in {data.name} with a prestigious business address.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Prime business address</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Mail handling</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Phone answering</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Meeting room access</li>
                  </ul>
                  <Link to="/virtual-offices">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="meeting">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Meeting Rooms" className="w-full h-64 object-cover rounded-xl" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meeting Rooms</h3>
                  <p className="text-gray-700 mb-6">Professional meeting spaces available by the hour across {data.name}.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Various room sizes</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Video conferencing</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Presentation equipment</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-red-600 mr-3" />Catering available</li>
                  </ul>
                  <Link to="/meeting-rooms">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Workspace in {data.name}?</h2>
          <p className="text-xl text-white/90 mb-8">Speak to our local team for personalized recommendations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+18454661040">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-12">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationCity;
