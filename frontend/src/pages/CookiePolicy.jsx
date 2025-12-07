import React, { useState } from 'react';
import { Cookie, Settings, Shield, BarChart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Switch } from '../components/ui/switch';

const CookiePolicy = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  const handleSavePreferences = () => {
    // Mock save - in real app would save to localStorage/cookies
    alert('Cookie preferences saved!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cookie className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-white/90">How we use cookies to improve your experience</p>
          <p className="text-lg text-white/80 mt-2">Last updated: January 2025</p>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Manage Cookie Preferences</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-red-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">Necessary Cookies</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Essential for the website to function. Cannot be disabled.
                    </p>
                  </div>
                  <Switch checked={true} disabled className="ml-4" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Settings className="h-5 w-5 text-red-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">Functional Cookies</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.functional}
                    onCheckedChange={(checked) => setPreferences({...preferences, functional: checked})}
                    className="ml-4"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <BarChart className="h-5 w-5 text-red-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">Analytics Cookies</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Help us understand how visitors use our website.
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences({...preferences, analytics: checked})}
                    className="ml-4"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Cookie className="h-5 w-5 text-red-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">Marketing Cookies</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Used to track visitors across websites for advertising purposes.
                    </p>
                  </div>
                  <Switch 
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences({...preferences, marketing: checked})}
                    className="ml-4"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button onClick={handleSavePreferences} className="bg-red-600 hover:bg-red-700 text-white rounded-full px-12">
              Save Preferences
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-6">
                i-network uses cookies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our services and user experience</li>
                <li>Show you relevant advertisements</li>
                <li>Prevent fraud and enhance security</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Types of Cookies We Use</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3.1 Necessary Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are essential for the website to function properly:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Session cookies:</strong> Keep you logged in during your visit</li>
                <li><strong>Security cookies:</strong> Authenticate users and prevent fraudulent use</li>
                <li><strong>Load balancing:</strong> Distribute traffic across our servers</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3.2 Functional Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies enable enhanced functionality:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Language preferences</li>
                <li>Location settings</li>
                <li>Form auto-fill information</li>
                <li>Customization preferences</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3.3 Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">
                We use analytics services like Google Analytics to understand how visitors use our site:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Pages visited and time spent</li>
                <li>Traffic sources</li>
                <li>Device and browser information</li>
                <li>User journey through the site</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3.4 Marketing Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies track your online activity to help advertisers deliver more relevant ads:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Google Ads</li>
                <li>Facebook Pixel</li>
                <li>LinkedIn Insights</li>
                <li>Retargeting pixels</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6">
                We work with third-party service providers who may set cookies on our website:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> Website analytics</li>
                <li><strong>Google Ads:</strong> Advertising</li>
                <li><strong>Facebook:</strong> Social media integration and advertising</li>
                <li><strong>LinkedIn:</strong> Professional networking and advertising</li>
                <li><strong>Stripe:</strong> Payment processing</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Cookie Duration</h2>
              <p className="text-gray-700 mb-4">
                Cookies can be either:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until manually deleted</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when closing the browser</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookie Preference Center</h3>
              <p className="text-gray-700 mb-6">
                Use our cookie preference center above to customize your cookie settings for this website.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Opt-Out Links</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-red-600 hover:text-red-700">Google Analytics Opt-out</a></li>
                <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-red-600 hover:text-red-700">Facebook Ad Preferences</a></li>
                <li><strong>Network Advertising:</strong> <a href="http://www.networkadvertising.org/choices/" className="text-red-600 hover:text-red-700">NAI Opt-out</a></li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-6">
                Blocking or deleting cookies may impact your experience:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>You may not be able to stay logged in</li>
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information</li>
                <li>Personalized content may not be available</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Updates to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time. We encourage you to review this page periodically for any changes.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li><strong>Email:</strong> privacy@i-network.com</li>
                <li><strong>Phone:</strong> +1 845-466-1040</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
