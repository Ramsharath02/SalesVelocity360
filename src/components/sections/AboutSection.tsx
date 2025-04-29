import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const benefits = [
    'Actionable sales strategies and closing techniques',
    'CRM & pipeline optimization methods',
    'Revenue Operations insights and best practices',
    'Case studies from successful sales organizations',
    'Sales tool reviews and comparison guides',
    'Automation tips to save time and increase efficiency',
    'Weekly quick tips for continuous growth'
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            SalesVelocity360 delivers weekly insights to help you close more deals faster, optimize your sales process, and consistently hit your revenue targets.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            What You'll Get
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-600 italic">
              "The SalesVelocity360 newsletter has been instrumental in helping our team improve our sales process and close rates. The weekly tips alone are worth the subscription."
            </p>
            <div className="mt-3">
              <p className="font-medium text-gray-900">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Sales Director, TechCorp Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;