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
    <section className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg md:text-3xl font-light mb-2">Aliados GoBio</h2>
        <p className="text-xl md:text-2xl mb-4 sm:max-w-xs font-semibold">
          Comercios qué eligieron <span className="text-green-500">preservar el futuro</span>.
        </p>
        <Link to="/aliados" className="text-white text-sm no-underline mb-8 inline-block">
          Ver más →
        </Link>
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden pb-4 md:pb-0"
        >
          {aliadosLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg flex-shrink-0 w-20 h-20 md:w-auto md:h-auto flex items-center justify-center"
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