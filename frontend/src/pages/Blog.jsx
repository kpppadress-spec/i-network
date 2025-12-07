import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Hybrid Working', 'Productivity', 'Design', 'Technology', 'Business Tips'];

  const blogPosts = [
    {
      title: 'The Future of Hybrid Working: Trends for 2025',
      excerpt: 'Discover the latest trends shaping the hybrid workplace and how businesses are adapting to this new normal.',
      category: 'Hybrid Working',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '5 min read',
    },
    {
      title: '10 Ways to Maximize Productivity in Coworking Spaces',
      excerpt: 'Learn practical tips to stay focused and productive while working in shared environments.',
      category: 'Productivity',
      author: 'Michael Chen',
      date: '2025-01-10',
      image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '7 min read',
    },
    {
      title: 'Designing Workspaces for Collaboration and Focus',
      excerpt: 'How modern office design balances collaborative zones with quiet spaces for deep work.',
      category: 'Design',
      author: 'Emma Williams',
      date: '2025-01-05',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '6 min read',
    },
    {
      title: 'How Technology is Transforming Flexible Workspaces',
      excerpt: 'From smart booking systems to IoT-enabled offices, technology is revolutionizing how we work.',
      category: 'Technology',
      author: 'David Rodriguez',
      date: '2024-12-28',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '8 min read',
    },
    {
      title: 'Small Business Guide: Choosing the Right Office Space',
      excerpt: 'Essential considerations for startups and small businesses selecting their workspace.',
      category: 'Business Tips',
      author: 'Sarah Johnson',
      date: '2024-12-20',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '6 min read',
    },
    {
      title: 'The Psychology of Productive Workspaces',
      excerpt: 'Understanding how your environment affects focus, creativity, and wellbeing at work.',
      category: 'Productivity',
      author: 'Emma Williams',
      date: '2024-12-15',
      image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '7 min read',
    },
    {
      title: 'Sustainable Office Practices: Going Green in 2025',
      excerpt: 'How businesses can reduce their environmental impact through smart workspace choices.',
      category: 'Business Tips',
      author: 'Michael Chen',
      date: '2024-12-10',
      image: 'https://images.unsplash.com/photo-1594732832278-abd644401426?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '5 min read',
    },
    {
      title: 'Virtual Office vs. Physical Office: Making the Right Choice',
      excerpt: 'Compare the benefits of virtual and physical offices to find what works for your business.',
      category: 'Business Tips',
      author: 'David Rodriguez',
      date: '2024-12-05',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '6 min read',
    },
    {
      title: 'Building Company Culture in Distributed Teams',
      excerpt: 'Strategies for maintaining strong culture when your team works from multiple locations.',
      category: 'Hybrid Working',
      author: 'Sarah Johnson',
      date: '2024-11-28',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&q=85',
      readTime: '8 min read',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">i-network Blog</h1>
          <p className="text-xl text-white/90">Insights, tips, and stories about the future of work</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover min-h-[300px]"
              />
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-4 self-start">
                  {featuredPost.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  {featuredPost.author}
                  <Calendar className="h-4 w-4 ml-4 mr-2" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  <span className="ml-4">{featuredPost.readTime}</span>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full self-start">
                  Read Article <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-gray-900 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                    <span className="mx-2">•</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-700 mb-8">
            Subscribe to our newsletter for the latest insights on flexible working and workspace trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
