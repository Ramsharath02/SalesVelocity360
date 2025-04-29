import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { 
  LineChart, 
  BarChart, 
  Settings, 
  Zap, 
  Database 
} from 'lucide-react';

const HighlightsSection: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Sales Strategies',
      description: 'Learn proven techniques to optimize your sales process, overcome objections, and close deals faster.'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'CRM & Pipeline Optimization',
      description: 'Discover best practices for managing your pipeline, improving forecasting, and getting the most from your CRM.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Revenue Operations',
      description: 'Align your sales, marketing, and customer success teams to create a seamless revenue engine.'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Sales Tools & Automation',
      description: 'Stay updated on the latest tools and automation strategies to streamline your workflow and boost productivity.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Weekly Growth Tips',
      description: 'Receive actionable tips every week that you can implement immediately to improve your sales performance.'
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Newsletter Highlights
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive insights and tools to transform your sales approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;