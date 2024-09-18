import React from 'react';

interface ProductCardProps {
  family_id: string;
  family: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  altText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ family_id, family, imageSrcMobile, imageSrcDesktop, altText }) => (
  <div className="rounded-lg overflow-hidden h-full bg-gray-200 m-1 flex flex-col">
    <div className="flex-grow mt-5 mx-5">
    <img
          src={imageSrcMobile}
          alt={altText}
          className="w-full h-auto object-cover mx-auto sm:hidden" // Ocultar en pantallas medianas y grandes
        />
        <img
          src={imageSrcDesktop}
          alt={altText}
          className="w-full h-auto object-cover mx-auto hidden sm:block" // Mostrar en pantallas medianas y grandes
        />
    </div>
    <div className="pb-5 px-5 text-left">
      <h3 className="font-semibold text-lg mb-2">{family}</h3>
      <a href={`/productos/${family_id}`} className="text-black no-underline">Ver más →</a>
    </div>
  </div>
);

export default ProductCard;