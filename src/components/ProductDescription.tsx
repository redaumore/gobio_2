import React from 'react';
import { Link } from 'react-router-dom';

interface ProductDescriptionProps {
  name: string;
  material: string
  slots: string;
  size: string;
  customizableText: string;
  biodegradableText: string;
  shippingText: string;
}

export default function ProductDescription({
  name,
  material,
  slots,
  size,
  customizableText,
  biodegradableText,
  shippingText
}: ProductDescriptionProps) {
  return(
  <div className="md:w-1/2">
    {/* Descripción */}
    <ul className="space-y-2 mb-6">
      <li>{slots}</li>
      <li>{size}</li>
      <li>{customizableText}</li>
      <li>{biodegradableText}</li>
      <li>{shippingText}</li>
    </ul>

    {/* Botones */}
    <div className="flex flex-col gap-2">
      <Link to="https://gobio.mkt1.com.ar/form/" target='_blank'>
        <button className="w-full bg-black text-white py-2 px-4 rounded">
          Cotizar
        </button>
      </Link>
      <Link to="/muestra">
        <button className="w-full border border-black text-black py-2 px-4 rounded">
          Muestra
        </button>
      </Link>
    </div>
  </div>
  );
}