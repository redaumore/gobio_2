
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronDown } from 'lucide-react'

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

export default function HeroSection() {
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
    <section className="bg-black text-white min-h-screen flex flex-col justify-between px-4 pt-4">
      <div className="space-y-6">
        <h1 className="text-5xl font-medium leading-tight">
          Elegí mejor.
          <br />
          Elegí <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">GoBio.</span>
        </h1>
        <p className="text-xl">
          Desarrollamos envases para alimentos que son{' '}
          <span className="font-semibold">100% biodegradables</span>.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 h-64">
        <div className="relative h-full">
          <img
              src="/home/Hero-2-desktop.png" // Reemplaza con la ruta de tu imagen
              alt="Personas comiendo comida asiática"
              className="absolute bottom-0 left-0 w-full h-3/4 object-cover rounded-lg"
          />
        </div>
        <div className="w-full flex justify-end">
          <img
              src="/home/Hero-1-desktop.png" // Reemplaza con la ruta de tu imagen
              alt="Persona comiendo un bocadillo"
              className="w-3/4 h-2/4 object-cover rounded-lg"
            />
        </div>
      </div>

      <div className="flex justify-center">
        <ChevronDown className="w-12 h-12 animate-bounce" />
      </div>
      <div className="mx-auto pb-6 md:py-10 lg:py-16">
          <Swiper
            modules={[Autoplay, Pagination]} 
            spaceBetween={20} // Adjust spacing as needed
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            loop={true} // Enable looping
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with 2s delay and continuous play
            className="mySwiper"
            style={{ maxWidth: '320px', margin: '0 auto' }} // Set max width and center
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
    </section>
  )
}