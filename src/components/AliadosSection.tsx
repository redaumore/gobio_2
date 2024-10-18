import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const aliadosLogos = [
  { name: 'Four Seasons', src: '/aliados/four-seasons-2-logo.svg' },
  { name: 'Total Energies', src: '/aliados/total-energies-logo.jpg' },
  { name: 'Tea Connection', src: '/aliados/tea-connection-logo.jpg' },
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
    <section className="bg-gray-900 text-white py-8 lg:py-20 pl-4 md:pl-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <div className='lg:w-1/2' >
          <h2 className="text-lg xs:text-4xl md:text-3xl lg:text-2xl font-light mb-2">Aliados GoBio</h2>
          <p className="text-2xl xs:text-5xl md:text-4xl lg:text-3xl mb-10 lg:my-4 xs:mb-14 sm:max-w-5/6 md:w-3/4 lg:w-5/6 font-semibold lg:font-medium">
            Comercios que eligieron <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco2 to-eco3">preservar el futuro.</span>
          </p>
          <Link to="/aliados" className="text-white text-base xs:text-3xl  md:text-xl no-underline mb-10 lg:mb-2 xs:mb-16 inline-block">
            Ver más →
          </Link>
        </div>
        <div 
          ref={scrollRef}
          className="lg:w-1/2 flex lg:grid-cols-4 lg:items-center gap-4 overflow-hidden pb-4"
        >
          {aliadosLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg flex-shrink-0 w-20 h-20 xs:w-52 xs:h-52  md:w-52 md:h-52 lg:w-36 lg:h-36  flex items-center justify-center"
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