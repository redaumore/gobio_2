import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AliadosGrid from '../components/AliadosGrid';
import GobioFooter from '../components/GobioFooter';

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
    <div className='container font-montserrat'>
      <div className="bg-black text-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center">
          <h2 className="text-rem3 font-medium mb-4 px-3 tracking-wide">Nuestros <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">Aliados</span></h2>
          <p className="text-base mb-8">
            Conoce más sobre los negocios que eligen preservar el futuro día a día y las diferentes soluciones que nosotros ofrecemos.
          </p>
          <button className="bg-black border-2 border-white text-xl text-white font-medium py-2 px-4 rounded-lg font-montserrat tracking-wide">
            Unite al cambio
          </button>
        </div>
        <div className="container mx-auto pt-6">
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
      <GobioFooter />
    </div>
  );
};

export default AliadosPage;