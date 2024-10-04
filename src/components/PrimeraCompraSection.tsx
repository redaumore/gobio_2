import React from 'react'
import { Link, } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PrimerCompraSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="w-full mx-auto sm:px-6 lg:px-8">
        <div className='flex flex-col lg:flex-row'>
          <div id="coll" className='hidden lg:flex lg:w-2/12'>
            <div className="w-full flex justify-end lg:mr-4 xl:mr-8">
              <img 
                src="/home/Primera-2-desktop.png" 
                alt="Comida en envase biodegradable" 
                className="rounded-b-2xl object-cover h-36 mt-12 w-auto" 
              />
            </div>
          </div>
          <div id="colc" className='w-full lg:w-8/12'>
            <div className="flex flex-col items-center justify-between">
              <div className="w-full flex justify-end mb-6 lg:hidden">
                <img 
                  src="/home/Primera-1-desktop.png" 
                  alt="Comida en envase biodegradable" 
                  className="rounded-b-2xl h-32 xs:h-60 object-cover aspect-square w-auto" 
                />
              </div>
              <div className='flex flex-col lg:flex-row w-full'>
                <div className="text-center px-4 xs:px-6 sm:px-8 mb-6 md:mb-0 lg:pr-0 lg:w-3/4">
                  <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-4.5xl xl:text-6xl font-medium mb-4 md:mb-8 lg:mb-6 lg:mt-16 text-left max-w-full xs:max-w-lg">
                    Realiza tu primera <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">compra.</span>
                  </h2>
                  <p className="mb-6 md:mb-16 text-base xs:text-xl sm:text-2xl lg:text-base xl:text-xl text-left">
                    Si no estás conforme y nos avisás en un lapso de 72 hs te devolvemos tu dinero.
                  </p>
                </div>
                <div className='hidden lg:flex h-72 xl:h-96 items-center lg:w-1/4'>
                  <Link 
                    to="/contacto" 
                    className="flex items-center justify-center rounded-full bg-white text-black border-2 border-black transition-colors w-20 h-20 xl:w-24 xl:h-24"
                    aria-label="Contactar para primera compra"
                  >
                    <img src="/home/arrowright1.svg" alt="Imagen de contacto" className="w-16 xl:w-20" />
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-row gap-4 lg:hidden">
                <Link 
                  to="/contacto" 
                  className="flex items-center justify-center w-32 h-32 rounded-full bg-white text-black border-2 border-black transition-colors"
                  aria-label="Contactar para primera compra"
                >
                  <img src="/home/arrowright1.svg" alt="Imagen de contacto" className="w-16 xs:w-28" />
                </Link>
                <div className="w-full flex justify-end items-end">
                  <img 
                    src="/home/Primera-2-desktop.png" 
                    alt="Comida en envase biodegradable" 
                    className="rounded-tl-3xl h-24 xs:h-44 object-cover w-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="colr" className='hidden lg:flex lg:flex-col lg:w-2/12'>
            <div className="w-full h-1/2 flex justify-end lg:mr-4 xl:mr-8">
              <img 
                src="/home/Primera-1-desktop.png" 
                alt="Comida en envase biodegradable" 
                className="rounded-b-2xl h-28 xl:h-32 object-cover w-auto" 
              />
            </div>
            <div className="w-full h-1/2 flex justify-end items-end">
              <img 
                src="/home/Primera-3-desktop.png" 
                alt="Comida en envase biodegradable" 
                className="rounded-tl-3xl h-24 xl:h-28 object-cover w-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimerCompraSection