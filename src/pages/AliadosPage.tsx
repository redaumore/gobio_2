import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import AliadosGrid from '../components/AliadosGrid';

interface LogoProps {
  src: string;
  alt: string;
}

const logos: LogoProps[] = [
  { alt: "Terma", src: "aliados/terma-white.svg" },
  { alt: "Orei", src: "aliados/orei-white.svg" },
  { alt: "Talampaya", src: "aliados/talampaya-white.svg" },
  { alt: "Alparamis", src: "aliados/alparmis-white.svg" },
  { alt: "Tremun", src: "aliados/tremun-white.svg" },
  { alt: "Four Season", src: "aliados/four-seasons-white.png" },
  { alt: "Aeropuertos Argentina 2000", src: "aliados/aa-2001-white.svg" },
  { alt: "Tea Connection", src: "aliados/tea-connection-white.svg" }
];

const AliadosPage: React.FC = () => {
  const [slidesPerView, setslidesPerView] = useState(4);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setslidesPerView(4);
      } else {
        setslidesPerView(6);
      }
    };

    updateView();
    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <div className='font-montserrat bg-gray-900'>
      <div className="text-white pt-8">
        <div className="max-w-1440 mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left column - visible only on desktop */}
            <div className="hidden md:block md:w-1/6">
              <img src="/aliados-head-left.png?height=400&width=300" alt="Food container 1" className="w-full h-auto object-cover rounded-r-lg" />
            </div>

            {/* Middle column - text content */}
            <div className="md:w-4/6 space-y-6 text-center items-center mb-8 md:mb-0 px-4">
              <h2 className="text-rem3 font-medium lg:text-6xl mb-4 px-3 tracking-wide">Nuestros <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">Aliados</span></h2>
              <div className='flex flex-col items-center justify-between'>
                <p className="text-base text-center max-w-lg">
                  Conoce más sobre los negocios que eligen preservar el futuro día a día y las diferentes soluciones que nosotros ofrecemos.
                </p>
              </div>
              <button className="bg-gray-900 border-2 border-white text-xl text-white font-medium py-2 px-4 rounded-lg font-montserrat tracking-wide">
                Unite al cambio
              </button>
            </div>

            {/* Right column - visible only on desktop */}
            <div className="hidden md:flex md:w-1/6 flex-col space-y-4">
              <img src="/aliados-head-right-1.png" alt="Food container 2" className="w-2/5 md: h-auto object-cover rounded-l-lg" />
              <img src="/aliados-head-right-2.png" alt="Food container 3" className="w-4/5 h-auto object-cover rounded-l-lg place-self-end" />
            </div>
          </div>
        </div>
        <div className="mx-auto py-6 md:py-10 lg:py-16">
          <Swiper
            modules={[Autoplay, Pagination]} 
            spaceBetween={20} // Adjust spacing as needed
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            loop={true} // Enable looping
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with 2s delay and continuous play
            className="mySwiper"
            style={{ maxWidth: '630px', margin: '0 auto' }} // Set max width and center
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.alt} className="flex items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full max-h-16 object-contain" // Limit height to 63px
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AliadosGrid />
    </div>
  );
};

export default AliadosPage;