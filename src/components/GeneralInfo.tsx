import React from 'react'
import { ArrowRight } from 'lucide-react'

const GeneralInfo: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 font-light">
        <div className="flex-1 bg-green-100 rounded-lg p-6 flex flex-col justify-between">
          <h2 className="text-xl mb-4 font-light">
            Te contamos qué sucede cuando compostás, reciclás o desechás nuestros productos.
          </h2>
          <div className="flex items-center justify-end mt-4">
            <a
              href="#"
              className="text-black flex items-center no-underline"
            >
              Saber más
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex-1 bg-blue-100 rounded-lg p-6 flex flex-col justify-between">
          <h2 className="text-xl mb-4 font-light">
            Personaliza tus ecoenvases. Ofrecemos cuatro opciones de impresión diferentes.
          </h2>
          <div className="flex items-center justify-end mt-4">
            <a
              href="#"
              className="text-black flex items-center no-underline"
            >
              Saber más
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo