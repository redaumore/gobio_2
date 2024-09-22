import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PrimerCompraSection: React.FC = () => {
  return (
    <section className="md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/4 flex justify-end pr-8">
            <img src="/home/Primera-1-desktop.png" alt="Comida en envase biodegradable" className="rounded-b-2xl h-32 object-cover aspect-square" />
          </div>
          
          <div className="w-full md:w-2/4 text-center ml-6 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-left max-w-64">
              Realiza tu primera <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">compra.</span>
            </h2>
            <p className="mb-6 text-base text-left">
              Si no estás conforme y nos avisás en un lapso de 72 hs te devolvemos tu dinero.
            </p>
          </div>
          
          <div className="w-full ml-4 md:w-1/4 flex flex-row gap-4">
            <Link 
              to="/contacto" 
              className="flex items-start justify-left w-32 h-32 rounded-full bg-white text-black border-2 border-black transition-colors"
              aria-label="Contactar para primera compra"
            >
              <img src="/home/arrowright1.svg" alt="Imagen de contacto" className="w-16" />
            </Link>
            <div className="w-full md:w-1/4 flex justify-end items-end">
            <img src="/home/Primera-2-desktop.png" alt="Comida en envase biodegradable" className="rounded-tl-3xl h-24 object-cover md:block" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimerCompraSection