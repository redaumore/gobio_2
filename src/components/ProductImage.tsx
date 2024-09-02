
import { FunctionComponent } from "react";
import { ArrowLeft } from 'lucide-react';

// Define the interface for the component props
interface ProductImageProps {
  imagePath: string;
}

// ProductImage Component
const ProductImage: FunctionComponent<ProductImageProps> = ({imagePath}: ProductImageProps) => {
  return(
  <div className="relative h-64 md:h-96 bg-white">
    <img
      src={imagePath}
      alt="Estuche 950ml"
      className="w-full h-full object-contain"
    />
    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
      <ArrowLeft size={24} />
    </button>
    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md rotate-180">
      <ArrowLeft size={24} />
    </button>
  </div>
  )
};

export default ProductImage;