import React from 'react';
import { TrendingUp } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <TrendingUp className="text-blue-800 h-8 w-8" />
      <span className="ml-2 text-xl font-bold text-gray-900">
        Sales<span className="text-blue-800">Velocity</span>360
      </span>
    </div>
  );
};