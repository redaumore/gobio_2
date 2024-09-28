
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
    <section className="bg-black flex justify-center">
      <div className='max-w-1440 text-white flex flex-col justify-between'>
        <div className='lg:hidden'>
          <div className="space-y-6 text-center">
            <h1 className="text-4xl xs:text-7xl md:text-8xl font-medium leading-tight px-8">
              Elegí mejor.
              <br />
              Elegí <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">GoBio.</span>
            </h1>
            <p className="text-lg xs:text-3xl px-8 xs:px-20 pb-12">
              Desarrollamos envases para alimentos que son{' '}
              <span className="font-semibold">100% biodegradables</span>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 h-64 xs:h-96 pb-12">
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
        </div>
        

        <div className='hidden lg:flex flex-col w-full'>
          <div id="head" className='flex flex-row h-60'>
            <div className='w-1/3 flex justify-end'>
              <img
                  src="/home/Hero-2-desktop.png" // Reemplaza con la ruta de tu imagen
                  alt="Personas comiendo comida asiática"
                  className="size-44"
              />
            </div>
            <div className='w-2/3'>
              <h1 className="text-4xl xs:text-7xl lg:text-7xl font-medium leading-tight px-8">
              Elegí mejor.
              </h1>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col w-8/12 '>
                <div>
                  <h1 className="text-4xl lg:text-7xl font-medium px-8 mt-0 mb-6">
                    Elegí <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">GoBio.</span>
                  </h1>
                </div>
                <div className='flex flex-row'>
                  <div className='w-4/5'>
                    <p className="text-lg lg:text-2xl px-8">
                      Desarrollamos envases para alimentos que son{' '}
                      <span className="font-semibold">100% biodegradables</span>.
                    </p>
                  </div>
                  <div className='w-1/5'>
                    <div className="flex justify-center items-center">
                    <img
                      src="/home/Hero-flecha.png" // Reemplaza con la ruta de tu imagen
                      alt="Persona comiendo un bocadillo"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex justify-end items-end w-2/12'>
              <img
                  src="/home/Hero-3-desktop.png" // Reemplaza con la ruta de tu imagen
                  alt="Persona comiendo un bocadillo"
                  className="h-48 object-cover rounded-lg"
                />
            </div>
            <div className='flex justify-end w-2/12'>
              <img
                src="/home/Hero-1-desktop.png" // Reemplaza con la ruta de tu imagen
                alt="Persona comiendo un bocadillo"
                className="h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto pb-6 md:py-10 lg:py-16">
            <Swiper
              modules={[Autoplay, Pagination]} 
              spaceBetween={30} // Adjust spacing as needed
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              loop={true} // Enable looping
              autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with 2s delay and continuous play
              className="mySwiper w-full max-w-72 xs:max-w-sm sm:max-w-xl  md:max-w-2xl mb-12"
            >
              {logos.map((logo) => (
                <SwiperSlide key={logo.alt} className="flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full max-h-16 md:max-h-24 object-contain" // Limit height to 63px
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </section>
  )
}