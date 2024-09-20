import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PrimerCompraSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="/home/Primera-1-desktop.png" alt="Comida en envase biodegradable" className="rounded-lg w-full h-48 object-cover" />
          </div>
          
          <div className="w-full md:w-2/4 text-center mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-left max-w-64">
              Realiza tu primera <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">compra.</span>
            </h2>
            <p className="mb-6 text-sm">
              Si no estás conforme y nos avisás en un lapso de 72 hs te devolvemos tu dinero.
            </p>
            <Link 
              to="/contacto" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black border-2 border-black transition-colors"
              aria-label="Contactar para primera compra"
            >
              <img src="/home/arrowright1.svg" alt="Imagen de contacto" className="w-12 h-12" />
            </Link>
          </div>
          
          <div className="w-full md:w-1/4 flex flex-col gap-4">
            <img src="/home/Primera-2-desktop.png" alt="Comida en envase biodegradable" className="rounded-lg w-full h-48 object-cover" />
            <img src="/home/Primera-3-mobile.png" alt="Comida en envase biodegradable" className="rounded-lg w-full h-48 object-cover hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimerCompraSection