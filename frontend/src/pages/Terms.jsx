import React from 'react';
import { Shield } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-xl text-white/90">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using i-network's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Use of Services</h2>
              <p className="text-gray-700 mb-4">
                i-network provides flexible workspace solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Office space rental</li>
                <li>Coworking spaces</li>
                <li>Virtual office services</li>
                <li>Meeting room facilities</li>
                <li>Business support services</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Membership and Accounts</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3.1 Account Creation</h3>
              <p className="text-gray-700 mb-6">
                To use certain features of our services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3.2 Account Security</h3>
              <p className="text-gray-700 mb-6">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Booking and Cancellation</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4.1 Booking Policy</h3>
              <p className="text-gray-700 mb-6">
                All bookings are subject to availability. We reserve the right to refuse service to anyone for any reason at any time. Confirmed bookings will receive a confirmation email with details.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4.2 Cancellation Policy</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Cancellations made 24+ hours before booking: Full refund</li>
                <li>Cancellations made within 24 hours: 50% charge</li>
                <li>No-shows: Full charge</li>
                <li>Monthly memberships: 30 days notice required</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment is required at the time of booking unless otherwise agreed in writing. We accept:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Major credit and debit cards</li>
                <li>Bank transfers for corporate accounts</li>
                <li>Other payment methods as agreed</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. User Conduct</h2>
              <p className="text-gray-700 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Use our facilities for illegal activities</li>
                <li>Disturb other members or guests</li>
                <li>Damage or misuse our property</li>
                <li>Sublet or assign your membership without permission</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content, trademarks, logos, and intellectual property on our platforms are owned by i-network or our licensors. You may not use, copy, or distribute any content without our written permission.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                i-network shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to indemnify and hold harmless i-network, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Data Protection</h2>
              <p className="text-gray-700 mb-6">
                We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws including GDPR. By using our services, you consent to such processing.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Modifications to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">12. Termination</h2>
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including breach of these terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">13. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">14. Dispute Resolution</h2>
              <p className="text-gray-700 mb-6">
                Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the London Court of International Arbitration.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>Email: legal@i-network.com</li>
                <li>Phone: +1 845-466-1040</li>
                <li>Address: i-network HQ, London, UK</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
