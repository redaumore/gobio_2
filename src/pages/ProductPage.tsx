import { FunctionComponent } from "react";
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductNameHeader from "../components/ProductNameHeader";
import ProductCarousel from "../components/ProductCarousel";
import GeneralInfo from "../components/GeneralInfo";

interface ProductProps {
  name: string;
  family: string;
  material: string;
  size: string;
  pack: number;
  observations: string[];
  images: string[];
};

const ProductPage: FunctionComponent<ProductProps> = ({name, family, material, size, pack, observations, images}) => {
  return (
    <div className="min-h-screen font-montserrat max-w-1440">
      <ProductNameHeader name={name}/>
      <div className="flex flex-col md:flex-row gap-6 px-6 py-10">
        {/* Etiqueta 100% biodegradable y Cabecera para móvil */}
        <div className="visible md:hidden mb-4">
          <div className="flex mb-2 ">
            <div className="border-gradient">
              <div className="flex-shrink-0 text-sm bg-white text-gray-800 font-bold border-gradient-content ">
                100% Biodegradable
             </div>
            </div>
          </div>
          <h1 className="text-2xl font-medium mb-2">{name}</h1>
          <h2 className="text-lg font-medium text-gray-9 my-2">{material}</h2>
        </div>
        
        {/* Swiper Slider */}
        <div className="relative w-full md:w-1/2 aspect-square">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex justify-center items-center">
                  <img
                    src={image}
                    alt={`${name} - Image ${index + 1}`}
                    className="w-5/6 object-contain rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowLeft className="swiper-button-prev" />
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="swiper-button-next" />
            </div>
          </Swiper>
        </div>

        {/* Contenido para desktop */}
        <div className="md:w-1/2">
          {/* Etiqueta 100% biodegradable y Cabecera para desktop */}
          <div className="hidden md:inline-block mb-4">
            <div className="flex mb-2 ">
              <div className="border-gradient">
                <div className="flex-shrink-0 text-sm bg-white text-gray-800 font-bold border-gradient-content ">
                  100% Biodegradable
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <h2 className="text-lg text-gray-600 my-0">{material}</h2>
          </div>

          {/* Descripción */}
          <ul className="space-y-4 py-6 mb-6 bg-gray-200 rounded-2xl text-gray-900">
            <li>{size}</li>
            {observations.map((observation, index) => (
            <li key={index}>{observation}</li>
            ))}
          </ul>

          {/* Botones */}
          <div className="flex flex-col lg:flex-row justify-center gap-2">
            <div className="w-full lg:w-1/2">
              <Link to="https://gobio.mkt1.com.ar/form/" target='_blank'>
                <button className="w-full lg:h-10 text-xl bg-gray-900 text-white py-2 px-4 rounded-md font-montserrat">
                  Cotizar
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <Link to="/muestra">
                <button className="w-full lg:h-10 text-xl border border-gray-900 bg-white text-gray-900 py-2 px-4 rounded-md font-montserrat">
                  Muestra
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProductCarousel />
      <GeneralInfo />
    </div>
  )
};

export default ProductPage;