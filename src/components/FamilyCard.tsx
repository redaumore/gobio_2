import React from 'react';

interface ProductCardProps {
  family_id: string;
  family: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  altText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ family_id, family, imageSrcMobile, imageSrcDesktop, altText }) => (
  <div className="rounded-2xl overflow-hidden h-full bg-gray-200 m-1 flex flex-col">
    <div className="flex-grow mt-5 mx-5 lg:mt-3 lg:mx-3">
        <img
          src={imageSrcMobile}
          alt={altText}
          className="w-full h-auto object-cover mx-auto lg:hidden" // Ocultar en pantallas pequeñas
        />
        <img
          src={imageSrcDesktop}
          alt={altText}
          className="w-full object-cover mx-auto hidden lg:block" // Mostrar en pantallas medianas y grandes
        />
    </div>
    <a href={`/productos/${family_id}`} className='no-underline text-gray-900'>
      <div className="pb-5 px-5 text-left">
        <h3 className="font-semibold lg:font-medium text-lg xs:text-3xl sm:text-xl md:text-base lg:text-xl mb-2">{family}</h3>
        <div className="xs:text-xl sm:text-base lg:text-base">Ver más →</div>
      </div>
    </a>
  </div>
);

export default ProductCard;