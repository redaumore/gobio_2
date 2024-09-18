import React from 'react';
import FamilyCard from './FamilyCard';
import familiesData from '../data/families.json' 


const EcoenvasesGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-montserrat text-center">
      <h1 className="text-4xl font-semibold mb-2">
        Nuestros <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">ecoenvases</span>.
      </h1>
      <p className="text-gray-600 mb-8">
        Desarrollamos envases para alimentos que son 100% biodegradables.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {familiesData.map((family, index) => (
          <FamilyCard key={index} {...family} />
        ))}
      </div>
    </div>
  );
};

export default EcoenvasesGrid;