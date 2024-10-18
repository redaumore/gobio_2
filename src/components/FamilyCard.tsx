import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  family_id: string;
  family: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  altText: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ family_id, family, imageSrcMobile, imageSrcDesktop, altText, className }) => (
  <Link to={`/productos/${family_id}`} className="no-underline text-gray-900 block h-full"> {/* Envolvemos toda la tarjeta en el Link */}
    <div className={`rounded-2xl overflow-hidden h-full ${className} m-1 flex flex-col`}> {/* Corregimos la interpolación de className */}
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
      <div className="pb-5 px-5 text-left">
        <h3 className="font-semibold lg:font-medium text-lg xs:text-3xl sm:text-xl md:text-base lg:text-xl mb-2">{family}</h3>
        <div className="xs:text-xl sm:text-base lg:text-base">Ver más →</div>
      </div>
    </div>
  </Link>
);

export default ProductCard;
