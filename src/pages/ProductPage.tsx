import { FunctionComponent } from "react";
import ProductDescription from "../components/ProductDescription";
import ProductNameHeader from "../components/ProductNameHeader";
import ProductImage from "../components/ProductImage";
import ProductTitle from "../components/ProductTitle";

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
        <div className="md:hidden mb-4">
          <ProductTitle name={name} material={material} />
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2">
          <ProductImage imagePath={imagePath}/>
          <div className="md:hidden mb-4">
            <ProductTitle name={name} material={material} />
          </div>
          <ProductDescription 
            name={name}
            material={material}
            slots={slots}
            size={size}
            customizableText={customizableText}
            biodegradableText={biodegradableText}
            shippingText={shippingText}/>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;
