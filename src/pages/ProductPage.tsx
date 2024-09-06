import { FunctionComponent } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductNameHeader from "../components/ProductNameHeader";
import ProductCarousel from "../components/ProductCarousel";
import GeneralInfo from "../components/GeneralInfo";
import GobioFooter from "../components/GobioFooter";

interface ProductPageProps {
  name: string;
  material: string;
  slots: string;
  size: string;
  customizableText: string;
  biodegradableText: string;
  shippingText: string;
  imagePath: string,
}

const ProductPage: FunctionComponent<ProductPageProps> = ({name, material, slots, size, customizableText, biodegradableText, shippingText, imagePath}) => {
  return (
    <div className="min-h-screen font-montserrat max-w-1440">
      <ProductNameHeader name={name}/>
      <div className="flex flex-col md:flex-row md:items-start gap-6 p-6">
        {/* Etiqueta 100% biodegradable y Cabecera para móvil */}
        <div className="visible md:hidden mb-4">
          <div className="mb-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              100% biodegradable
            </span>
          </div>
          <h1 className="text-2xl font-medium mb-2">{name}</h1>
          <h2 className="text-lg font-medium text-gray-9
          00">{material}</h2>
        </div>
        
        {/* Imagen */}
        <div className="relative w-full md:w-1/2 aspect-square">
          <img
            src={imagePath}
            alt={name}
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <ArrowLeft className="text-gray-500 bg-white rounded-full p-1" />
            <ArrowRight className="text-gray-500 bg-white rounded-full p-1" />
          </div>
        </div>

        {/* Contenido para desktop */}
        <div className="md:w-1/2">
          {/* Etiqueta 100% biodegradable y Cabecera para desktop */}
          <div className="hidden md:visible mb-4">
            <div className="mb-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                100% biodegradable
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <h2 className="text-lg text-gray-600">{material}</h2>
          </div>

          {/* Descripción */}
          <ul className="space-y-8 py-6 mb-6 bg-gray-200 rounded-2xl">
            <li>{slots}</li>
            <li>{size}</li>
            <li>{customizableText}</li>
            <li>{biodegradableText}</li>
            <li>{shippingText}</li>
          </ul>

          {/* Botones */}
          <div className="flex flex-col gap-2">
            <button className="w-full text-xl bg-black text-white py-3 px-4 rounded-md">
              WhatsApp
            </button>
            <button className="w-full text-xl border border-black text-black py-3 px-4 rounded-md">
              Email
            </button>
          </div>
        </div>
      </div>
      <ProductCarousel />
      <GeneralInfo />
      <GobioFooter />
    </div>
  )
};

export default ProductPage;
