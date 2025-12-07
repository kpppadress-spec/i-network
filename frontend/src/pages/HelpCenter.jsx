import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, MessageCircle, Book, CreditCard, MapPin, Users, Shield, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: Book, title: 'Getting Started', description: 'New to i-network? Start here', articles: 12 },
    { icon: CreditCard, title: 'Billing & Payments', description: 'Invoices, plans, and pricing', articles: 15 },
    { icon: MapPin, title: 'Locations', description: 'Find and access our spaces', articles: 8 },
    { icon: Users, title: 'Account Management', description: 'Profile, settings, and teams', articles: 10 },
    { icon: Shield, title: 'Security & Privacy', description: 'Your data and safety', articles: 7 },
    { icon: HelpCircle, title: 'Troubleshooting', description: 'Common issues and fixes', articles: 14 },
  ];

  const faqs = [
    {
      question: 'How do I book a workspace?',
      answer: 'You can book a workspace through our website or mobile app. Simply search for a location, select your preferred date and time, choose the type of space you need, and confirm your booking. You\'ll receive a confirmation email with all the details.',
    },
    {
      question: 'What is included in my membership?',
      answer: 'All memberships include access to our global network of locations, high-speed WiFi, printing facilities, meeting room discounts, and complimentary refreshments. Premium plans also include additional perks like priority booking and exclusive event access.',
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can cancel or modify bookings up to 24 hours before your scheduled time without any penalty. For same-day changes, please contact our support team directly.',
    },
    {
      question: 'How do I access the workspace?',
      answer: 'After booking, you\'ll receive a digital access code via email and in our app. Simply present this code at reception or use it with our keyless entry system. First-time visitors will receive a brief orientation from our staff.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and bank transfers for corporate accounts. Payment is processed securely through our encrypted payment gateway.',
    },
    {
      question: 'Is there a minimum contract period?',
      answer: 'No, we offer complete flexibility. You can book by the hour, day, month, or year. There\'s no minimum commitment required, though longer-term contracts often receive better rates.',
    },
    {
      question: 'Can I bring guests to the workspace?',
      answer: 'Yes, members can bring guests. Day pass holders and meeting room bookings include guest access. Please ensure all guests sign in at reception for security purposes.',
    },
    {
      question: 'What amenities are available?',
      answer: 'All locations include high-speed WiFi, printing and scanning, phone booths, meeting rooms, kitchen facilities, and complimentary tea and coffee. Many locations also offer additional amenities like showers, bike storage, and event spaces.',
    },
    {
      question: 'How do I upgrade or downgrade my plan?',
      answer: 'You can change your plan at any time through your account dashboard or by contacting our customer success team. Changes typically take effect at the start of your next billing cycle.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Monthly memberships can be cancelled with 30 days notice. Day passes and hourly bookings can be cancelled up to 24 hours in advance for a full refund. Annual contracts have specific terms outlined in your agreement.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">How Can We Help?</h1>
          <p className="text-xl text-white/90 mb-8">Search our knowledge base or browse categories below</p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-white shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Phone className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-3">Available 24/7</p>
                <a href="tel:+18454661040" className="text-red-600 hover:text-red-700 font-medium">
                  +1 845-466-1040
                </a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Mail className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Support</h3>
                <p className="text-gray-600 mb-3">Response within 24hrs</p>
                <a href="mailto:support@i-network.com" className="text-red-600 hover:text-red-700 font-medium">
                  support@i-network.com
                </a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <MessageCircle className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-3">Chat with our team</p>
                <button className="text-red-600 hover:text-red-700 font-medium">
                  Start Chat
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                    <p className="text-sm text-gray-500">{category.articles} articles</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-12">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
