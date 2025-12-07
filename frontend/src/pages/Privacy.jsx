import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">Your privacy is important to us</p>
          <p className="text-lg text-white/80 mt-2">Last updated: January 2025</p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
              <Shield className="h-10 w-10 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">We Protect Your Data</h3>
                <p className="text-gray-600 text-sm">Industry-standard security measures to keep your information safe</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
              <Eye className="h-10 w-10 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Transparent Processing</h3>
                <p className="text-gray-600 text-sm">Clear information about how we collect and use your data</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
              <Database className="h-10 w-10 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Your Rights</h3>
                <p className="text-gray-600 text-sm">Full control over your personal information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                i-network ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services and visit our website.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Information We Collect</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment and billing information</li>
                <li>Company details and business information</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use collected information for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Providing and managing our services</li>
                <li>Processing bookings and payments</li>
                <li>Communicating with you about our services</li>
                <li>Improving our services and user experience</li>
                <li>Marketing and promotional purposes (with consent)</li>
                <li>Compliance with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 mb-4">
                We process your personal data under the following legal bases:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Contract Performance:</strong> To fulfill our contractual obligations</li>
                <li><strong>Legitimate Interests:</strong> To improve services and prevent fraud</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                <li><strong>Consent:</strong> For marketing communications and cookies</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Service providers and business partners</li>
                <li>Payment processors</li>
                <li>Legal authorities when required by law</li>
                <li>Corporate affiliates within our group</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We do not sell your personal information to third parties.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Under GDPR and other data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Restriction:</strong> Limit how we use your data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Withdraw Consent:</strong> Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We retain your personal data only as long as necessary for the purposes set out in this policy or as required by law. Typically, this means:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Account data: Duration of account plus 7 years</li>
                <li>Booking data: 7 years for accounting purposes</li>
                <li>Marketing data: Until you unsubscribe</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Cookies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. For more information, see our Cookie Policy.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. International Transfers</h2>
              <p className="text-gray-700 mb-6">
                We operate globally and may transfer your data to countries outside your jurisdiction. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our services are not directed to children under 16. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">12. Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of material changes by email or through our website. Your continued use after changes constitutes acceptance.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">13. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For privacy-related questions or to exercise your rights:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li><strong>Data Protection Officer:</strong> dpo@i-network.com</li>
                <li><strong>Email:</strong> privacy@i-network.com</li>
                <li><strong>Phone:</strong> +1 845-466-1040</li>
                <li><strong>Address:</strong> i-network HQ, London, UK</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">14. Supervisory Authority</h2>
              <p className="text-gray-700 mb-6">
                If you are in the EU/EEA, you have the right to lodge a complaint with your local data protection authority if you believe your rights have been violated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
