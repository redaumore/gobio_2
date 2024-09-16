import React from 'react';

interface ProductCardProps {
  family_id: string;
  title: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  altText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ family_id, title, imageSrcMobile, imageSrcDesktop, altText }) => (
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
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <a href={`/productos/${family_id}`} className="text-black no-underline">Ver más →</a>
    </div>
  </div>
);

const EcoenvasesGrid: React.FC = () => {
  const products = [
    { family_id: 'estuches-y-bandejas', title: 'Bandejas y estuches', imageSrcMobile: 'Estuches-ecoenvases-mobile.png', imageSrcDesktop: 'Estuches-ecoenvases-desktop.png', altText: 'Bandejas y estuches' },
    { family_id: 'bowls', title: 'Ensaladeras y bowls', imageSrcMobile: '/Bowls-ecoenvases-mobile.png', imageSrcDesktop: '/Bowls-ecoenvases-desktop.png', altText: 'Ensaladeras y bowls' },
    { family_id: 'vasos', title: 'Vasos', imageSrcMobile: '/Vasos-ecoenvases-mobile.png', imageSrcDesktop: '/Vasos-ecoenvases-desktop.png', altText: 'Vasos' },
    { family_id: 'platos-y-cubiertos', title: 'Platos y cubiertos', imageSrcMobile: '/Cubiertos-ecoenvases-mobile.png', imageSrcDesktop: '/Cubiertos-ecoenvases-desktop.png', altText: 'Platos y cubiertos' },
    { family_id: 'bolsas-y-sobres', title: 'Bolsas', imageSrcMobile: '/Bolsas-ecoenvases-mobile.png', imageSrcDesktop: '/Bolsas-ecoenvases-desktop.png', altText: 'Bolsas' },
    { family_id: 'accesorios-para-cafeteria', title: 'Accesorios', imageSrcMobile: '/Accesorios-ecoenvases-mobile.png', imageSrcDesktop: '/Accesorios-ecoenvases-desktop.png', altText: 'Accesorios' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-montserrat text-center">
      <h1 className="text-4xl font-semibold mb-2">
        Nuestros <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">ecoenvases</span>.
      </h1>
      <p className="text-gray-600 mb-8">
        Desarrollamos envases para alimentos que son 100% biodegradables.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default EcoenvasesGrid;