import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Calendar, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Membership = () => {
  const plans = [
    {
      name: '5 Days',
      price: '99',
      description: 'Perfect for occasional users',
      features: [
        '5 days per month',
        'Access to all locations',
        'Day offices & coworking',
        'Meeting room discounts',
        'Business lounge access',
      ],
    },
    {
      name: '10 Days',
      price: '179',
      description: 'Great for regular users',
      features: [
        '10 days per month',
        'Access to all locations',
        'Day offices & coworking',
        'Meeting room discounts',
        'Business lounge access',
        'Priority booking',
      ],
      popular: true,
    },
    {
      name: 'Unlimited',
      price: '299',
      description: 'Ultimate flexibility',
      features: [
        'Unlimited days',
        'Access to all locations',
        'Day offices & coworking',
        'Meeting room discounts',
        'Business lounge access',
        'Priority booking',
        'Exclusive member events',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Membership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Globe className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Membership</h1>
          <p className="text-xl text-white/90 mb-8">Work anywhere, anytime with unlimited access to our global network</p>
          <Link to="#plans">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
              View Plans
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">4000+ Locations</h3>
              <p className="text-gray-600">Access our entire global network</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">Book on-demand or in advance</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Access</h3>
              <p className="text-gray-600">Walk in and start working</p>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Amenities</h3>
              <p className="text-gray-600">Everything included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 text-lg">Flexible membership options to suit your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-2 border-red-600 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">£{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full rounded-full ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Plan', description: 'Select the membership that fits your needs' },
              { step: '2', title: 'Sign Up', description: 'Complete your registration online' },
              { step: '3', title: 'Download App', description: 'Get the i-network app on your device' },
              { step: '4', title: 'Start Working', description: 'Access any location instantly' },
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

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">Join thousands of professionals working flexibly</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/locations">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-12">
                Find Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
