import React, { useState } from 'react';
import Button from './Button';

interface NewsletterFormProps {
  variant?: 'light' | 'dark';
  onSubmit?: (data: { name: string; email: string }) => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  variant = 'light',
  onSubmit 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', { name, email });
      
      if (onSubmit) {
        onSubmit({ name, email });
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setName('');
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = variant === 'light' 
    ? 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500'
    : 'bg-gray-100 border-gray-600 text-gray-800 focus:border-blue-400 focus:ring-blue-400';

  if (success) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
        <p className="text-green-700 font-medium">
          Thank you for subscribing! Please check your email to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={`w-full rounded-md shadow-sm border ${inputClasses}`}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className={`w-full rounded-md shadow-sm border ${inputClasses}`}
        />
      </div>
      
      <div>
        <Button 
          type="submit" 
          fullWidth
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </Button>
      </div>
      
      <p className="text-xs text-gray-500 mt-2">
        By subscribing, you agree to our Privacy Policy and Terms of Service. 
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
};

export default NewsletterForm;