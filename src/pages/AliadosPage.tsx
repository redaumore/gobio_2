import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AliadosGrid from '../components/AliadosGrid';
import GobioFooter from '../components/GobioFooter';
import GobioHeader from '../components/GobioHeader';

interface LogoProps {
  src: string;
  alt: string;
}

const logos: LogoProps[] = [
  { alt: "Terma", src: "aliados/terma-logo.svg" },
  { alt: "Orei", src: "aliados/orei-logo.png" },
  { alt: "Talampaya", src: "aliados/talampaya-logo.svg" },
  { alt: "Alparamis", src: "aliados/alparmis-logo.svg" },
  { alt: "Tremun", src: "aliados/tremun-log.svg" },
  { alt: "Four Season", src: "aliados/four-season-2-logo.svg" },
  { alt: "Aeropuertos Argentina 2000", src: "aliados/aa2000-logo.svg" },
  { alt: "Tea Connection", src: "aliados/tea-connection-svg" },
  { alt: "Club de la Milanesa", src: "aliados/club-de-la-milanesa.svg" },    
];

const AliadosPage: React.FC = () => {
  return (
    <div className='font-montserrat'>
      <div className="bg-black text-white pt-8">
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
              <button className="bg-black border-2 border-white text-xl text-white font-medium py-2 px-4 rounded-lg font-montserrat tracking-wide">
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
        <div className="mx-auto pt-6">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.alt}>
                <img src={logo.src} alt={logo.alt} className="w-full" />
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