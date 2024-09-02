import React from 'react';

interface ProductTitleProps {
  name: string;
  material: string
}

export default function ProductTitle({
  name,
  material,
}: ProductTitleProps) {
  return (
    <div className='mb-4'>
      <div className="mb-2">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
          100% biodegradable
        </span>
      </div>
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <h2 className="text-lg text-gray-600">{material}</h2>
    </div>
  );
};
