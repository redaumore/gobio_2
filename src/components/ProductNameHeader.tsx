// ProductNameHeader Component
import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Define the interface for the component props
interface ProductNameHeaderProps {
  name: string;
}

export default function ProductNameHeader({
  name
}:ProductNameHeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 h-3">
    <button className="text-gray-600 hover:text-gray-800 transition-colors">
      <ArrowLeft size={20} />
    </button>
    <h1 className="text-lg font-semibold text-sm">{name}</h1>
  </header>
  );
}
