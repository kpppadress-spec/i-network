import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Zap, TrendingUp, Heart, Leaf, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HybridWorking = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Better Work-Life Balance',
      description: 'Give your team the flexibility to work where they\'re most productive, whether at home, in the office, or on the go.',
    },
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Studies show hybrid workers are more productive, with fewer distractions and better focus.',
    },
    {
      icon: Heart,
      title: 'Improved Wellbeing',
      description: 'Reduce commute stress and give employees control over their work environment.',
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint with fewer daily commutes and optimized office space usage.',
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Lower overhead costs with flexible workspace solutions instead of long-term leases.',
    },
    {
      icon: Zap,
      title: 'Attract Top Talent',
      description: 'Offer the flexibility modern professionals expect to attract and retain the best employees.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Hybrid Working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">The Future is Hybrid</h1>
          <p className="text-xl text-white/90 mb-8">
            Embrace the new way of working that gives your business and employees the flexibility to thrive
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
              Make the Move to Hybrid
            </Button>
          </Link>
        </div>
      </section>

      {/* What is Hybrid Working */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">What is Hybrid Working?</h2>
          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
            Hybrid working is a flexible work model that allows employees to split their time between working remotely and working in a physical office environment. It combines the best of both worlds - the focus and autonomy of remote work with the collaboration and connection of office life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-red-600 mb-4">Flexibility</div>
                <p className="text-gray-700">Work from anywhere in our global network</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-red-600 mb-4">Choice</div>
                <p className="text-gray-700">Employees choose where works best for them</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-red-600 mb-4">Balance</div>
                <p className="text-gray-700">Perfect blend of home and office working</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Hybrid Working Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How i-network Enables Hybrid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How i-network Enables Hybrid Working</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Hybrid workspace"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Network Access</h3>
                  <p className="text-gray-700">Your team can work from any of our 4000+ locations worldwide, giving true flexibility.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Booking</h3>
                  <p className="text-gray-700">Book offices by the hour, day, or month. Scale up or down as needed.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">All-in-One Solutions</h3>
                  <p className="text-gray-700">Office space, coworking, meeting rooms, and virtual offices - everything you need.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technology Enabled</h3>
                  <p className="text-gray-700">Our app makes it easy to find, book, and access workspace on the go.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">87%</div>
              <p className="text-white/90">of employees want flexible working</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">63%</div>
              <p className="text-white/90">report increased productivity</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <p className="text-white/90">reduction in overhead costs</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">74%</div>
              <p className="text-white/90">improved work-life balance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Workplace?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let us help you design a hybrid working strategy that works for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-12">
                Speak to an Expert
              </Button>
            </Link>
            <Link to="/office-space">
              <Button size="lg" variant="outline" className="rounded-full border-gray-300 hover:border-red-600 hover:text-red-600 px-12">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HybridWorking;
