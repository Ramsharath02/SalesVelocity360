import React from 'react';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Sales?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who receive our weekly insights and transform their sales process.
          </p>
          <a href="#signup">
            <Button 
              variant="secondary" 
              size="lg"
            >
              Subscribe Now
            </Button>
          </a>
          <p className="mt-4 text-blue-200 text-sm">
            No spam, ever. We respect your privacy and you can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;