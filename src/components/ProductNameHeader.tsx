// ProductNameHeader Component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Define the interface for the component props
interface ProductNameHeaderProps {
  name: string;
}

export default function ProductNameHeader({
  name
}:ProductNameHeaderProps) {
  const navigate = useNavigate();

  // Maneja el evento de click para navegar hacia atrás
  const handleBackClick = () => {
    navigate(-1); // Esta función navega a la página anterior en el historial
  };

  return (
    <div className='max-w-1440 mx-auto'>
      <header className="flex justify-between items-center p-4 bg-gray-100 h-3">
        <button className="text-gray-600 hover:text-gray-800 transition-colors"
          onClick={handleBackClick} >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-sm sm:text-xl font-semibold">{name}</h1>
      </header>
    </div>
  );
}
