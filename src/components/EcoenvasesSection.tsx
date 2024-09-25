import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import FamilyCard from './FamilyCard'
import familiesData from '../data/families.json'

const EcoenvasesSection: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null)

  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="xs:text-3xl sm:text-2xl md:text-3xl mb-2 font-light">Ecoenvases</h2>
      <p className="text-xl xs:text-4xl sm:text-4xl mb-8 mt-2 font-medium lg:max-w-lg">
        Venimos de la tierra y volvemos a ella en{' '}
        <span className="text-green-500">60 días</span>.
      </p>
      <div className="relative">
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {familiesData.map((family, index) => (
            <SwiperSlide key={index}>
              <FamilyCard {...family} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10">
          <button
            onClick={() => swiper.slidePrev()}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default EcoenvasesSection