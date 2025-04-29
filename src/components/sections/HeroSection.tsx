import React from 'react';
import NewsletterForm from '../ui/NewsletterForm';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Mastering Sales Velocity: Strategies, Tools & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Your 360° guide to faster sales cycles, smarter pipelines, and consistent revenue growth.
            </p>
            <div className="hidden md:block">
              <a 
                href="#features" 
                className="inline-flex items-center text-blue-800 font-medium hover:text-blue-700"
              >
                Learn more
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div id="signup" className="lg:w-1/2 w-full bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-600">
                Join thousands of sales professionals receiving weekly insights and strategies.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;