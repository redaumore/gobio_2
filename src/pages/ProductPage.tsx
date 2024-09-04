import { FunctionComponent } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductNameHeader from "../components/ProductNameHeader";

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
    <div className="min-h-screen">
      <ProductNameHeader name={name}/>
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Etiqueta 100% biodegradable y Cabecera para móvil */}
        <div className="visible md:invisible mb-4">
          <div className="mb-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              100% biodegradable
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <h2 className="text-lg text-gray-600">{material}</h2>
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
          <div className="invisible md:visible mb-4">
            <div className="mb-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                100% biodegradable
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <h2 className="text-lg text-gray-600">{material}</h2>
          </div>

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
            <button className="w-full bg-black text-white py-2 px-4 rounded">
              WhatsApp
            </button>
            <button className="w-full border border-black text-black py-2 px-4 rounded">
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;
