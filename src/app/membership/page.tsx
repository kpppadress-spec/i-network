import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Membership() {
  const plans = [
    {
      name: '5 Days',
      price: '$99',
      description: 'Perfect for occasional workspace needs',
      features: ['5 days per month', 'Access to all locations', 'Meeting room discounts'],
    },
    {
      name: '10 Days',
      price: '$179',
      description: 'Great for regular remote workers',
      features: ['10 days per month', 'Access to all locations', 'Meeting room discounts', 'Priority support'],
    },
    {
      name: 'Unlimited',
      price: '$299',
      description: 'For teams and frequent users',
      features: ['Unlimited days', 'Access to all locations', 'Meeting room discounts', 'Priority support', 'Dedicated account manager'],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Membership Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect membership plan for your workspace needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-red-600 mt-4">{plan.price}</div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

