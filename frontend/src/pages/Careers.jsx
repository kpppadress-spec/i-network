import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign, Heart, Zap, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and gym memberships',
    },
    {
      icon: Zap,
      title: 'Flexible Working',
      description: 'Work from any of our 4000+ locations or remotely - your choice',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Professional development programs, training, and clear progression paths',
    },
    {
      icon: Users,
      title: 'Great Culture',
      description: 'Collaborative environment with regular team events and celebrations',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Market-leading salaries with performance bonuses and equity options',
    },
    {
      icon: Clock,
      title: 'Time Off',
      description: 'Generous vacation policy, parental leave, and flexible schedules',
    },
  ];

  const openings = [
    {
      title: 'Senior Software Engineer',
      department: 'Technology',
      location: 'London, UK / Remote',
      type: 'Full-time',
      description: 'Join our engineering team building the future of flexible workspace technology.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, USA',
      type: 'Full-time',
      description: 'Lead product strategy for our global workspace platform.',
    },
    {
      title: 'Community Manager',
      department: 'Operations',
      location: 'Singapore',
      type: 'Full-time',
      description: 'Create amazing experiences for our members and build vibrant communities.',
    },
    {
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Manchester, UK',
      type: 'Full-time',
      description: 'Drive growth by helping businesses find their perfect workspace.',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'London, UK',
      type: 'Full-time',
      description: 'Shape our brand and drive customer acquisition across Europe.',
    },
    {
      title: 'Customer Success Lead',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure our customers achieve their goals and love their workspace experience.',
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Berlin, Germany',
      type: 'Full-time',
      description: 'Design beautiful, intuitive experiences for our digital products.',
    },
    {
      title: 'Data Analyst',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      description: 'Turn data into insights that drive business decisions.',
    },
  ];

  const departments = ['all', ...new Set(openings.map(job => job.department))];

  const filteredJobs = selectedDepartment === 'all' 
    ? openings 
    : openings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Careers at i-network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-white/90 mb-8">
            Help us shape the future of work. Build your career at the world's leading flexible workspace provider.
          </p>
          <a href="#openings">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
              View Open Positions
            </Button>
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join i-network?</h2>
            <p className="text-gray-600 text-lg">We're building something special, and we want you to be part of it</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Team"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Make an Impact</h3>
                <p className="text-gray-700 text-lg">
                  Your work will directly impact millions of people worldwide. We're transforming how the world works, and every team member plays a crucial role.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Opportunities</h3>
                <p className="text-gray-700 text-lg">
                  With 4000+ locations in 100+ countries, you'll have opportunities to work internationally and grow your career globally.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Inclusive Culture</h3>
                <p className="text-gray-700 text-lg">
                  We celebrate diversity and create an environment where everyone can thrive, regardless of background or identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Benefits & Perks</h2>
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

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 text-lg">Find your next opportunity</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link to="/contact">
                        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented people. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
