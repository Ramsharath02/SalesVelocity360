// Type definitions for the application

export interface Subscriber {
  name: string;
  email: string;
}

export interface NewsletterFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}