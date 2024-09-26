import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PrimerCompraSection: React.FC = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className='flex flex-row'>
          <div id="coll" className='hidden lg:flex w-2/12'>
            <div className="w-full flex justify-end mr-20 xs:mr-28">
              <img src="/home/Primera-2-desktop.png" alt="Comida en envase biodegradable" className="rounded-b-2xl object-cover h-36 mt-12" />
            </div>
          </div>
          <div id="colc" className='lg:w-8/12'>
            <div className="flex flex-col flex-shrink-0 items-center justify-between">
              <div className="w-full flex justify-end mr-20 xs:mr-28 lg:hidden">
                <img src="/home/Primera-1-desktop.png" alt="Comida en envase biodegradable" className="rounded-b-2xl h-32 xs:h-60 object-cover aspect-square" />
              </div>
              <div className='flex flex-row'>
                <div className="text-center px-8 xs:px-12 mb-6 md:mb-0 lg:pr-0">
                  <h2 className="text-3xl xs:text-6xl md:text-6xl lg:text-4.5xl font-medium mb-4 md:mb-12 lg:mb-6 lg:mt-16 lg:pr-6 text-left max-w-64 xs:max-w-lg">
                    Realiza tu primera <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">compra.</span>
                  </h2>
                  <p className="mb-6 md:mb-16 text-base xs:text-3xl lg:text-base text-left">
                    Si no estás conforme y nos avisás en un lapso de 72 hs te devolvemos tu dinero.
                  </p>
                </div>
                <div className='hidden lg:flex h-64 items-center'>
                  <Link 
                    to="/contacto" 
                    className="flex items-start ml-8 xs:ml-12 justify-left w-32 h-32 rounded-full bg-white text-black border-2 border-black transition-colors"
                    aria-label="Contactar para primera compra"
                  >
                    <img src="/home/arrowright1.svg" alt="Imagen de contacto" className="w-20" />
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-row gap-4 lg:hidden">
                <Link 
                  to="/contacto" 
                  className="flex items-start ml-8 xs:ml-12 justify-left w-32 h-32 rounded-full bg-white text-black border-2 border-black transition-colors"
                  aria-label="Contactar para primera compra"
                >
                  <img src="/home/arrowright1.svg" alt="Imagen de contacto" className="w-16 xs:w-28" />
                </Link>
                <div className="w-full flex justify-end items-end">
                  <img src="/home/Primera-2-desktop.png" alt="Comida en envase biodegradable" className="rounded-tl-3xl h-24 xs:h-44 object-cover md:block" />
                </div>
                
              </div>
            </div>
          </div>
          <div id="colr" className='hidden lg:flex lg:flex-col w-2/12'>
            <div className="w-full h-1/2 flex justify-end mr-20">
              <img src="/home/Primera-1-desktop.png" alt="Comida en envase biodegradable" className="rounded-b-2xl h-28 object-cover mr-8" />
            </div>
              <div className="w-full h-1/2 flex justify-end items-end">
                <img src="/home/Primera-3-desktop.png" alt="Comida en envase biodegradable" className="rounded-tl-3xl h-24 object-cover" />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimerCompraSection