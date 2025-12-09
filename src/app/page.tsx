'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Building2, Users, Globe, Presentation, Calendar, Phone, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SolutionCard from '@/components/SolutionCard';
import { solutions, companies, benefits } from '@/data/mockData';

export default function Home() {
  const [activeTab, setActiveTab] = useState('office-space');
  const [searchLocation, setSearchLocation] = useState('');

  const quickActions = [
    { icon: Building2, title: 'Our solutions', description: 'Browse our full range of products and services', link: '/office-space' },
    { icon: Phone, title: 'Talk to us', description: 'Get advice from one of our experts 24/7', link: '/contact' },
    { icon: Calendar, title: 'Book workspace', description: 'Book meeting rooms and day offices now', link: '/meeting-rooms' },
    { icon: Globe, title: 'Set up a virtual office', description: 'Start building a real presence today', link: '/virtual-offices' },
    { icon: Users, title: 'Buy a Membership', description: 'Access thousands of locations on demand', link: '/membership' },
    { icon: Smartphone, title: 'Explore our app', description: 'Download our app and get started today', link: '#' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Modern office space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-lg mb-4">From a single desk to a whole building. The choice is yours.</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">Office space your way.</h1>
          
          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="office-space" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Office Space</span>
                </TabsTrigger>
                <TabsTrigger value="coworking" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Coworking</span>
                </TabsTrigger>
                <TabsTrigger value="virtual-offices" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">Virtual</span>
                </TabsTrigger>
                <TabsTrigger value="meeting-rooms" className="flex items-center gap-2">
                  <Presentation className="h-4 w-4" />
                  <span className="hidden sm:inline">Meetings</span>
                </TabsTrigger>
              </TabsList>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search here"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <Link href="/locations">
                  <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 rounded-full h-12">
                    SEARCH
                  </Button>
                </Link>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.link}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <action.icon className="h-10 w-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-red-600 transition-colors">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible workspace designed around your needs</h2>
            <p className="text-gray-600">Search for a city or area to refine pricing</p>
          </div>
          <Tabs defaultValue="office-space" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mb-12">
              {solutions.map((solution) => (
                <TabsTrigger key={solution.id} value={solution.id}>
                  {solution.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="mt-8">
                <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">{solution.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {solution.subSolutions.map((subSolution, index) => (
                    <SolutionCard key={index} solution={subSolution} />
                  ))}
                  {/* Help Card */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Need a helping hand?</h3>
                    <p className="text-gray-700 mb-6 text-sm">Arrange a 1:1 call with a professional advisor.</p>
                    <ul className="space-y-2 mb-6 text-sm text-gray-700">
                      <li>• Agents available worldwide</li>
                      <li>• Discuss different options</li>
                      <li>• Receive a personalised quote</li>
                      <li>• Sign up and get started</li>
                    </ul>
                    <Link href="/contact">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                        Talk to an expert
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center mb-20 last:mb-0`}>
              <div className="flex-1">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{benefit.title}</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                  <div className="flex items-start">
                    <Smartphone className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit.description2}</p>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                    Talk To An Expert &gt;
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by the world&apos;s largest companies.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img src={company.logo} alt={company.name} className="max-h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

