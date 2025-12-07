import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Award, TrendingUp, Heart, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const AboutUs = () => {
  const milestones = [
    { year: '2010', title: 'Founded', description: 'i-network was born with a vision to revolutionize flexible workspace' },
    { year: '2013', title: '100 Locations', description: 'Expanded to 100 locations across 20 countries' },
    { year: '2016', title: '1000+ Locations', description: 'Reached over 1000 locations worldwide' },
    { year: '2020', title: 'Hybrid Pioneer', description: 'Led the hybrid working revolution during global changes' },
    { year: '2023', title: '4000+ Locations', description: 'Now serving businesses in 4000+ locations globally' },
    { year: '2025', title: 'Industry Leader', description: 'The world\'s largest flexible workspace provider' },
  ];

  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in creating spaces where people connect, collaborate, and grow together.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Our worldwide presence gives you the flexibility to work anywhere, anytime.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your success is our success. We\'re committed to providing exceptional service.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We continuously evolve our spaces and services to meet changing business needs.',
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Every location meets our rigorous standards for design, amenities, and service.',
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'We\'re committed to reducing our environmental impact and promoting green practices.',
    },
  ];

  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
      bio: 'Leading i-network\'s global expansion with 20+ years in commercial real estate.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
      bio: 'Overseeing operations across 100+ countries with focus on excellence.',
    },
    {
      name: 'Emma Williams',
      role: 'Chief Customer Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
      bio: 'Championing customer experience and member satisfaction globally.',
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
      bio: 'Driving digital innovation and tech-enabled workspace solutions.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="About i-network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About i-network</h1>
          <p className="text-xl text-white/90 mb-8">
            Empowering businesses worldwide with flexible workspace solutions since 2010
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide businesses of all sizes with inspiring, flexible workspace solutions that enable them to thrive in an ever-changing world. We believe that the right workspace can transform how people work, fostering innovation, collaboration, and success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">4000+</div>
              <p className="text-gray-700 text-lg">Locations Worldwide</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-700 text-lg">Countries</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">2M+</div>
              <p className="text-gray-700 text-lg">Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">15+</div>
              <p className="text-gray-700 text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  i-network was founded in 2010 with a simple yet powerful idea: work should fit around life, not the other way around. Our founders recognized that the traditional office model was changing, and businesses needed more flexibility.
                </p>
                <p>
                  Starting with just three locations, we've grown to become the world's largest flexible workspace provider. But our mission remains the same: to create inspiring workspaces that enable businesses and individuals to do their best work.
                </p>
                <p>
                  Today, we serve everyone from solo entrepreneurs to Fortune 500 companies, providing them with the flexibility and infrastructure they need to succeed in a rapidly changing business landscape.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Our Story"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-600 mb-3">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <Icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 text-lg">Experienced leaders driving our global vision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're looking for workspace or want to join our team, we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
                Get in Touch
              </Button>
            </Link>
            <Link to="/careers">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-12">
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
