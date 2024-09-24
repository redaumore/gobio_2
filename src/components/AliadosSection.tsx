import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const aliadosLogos = [
  { name: 'Four Seasons', src: '/aliados/four-seasons-2-logo.svg' },
  { name: 'Aeropuertos Argentina 2000', src: '/aliados/aa2000-logo.svg' },
  { name: 'Terma', src: '/aliados/terma-logo.svg' },
  // Add more logos as needed
]

const AliadosSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current && window.innerWidth < 768) {
        scrollRef.current.scrollLeft = 0
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="bg-black text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg xs:text-4xl md:text-3xl font-light mb-2">Aliados GoBio</h2>
        <p className="text-2xl xs:text-5xl md:text-2xl mb-10¿¿8 xs:mb-14 sm:max-w-5/6 font-semibold">
          Comercios qué eligieron <span className="text-green-500">preservar el futuro</span>.
        </p>
        <Link to="/aliados" className="text-white text-base xs:text-3xl no-underline mb-10 xs:mb-16 inline-block">
          Ver más →
        </Link>
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden pb-4 md:pb-0"
        >
          {aliadosLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg flex-shrink-0 w-20 h-20 xs:w-48 xs:h-48 md:w-auto md:h-auto flex items-center justify-center"
            >
              <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AliadosSection